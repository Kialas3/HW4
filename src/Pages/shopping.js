import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import AddToCart from "../AddToCart/AddToCart";

export function Shopping({ shoppingdata, deleteshopping, cartNum, modifyData }) {
    var num = 0
    var totalPrice = 0 //Math.round(price * num * 100) / 100

    shoppingdata.map((item) => {
        const { chosenQuantity, price } = item;
        num += parseInt(chosenQuantity)
        totalPrice += Math.round(parseFloat(price.split('$')[1]) * parseInt(chosenQuantity) * 100) / 100
    })

    cartNum(() => { return num })

    return (<Container>
        <div>
            <h1>My cart({num})</h1>
            {num !== 0 ? shoppingdata.map((item) => {
                const { id, name, img, chosenQuantity, chosenColor, chosenSize, price } = item;
                return <AddToCart id={id}
                    name={name}
                    img={img}
                    chosenQuantity={chosenQuantity}
                    chosenColor={chosenColor}
                    chosenSize={chosenSize}
                    price={price}
                    modify={modifyData}
                    deleteData={deleteshopping} />
            }) : <p style={{ fontSize: "50px" }}>Your Cart is Empty</p>}
        </div>
        <div>
            <div className="T-shirt_style">
                <h2>Order Summary</h2>
                <div className="row">
                    <p>Subtotal: </p>
                    <p style={{ color: "#c51230", marginLeft: "5px" }}>${Math.round(totalPrice * 100) / 100}</p>
                </div>
                <div className="row">
                    <p>Est. Shipping: </p>
                    <p style={{ color: "#c51230", marginLeft: "5px" }}>$ {totalPrice === 0 ? 0 : 6.95}</p>
                </div>
                <div className="row">
                    <p>Total: </p>
                    <p style={{ color: "#c51230", marginLeft: "5px" }}>${totalPrice === 0 ? 0 : Math.round((totalPrice + 6.95) * 100) / 100}</p>
                </div>
                <Link to="/not_implemented" className="container_T-shirt button_style_a">
                    <button className="button_style">Sign in and Check out</button></Link>
            </div>
            <Link to="/products" className="container_T-shirt button_style_a">
                <button className="button_style">Continue Shopping</button></Link>
        </div>

    </Container>)
}
