import "./ubicacion.css"

function Ubicacion(props){
    return (
        <div className="ubicacionContainer">
            <div className="ubicacionText">
                <h2>¿Donde estamos ubicados?</h2>
            </div>
            <div className="ubicacionMap">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52542.16316930156!2d-58.54637034845709!3d-34.60706438278339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7df1ebd7b97%3A0x60ff636a10073219!2sPet%20Shop%20Hocicos!5e0!3m2!1ses-419!2sar!4v1679090641358!5m2!1ses-419!2sar"
                    width="600"
                    height="450"
                    title="Mapa de Pet Shop Hocicos"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}

export default Ubicacion;
