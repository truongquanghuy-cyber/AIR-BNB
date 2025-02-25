import React, { useState, useEffect } from 'react'
import { Router, Routes, Route, NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEye, 
  faUserEdit, 
  faComments, 
  faBed, 
  faUserCircle, 
  faMapMarkerAlt, 
  faSignInAlt, 
  faUserPlus 
} from '@fortawesome/free-solid-svg-icons';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { FormAdd } from './form/formadd'
import { Form } from './form'
import { PhongViewModel } from './components/phongviewmodel'
import { DangNhapView } from './components/dangnhapview'
import { CapNhatNguoiDung } from './components/capnhatnguoidung'
import { BinhLuanViewModel } from './components/binhluanviewmodel'
import { DatPhongViewModel } from './components/datphongviewmodel'
import { ThongTinNguoiDung } from './components/thongtinnguoidung'
import { ViTriViewModel } from './components/vitriviewmodel'
import { TaoTaiKhoan } from './components/taotaikhoan'
import { Error } from './error'
import { DiaDiemGanDay } from './components/diadiemganday';
import { OBatCuDau } from './components/obatcudau';
import { Footer } from './components/footer';

import './index.css'


// const [locations, setLocations] = useState([]);
// import "tailwindcss";
// import 'App.css'
export function App() {




  return (
    <>
      <div className="w-full flex justify-center items-center bg-gray-200">
        <img
          src="./public/img/antonio-janeski-VIGLnzEpOm4-unsplash.jpg"
          alt=""
          className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>
      <header className='flex justify-between items-center h-32 w-full text-center bg-[#0072BD] text-white p-4 bg-opacity-70'>
        <div>
          <NavLink
            to="/form"
            className="w-42 h-32 flex justify-center items-center"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
              alt="Logo"
              className="h-16"
              style={{ width: "auto", maxHeight: "100%", objectFit: "contain" }}
            />
          </NavLink>
        </div>


        <nav className="flex justify-center items-center   m-96 bg-[#0072BD] text-white p-4">
          <ul className="flex items-center space-x-6 list-none m-0 p-0">
            <li >
              <NavLink
                to="/phongview"
                className="text-black hover:text-blue-400 rounded-sm text-nowrap">
                <FontAwesomeIcon icon={faEye}  className="mr-2" />
                Phòng View Model
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/capnhatnguoidung"
                className="text-black hover:text-blue-800 text-nowrap">
                <FontAwesomeIcon icon={faUserEdit} />
                Cập Nhật Người Dùng
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/binhluan"
                className="text-black hover:text-blue-800 text-nowrap">
                <FontAwesomeIcon icon={faComments} />
                Bình Luận
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/datphong"
                className="text-black hover:text-blue-800 text-nowrap">
                <FontAwesomeIcon icon={faBed} />
                Đặt Phòng
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/thongtinnguoidung"
                className="text-black hover:text-blue-800 text-nowrap">
                <FontAwesomeIcon icon={faUserCircle} />
                Thông Tin Người Dùng
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/vitri"
                className="text-black hover:text-blue-800 text-nowrap">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                Vị Trí
              </NavLink>
            </li>
            <li >
              <NavLink
                to="/dangnhap"
                className="text-black hover:text-blue-800 text-nowrap">
                <FontAwesomeIcon icon={faSignInAlt} />
                Đăng Nhập
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/taotaikhoan"
                className="text-black hover:text-blue-800 text-nowrap">
                <FontAwesomeIcon icon={faUserPlus} />
                Tạo Tài Khoản
              </NavLink>
            </li>
          </ul>
        </nav>








      </header>


      <Routes>
        <Route index={true} element={<Form />} />
        <Route path='/phongview' element={<PhongViewModel />}></Route>
        <Route path='/form' element={<Form />}></Route>
        <Route path='/dangnhap' element={<DangNhapView />}></Route>
        <Route path='/capnhatnguoidung' element={<CapNhatNguoiDung />}></Route>
        <Route path='/binhluan' element={<BinhLuanViewModel />}></Route>
        <Route path='/datphong' element={<DatPhongViewModel />}></Route>
        <Route path='/thongtinnguoidung' element={<ThongTinNguoiDung />}></Route>
        <Route path='/vitri' element={<ViTriViewModel />}></Route>
        <Route path='/taotaikhoan' element={<TaoTaiKhoan />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
      
    </>
  )
}







