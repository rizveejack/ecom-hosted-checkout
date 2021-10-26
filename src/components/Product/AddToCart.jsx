import { useMutation } from "@apollo/client";
import ADD_TO_CART from "../../apollo/mutation/ADD_TO_CART";
import VIEWER from "../../apollo/query/VIEWER";

const AddToCart = (props) => {

    const [AddCart, { loading, error, data }] = useMutation(ADD_TO_CART, {
        refetchQueries: [VIEWER]
    })
    const AddMyCart = () => {
        if (!loading && !error) {
            AddCart({
                variables: { productId: props.productId }
            })
        }
    }

    return (
        <div className="btn btn-primary" onClick={AddMyCart}>
            <i className="lni lni-cart"></i>Add to Cart{loading && "..."}
        </div>
    )
}

export default AddToCart
