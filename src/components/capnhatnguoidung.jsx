export function CapNhatNguoiDung() {
    return (
        <div className="container mx-auto p-6 bg-white shadow-lg "
        style={{ backgroundImage: "url('public/img/hamide-jafari-y0OPFrkeAPo-unsplash.jpg')" }}>
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 text-black">Quản Lý Người Dùng</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <input
                    className="px-2 py-1 rounded border border-gray-600 block w-full"
                    type="text"
                    name="tennguoidung"
                    placeholder="Tên Người Dùng" />
                <br />
                <input
                    className="px-2 py-1 rounded border border-gray-600 block w-full"
                    type="text"
                    name="email"
                    placeholder="Email" />
                <br />
                <input
                    className="px-2 py-1 rounded border border-gray-600 block w-full"
                    type="text"
                    name="sodienthoai"
                    placeholder="Số Điện Thoại" />
                <br />
                <input
                    className="px-2 py-1 rounded border border-gray-600 block w-full"
                    type="text"
                    name="vaitro"
                    placeholder="Vai Trò" />
                    <br />
                <button className="w-full text-xl text-nowrap bg-zinc-800 text-white py-3 px-4 rounded-lg hover:bg-zinc-700 transition-colors ">Thêm Người Dùng</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th className="border border-gray-400 px-4 py-2 text-black">ID</th>
                        <th className="border border-gray-400 px-4 py-2 text-black">Tên Người Dùng</th>
                        <th className="border border-gray-400 px-4 py-2 text-black">Email</th>
                        <th className="border border-gray-400 px-4 py-2 text-black">Số Điện Thoại</th>
                        <th className="border border-gray-400 px-4 py-2 text-black">Vai Trò</th>
                        <th className="border border-gray-400 px-4 py-2 text-black">Thao Tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2 text-black">ID</td>
                        <td className="border border-gray-400 px-4 py-2 text-black">Tên Người Dùng</td>
                        <td className="border border-gray-400 px-4 py-2 text-black">Email</td>
                        <td className="border border-gray-400 px-4 py-2 text-black">Số Điện Thoại</td>
                        <td className="border border-gray-400 px-4 py-2 text-black">Vai Trò</td>
                        <td className="border border-gray-400 px-4 py-2">
                            <button className="w-full text-xl text-nowrap bg-zinc-800 text-white py-3 px-4 rounded-lg hover:bg-zinc-700 transition-colors ">Sửa</button>
                            <button className="w-full text-xl text-nowrap bg-zinc-800 text-white py-3 px-4 rounded-lg hover:bg-zinc-700 transition-colors ">Xóa</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}