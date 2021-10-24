import { useQuery } from "@apollo/client";
import PRODUCTS_AND_CATEGORIES from "../../apollo/query/PRODUCTS_AND_CATEGORIES";
import ProductCart from '../../components/Product/ProductCart';
import FrontEnd from "../../layout/FrontEnd";


const Shop = () => {

    const { loading, error, data } = useQuery(PRODUCTS_AND_CATEGORIES)
    const goods = data?.products?.nodes ?? []
    const tranding_product = goods.filter((product) => product.type === "SIMPLE")

    return (
        <FrontEnd>
            <section className="trending-product section" style={{ marginTop: "12px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2>Trending Product</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {tranding_product.map((product, index) => {
                            if (index < 8) {
                                return <ProductCart key={product.id} {...product} />
                            }

                        })}
                    </div>
                </div>
            </section>
        </FrontEnd>
    )
}

export default Shop
