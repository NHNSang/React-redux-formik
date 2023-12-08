import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const ChiTiet = () => {
    // useParams() trả về tên mà đường dẫn url mình đang đứng
    const params = useParams()
    console.log(params)

    const [giay,setGiay] = useState([])
    useEffect(()=>{
        const promise = axios({
            method: 'GET',
            url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${params.id}`
        });
        promise.then((res)=>{
            console.log(res)
            setGiay(res.data.content)
        }).catch((err)=>{
            console.log(err)
        })
    },[params.id])
    console.log(giay)
    // useLocation() trả về nguyên 1 cụm đường dẫn url mà mình dang đứng
    const location = useLocation()
    console.log(location)
  return (
    <div>
        <img src={giay?.image} alt="" />
    </div>
  )
}

export default ChiTiet