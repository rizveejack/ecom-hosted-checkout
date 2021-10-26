import { useRouter } from "next/router";

const SearchComponent = () => {
    const router = useRouter()
    const data = router.query
    const searchValue = JSON.parse(router.query.data)

    return (
        <section className="section" style={{ marginTop: "12px" }}>
            <div className="container">
                <div className="section-title">
                    <h2>No product Found</h2>
                    <p>There is no product to show you.</p>
                </div>
            </div>
        </section>
    )
}

export default SearchComponent
