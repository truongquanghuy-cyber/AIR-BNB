import React, { useState } from 'react'
import { Router, Routes, Route, NavLink, Link } from 'react-router-dom'


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
import './index.css'


// import "tailwindcss";
// import 'App.css'
export function App() {




  return (
    <>
      {/* <div className="w-full flex justify-center items-center bg-gray-200">
        <img src="./public/img/antonio-janeski-VIGLnzEpOm4-unsplash.jpg"
          alt=""
          className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div> */}
      <header className='flex justify-between items-center h-32 w-full text-center bg-black bg-opacity-70'>
        <div>
          <NavLink to="/form" className="text-blue-500 hover:text-red-700 w-full text-nowrap text-3xl bg-red-400" >Trang Chủ</NavLink>
        </div>


        <nav className="flex justify-center items-center p-4 bg-gray-100 m-96 bg-pink-400">
          <ul className="flex items-center space-x-6 list-none m-0 p-0">
            <li >
              <NavLink to="/phongview" className="text-blue-400 hover:text-blue-400 rounded-sm text-nowrap">
                Phòng View Model
              </NavLink>
            </li>
            <li>
              <NavLink to="/capnhatnguoidung" className="text-blue-600 hover:text-blue-800 text-nowrap">
                Cập Nhật Người Dùng
              </NavLink>
            </li>
            <li>
              <NavLink to="/binhluan" className="text-blue-600 hover:text-blue-800 text-nowrap">
                Bình Luận
              </NavLink>
            </li>
            <li>
              <NavLink to="/datphong" className="text-blue-600 hover:text-blue-800 text-nowrap">
                Đặt Phòng
              </NavLink>
            </li>
            <li>
              <NavLink to="/thongtinnguoidung" className="text-blue-600 hover:text-blue-800 text-nowrap">
                Thông Tin Người Dùng
              </NavLink>
            </li>
            <li>
              <NavLink to="/vitri" className="text-blue-600 hover:text-blue-800 text-nowrap">
                Vị Trí
              </NavLink>
            </li>
            <li >
              <NavLink to="/dangnhap" className="text-blue-600 hover:text-blue-800 text-nowrap">
                Đăng Nhập
              </NavLink>
            </li>
            <li>
              <NavLink to="/taotaikhoan" className="text-blue-600 hover:text-blue-800 text-nowrap">
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







