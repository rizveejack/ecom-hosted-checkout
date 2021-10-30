import Image from "next/image";
const ProfileCart = ({ viewer }) => {

    return (
        <div className="checkout-sidebar text-center">
            <div className="card" style={{ width: "100%" }}>
                <div className="text-center mt-3">
                    <span className="rounded">
                        <Image
                            src={viewer.avatar.url}
                            className="card-img-top"
                            alt="#"
                            width={100}
                            height={100}
                            layout="intrinsic"
                        />
                    </span>
                </div>
                <div className="card-body">
                    <h4 className="card-title">{viewer.firstName} {viewer.lastName}</h4>
                    <h6>{viewer.email}</h6>
                    <p className="card-text">{viewer.description}</p>

                </div>
            </div>
        </div>
    )
}

export default ProfileCart
