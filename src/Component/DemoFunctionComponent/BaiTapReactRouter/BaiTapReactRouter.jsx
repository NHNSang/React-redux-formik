import React, { useEffect, useState } from 'react'
import ListGiay from './ListGiay'
import axios from 'axios'

const BaiTapReactRouter = () => {
  // hook useEffect
  // useEffect sử dụng cho 3 trạng thái chính của component là mounting , updating, unmounting
  // Đầu tiên: quá trình mounting, sử dụng trên useEffect ta sử dụng 2 tham số, 1 là hàm sẽ chạy, 2 là array rỗng
  // Sau đó t gọi state api của giày và lưu ý trong useState() phải thêm useState([]) để có thể chạy hàm .map() và render
  const [lstGiay,setlstGiay] = useState([])
  useEffect(()=>{
    // Sử dụng gọi dữ liệ về và rander lên giao diện trong lần đầu tiên render component
    // Sau đó cái đặt npm i axios
    let promise = axios({
      method: 'GET',
      url: 'https://shop.cyberlearn.vn/api/Product'
    });
    promise.then((res)=>{
      console.log(res)
      setlstGiay(res.data.content)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  console.log(lstGiay)
  return (
    <div>
        <h1>Bài tập giỏ hàng giày trong React Router</h1>
        <ListGiay lstGiay={lstGiay}></ListGiay>
    </div>
  )
}

export default BaiTapReactRouter