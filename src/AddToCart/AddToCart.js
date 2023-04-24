import { useEffect, useState } from "react"
import { Container } from "reactstrap"

const AddToCart = ({ id, name, img, chosenQuantity, chosenColor, chosenSize, price, modify, deleteData }) => {

    const [changeQuantity, setChangeQuantity] = useState(chosenQuantity)

    const quantity = new Array(20);
    for (let i = 0; i < quantity.length; i++) {
        quantity[i] = i + 1;
    }

    function quantityChange(e) {
        setChangeQuantity(e.target.value)
        modify((prevData) => { return [{ id: Math.random(), name, img, chosenQuantity: e.target.value, chosenColor, chosenSize, price }, ...prevData,] })

        modify((prev) => {
            return prev.filter(item => item.id !== id)
        })
    }

    function deleteItem() {
        deleteData((prev) => {
            return prev.filter(item => item.id !== id)
        })
    }

    return <div>
        <hr />
        <Container>
            <div>
                <h3>{name}</h3>
                <img src={img} alt={name} className="picture" />
            </div>
            <div>
                <div className="row">
                    <p>Quantity:</p>
                    <select onChange={(e) => quantityChange(e)}>
                        {quantity.map((num) => {
                            if (changeQuantity == num) {
                                return (
                                    <option value={num} selected>{num}</option>
                                )
                            } else {
                                return (
                                    <option value={num}>{num}</option>
                                )

                            }
                        })}
                    </select>
                </div>
                <div className="row">
                    <p>Color: </p>
                    <p style={{ color: "#c51230", marginLeft: "5px" }}> {chosenColor}</p>
                </div>
                <div className="row">
                    <p>Size:</p>
                    <p style={{ color: "#c51230", marginLeft: "5px" }}>{chosenSize}</p>
                </div>
                <div className="row">
                    <p>Price(each):</p>
                    <p style={{ color: "#c51230", marginLeft: "5px" }}>{price}</p>
                </div>
                <button className="button_style" onClick={deleteItem}>Remove</button>
            </div>
        </Container>
    </div>
}
export default AddToCart;