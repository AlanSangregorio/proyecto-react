import "./saludo.css"


function Saludo(props) {
    return(
        <div className="saludoContainer">
        <h1>{props.gretting}</h1>
        </div>
    )
}

export default Saludo; 