import Image from "next/image"
const ProfileCart = () => {
    return (
        <div className="checkout-sidebar">
            <div className="card" style={{ width: "100%" }}>
                <Image
                    src="/images/placeholder.png"
                    className="card-img-top"
                    alt="#"
                    width={200}
                    height={200}
                    layout="intrinsic"
                />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>

                </div>
            </div>
        </div>
    )
}

export default ProfileCart
