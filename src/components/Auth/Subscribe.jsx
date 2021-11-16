import { useRouter } from "next/router";
import { useEffect } from "react";
import useRedox from "../../hook/useRedox";

const Subscribe = ({ children }) => {
    const { gstate } = useRedox()
    const router = useRouter()
    const pathname = router.pathname !== "/logout" ? router.pathname : "/dashbord"

    useEffect(() => {
        if (!gstate.isLogedin && !gstate.loading) {
            router.push({
                pathname: '/login',
                query: { next: pathname },
            })
        }
    }, [gstate.loading, gstate.isLogedin, pathname, router])

    if (gstate.isLogedin) {

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

export default Subscribe
