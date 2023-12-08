// câu lệnh tạo một cấu trúc slice nhanh : rxslice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  arrUser: [],
  showError: "",
};

const userSlice = createSlice({
  name: "user",
  // initialState là dữ liệu mặc định của slice
  initialState,
  reducers: {
    // là nơi tạo các hàm giúp xử lí thay đổi dữ liệu cho slice
    getValueUser: (state, action) => {
      console.log(state);
      // action là nhận dữ liệu từ component, bên trong cấu trúc gồm 2 thuộc tính, type được cấu hình dựa trên name của slice và tên phương thức
      // payload là dữ liệu gửi lên khi gọi chạy phương thức ở dưới component
      console.log(action);

      // kiểm tra xem id người dùng đã có hay chưa, nếu chưa sẽ thêm vào và có rồi sẽ thông báo cho người dùng
      const user = state.arrUser.find((item) => {
        return item.id == action.payload.id;
      });
      if (!user) {
        state.arrUser.push(action.payload);
        state.showError = "";
      } else {
        state.showError = "Đã có người dùng trong dữ liệu";
      }
    },
    removeUser: (state, action) => {
      console.log(action);
      // xoá : cần id để biết xoá ai
      // duyệt mảng để tìm phần tử cần xoá nằm ở vị trí nào trong mảng
      // dùng hàm splice để xoá
      const index = state.arrUser.findIndex((item) => {
        //id = 5 , action.payload =5
        // payload : {
        //   id: '',
        //   hoTen: '',
        //   email: '',
        //   maLoaiNguoiDung: '',
        //   matKhau: '',
        //   soDienThoai: '',
        // }
        return item.id == action.payload;
      });
      if (index != -1) {
        state.arrUser.splice(index, 1);
      }
    },
    updateUser: (state, action) => {
      console.log(action);
      // cập nhật : có id của người dùng
      // duyệt mảng để tìm vị trí của phần tử cần cập nhật
      // update lại dữ liệu cho phần tử cũ
      const index = state.arrUser.findIndex((item) => {
        return item.id == action.payload.id;
      });
      if (index != -1) {
        state.arrUser[index] = action.payload;
      }
    },
  },
});

export const {getValueUser,removeUser,updateUser} = userSlice.actions

export default userSlice.reducer