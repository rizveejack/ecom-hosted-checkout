import Subscribe from "../../components/Auth/Subscribe"
import DashBordComponent from "../../components/DashBordComponent"
import FrontEnd from "../../layout/FrontEnd"

const Dashbord = () => {
    return (
        <FrontEnd>
            <Subscribe>
                <DashBordComponent />
            </Subscribe>
        </FrontEnd>
    )
}

export default Dashbord
