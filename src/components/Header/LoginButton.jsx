import Link from "next/link";
import useRedox from "../../hook/useRedox";

const LoginButton = () => {
    const { gstate } = useRedox()

    if (gstate.isLogedin === false) {
        return (
            <ul className="user-login">
                <li>
                    <Link href="/login">Sign In</Link>
                </li>
                <li>
                    <Link href="/signup">Register</Link>
                </li>
            </ul>
        )
    }

    return (
        <>
            <Link href="/dashbord/profile" passHref>
                <div className="user">
                    <i className="lni lni-user"></i>
                    {gstate.isLogedin && gstate?.data?.viewer?.firstName}
                </div>
            </Link>
            <ul className="user-login">
                <li>
                    <Link href="/dashbord">Dashbord</Link>
                </li>
                <li>
                    <Link href="/logout">Logout</Link>
                </li>
            </ul>
        </>
    )
}

export default LoginButton
