import { Link, useParams } from "react-router-dom"
import shirts from "../shared/shirts"
import notFoundImg from "../assets/shirt_images/not-found.png";
import { useState } from "react";

const Detail = ({ add }) => {
    const { name } = useParams()
    const shirt = shirts.filter((tShirt) => tShirt.name === name)[0];
    const { description, price, colors } = shirt;
    const color = Object.keys(colors);
    const quantity = new Array(20);
    for (let i = 0; i < quantity.length; i++) {
        quantity[i] = i + 1;
    }
    const sizes = ["Size",
        "Women's XS",
        "Women's S",
        "Women's M",
        "Women's L",
        "Women's XL",
        "Women's 2XL", "Men's XS",
        "Men's S",
        "Men's M",
        "Men's L",
        "Men's XL",
        "Men's 2XL"]

    const [img, setImg] = useState(imgSrcFront("white"));
    const [twoImg, setTwoImg] = useState([imgSrcFront("white"), imgSrcBack("white")])

    const [chosenSize, setChosenSize] = useState("Size")
    const [chosenQuantity, setChosenQuantity] = useState(1)
    const [chosenColor, setChosenColor] = useState("white")
    const [addToCartButton, setAddToCartButton] = useState(["", "add_to_cart"])


    function quantityChange(e) {
        setChosenQuantity(e.target.value)
    }
    function sizeChange(e) {
        setChosenSize(e.target.value)
        if (e.target.value !== "Size" && priceText() !== "NO PRICE") {
            setAddToCartButton(["/shopping", "button_style"])
        } else {
            setAddToCartButton(["", "add_to_cart"])
        }
    }
    function priceText() {
        const pricetext = (price === undefined) || (price === "") ? "NO PRICE" : price;
        return pricetext
    }

    function imgSrcFront(value) {
        const imgFront = (colors === undefined) || (colors[value].front === undefined) || (colors[value].front === "") ?
            notFoundImg : colors[value].front;
        return imgFront
    }
    function imgSrcBack(value) {
        const imgBack = (colors === undefined) || (colors[value].back === undefined) || (colors[value].back === "") ?
            notFoundImg : colors[value].back;
        return imgBack
    }

    function colorChange(value) {
        setTwoImg([imgSrcFront(value), imgSrcBack(value)]);
        setImg(imgSrcFront(value));
        setChosenColor(value);
    }

    function addtocart() {
        if (chosenSize === "Size" || priceText() === "NO PRICE") {

        } else {
            add((prevData) => { return [{ id: Math.random(), name, img, chosenQuantity, chosenColor, chosenSize, price }, ...prevData,] })
        }
    }

    function descriptionText() {
        const descriptiontext = (description === undefined) || (description === "") ? "NO DESCRIPTION" : description;
        return descriptiontext
    }



    return (
        <div>
            <h1 id="chosen_T-shirt_name">{name}</h1>
            <div id="chosen_T-shirt">
                <img className="img_T-shirt" src={img} alt={colors.white.front} />
                <div>
                    <p className="money_style">{priceText()}</p>
                    <p>{descriptionText()}</p>
                    <div className="detail_container">
                        <p>Side:</p>
                        <button className="detial_button_style" onClick={() => setImg(twoImg[0])}>Front</button>
                        <button className="detial_button_style" onClick={() => setImg(twoImg[1])}>Back</button>
                    </div>
                    <div className="detail_container">
                        <p>Color:</p>
                        {color.map((c) => {
                            return (
                                <button className="color_button_style"
                                    style={{ backgroundColor: c }}
                                    onClick={() => { colorChange(c) }}>{c}</button>
                            )
                        })}
                    </div>
                    <div className="detail_container">
                        <p>Quantity:</p>
                        <select onChange={(e) => quantityChange(e)}>
                            {quantity.map((num) => {
                                return (
                                    <option value={num}>{num}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="detail_container">
                        <p>Size:</p>
                        <select onChange={(e) => sizeChange(e)}>
                            {sizes.map((size) => {
                                return (
                                    <option value={size}>{size}</option>
                                )
                            })}
                        </select>
                    </div>
                    <Link to={addToCartButton[0]} className="container_T-shirt button_style_a" onClick={addtocart}>
                        <p className={addToCartButton[1]}>Add to Cart</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Detail