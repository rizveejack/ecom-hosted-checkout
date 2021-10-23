import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Subscribe from "../components/Auth/Subscribe";
import useRedox from "../hook/useRedox";
import LOGOUT from "../query/LOGOUT";
import VIEWER from "../query/VIEWER";

const Logout = () => {
    const [logOut, { loading, error, data }] = useMutation(LOGOUT, {
        refetchQueries: [VIEWER]
    })
    const { gstate } = useRedox()

    const go = useRouter()


    useEffect(() => {
        logOut()
        if (!gstate.isLogedin && !gstate.loading) {
            go.push("/login")
        }
    }, [])
    return (
        <Subscribe>
            {!loading && "logout..."}
        </Subscribe>
    )
}

export default Logout
