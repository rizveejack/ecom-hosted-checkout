import FrontEnd from "../layout/FrontEnd"

const Contact = () => {
    return (
        <FrontEnd>
            <section className="contact-us section" style={{ marginTop: "12px" }}>
                <div className="container">
                    <div className="contact-head">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title">
                                    <h2>Contact Us</h2>
                                    <p>There are many variations of passages of Lorem
                                        Ipsum available, but the majority have suffered alteration in some form.</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-info">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 col-12">
                                    <div className="single-info-head">

                                        <div className="single-info">
                                            <i className="lni lni-map"></i>
                                            <h3>Address</h3>
                                            <ul>
                                                <li>44 Shirley Ave. West Chicago,<br /> IL 60185, USA.</li>
                                            </ul>
                                        </div>


                                        <div className="single-info">
                                            <i className="lni lni-phone"></i>
                                            <h3>Call us on</h3>
                                            <ul>
                                                <li><a href="tel:+18005554400">+1 800 555 44 00 (Toll free)</a></li>
                                                <li><a href="tel:+321556667890">+321 55 666 7890</a></li>
                                            </ul>
                                        </div>


                                        <div className="single-info">
                                            <i className="lni lni-envelope"></i>
                                            <h3>Mail at</h3>
                                            <ul>
                                                <li><a href="mailto:support@shopgrids.com">support@shopgrids.com</a>
                                                </li>
                                                <li><a href="mailto:career@shopgrids.com">career@shopgrids.com</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-12 col-12">
                                    <div className="contact-form-head">
                                        <div className="form-main">
                                            <form className="form">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-12">
                                                        <div className="form-group">
                                                            <input name="name" type="text" placeholder="Your Name" required="required" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-12">
                                                        <div className="form-group">
                                                            <input name="subject" type="text" placeholder="Your Subject" required="required" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-12">
                                                        <div className="form-group">
                                                            <input name="email" type="email" placeholder="Your Email" required="required" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-12">
                                                        <div className="form-group">
                                                            <input name="phone" type="text" placeholder="Your Phone" required="required" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group message">
                                                            <textarea name="message" placeholder="Your Message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group button">
                                                            <button type="submit" className="btn ">Submit Message</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </FrontEnd>
    )
}

export default Contact
