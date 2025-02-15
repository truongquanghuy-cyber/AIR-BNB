import { useState } from "react";

export function DangNhapView() {

  return (
    <form className="p-4 max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg flex flex-col gap-4 items-center text-black">
        <h2 className="text-xl font-bold mb-4">Đăng Nhập</h2>
        <input
          type="text"
          placeholder="Tài khoản"
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          className="w-full p-2 mb-2 border rounded"
        />
        <h2 className="mb-4">
          Nếu bạn quên mật khẩu:{" "}
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Ấn vào đây
          </a>
        </h2>
        <div className="flex gap-4">
          <button className="w-full p-2 bg-gray-500 text-white rounded">
            Đăng Nhập
          </button>
          <button className="w-full p-2 bg-blue-500 text-white rounded">
            Đăng ký
          </button>
        </div>
    </form>
  );
}

}
