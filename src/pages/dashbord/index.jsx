import Subscribe from "../../components/Auth/Subscribe"
import FrontEnd from "../../layout/FrontEnd"

const Dashbord = () => {
    return (
        <FrontEnd>
            <Subscribe>
                <section className="section">
                    <div className="container">
                        <div className="section-title">
                            <h2>Dashbord</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">OrderId</th>
                                        <th scope="col">OrderDate</th>
                                        <th scope="col">OrderStatus</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colSpan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </Subscribe>
        </FrontEnd>
    )
}

export default Dashbord
