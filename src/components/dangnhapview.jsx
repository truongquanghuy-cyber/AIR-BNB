import { useState } from "react";

export function DangNhapView() {
  return (
    <div
      className="bg-[url(/img/ahmed-zt1c95Dv4r8-unsplash.jpg)]  bg-cover bg-center "
      // style={{ backgroundImage: "url('/img/ahmed-zt1c95Dv4r8-unsplash.jpg')" }}
    >
      <form className="p-6 max-w-md w-full mx-auto bg-gray-100 bg-opacity-90 shadow-lg rounded-lg flex flex-col gap-4 items-center text-black">
        <h2 className="text-2xl font-bold mb-4">Đăng Nhập</h2>

        <div className="w-full">
          <label htmlFor="username" className="block text-sm font-medium">
            Tài khoản
          </label>
          <input
            id="username"
            type="text"
            placeholder="Nhập tài khoản"
            className="w-full p-2 mt-1 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div className="w-full">
          <label htmlFor="password" className="block text-sm font-medium">
            Mật khẩu
          </label>
          <input
            id="password"
            type="password"
            placeholder="Nhập mật khẩu"
            className="w-full p-2 mt-1 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <p className="text-sm text-gray-700">
          Nếu bạn quên mật khẩu:{" "}
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Ấn vào đây
          </a>
        </p>

        <div className="flex gap-4 w-full">
          <button className="w-1/2 p-2 bg-gray-500 text-white rounded text-lg hover:bg-gray-600 transition">
            Đăng Nhập
          </button>
          <button className="w-1/2 p-2 bg-blue-500 text-white rounded text-lg hover:bg-blue-600 transition">
            Đăng Ký
          </button>
        </div>
      </form>
    </div>
  );
}
