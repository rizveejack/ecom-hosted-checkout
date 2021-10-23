import Footer from "../components/Footer"
import Header from "../components/Header"

const FrontEnd = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default FrontEnd
