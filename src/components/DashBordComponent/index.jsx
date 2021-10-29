import React from 'react'
import OrderTable from './OrderTable'

const DashBordComponent = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="section-title">
                    <h2>Dashbord</h2>
                </div>
            </div>
            <div className="row justify-content-center">
                <OrderTable />
            </div>
        </section>

    )
}

export default DashBordComponent
