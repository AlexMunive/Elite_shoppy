import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { erroresFirebase } from "../utils/erroresFirebase";

// utils
import { formValidate } from "../utils/formValidate";

//components
import FromError from "../components/FromError";
import FormInput from "../components/FormInput";
import SliderImg from "../components/login/SliderImg";

const Register = () => {
    const { registerUser } = useContext(UserContext);
    const navegate = useNavigate();
    const { required, patternEmail, minLength, validateTrim, validateEquals } =
        formValidate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        setError,
    } = useForm();

    const onSubmit = async (data) => {
        try {
            await registerUser(data.email, data.password);
            navegate("/");
        } catch (error) {
            console.log(error.code);
            const { code, message } = erroresFirebase(error.code);
            setError(code, {
                message,
            });
        }
    };

    return (
        <div className="flex flex-wrap justify-center max-w-7xl sm:justify-between">
            <div className="hidden sm:contents">
                <SliderImg />
            </div>
            <div className="max-w-2xl flex flex-col justify-center m-5">
                <div className="cursor-pointer flex justify-around">
                    <NavLink to="/" className="flex gap-4 items-center">
                        <ion-icon name="return-up-back-outline"></ion-icon>
                        <p>Go to start</p>
                    </NavLink>
                    <NavLink to="/login" className="flex gap-4 items-center">
                        <p>Go to login</p>
                        <ion-icon name="return-up-forward-outline"></ion-icon>
                    </NavLink>
                </div>
                <h1 className="text-center my-5 text-4xl">
                    Register in the best store
                </h1>
                <FromError error={errors.firebase} />

                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormInput
                        type="email"
                        placeholder="Ingrese Email"
                        {...register("email", {
                            required: required,
                            pattern: patternEmail,
                        })}
                        label="Ingresa tu correo"
                        error={errors.email}
                    >
                        {" "}
                        <FromError error={errors.email} />
                    </FormInput>

                    <FormInput
                        type="password"
                        placeholder="Ingrese Password"
                        {...register("password", {
                            minLength: minLength,
                            validate: validateTrim,
                        })}
                        label="Ingresa tu contraseña"
                        error={errors.password}
                    >
                        {" "}
                        <FromError error={errors.password} />
                    </FormInput>

                    <FormInput
                        type="password"
                        placeholder="Ingrese Password"
                        {...register("repassword", {
                            validate: validateEquals(getValues("password")),
                        })}
                        label="Repite tu contraseña"
                        error={errors.repassword}
                    >
                        {" "}
                        <FromError error={errors.repassword} />
                    </FormInput>

                    <button
                        className="focus:outline-none text-white bg-[#ff9b05] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 w-full"
                        type="submit"
                    >
                        register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
