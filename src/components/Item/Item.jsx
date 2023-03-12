import "./Item.css";

function Item(props){   
    return(    
        <div className="itemCard">
            <div>
            <img className="itemImagen" src={props.img} alt="imagen" />
            <h1 className="itemTitle">{props.title}</h1>
            </div>
            <h2 className="itemPrice">{props.price}</h2>
            <h3 className="itemDescrip">{props.descrip}</h3>  
            <button className="itemButton">Agregar al carrito</button>          
        </div>
        
    )
}

export default Item;