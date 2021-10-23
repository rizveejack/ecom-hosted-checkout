import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import VIEWER from "../apollo/query/VIEWER"


const GlobalState = () => {
    const { loading, error, data } = useQuery(VIEWER)
    const [gstate, setGstate] = useState({})

    const isLogedin = Boolean(data?.viewer)
    const iscartEmpty = data?.cart?.contents?.nodes.length > 0 ? false : true

    const INITIALSTATE = {
        isLogedin,
        iscartEmpty,
        loading,
        error,
        data
    }

    useEffect(() => {
        setGstate(INITIALSTATE)
    }, [loading, data])


    return { gstate, setGstate }
}

export default GlobalState
