import Image from "next/image";
import Link from "next/link";

const Carosel = (props) => {
    const { description, name, price, slug, image } = props
    return (
        <div className="single-slider">
            <div className="content container-fluid">
                <div className="row align-items-center">
                    <div className="col-6">
                        <h2><span>No restocking fee ($35 savings)</span>
                            {name}
                        </h2>
                        <div dangerouslySetInnerHTML={{ __html: description }} />

                        <h3><span>Now Only</span> {price}</h3>
                        <div className="button">
                            <Link href={`/shop/${slug}`} className="btn" passHref>
                                <div className="btn btn-primary">Buy Now</div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="img-thumbnail">
                            <Image
                                src={image?.sourceUrl ?? "/images/placeholder.png"}
                                alt="slider"
                                width={400}
                                height={400}
                                layout="responsive"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Carosel
