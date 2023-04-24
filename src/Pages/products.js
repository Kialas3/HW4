import shirts from "../shared/shirts"
import { Link } from 'react-router-dom';
import notFoundImg from "../assets/shirt_images/not-found.png";

export function Products() {

    function seePageButton(shirt) {
        const seePage = (shirt.name === undefined) || (shirt.name === "") ?
            ["", "add_to_cart"] : [`/products/${shirt.name}`, "button_style"]
        return seePage
    }
    function imgLink(shirt) {
        const img = (shirt.name === undefined) || (shirt.name === "") ?
            ["", "imgLink"] : [`/products/${shirt.name}`, ""]
        return img
    }
    function imgSrc(shirt) {
        const img = (shirt.colors === undefined) || (shirt.colors[Object.keys(shirt.colors)[0]].front === undefined) || (shirt.colors[Object.keys(shirt.colors)[0]].front === "") ?
            notFoundImg : shirt.colors[Object.keys(shirt.colors)[0]].front;
        return img
    }

    function nameText(shirt) {
        const name = (shirt.name === undefined) || (shirt.name === "") ? "NO NAME" : shirt.name
        return name
    }
    function colorText(shirt) {
        const colorNum = (shirt.colors === undefined) || (Object.keys(shirt.colors).length === undefined) || (Object.keys(shirt.colors).length === "") ?
            "NO COLOR" : "Available in " + Object.keys(shirt.colors).length + " colors";
        return colorNum
    }



    return (<div>
        <h1>Our T-shirts</h1>
        <div id="create_T-shirt_list">
            {shirts.map((shirt) => {
                return (
                    <div className="T-shirt_style">
                        <Link to={imgLink(shirt)[0]} className={imgLink(shirt)[1]}><img src={imgSrc(shirt)} alt={shirt.name} className="picture" /></Link>
                        <h2 className="container_T-shirt">{nameText(shirt)}</h2>
                        <p className="container_T-shirt">{colorText(shirt)}</p>
                        <Link to={seePageButton(shirt)[0]} className="container_T-shirt button_style_a"><p className={seePageButton(shirt)[1]}>See Page</p></Link>
                    </div>
                );
            })}
        </div>
    </div>)
}