import { useQuery } from "@apollo/client";
import Moment from "moment";
import ORDER_INFO from "../../apollo/query/ORDER_INFO";
import useRedox from "../../hook/useRedox";

const OrderTable = () => {
    const { gstate } = useRedox()
    const CustomerId = gstate?.data?.viewer?.id
    const { loading, error, data } = useQuery(ORDER_INFO, {
        variables: {
            id: CustomerId
        }
    })
    const orders = data?.customer?.orders?.edges ?? []



    return (
        <div className="col-lg-8">
            <table className="table">
                <thead className="bg-dark text-white">
                    <tr>
                        <th scope="col">#OrderId</th>
                        <th scope="col">OrderDate</th>
                        <th scope="col">Payment Method</th>
                        <th scope="col">Total</th>
                        <th scope="col">OrderStatus</th>
                    </tr>
                </thead>
                <tbody>

                    {!loading && orders.map((order) => {
                        return (
                            <tr key={order?.node.id}>
                                <td>
                                    <div className="badge rounded-pill bg-warning">
                                        #{order.node.orderNumber}
                                    </div>
                                </td>
                                <td>{Moment(order.node.date).format('d MMM y')}</td>
                                <td>{order.node.paymentMethodTitle}</td>
                                <td>{order.node.total}</td>
                                <td>
                                    <span className="badge rounded-pill bg-success">
                                        {order.node.status}
                                    </span>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default OrderTable
