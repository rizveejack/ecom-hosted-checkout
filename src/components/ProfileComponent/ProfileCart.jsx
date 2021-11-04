import Avatar from "react-avatar"


const ProfileCart = ({ viewer }) => {

    return (
        <div className="checkout-sidebar text-center">
            <div className="card" style={{ width: "100%" }}>
                <div className="text-center mt-3">
                    <span className="rounded" >
                        <Avatar
                            name={viewer.firstName + " " + viewer.lastName}
                            size="100"
                            round={true}
                            color={Avatar.getRandomColor('sitebase', ['red', 'green', "pink"])}

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
