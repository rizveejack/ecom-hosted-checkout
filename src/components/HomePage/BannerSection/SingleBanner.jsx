import DOMPurify from "dompurify";
import Image from "next/image";
import Link from "next/link";

const SingleBanner = (props) => {
    const sanitizar = DOMPurify.sanitize
    const { name, slug, image, description } = props
    return (
        <div className="col-lg-2 col-md-3 col-3 text-center mb-5">
            <div className="single-product no_border">
                <div className="product-image category_img">
                    <Image
                        src={image?.sourceUrl ?? "/images/placeholder.png"}
                        alt="#"
                        height={200}
                        width={200}
                        layout="responsive"
                        blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOc/Op/PQAHkQL9VgAfCwAAAABJRU5ErkJggg=="
                        placeholder="blur"
                    />


                </div>
                <div className="product-info">

                    <h4 className="title">
                        <Link href={`/category/${slug}`}>{name}</Link>
                    </h4>


                </div>
            </div>
        </div>
    )
}

export default SingleBanner
