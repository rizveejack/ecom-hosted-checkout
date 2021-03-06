import className from "classname"


const Banner = (props) => {

    return (
        <div className={className("hero-small-banner", props.bclass)}>
            <div className="content">
                <h2>Weekly Sale!</h2>
                <p>Saving up to 50% off all online store items this week.</p>
                <div className="button">
                    <a className="btn" href="product-grids.html">Shop Now</a>
                </div>
            </div>
        </div>
    )
}

Banner.defaultProps = {
    bclass: "style1"
}


export default Banner
