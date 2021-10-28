import Subscribe from "../../components/Auth/Subscribe"
import ProfileComponent from "../../components/ProfileComponent"
import FrontEnd from "../../layout/FrontEnd"

const Profile = () => {
    return (
        <FrontEnd>
            <Subscribe>
                <ProfileComponent />
            </Subscribe>
        </FrontEnd>
    )
}

export default Profile
