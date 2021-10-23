import React from 'react'

const CallToAction = (props) => {
    return (
        <section className="call-action section">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-8 offset-lg-2 col-12">
                        <div className="inner">
                            <div className="content">
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">Currently You are using free<br />
                                    {props.title}</h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s"> {props.message}</p>
                                <div className="button wow fadeInUp" data-wow-delay=".8s">
                                    <a href={props.link} className="btn">{props.btnText}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

CallToAction.defaultProps = {
    title: "Lite version of ShopGrids",
    messag: `Please, purchase full version of the template
    to get all pages,<br /> features and commercial license.`,
    btnText: "Purchase Now",
    link: "#"
}

export default CallToAction
