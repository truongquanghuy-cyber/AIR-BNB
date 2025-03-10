import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import("./API/apilogin");

export function DangNhapView() {
  const { passWord, setPassword } = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault(e);
    console.log(e);

    const formData = new FormData(e.target);
    console.log({
      email: formData.get("email"),
      password: formData.get("password"),
    });
  };
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: "url('/img/ahmed-zt1c95Dv4r8-unsplash.jpg')",
      }}
      className="flex justify-center items-center bg-cover bg-center min-h-screen"
    // style={{ backgroundImage: "url('/img/ahmed-zt1c95Dv4r8-unsplash.jpg')" }}
    >
      <form
        className="p-6 max-w-md w-full mx-auto bg-gray-100 bg-opacity-90 shadow-lg rounded-lg flex flex-col gap-4 items-center text-black"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Đăng Nhập</h2>

        <div className="w-full">
          <label htmlFor="username" className="block text-sm font-medium">
            Tài khoản
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
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
          <div className="input-1 relative">
            <input
              value={passWord}
              onChange={(e) => setPassword(e.target.checked)}
              name="password"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Nhập mật khẩu"
              className="w-full p-2 mt-1 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
            />
            {showPassword ? (
              <FontAwesomeIcon
                icon={faEye}
                className="absolute mr-2 top-[17px] right-[15px] cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="absolute mr-2 top-[17px] right-[15px] cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
        </div>
        <p className="text-sm text-gray-700">
          Nếu bạn quên mật khẩu:{" "}
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Ấn vào đây
          </a>
        </p>
        <div className="flex gap-4 w-full">
          <button
            onClick={() => navigate("/auth/login")}
            className={`w-1/2 p-2 bg-gray-500 text-white rounded text-lg hover:bg-gray-600 transition & {email && password ? "active" : ""}`}
            type="submit"
          >
            Đăng Nhập
          </button>
          <button
            onClick={() => navigate("/auth/register")}
            className="w-1/2 p-2 bg-blue-500 text-white rounded text-lg hover:bg-blue-600 transition"
          >
            Đăng Ký
          </button>
        </div>
      </form>
    </div>
  );
}
