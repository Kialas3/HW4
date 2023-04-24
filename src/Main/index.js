import logo from "../assets/images/logo.png"
import cart from "../assets/images/cart.png"

import { Home } from "../Pages/Home"
import { NotImplemented } from "../Pages/notImplemented"
import { Products } from "../Pages/products"
import { Shopping } from "../Pages/shopping"
import Detail from "../Pages/details"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { useState } from "react"

const Main = () => {
    const [shoppingData, setShoppingData] = useState([])
    const [cartNum, setCartNum] = useState(0)

    return (<BrowserRouter>
        <div className="container header">
            <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
            <h1 className="nomargin h1_size">Scotty Shirts U Illustrate (SSUI)</h1>
            <div>
                <Link to="/shopping" className="shopping_style">
                    <img src={cart} alt="cart" />
                    <p className="number nomargin">{cartNum}</p>
                </Link>
            </div>
        </div>
        <div className="container headerMenu">
            <Link to="/products">
                <div>
                    <p className="header_menu nomargin">T-SHIRTS</p>
                </div>
            </Link>
            <Link to="/not_implemented">
                <div>
                    <p className="header_menu nomargin">CREATE FROM PICTURE</p>
                </div>
            </Link>
            <Link to="/not_implemented">
                <div>
                    <p className="header_menu nomargin">CREATE YOUR OWN</p>
                </div>
            </Link>
            <Link to="/not_implemented">
                <div>
                    <p className="header_menu nomargin">ABOUT US</p>
                </div>
            </Link>
            <Link to="/not_implemented">
                <div>
                    <p className="header_menu nomargin">LOG IN</p>
                </div>
            </Link>
        </div>

        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/shopping" element={<Shopping shoppingdata={shoppingData} deleteshopping={setShoppingData} cartNum={setCartNum} modifyData={setShoppingData} />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/not_implemented" element={<NotImplemented />} />
            <Route exact path="/products/:name" element={<Detail add={setShoppingData} />} />
        </Routes>

        <div className="background_color ">
            <div className="container footer">
                <Link to="not_implemented">
                    <p className="footer_word">Contact Us</p>
                </Link>
                <Link to="not_implemented">
                    <p className="footer_word">Site Map</p>
                </Link>
                <Link to="not_implemented">
                    <p className="footer_word">Privacy Policy</p>
                </Link>
                <Link to="not_implemented">
                    <p className="footer_word">Careers</p>
                </Link>
                <Link to="not_implemented">
                    <p className="footer_word">Reviews</p>
                </Link>
                <p className="footer_name_word">Designed by CHO CHING-KAI</p>
            </div>
        </div>
    </BrowserRouter>)
}

export default Main
