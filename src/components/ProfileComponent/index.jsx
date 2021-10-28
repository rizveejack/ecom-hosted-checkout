import ProfileCart from "./ProfileCart"
import ProfileForm from "./ProfileForm"


const ProfileComponent = () => {
    return (
        <section className="checkout-wrapper section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="checkout-steps-form-style-1">
                            <ul id="accordionExample">
                                <li>
                                    <h6 className="title">Update Profile</h6>
                                    <ProfileForm />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <ProfileCart />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileComponent
