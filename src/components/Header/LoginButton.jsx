import Link from "next/link";
import useRedox from "../../hook/useRedox";

const LoginButton = () => {
    const { gstate } = useRedox()
    console.log(gstate);

    if (gstate.isLogedin === false) {
        return (
            <ul className="user-login">
                <li>
                    <Link href="/login">Sign In</Link>
                </li>
                <li>
                    <Link href="#">Register</Link>
                </li>
            </ul>
        )
    }

    return (
        <>
            <div className="user">
                <i className="lni lni-user"></i>
                {gstate.isLogedin && gstate?.data?.viewer?.username}
            </div>
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
