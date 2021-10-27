import Subscribe from "../../components/Auth/Subscribe"
import FrontEnd from "../../layout/FrontEnd"

const Dashbord = () => {
    return (
        <FrontEnd>
            <Subscribe>
                <section className="section" style={{ marginTop: "12px" }}>
                    <div className="container">
                        <div className="section-title">
                            <h2>Dashbord</h2>
                            <p>There is no product to show you.</p>
                        </div>
                    </div>
                </section>
            </Subscribe>
        </FrontEnd>
    )
}

export default Dashbord
