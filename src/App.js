import { Route, Routes } from "react-router-dom";
import DemoFunction from "./Component/DemoFunctionComponent/DemoFunction";
import TemplateDemo from "./Templates/DemoReactRouter/TemplateDemo";
import ListGiay from "./Component/DemoFunctionComponent/BaiTapReactRouter/ListGiay";
import BaiTapReactRouter from "./Component/DemoFunctionComponent/BaiTapReactRouter/BaiTapReactRouter";
import DemoUngDung from "./Component/DemoFunctionComponent/BaiTapReactRouter/DemoUngDung";
import ChiTiet from "./Component/DemoFunctionComponent/BaiTapReactRouter/ChiTiet";
import BaiTapFormik from "./Component/BaiTapForMik/BaiTapFormik";

function App() {
  return (
    // <div className="App">
    //   <h1 className="text-red-500">Hello</h1>
    //   <DemoFunction></DemoFunction>
    // </div>

    // Cách dùng routers
    // <>
    //   <Routes>
    //     {/* Khi đi vào trang chủ sẽ hiển thị DemoComponent */}
    //     <Route element={<DemoFunction></DemoFunction>} path="/home"></Route>
    //   </Routes>
    // </>

    <>
    <Routes>
      <Route element={<TemplateDemo></TemplateDemo>} path="/">
        {/* Khí người dùng truy cập vào đúng path Route cha sẽ tự hiện thị component có thuộc tính index lên luôn */}
        <Route element={<BaiTapReactRouter></BaiTapReactRouter>} index></Route>
        <Route element={<DemoUngDung></DemoUngDung>} path="/ung-dung"></Route>

        {/* Tạo ra route có truyền id lên path(url) để thực hiện quá trình kiểm tra xem người dùng muốn xem chi tiết sản phẩm nào */}
        <Route element={<ChiTiet></ChiTiet>} path="/detail/:id"></Route>
        <Route element={<BaiTapFormik></BaiTapFormik>} path="cum-rap"></Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;
