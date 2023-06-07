import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
// Podemos mandar a llamar fuera de un componente
import { createContext } from "react";
import { auth } from "../config/firebase";

export const UserContext = createContext();

// toda la logica de acceso del usuario
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(false);

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (user) => {
            // console.log(user);
            if (user) {
                const { email, photoURL, displayName, uid } = user;
                setUser({ email, photoURL, displayName, uid });
            } else {
                setUser(null);
            }
        });

        return () => unsuscribe();
    }, []);

    const registerUser = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password);

    const loginUser = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);

    const signOutUser = () => signOut(auth);

    return (
        <UserContext.Provider
            value={{ user, setUser, registerUser, loginUser, signOutUser }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
