import('./API/apinguoidung')
export function ThongTinNguoiDung() {
    return (
        <div
            style={{
                backgroundImage: "url('/img/the-chaffins-XSYnPMTNRg0-unsplash.jpg')",
            }}
            className="flex justify-center items-center bg-cover bg-center min-h-screen"
        >
            <div >
                <table>
                    <thead>
                        <tr>
                            <th className="border border-gray-400">Mã Phòng</th>
                            <th className="border border-gray-400">Tên Khách</th>
                            <th className="border border-gray-400">Loại Phòng</th>
                            <th className="border border-gray-400">Ngày Nhận Phòng</th>
                            <th className="border border-gray-400">Ngày Trả Phòng</th>
                            <th className="border border-gray-400">SĐT Khách</th>
                            <th className="border border-gray-400">Tổng Giá</th>
                            <th className="border border-gray-400">Đã Thanh Toán</th>
                            <th className="border border-gray-400">Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td className="border border-gray-400">01</td>
                        <td className="border border-gray-400">Trương Quang Huy</td>
                        <td className="border border-gray-400">Vip</td>
                        <td className="border border-gray-400">20/11/2024</td>
                        <td className="border border-gray-400">22/11/2024</td>
                        <td className="border border-gray-400">0905435172</td>
                        <td className="border border-gray-400">2000$</td>
                        <td className="border border-gray-400">Đã Thanh Toán</td>
                        <td>
                            <button className="px-2 py-1 bg-red-600 text-white rounded">Sửa</button>
                            <button className="px-2 py-1 bg-blue-600 text-white rounded">Xóa</button>
                        </td>
                    </tbody>
                </table>
            </div>
        </div>

    );
}