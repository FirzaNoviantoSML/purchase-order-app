import React from 'react'
import FormOrder from '@/app/components/order/FormOrder'
import OrderStatus from '@/app/components/order/OrderStatus'

const Order  = () => {
  return (
    <div className="grid-flow-col grid grid-cols-3 p-4">
        <div className='col-span-2'>
        <FormOrder/>
        </div>
        <div className='col-span-1'>
        <OrderStatus/>
        </div>
    </div>
  )
}

export default Order 