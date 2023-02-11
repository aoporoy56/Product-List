function ProductCard(props){
    return (
    <div className="Product-Card">
        <h2 className="Product-Name">{props.name}</h2>
        <p className="Product-Short-Details">{props.details}</p>
        <div className="Product-Image-Box">
            <img src={"../"+props.img} alt={props.name} />
        </div>
        <div className="Bottom-Details">
            <h2 className="Product-Price">Price : {props.price}</h2>
            <div className="Button-Box">
                <a href="#"><button className="Add-TO-Card-Button">ADD TO CART</button></a>
            </div>
        </div>
    </div>)
}

export default ProductCard;