import React, { useContext, useEffect } from "react";
import { loginContext } from "../../Hooks/ContextProvider/ContextProvider";
import { userContext } from "../../Hooks/ContextProvider/ContextProvider";
import { useNavigate } from "react-router-dom";
import { urlContext } from "../../Hooks/ContextProvider/ContextProvider";

export default function Main() {
    const { setIsLoginOpen } = useContext(loginContext);
    const { user, setUser } = useContext(userContext);
    const navigate = useNavigate();
    const { backendUrl } = useContext(urlContext)

    async function fetchUserData(_id, token) {
        try {
            const response = await fetch(`${backendUrl}/verse/users/${_id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            navigate("/home")
            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.error("Failed to fetch user data:", error.message);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        const _id = localStorage.getItem("_id");

        if (token && _id) {
            fetchUserData(_id, token);
        }
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "5rem",fontSize:"1.5rem" }}>
            <h1>Click The Login Button To Sign In And Start Your Shopping Journey! 🚀</h1>
            <img src="rainbow.gif" alt="Welcome gif" width="400" height="300"></img>
        </div>
    );
}
