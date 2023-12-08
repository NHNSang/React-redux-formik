import React from 'react'
import { Link } from 'react-router-dom'

const ListGiay = ({lstGiay}) => {
  return (
    <div className='grid grid-cols-4'>
      {lstGiay.map(()=>{

      })}
        {lstGiay.map((giay,index)=>{
          return(
            <div key={index}>
            <img src={giay.image}></img>
            <div>
                <h4>{giay.name}</h4>
                <p>{giay.price}</p>
            </div>
            <Link to={`/detail/${giay.id}`}>Xem chi tiết</Link>
          </div>
          )
        })}
    </div>
  )
}

export default ListGiay