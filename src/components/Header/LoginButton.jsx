import Link from "next/link"
import useRedox from "../../hook/useRedox"

const LoginButton = () => {
    const { gstate } = useRedox()
    const link = gstate.isLogedin ? "/logout" : "/login"

    return (
        <div className="wishlist">
            <Link href={link} passHref>
                <a>
                    <i className="lni lni-user">
                    </i>
                    {gstate.isLogedin && <span className="total-items bg-success"></span>}
                </a>

            </Link>
        </div>
    )
}

export default LoginButton
