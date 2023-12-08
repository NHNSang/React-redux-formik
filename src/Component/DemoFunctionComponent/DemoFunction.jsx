// Câu lệnh rafce giúp khởi tạo function component
import React, { useState } from "react";
import DemoProps from "./DemoProps";

const DemoFunction = () => {
  // demo state trong function compornent
  // tạo state giúp lưu trữ giá trị số, và tạo setState nhưng bên rafce thì chỉ cần đặt tên và thêm set và thêm hàm useState()
  const [number, setNumber] = useState(10);
  // tạo state lưu trữ thông tin của sv trường đại học
  const [sinhVien, setSinhVien] = useState({
    hoTen: "Quyên",
    tuoi: 26,
    lop: "BCS09",
  });

  return (
    <div className="container mx-auto">
        
      <h2>DemoFunction</h2>
      
      <DemoProps number = {number} setNumber = {setNumber}
      ></DemoProps>
      <div>
        <h3>Thôgn tin sinh viên</h3>
        <p>{sinhVien.hoTen}</p>
        <p>{sinhVien.tuoi}</p>
        <p>{sinhVien.lop}</p>
        <button
          onClick={() => {
            setSinhVien({
                hoTen: "Sang",
                tuoi: 26,
                lop: "BCS09",
            });
          }}
          className="py-2 px-5 bg-green-500 text-white rounded-lg"
        >
          Đổi tên sinh viên
        </button>
      </div>
    </div>
  );
};

export default DemoFunction;
