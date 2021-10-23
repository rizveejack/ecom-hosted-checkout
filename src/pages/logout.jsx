import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import LOGOUT from "../apollo/mutation/LOGOUT";
import VIEWER from "../apollo/query/VIEWER";
import Subscribe from "../components/Auth/Subscribe";
import useRedox from "../hook/useRedox";

const Logout = () => {
    const [logOut, { loading, error, data }] = useMutation(LOGOUT, {
        refetchQueries: [VIEWER]
    })
    const { gstate } = useRedox()
    const router = useRouter()

    useEffect(() => {
        if (gstate.isLogedin && !gstate.isloading) {
            logOut()
            router.push("/login")
        }
    }, [gstate.isLogedin, gstate.isloading])

    return (
        <Subscribe>
            {!loading && "logout..."}
        </Subscribe>
    )
}

export default Logout
