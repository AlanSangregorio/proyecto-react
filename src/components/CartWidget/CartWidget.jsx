import "./CartWidget.css"

function CartWidget(props) {
    return (
        <div className="cartWidget">
            <button className="cartWidgetButton">
            <img className="cartWidgetIcon" src="./CartWidget.png" alt="Carro de compras" />
            </button>

        </div>

    )
}

export default CartWidget