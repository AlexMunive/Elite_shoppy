import React, { useState } from "react";
import { useCartContext } from "../../context/CartProvider";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Checkout = () => {
    const { cart, totalPrice, clearCart } = useCartContext();

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const order = {
        fecha: new Date(),
        buyer: {
            name: nombre,
            lastname: apellido,
            email: email,
            phone: telefono,
        },
        items: cart.map((product) => ({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: product.quantity,
        })),
        total: totalPrice(),
    };
    const manejadorFormulario = (e) => {
        e.preventDefault();

        // Evitar enviar el formulario si ya se está enviando
        if (isSubmitting) {
            return;
        }

        // Verificamos que los campos estén completos:
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Porfavor completar todo los campos");
            return;
        }

        // Validamos que los campos del email coincidan
        if (email !== emailConfirmacion) {
            setError("Los correos electronicos no coinciden");
            return;
        }

        setIsSubmitting(true); // Iniciar el proceso de envío

        // Paso 1: Creamos un objeto con todos los datos de la orden de compra.
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order)
            .then(({ id }) => {
                console.log(id);
                setOrdenId(id);
                clearCart();
            })
            .catch((error) => {
                console.error("Error al guardar la orden:", error);
            })
            .finally(() => {
                setIsSubmitting(true); // Restablecer el estado de envío después de completar
            });
    };

    return (
        <>
            <h2 className="text-center my-10 font-roboto text-2xl text-[#ff9b05] font-normal">
                DATOS DE VERIFICACIÓN
            </h2>
            <div className="flex justify-items-center place-content-center flex-wrap flex-col lg:flex-row lg:gap-10 gap-10 justify-center lg:justify-center">
                <form
                    onSubmit={manejadorFormulario}
                    className="w-[80%] md:w-[30%]"
                >
                    <div className="form-group">
                        <label
                            htmlFor=""
                            className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            {" "}
                            Nombre{" "}
                        </label>
                        <input
                            type="text"
                            placeholder="ingrese su nombre"
                            className="rounded-lg border border-gray-300 focus:ring-[#ff9b05] focus:border-[#ff9b05] w-full "
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label
                            htmlFor=""
                            className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            {" "}
                            Apellidos
                        </label>
                        <input
                            type="text"
                            placeholder="ingrese sus apellidos"
                            className="rounded-lg border border-gray-300 focus:ring-[#ff9b05] focus:border-[#ff9b05] w-full "
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label
                            htmlFor=""
                            className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Celular
                        </label>
                        <input
                            type="number"
                            placeholder="ingrese su numero de celular"
                            className="rounded-lg border border-gray-300 focus:ring-[#ff9b05] focus:border-[#ff9b05] w-full "
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label
                            htmlFor=""
                            className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Correo
                        </label>
                        <input
                            type="email"
                            placeholder="ingrese su correo"
                            className="rounded-lg border border-gray-300 focus:ring-[#ff9b05] focus:border-[#ff9b05] w-full "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label
                            htmlFor=""
                            className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Confirma su correo
                        </label>
                        <input
                            type="email"
                            placeholder="ingrese su correo"
                            className="rounded-lg border border-gray-300 focus:ring-[#ff9b05] focus:border-[#ff9b05] w-full "
                            value={emailConfirmacion}
                            onChange={(e) =>
                                setEmailConfirmacion(e.target.value)
                            }
                        />
                    </div>

                    {error && <p style={{ color: "red" }}> {error} </p>}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-black mt-2 text-white py-2 hover:scale-105 px-5 w-[100%] my-10"
                    >
                        {isSubmitting ? "" : "Finalizar Compra"}
                    </button>
                    {ordenId && (
                        <>
                            <strong>
                                ¡Gracias por tu compra! Tu número de orden es{" "}
                                {ordenId}{" "}
                            </strong>
                        </>
                    )}
                </form>
                <div className="mt-5 w-[80%] md:w-[30%] mb-10 ">
                    <strong>Total Productos</strong>
                    {cart.map((product) => (
                        <div
                            key={product.id}
                            className="flex min-w-full justify-between"
                        >
                            <p>
                                {product.quantity} x {product.title}
                            </p>
                            <p> S/. {product.price}</p>
                        </div>
                    ))}
                    <strong>Cantidad Total: S/. {totalPrice()} </strong>
                </div>
            </div>
        </>
    );
};

export default Checkout;
