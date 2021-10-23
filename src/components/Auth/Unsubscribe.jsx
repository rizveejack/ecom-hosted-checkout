import { useRouter } from "next/router";
import { useEffect } from "react";
import useRedox from "../../hook/useRedox";

const Unsubscribe = ({ children }) => {
    const { gstate } = useRedox()
    const go = useRouter()

    useEffect(() => {
        if (gstate.isLogedin && !gstate.loading) {
            go.push('/');
        }
    }, [gstate.loading, gstate.isLogedin])

    if (!gstate.isLogedin) {

        return (
            <>
                {children}
            </>
        )
    }

    return (
        <div>Loading...</div>
    )

}

export default Unsubscribe
