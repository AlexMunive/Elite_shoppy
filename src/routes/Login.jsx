import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

// utils
import { erroresFirebase } from "../utils/erroresFirebase";
import { formValidate } from "../utils/formValidate";

//components
import FromError from "../components/FromError";
import FormInput from "../components/FormInput";
import SliderImg from "../components/login/SliderImg";

const Login = () => {
    const { loginUser } = useContext(UserContext);
    const navegate = useNavigate();
    const { required, patternEmail, minLength, validateTrim } = formValidate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();

    const onSubmit = async (data) => {
        try {
            await loginUser(data.email, data.password);
            navegate("/");
        } catch (error) {
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
                <div className="cursor-pointer">
                    <NavLink to="/" className="flex gap-4 items-center">
                        <p>Go to start</p>
                        <ion-icon name="return-up-back-outline"></ion-icon>
                    </NavLink>
                </div>

                <h1 className="text-center my-5 text-4xl font-roboto">
                    Don't Wait, Login now!
                </h1>
                <div className="flex justify-evenly">
                    <h1 className="text-center my-5 text-base border-2 border-[#ff9b05] py-1 px-4 bg-[#ff9b05] text-white">
                        LOGIN
                    </h1>
                    <h1 className="text-center my-5 text-base border-2 border-[#ff9b05] py-1 px-4 cursor-pointer">
                        <NavLink to="/register">REGISTER</NavLink>
                    </h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormInput
                        type="email"
                        placeholder="Ingese Email"
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
                        placeholder="Ingese Password"
                        {...register("password", {
                            minLength: minLength,
                            validate: validateTrim,
                        })}
                        label="Ingresa tu password"
                        error={errors.password}
                    >
                        {" "}
                        <FromError error={errors.password} />
                    </FormInput>
                    <button
                        className="focus:outline-none text-white bg-[#ff9b05] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 w-full"
                        type="submit"
                    >
                        SIGN IN
                    </button>
                    <div>
                        <NavLink to="/register">
                            {" "}
                            <p className="text-xs text-center mt-2 text-[#ff9b05] font-medium">
                                ¿NO TIENES CUENTA? REGISTRATE{" "}
                            </p>
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
