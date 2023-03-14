import "./banner.css"

function Banner(props){
    return (
        <div className="bannerContainer">
            <h2 className="bannerTitle">
            {props.titleBanner}
            </h2>
            <p className="bannerText">
            {props.textBanner}
            </p>

        </div>
    )
}

export default Banner;