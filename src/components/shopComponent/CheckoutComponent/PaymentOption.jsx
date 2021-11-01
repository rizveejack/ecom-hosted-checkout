import { CardElement } from "@stripe/react-stripe-js"


const PaymentOption = () => {
    return (
        <div className="d-block my-3">
            <h4 className="mb-3">Payment Details</h4>
            <div className="card">
                <div className="card-body">
                    <CardElement options={{
                        hidePostalCode: true, // We'll be sending up the postal ourselves
                    }} />
                </div>
            </div>
        </div>
    )
}

export default PaymentOption
