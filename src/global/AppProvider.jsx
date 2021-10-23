import Context from "./Context"
import GlobalState from "./GlobalState"

export const AppProvider = ({ children }) => {
    return (
        <Context.Provider value={GlobalState()}>
            {children}
        </Context.Provider>
    )
}
