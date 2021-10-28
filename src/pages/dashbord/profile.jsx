import Subscribe from "../../components/Auth/Subscribe"
import FrontEnd from "../../layout/FrontEnd"

const Profile = () => {
    return (
        <FrontEnd>
            <Subscribe>
                <section className="checkout-wrapper section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="checkout-steps-form-style-1">
                                    <ul id="accordionExample">
                                        <li>
                                            <h6 className="title">Update Profile</h6>
                                            <section className="checkout-steps-form-content" >
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="single-form form-default">
                                                            <label>Your Name</label>
                                                            <div className="row">
                                                                <div className="col-md-6 form-input form">
                                                                    <input type="text" placeholder="First Name" />
                                                                </div>
                                                                <div className="col-md-6 form-input form">
                                                                    <input type="text" placeholder="Last Name" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="single-form form-default">
                                                            <label>Email Address</label>
                                                            <div className="form-input form">
                                                                <input type="text" placeholder="Email Address" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="single-form form-default">
                                                            <label>Phone Number</label>
                                                            <div className="form-input form">
                                                                <input type="text" placeholder="Phone Number" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="single-form form-default">
                                                            <label>City</label>
                                                            <div className="form-input form">
                                                                <input type="text" placeholder="City" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="single-form form-default">
                                                            <label>Post Code</label>
                                                            <div className="form-input form">
                                                                <input type="text" placeholder="Post Code" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="single-form form-default">
                                                            <label>Country</label>
                                                            <div className="form-input form">
                                                                <input type="text" placeholder="Country" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="single-form form-default">
                                                            <label>Region/State</label>
                                                            <div className="select-items">
                                                                <select className="form-control">
                                                                    <option value="0">select</option>
                                                                    <option value="1">select option 01</option>
                                                                    <option value="2">select option 02</option>
                                                                    <option value="3">select option 03</option>
                                                                    <option value="4">select option 04</option>
                                                                    <option value="5">select option 05</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="single-form form-default">
                                                            <label>Your Bio</label>
                                                            <div className="select-items">
                                                                <textarea className="form-control" rows="5"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="price-table-btn button mt-3">
                                                        <a href="#" className="btn btn-alt">Update Profile</a>
                                                    </div>
                                                </div>
                                            </section>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="checkout-sidebar">
                                    <div className="card" style={{ width: "100%" }}>
                                        <img src="/images/placeholder.png" className="card-img-top" alt="#" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Subscribe>
        </FrontEnd>
    )
}

export default Profile
