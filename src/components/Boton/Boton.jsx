import "./boton.css"
function Boton(props){
    return (        
        <>
        <button>Click Me</button>
        {props.children}
        </>
    )
}

export default Boton; 