import { createBrowserRouter } from "react-router-dom"
import { Form } from "../form"
import { PhongViewModel } from "../components/phongviewmodel"
import { DangNhapView } from "../components/dangnhapview"
import { CapNhatNguoiDung } from "../components/capnhatnguoidung"
import { BinhLuanViewModel } from "../components/binhluanviewmodel"
import { DatPhongViewModel } from "../components/datphongviewmodel"
import { ThongTinNguoiDung } from "../components/thongtinnguoidung"
import { ViTriViewModel } from "../components/vitriviewmodel"
import { TaoTaiKhoan } from "../components/taotaikhoan"
import { Error } from "../error"
import Layout from "../Layout"

// Define the router with all routes
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Form />,
      },
      {
        path: "phongview",
        element: <PhongViewModel />,
      },
      {
        path: "form",
        element: <Form />,
      },
      {
        path: "dangnhap",
        element: <DangNhapView />,
      },
      {
        path: "capnhatnguoidung",
        element: <CapNhatNguoiDung />,
      },
      {
        path: "binhluan",
        element: <BinhLuanViewModel />,
      },
      {
        path: "datphong",
        element: <DatPhongViewModel />,
      },
      {
        path: "thongtinnguoidung",
        element: <ThongTinNguoiDung />,
      },
      {
        path: "vitri",
        element: <ViTriViewModel />,
      },
      {
        path: "taotaikhoan",
        element: <TaoTaiKhoan />,
      },
      // Auth routes
      {
        path: "auth",
        children: [
          {
            path: "login",
            element: <DangNhapView />,
          },
          {
            path: "register",
            element: <TaoTaiKhoan />,
          },
        ],
      },
    ],
  },
])

export default router

