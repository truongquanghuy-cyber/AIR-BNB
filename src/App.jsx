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
import { Error } from './error'
import './index.css'

// import "tailwindcss";
// import 'App.css'
export function App() {


  return (
    <>
      <header >


        <NavLink to="/form" className="text-red-500 hover:text-red-700">Trang Chủ</NavLink>


        <NavLink to="/phongview">Phòng View Model</NavLink>


        <NavLink to="/dangnhap">Đăng Nhập</NavLink>


        <NavLink to="/capnhatnguoidung">Cập Nhật Người Dùng</NavLink>


        <NavLink to="/binhluan">Bình Luận</NavLink>


        <NavLink to="/datphong">Đăt Phòng</NavLink>


        <NavLink to="/thongtinnguoidung">Thông Tin Người Dùng</NavLink>


        <NavLink to="/vitri">Vị Trí</NavLink>



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
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </>
  )
}


