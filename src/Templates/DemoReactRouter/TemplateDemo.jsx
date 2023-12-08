import React from 'react'
import HeaderDemo from '../../Component/HeaderDemo/HeaderDemo'
import Footer from '../../Component/FooterDemo/Footer'
import { Outlet } from 'react-router-dom'

const TemplateDemo = () => {
    // set up 1 template dành cho tất cả trang
    // Phái trên là header, giữa là nội dung các component, dưới là footer
  return (
    <div>
        <HeaderDemo></HeaderDemo>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default TemplateDemo