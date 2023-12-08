import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { validateUser } from "../../util/validation";
import TableUser from "./TableUser";
import{useDispatch, useSelector} from "react-redux"
import {getValueUser, updateUser} from './../../Redux/slice/userSlice'
const BaiTapFormik = () => {
  // id,ten,giaTien,loai,moTa,mauSac
  // id, ten, email, matKhau, soDienThoai, maLoaiNguoiDung
  const { showError } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const formik = useFormik({
    // initialValues sẽ là object chứa các thuộc tính lưu trữ giá trị từ input của người dùng
    // Lưu ý khi sử dụng formik các thẻ input đầu vào lấy dữ liệu từ người dùng cần có thuộc tính name trùng giá trị với thuộc tính có trong initialValues
    // {
    //   id: '1',
    //   hoTen: 'Khải',
    //   email: 'khai@gmail.com',
    //   maLoaiNguoiDung: 'giám đốc',
    //   matKhau: '123456',
    //   soDienThoai: '0909799761',
    // }
    initialValues: {
      id: "",
      hoTen: "",
      email: "",
      maLoaiNguoiDung: "",
      matKhau: "",
      soDienThoai: "",
    },
    // onSubmit là hàm sẽ chạy khi người dùng kích hoạt sự kiện onSubmit và pass qua hết tất cả dữ liệu đầu vào (validation)
    // tham số values đại diện cho dữ liệu của người dùng sau khi nhập xong
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      dispatch(getValueUser(values));
      resetForm();
    },
    validationSchema: validateUser,
  });

  // handleChange: một hàm giúp lấy dữ liệu của người dùng vào cho formik khi người dùng nhập
  // handleBlur : một hàm giúp kiểm tra việc người dùng thoát khỏi input (có nghĩa là nhập xong bấm ra khỏi input đó)
  // handleSubmit : một hàm giúp chạy sự kiện onSubmit và trả về kết quả người dùng nhập cũng như các xử lí
  // errors : giữ giá trị là các thông báo lỗi cho người dùng khi họ nhập dữ liệu
  // touched giúp kiểm tra xem người dùng có tương tác với input hay chưa
  // values giúp lưu trữ dữ liệu khi người dùng nhập
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setValues,
    resetForm,
  } = formik;

  // console.log(errors);
  // console.log(touched);

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="mb-5 font-bold text-2xl">
        Bài tập dùng formik và yup xử lí form nhập dữ liệu
      </h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="id"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Id
              </label>
              <input
                type="text"
                name="id"
                id="id"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Vui lòng nhập id"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.id}
              />
              {/* dùng toán tử 3 ngôi để kiểm tra khi người dùng click vào input nhập và không tương tác với input đó nữa, nếu có lỗi thì mới thông báo  */}
              {errors.id && touched.id ? (
                <p className="text-red-500 text-xs">{errors.id}</p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="hoTen"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Họ tên
              </label>
              <input
                type="text"
                name="hoTen"
                id="hoTen"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Vui lòng nhập họ tên"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.hoTen}
              />
              {errors.hoTen && touched.hoTen ? (
                <p className="text-red-500 text-xs">{errors.hoTen}</p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Vui lòng nhập email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <p className="text-red-500 text-xs">{errors.email}</p>
              ) : null}
            </div>
            <div>
              <label
                for="maLoaiNguoiDung"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Mã loại người dùng
              </label>
              <select
                id="maLoaiNguoiDung"
                name="maLoaiNguoiDung"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.maLoaiNguoiDung}
              >
                <option selected value="">
                  Chọn
                </option>
                <option value="nhân viên">nhân viên</option>
                <option value="trưởng phòng">trưởng phòng</option>
                <option value="giám đốc">giám đốc</option>
              </select>
              {errors.maLoaiNguoiDung && touched.maLoaiNguoiDung ? (
                <p className="text-red-500 text-xs">{errors.maLoaiNguoiDung}</p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="matKhau"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Mật khẩu
              </label>
              <input
                type="password"
                id="matKhau"
                name="matKhau"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Vui lòng nhập mật khẩu"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.matKhau}
              />
              {errors.matKhau && touched.matKhau ? (
                <p className="text-red-500 text-xs">{errors.matKhau}</p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="soDienThoai"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Số điện thoại
              </label>
              <input
                type="text"
                name="soDienThoai"
                id="soDienThoai"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Vui lòng nhập số điện thoại"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.soDienThoai}
              />
              {errors.soDienThoai && touched.soDienThoai ? (
                <p className="text-red-500 text-xs">{errors.soDienThoai}</p>
              ) : null}
            </div>
            <div>
              <p className="text-xs text-red-500">{showError}</p>
              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded-md"
              >
                Thêm người dùng
              </button>
              <button
                type="button"
                onClick={() => {
                  dispatch(updateUser(values));
                  resetForm();
                }}
                className="bg-orange-500 text-white py-2 px-4 rounded-md"
              >
                Cập nhật người dùng
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <TableUser setValues={setValues} />
      </div>
    </div>
  );
};


export default BaiTapFormik;
