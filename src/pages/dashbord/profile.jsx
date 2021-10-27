import Subscribe from "../../components/Auth/Subscribe"
import FrontEnd from "../../layout/FrontEnd"

const Profile = () => {
    return (
        <FrontEnd>
            <Subscribe>
                <section className="section" style={{ marginTop: "12px" }}>
                    <div className="container">
                        <div className="section-title">
                            <h2>Profile</h2>
                            <p>There is no product to show you.</p>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title mb-4">Profile</h4>
                                <form>
                                    <div className="form-group">
                                        <img src="/images/placeholder.png" className="img-sm rounded-circle border" />
                                    </div>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>Name</label>
                                            <input type="text" className="form-control" value="Mike" />
                                        </div>
                                        <div className="col form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" value="Johnson" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Country</label>
                                            <select id="inputState" className="form-control">
                                                <option> Choose...</option>
                                                <option>Uzbekistan</option>
                                                <option>Russia</option>
                                                <option selected="">United States</option>
                                                <option>India</option>
                                                <option>Afganistan</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>City</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Zip</label>
                                            <input type="text" className="form-control" value="123009" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Phone</label>
                                            <input type="text" className="form-control" value="+123456789" />
                                        </div>
                                    </div>

                                    <button className="btn btn-primary btn-block">Save info</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Subscribe>
        </FrontEnd>
    )
}

export default Profile
