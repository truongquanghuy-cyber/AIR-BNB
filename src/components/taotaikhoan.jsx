import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { data } from "react-router-dom";

export function TaoTaiKhoan() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        birthday: "",
        gender: "male",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    
    const { name, email, password, phone, birthday} = user;
    const formnik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            phone: "",
            birthday: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Vui lòng nhập tên"),
            email: Yup.string().email("Email không hợp lệ").required("Vui lòng nhập email"),
            password: Yup.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự").required("Vui lòng nhập mật khẩu"),
            phone: Yup.string().required("Vui lòng nhập số điện thoại"),
            birthday: Yup.string().required("Vui lòng nhập ngày sinh"),
        }),
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
    
        try {
            const response = await axios.post(
                "https://airbnbnew.cybersoft.edu.vn/api/auth/signup", // URL đặt đúng vị trí
                user, // Dữ liệu cần gửi
                {
                    headers: {
                        "Content-Type": "application/json",
                        TokenCybersoft: "YOUR_CYBERSOFT_TOKEN", // 🔥 Thay thế bằng token thật
                    },
                }
            );
    
            setMessage("✅ Đăng ký thành công!");
            setUser({
                name: "",
                email: "",
                password: "",
                phone: "",
                birthday: "",
                gender: "male",
            });
        } catch (error) {
            setMessage("❌ Lỗi: " + (error.response?.data?.message || "Đăng ký thất bại!"));
        }
    
        setLoading(false);
    };
    
    return (
        <div
            style={{
                backgroundImage: "url('/public/img/tommao-wang-L_5u4iweMGg-unsplash.jpg')",
            }}
            className=" flex justify-center items-center bg-cover bg-center"
        >
            <form
                onSubmit={handleSubmit}
                className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg flex flex-col gap-4 items-center text-black"
            >
                <h2 className="text-2xl font-bold">Đăng Ký</h2>

                <input
                    name="name"
                    onChange={handleChange}
                    value={user.name}
                    type="text"
                    placeholder="Nhập tên"
                    className="w-full p-3 border rounded"
                />
                <input
                    name="email"
                    onChange={handleChange}
                    value={user.email}
                    type="email"
                    placeholder="Nhập email"
                    className="w-full p-3 border rounded"
                />
                <input
                    name="password"
                    onChange={handleChange}
                    value={user.password}
                    type="password"
                    placeholder="Nhập mật khẩu"
                    className="w-full p-3 border rounded"
                />
                <input
                    name="phone"
                    onChange={handleChange}
                    type="text"
                    value={user.phone}
                    placeholder="Nhập số điện thoại"
                    className="w-full p-3 border rounded"
                />
                <input
                    name="birthday"
                    onChange={handleChange}
                    value={user.birthday}
                    type="date"
                    className="w-full p-3 border rounded"
                />

                <select name="gender" onChange={handleChange} value={user.gender} className="w-full p-3 border rounded">
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                    <option value="khac">Khác</option>
                </select>

                <div className="flex gap-4 w-full">
                    <button type="submit" className="flex-1 p-3 bg-blue-500 text-white rounded text-lg" disabled={loading}>
                        {loading ? "Đang đăng ký..." : "Đăng ký"}
                    </button>
                    <button type="button" className="flex-1 p-3 bg-gray-500 text-white rounded text-lg">
                        Đăng nhập
                    </button>
                </div>

                {message && <p className="mt-2 text-center text-red-500">{message}</p>}
            </form>
        </div>
    );
}
