import "./Header.css";
import Button from "../../Hooks/Button/Button";
import { useContext, useEffect, useState } from "react";
import LoginPage from "../Login/LoginPage";
import { loginContext, userContext } from "../../Hooks/ContextProvider/ContextProvider";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function NavBar({ onLoginClick }) {
    const { isLoginOpen, toggleLogin } = useContext(loginContext);
    const { user, setUser } = useContext(userContext);

    const [liElements, setLiElements] = useState({
        home: true,
        cart: false,
        products: false,
        contact: false,
    });

    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem("_id");
        localStorage.removeItem("token");
        setUser(null);
        navigate("/");
    }

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user, navigate]);

    return (
        <header className="header" >
            <span className="logo" style={{ marginTop: "30px" }} ><img src="lpulogo.png" alt="lpuCart" height="120px" width="120px" /></span>
            <ul className="nav-list">
                <NavLink to="/home">
                    <li id="home">
                    ＨＯＭＥ
                    </li>
                </NavLink>
                <NavLink to="/cart">
                    <li id="cart">
                    ＣＡＲＴ
                    </li>
                </NavLink>
                <NavLink to="/products">
                    <li id="products">
                    ＰＲＯＤＵＣＴＳ
                    </li>
                </NavLink>
            </ul>
            <div className="profile">
                {user ? (
                    <div>
                        <CgProfile className="icon" />
                        <p>{user.name}</p>
                        <Button onClick={handleLogout}>logout</Button>
                    </div>
                ) : (
                    <Button variant="light" onClick={toggleLogin}>
                        login
                    </Button>
                )}
            </div>
            {isLoginOpen && <LoginPage />}
        </header>
    );
}
