"use client"

import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { signup } from "./API/apilogin"

export function TaoTaiKhoan() {
  const [loading, setLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      birthday: "",
      gender: "male",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "Tên phải có ít nhất  ký tự")
        .max(50, "Tên không được vượt5quá 50 ký tự")
        .required("Vui lòng nhập tên"),
      email: Yup.string().email("Email không hợp lệ").required("Vui lòng nhập email"),
      password: Yup.string()
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
          "Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt",
        )
        .required("Vui lòng nhập mật khẩu"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Mật khẩu không khớp")
        .required("Vui lòng xác nhận mật khẩu"),
      phone: Yup.string()
        .matches(/^(0|\+84)(\d{9,10})$/, "Số điện thoại không hợp lệ (phải là số Việt Nam)")
        .required("Vui lòng nhập số điện thoại"),
      birthday: Yup.date()
        .max(new Date(new Date().setFullYear(new Date().getFullYear() - 18)), "Bạn phải đủ 18 tuổi")
        .required("Vui lòng chọn ngày sinh"),
      gender: Yup.string()
        .oneOf(["male", "female", "khac"], "Giới tính không hợp lệ")
        .required("Vui lòng chọn giới tính"),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true)
        // Đảm bảo API signup được cập nhật để nhận tất cả các trường
        const response = await signup(
          values.email,
          values.password,
          values.name,
          values.phone,
          values.birthday,
          values.gender,
        )
        console.log("Đăng ký thành công:", response)
        // Xử lý sau khi đăng ký thành công (ví dụ: chuyển hướng)
      } catch (error) {
        console.error("Lỗi đăng ký:", error)
        // Xử lý lỗi đăng ký
      } finally {
        setLoading(false)
      }
    },
  })

  return (
    <div
      style={{
        backgroundImage: "url('/img/tommao-wang-L_5u4iweMGg-unsplash.jpg')",
      }}
      className="flex justify-center items-center bg-cover bg-center min-h-screen"
    >
      <form
        onSubmit={formik.handleSubmit}
        className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg flex flex-col gap-4 items-center text-black"
      >
        <h2 className="text-2xl font-bold">Đăng Ký</h2>

        <div className="w-full">
          <input
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            type="text"
            placeholder="Nhập tên"
            className="w-full p-3 border rounded"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
          )}
        </div>

        <div className="w-full">
          <input
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            type="email"
            placeholder="Nhập email"
            className="w-full p-3 border rounded"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          )}
        </div>

        <div className="w-full">
          <input
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            type="password"
            placeholder="Nhập mật khẩu"
            className="w-full p-3 border rounded"
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
          )}
        </div>

        <div className="w-full">
          <input
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            type="password"
            placeholder="Xác nhận mật khẩu"
            className="w-full p-3 border rounded"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</p>
          )}
        </div>

        <div className="w-full">
          <input
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            type="text"
            placeholder="Nhập số điện thoại"
            className="w-full p-3 border rounded"
          />
          {formik.touched.phone && formik.errors.phone && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
          )}
        </div>

        <div className="w-full">
          <label htmlFor="birthday" className="block text-sm text-gray-600 mb-1">
            Ngày sinh
          </label>
          <input
            id="birthday"
            name="birthday"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.birthday}
            type="date"
            className="w-full p-3 border rounded"
          />
          {formik.touched.birthday && formik.errors.birthday && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.birthday}</p>
          )}
        </div>

        <div className="w-full">
          <label htmlFor="gender" className="block text-sm text-gray-600 mb-1">
            Giới tính
          </label>
          <select
            id="gender"
            name="gender"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gender}
            className="w-full p-3 border rounded"
          >
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
            <option value="khac">Khác</option>
          </select>
          {formik.touched.gender && formik.errors.gender && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.gender}</p>
          )}
        </div>

        <div className="flex gap-4 w-full mt-4">
          <button
            type="submit"
            className="flex-1 p-3 bg-blue-500 text-white rounded text-lg hover:bg-blue-600 transition-colors"
            disabled={loading || !formik.isValid}
          >
            {loading ? "Đang đăng ký..." : "Đăng ký"}
          </button>
          <button
            type="button"
            className="flex-1 p-3 bg-gray-500 text-white rounded text-lg hover:bg-gray-600 transition-colors"
        
          >Quên mật khẩu
          </button>
        </div>
      </form>
    </div>
  )
}

