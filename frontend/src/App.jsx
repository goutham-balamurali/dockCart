import { useContext, useState } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import NavBar from './assets/components/NavBar/NavBar'
import HoverMainDiv from './assets/Hooks/HoverDiv/HoverMainDiv'
import { loginContext } from './assets/Hooks/ContextProvider/ContextProvider'
import Home from './assets/components/Home/Home'
import Main from './assets/components/Home/Main'
import Cart from './assets/components/cart/Cart'
import './App.css'
import Productss from './assets/components/Products/Productss'

function App() {
    const { isLoginOpen } = useContext(loginContext);
    return (
        <HoverMainDiv isLoginOpen={isLoginOpen}>
            <NavBar />
            <div className='full_main'>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/products" element={<Productss/>} />
                </Routes>
            </div>
        </HoverMainDiv>
    )
}

export default App
