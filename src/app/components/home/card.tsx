import React from 'react'

const Card = ({text,idr}:{text:string,idr:number}) => {
  return (
    <div className="rounded-md border-2 text-black bg-white px-4 w-72 p-4">
        <div className="mb-8">{text}</div>
        <div className="font-bold text-4xl" >IDR {idr}</div>
    </div>
  )
}

export default Card