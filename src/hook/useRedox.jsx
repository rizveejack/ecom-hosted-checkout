import { useContext } from "react"
import Context from "../global/Context"

const useRedox = () => {
    const { gstate, setGstate } = useContext(Context)
    return { gstate, setGstate }
}

export default useRedox
