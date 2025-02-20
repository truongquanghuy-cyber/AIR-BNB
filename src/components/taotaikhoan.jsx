import { useState } from "react";


// export function TaoTaiKhoan() {
//     return (
//         <>
//             <div>
//                 <h1>Tạo Tài Khoản</h1>
//                 <input type="text" holderplace="Tài khoản"></input>
//                 <input type="password" holderplace="Mật khẩu"></input>
//                 <input type="password" holderplace="Điền lại mật khẩu"></input>

//                 <div>
//                     <button>Đăng Ký</button>
//                     <button>Đăng Nhập</button>
//                 </div>
//             </div>
//         </>
//     );
// };


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
            const response = await fetch("https://airbnbnew.cybersoft.edu.vn/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    TokenCybersoft: "YOUR_CYBERSOFT_TOKEN", // 🔥 Thay bằng token thật
                },
                body: JSON.stringify(user),
            });


            const data = await response.json();


            if (response.ok) {
                setMessage("Đăng ký thành công!");
            } else {
                setMessage(data.message || "Đăng ký thất bại!");
            }
        } catch (error) {
            setMessage("Lỗi kết nối đến server!");
        }


        setLoading(false);
    };


    return (

        <div style={{ backgroundImage: "url('/public/img/tommao-wang-L_5u4iweMGg-unsplash.jpg')" }}>
            <form
                onSubmit={handleSubmit}
                className="p-4 max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg flex flex-col gap-4 items-center padding-top-10 text-black"
            >
                <h2 className="text-xl font-bold mb-4">Đăng Ký</h2>


                <input
                    name="name"
                    onChange={handleChange}
                    value={user.name}
                    type="text"
                    placeholder="Nhập tên"
                    className="w-full p-2 mb-2 border rounded" />
                <input
                    name="email"
                    onChange={handleChange}
                    value={user.email}
                    type="email"
                    placeholder="Nhập email"
                    className="w-full p-2 mb-2 border rounded" />
                <input name="password"
                    onChange={handleChange}
                    value={user.password}
                    type="password"
                    placeholder="Nhập mật khẩu"
                    className="w-full p-2 mb-2 border rounded" />
                <input
                    name="phone"
                    onChange={handleChange}
                    value={user.phone}
                    type="number"
                    placeholder="Nhập số phone"
                    className="w-full p-2 mb-2 border rounded" />
                <input
                    name="birthday"
                    onChange={handleChange}
                    value={user.birthday}
                    type="date"
                    className="w-full p-2 mb-2 border rounded" />


                <select name="gender" onChange={handleChange} value={user.gender} className="w-full p-2 mb-2 border rounded">
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                    <option value="khac">Khác</option>
                </select>

                <div className="flex gap-4">

                    <button type="submit" className="w-1/2 p-2 bg-gray-500 text-white rounded text-lg" disabled={loading}>
                        {loading ? "Đang đăng ký..." : "Đăng ký"}
                    </button>
                    <button type="button" className="w-1/2 p-2 bg-gray-500 text-white rounded text-lg">
                        Đăng nhập
                    </button>

                </div>

                {message && <p className="mt-2 text-center text-red-500">{message}</p>}
            </form>
        </div>
    );
}
