import Image from "next/image"
import Link from "next/link"

const Logo = () => {
    return (

        <>
            <Link href="/" passHref>
                <div className="navbar-brand cti">
                    <Image
                        src="/images/logo/logo.svg"
                        alt="Logo"
                        width={200}
                        height={42}
                        layout="fixed"
                        placeholder="blur"
                        blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOc/Op/PQAHkQL9VgAfCwAAAABJRU5ErkJggg=="
                    />
                </div>
            </Link>
        </>

    )
}

export default Logo
