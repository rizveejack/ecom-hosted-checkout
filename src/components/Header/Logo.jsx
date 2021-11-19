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
                        layout="intrinsic"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P9fDAAFGwIWTcQ9nAAAAABJRU5ErkJggg=="
                    />
                </div>
            </Link>
        </>

    )
}

export default Logo
