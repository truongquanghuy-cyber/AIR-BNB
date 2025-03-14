import { useState, useEffect } from "react";

export function CapNhatNguoiDung() {
    const [users, setUsers] = useState([]);

    // Load dữ liệu từ localStorage khi component mount
    useEffect(() => {
        const storedUsers = localStorage.getItem("users");
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
    }, []);

    // Cập nhật localStorage mỗi khi danh sách users thay đổi
    useEffect(() => {
        if (users.length > 0) {
            localStorage.setItem("users", JSON.stringify(users));
        }
    }, [users]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newUser = {
            id: users.length ? users[users.length - 1].id + 1 : 1, // Tự động tăng ID
            tennguoidung: formData.get("tennguoidung"),
            email: formData.get("email"),
            sodienthoai: formData.get("sodienthoai"),
            vaitro: formData.get("vaitro"),
        };

        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers)); // Lưu vào localStorage
        e.target.reset();
    };

    const handleDelete = (id) => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers)); // Cập nhật localStorage
    };

    return (
        <div className="flex flex-col items-center bg-cover bg-center min-h-screen p-6" 
            style={{ backgroundImage: "url('/public/img/hamide-jafari-y0OPFrkeAPo-unsplash.jpg')" }}>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-center text-black">Quản Lý Người Dùng</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <input className="px-2 py-1 rounded border border-gray-600 w-full" type="text" name="tennguoidung" placeholder="Tên Người Dùng" required />
                    <input className="px-2 py-1 rounded border border-gray-600 w-full" type="email" name="email" placeholder="Email" required />
                    <input className="px-2 py-1 rounded border border-gray-600 w-full" type="text" name="sodienthoai" placeholder="Số Điện Thoại" required />
                    <input className="px-2 py-1 rounded border border-gray-600 w-full" type="text" name="vaitro" placeholder="Vai Trò" required />
                </div>
                <button type="submit" className="w-full bg-zinc-800 text-white py-3 px-4 rounded-lg hover:bg-zinc-700 transition">
                    Thêm Người Dùng
                </button>
            </form>

            <table className="mt-6 w-full text-center border-collapse border border-gray-400">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-400 px-4 py-2 text-black">ID</th>
                        <th className="border border-gray-400 px-4 py-2 text-black">Tên Người Dùng</th>
                        <th className="border border-gray-400 px-4 py-2 text-black">Email</th>
                        <th className="border border-gray-400 px-4 py-2 text-black">Số Điện Thoại</th>
                        <th className="border border-gray-400 px-4 py-2 text-black">Vai Trò</th>
                        <th className="border border-gray-400 px-4 py-2 text-black">Thao Tác</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? users.map(user => (
                        <tr key={user.id} className="bg-white">
                            <td className="border border-gray-400 px-4 py-2 text-black">{user.id}</td>
                            <td className="border border-gray-400 px-4 py-2 text-black">{user.tennguoidung}</td>
                            <td className="border border-gray-400 px-4 py-2 text-black">{user.email}</td>
                            <td className="border border-gray-400 px-4 py-2 text-black">{user.sodienthoai}</td>
                            <td className="border border-gray-400 px-4 py-2 text-black">{user.vaitro}</td>
                            <td className="border border-gray-400 px-4 py-2">
                                <button onClick={() => handleDelete(user.id)} 
                                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition">
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan="6" className="text-gray-500 py-4">Không có người dùng nào.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
