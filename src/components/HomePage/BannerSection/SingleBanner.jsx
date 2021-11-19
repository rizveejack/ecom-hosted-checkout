import DOMPurify from "dompurify";
import Image from "next/image";
import Link from "next/link";

const SingleBanner = (props) => {
    const sanitizar = DOMPurify.sanitize
    const { name, slug, image, description } = props
    return (
        <div className="col-lg-2 col-md-3 col-3 text-center mb-5 p-3">
            <div className="card no_border">
                <div className="card-img-top">
                    <Image
                        src={image?.sourceUrl ?? "/images/placeholder.png"}
                        alt="#"
                        height={200}
                        width={200}
                        layout="intrinsic"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P9fDAAFGwIWTcQ9nAAAAABJRU5ErkJggg=="
                        placeholder="blur"
                    />
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        <Link href={`/category/${slug}`}>{name}</Link>
                    </h5>
                    <p className="card-text">
                        Some quick example
                    </p>
                </div>

            </div>

        </div>
    )
}

export default SingleBanner
