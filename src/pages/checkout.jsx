import Subscribe from "../components/Auth/Subscribe"
import FrontEnd from "../layout/FrontEnd"

const Checkout = () => {
    return (
        <Subscribe>
            <FrontEnd>
                <section className="section" style={{ marginTop: "12px" }}>
                    <div className="container">
                        <div className="section-title">
                            <h2>No product Found</h2>
                            <p>There is no product to show you.</p>
                        </div>
                    </div>
                </section>
            </FrontEnd>
        </Subscribe>
    )
}

export default Checkout
