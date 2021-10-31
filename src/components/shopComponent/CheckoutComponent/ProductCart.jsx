import Image from "next/image"
import useRedox from "../../../hook/useRedox"

const ProductCart = () => {
    const { gstate } = useRedox()
    const cartItem = gstate?.data?.cart?.contents?.nodes ?? []
    const cartTotal = gstate?.data?.cart ?? {}

    return (
        <table className="table text-center">
            <thead className="bg-primary text-white">
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>

                </tr>
            </thead>
            <tbody>

                {cartItem.map((product) => {
                    return (
                        <tr key={product.key}>
                            <td>
                                <Image
                                    width={40}
                                    height={40}
                                    layout="fixed"
                                    src={product?.product?.node?.image?.sourceUrl ?? "/images/placeholder.jpg"}
                                    alt="#" />
                            </td>
                            <td>
                                {product?.quantity}
                            </td>
                            <td>
                                {product?.total}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td className=""></td>
                    <td>Subtotal</td>
                    <td>{cartTotal?.subtotal}</td>
                </tr>
                <tr>
                    <td className=""></td>
                    <td>Shiping</td>
                    <td>{cartTotal?.shippingTotal}</td>
                </tr>
                <tr>
                    <td className=""></td>
                    <td className="h6">Total</td>
                    <td className="display-6">{cartTotal?.total}</td>
                </tr>
            </tfoot>
        </table>
    )
}

export default ProductCart
