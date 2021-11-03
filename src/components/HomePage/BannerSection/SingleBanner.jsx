import DOMPurify from "dompurify";

const SingleBanner = (props) => {
    const sanitizar = DOMPurify.sanitize
    const { name, slug, image, description } = props
    return (
        <div className="col-lg-3 col-md-3 col-4 text-center mb-5">
            <div className="single-banner" style={{ backgroundImage: `url(${image?.sourceUrl})` }}>
                <div className="content">
                    <h2>{name}</h2>
                    <div dangerouslySetInnerHTML={{ __html: sanitizar(description) }} />
                    <div className="button">
                        <a href={`/category/${slug}`} className="btn">View Details</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBanner
