import { useMutation } from "@apollo/client";
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


    useEffect(() => {
        if (gstate.isLogedin && !gstate.isloading) {
            logOut()
        }
    }, [gstate.isLogedin, gstate.isloading, logOut])

    console.log(data);

    return (
        <Subscribe>
            {!loading && <h1 className="text-center display-4 mt-5">logout...</h1>}
        </Subscribe>
    )
}

export default Logout
