import React from 'react'

const OrderStatus = () => {
  return (
    <div className="p-4">
        <div className="flex justify-start gap-4 border-b-2 pb-2">
            <div className="bg-red-300 text-red-700 p-4 rounded-md">
            P
            </div>
            <div>
            <div>
                Order Number
            </div>
            <div>
                DRAFT
            </div>
            </div>
        </div>
        <div className="">
        Order Status
        </div>
        <div className="border-b-2" >
        <ul data-content="✓" className="steps steps-vertical">
        <li data-content="✓" className="step step-primary">Draft</li>
        <li data-content="✓" className="step step-primary">Awaiting Response</li>
        <li data-content="✓" className="step">Processing</li>
        <li data-content="✓" className="step">Pending Final Payment</li>
        <li data-content="✓" className="step">Complete</li>
        </ul>
        </div>
        <div className="py-4">
        <button className="btn btn-success text-white w-full rounded-3xl">Submit</button>
        <h1 className="text-red-600 font-bold text-center mt-4">
            Delete Draft Order
        </h1>
        </div>
    </div>
  )
}

export default OrderStatus