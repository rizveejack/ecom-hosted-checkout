import Link from "next/link";

const Carosel = (props) => {
    const { description, name, price, slug, image } = props
    return (
        <div className="single-slider tns-item tns-slide-cloned" style={{ backgroundImage: `url(${image.sourceUrl})` }}>
            <div className="content">
                <h2><span>No restocking fee ($35 savings)</span>
                    {name}
                </h2>
                <div dangerouslySetInnerHTML={{ __html: description }} />

                <h3><span>Now Only</span> {price}</h3>
                <div className="button">
                    <Link href={`/shop/${slug}`} className="btn" passHref>
                        <div className="btn btn-primary">Shop Now</div>
                    </Link>
                </div>
            </div>
        </div>


    )
}

export default Carosel
