import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faUserEdit,
  faComments,
  faBed,
  faUserCircle,
  faMapMarkerAlt,
  faSignInAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

import { DiaDiemGanDay } from "./components/diadiemganday";
import { OBatCuDau } from "./components/obatcudau";
import { Footer } from "./components/footer";
import "./index.css";

// Layout component that includes the header and common elements
const Layout = () => {
  const pathName = window.location.pathname;
  const pathArr = pathName.split("/");
  return (
    <>
      <div>
        <div className="w-full flex justify-center items-center bg-gray-200">
          <img
            src="/img/antonio-janeski-VIGLnzEpOm4-unsplash.jpg"
            alt=""
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <header className="flex justify-between items-center h-32 w-full text-center bg-[#0072BD] text-white p-4 bg-opacity-70">
          <div>
            <a href="/" className="w-42 h-32 flex justify-center items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
                alt="Logo"
                className="h-16"
                style={{
                  width: "auto",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </a>
          </div>

          <nav className="flex justify-center items-center m-96 bg-[#0072BD] text-white p-4">
            <ul className="flex items-center space-x-6 list-none m-0 p-0">
              <li>
                <a
                  href="/phongview"
                  className="text-black hover:text-blue-400 rounded-sm text-nowrap"
                >
                  <FontAwesomeIcon icon={faEye} className="mr-2" />
                  Phòng View Model
                </a>
              </li>
              <li>
                <a
                  href="/capnhatnguoidung"
                  className="text-black hover:text-blue-800 text-nowrap"
                >
                  <FontAwesomeIcon icon={faUserEdit} className="mr-2" />
                  Cập Nhật Người Dùng
                </a>
              </li>
              <li>
                <a
                  href="/binhluan"
                  className="text-black hover:text-blue-800 text-nowrap"
                >
                  <FontAwesomeIcon icon={faComments} className="mr-2" />
                  Bình Luận
                </a>
              </li>
              <li>
                <a
                  href="/datphong"
                  className="text-black hover:text-blue-800 text-nowrap"
                >
                  <FontAwesomeIcon icon={faBed} className="mr-2" />
                  Đặt Phòng
                </a>
              </li>
              <li>
                <a
                  href="/thongtinnguoidung"
                  className="text-black hover:text-blue-800 text-nowrap"
                >
                  <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
                  Thông Tin Người Dùng
                </a>
              </li>
              <li>
                <a
                  href="/vitri"
                  className="text-black hover:text-blue-800 text-nowrap"
                >
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  Vị Trí
                </a>
              </li>
              <li>
                <a
                  href="/auth/login"
                  className="text-black hover:text-blue-800 text-nowrap"
                >
                  <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                  Đăng Nhập
                </a>
              </li>
              <li>
                <a
                  href="/auth/register"
                  className="text-black hover:text-blue-800 text-nowrap"
                >
                  <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                  Tạo Tài Khoản
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      {/* Main content area */}
      <main className="container mx-auto p-4">
        {/* Outlet renders the current route's element */}
        <Outlet />
      </main>
      {/* Nếu là trang đăng nhập/đăng ký thì ẩn các phần dưới, chỉ chừa lại Header */}
      {!pathArr.includes("auth") && (
        <>
          <br />
          <DiaDiemGanDay />
          <br />
          <OBatCuDau />
          <br />
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
