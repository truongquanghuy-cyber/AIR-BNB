import { useState, useEffect } from "react";

// import { useNavigate } from "react-router-dom";
// import queryString from "query-string";
import("./API/apidatphong")

export function DatPhongViewModel() {
    const [datPhongs, setDatPhongs] = useState(() => {
        const storedBookings = localStorage.getItem("datphongs");
        return storedBookings ? JSON.parse(storedBookings) : [];
    });
    const [editBooking, setEditBooking] = useState(null);
    useEffect(() => {
        localStorage.setItem("datphongs", JSON.stringify(datPhongs));
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const newBooking = {
            id: editBooking ? editBooking.id : datPhongs.length + 1,
            maphong: Number(formData.get("maphong")),
            name: formData.get("name"),
            loaiphong: formData.get("loaiphong"),
            ngaynhanphong: formData.get("ngaynhanphong"),
            ngaytraphong: formData.get("ngaytraphong"),
            sokhach: Number(formData.get("sokhach")),
            tonggia: Number(formData.get("tonggia")),
            dathanhtoan: formData.get("dathanhtoan") ? "Đã Thanh Toán" : "Chưa Thanh Toán",
        };

        if (editBooking) {
            setDatPhongs(datPhongs.map((b) => (b.id === editBooking.id ? newBooking : b)));
            setEditBooking(null);
        } else {
            setDatPhongs([...datPhongs, newBooking]);
        }

        e.target.reset(); // reset form sau khi đặt phòng thành công

    }
    const handleDelete = (id) => {
        setDatPhongs(datPhongs.filter(booking => booking.id !== id));
    }
    const handleEdit = (id) => {
        const booking = datPhongs.find((b) => b.id === id);
        setEditBooking(booking);
    }
   
    return (
        <div
            className="container mx-auto p-6 bg-white shadow-lg rounded-l w-full "
            style={{ backgroundImage: "url('public/img/prydumano-design-vYlmRFIsCIk-unsplash.jpg')" }}>
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 ">
                Danh Sách Đặt Phòng
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <form onSubmit={handleSubmit}>
                    <input className="px-2 py-1 rounded border border-gray-600 block w-full" type="number" name="maphong" placeholder="Mã Phòng" required defaultValue={editBooking?.maphong ?? ""} />
                    <br />
                    <input className="px-2 py-1 rounded border border-gray-600 block w-full" type="text" name="name" placeholder="Tên Khách" required defaultValue={editBooking?.name || ""} />
                    <br />

                    <input className="px-2 py-1 rounded border border-gray-600 block w-full" type="text" name="loaiphong" placeholder="Loại Phòng" required defaultValue={editBooking?.loaiphong || ""} />
                    <br />
                    <div>
                        <h2 className="text-black">Ngày Nhận Phòng</h2>
                        <input className="px-2 py-1 rounded border border-gray-600 block w-full text-black" type="date" name="ngaynhanphong" required defaultValue={editBooking?.ngaynhanphong || ""} />
                    </div>

                    <br />
                    <div>
                        <h2 className="text-black">Ngày trả phòng</h2>
                        <input className="px-2 py-1 rounded border border-gray-600 block w-full text-black" type="date" name="ngaytraphong" required defaultValue={editBooking?.ngaytraphong || ""} />
                    </div>
                    <br />

                    <input className="px-2 py-1 rounded border border-gray-600 block w-fulld" type="number" name="sokhach" placeholder="Số Khách" required defaultValue={editBooking?.sokhach || ""} />
                    <br />
                    <input className="px-2 py-1 rounded border border-gray-600 block w-full" type="number" name="tonggia" placeholder="Tổng Giá" required defaultValue={editBooking?.tonggia || ""} />
                    <br />
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" name="dathanhtoan" id="dathanhtoan" className="w-4 h-4" defaultChecked={editBooking?.dathanhtoan === "Đã Thanh Toán"} />
                        <label htmlFor="dathanhtoan" className="text-gray-700 font-medium text-black">Đã Thanh Toán</label>
                    </div>

                    <br />
                    <button className="w-full text-xl text-nowrap bg-zinc-800 text-white py-3 px-4 rounded-lg hover:bg-zinc-700 transition-colors ">
                        {editBooking ? "Cập Nhật" : "Đặt Phòng"}
                    </button>
                </form>

            </div>
            <table>
                <thead>
                    <tr>
                        <th className="border border-gray-400 text-black">Mã Phòng</th>
                        <th className="border border-gray-400 text-black">Tên Khách</th>
                        <th className="border border-gray-400 text-black">Loại Phòng</th>
                        <th className="border border-gray-400 text-black">Ngày Nhận Phòng</th>
                        <th className="border border-gray-400 text-black">Ngày Trả Phòng</th>
                        <th className="border border-gray-400 text-black">SĐT Khách</th>
                        <th className="border border-gray-400 text-black">Tổng Giá</th>
                        <th className="border border-gray-400 text-black">Đã Thanh Toán</th>
                        <th className="border border-gray-400 text-black">Thao Tác</th>
                    </tr>
                </thead>
                <tbody>
                    {datPhongs.map((booking) => (
                        <tr key={booking.id} className="text-center">
                            <td className="border border-gray-400 text-black">{booking.id}</td>
                            <td className="border border-gray-400 text-black">{booking.maphong}</td>
                            <td className="border border-gray-400 text-black">{booking.name}</td>
                            <td className="border border-gray-400 text-black">{booking.loaiphong}</td>
                            <td className="border border-gray-400 text-black">{booking.ngaynhanphong}</td>
                            <td className="border border-gray-400 text-black">{booking.ngaytraphong}</td>
                            <td className="border border-gray-400 text-black">{booking.sokhach}</td>
                            <td className="border border-gray-400 text-black">{booking.tonggia}</td>
                            <td className="border border-gray-400 text-black">{booking.dathanhtoan}</td>
                            <td>
                                <button onClick={() => handleEdit(booking.id)} className="px-2 py-1 bg-red-600 text-white rounded">Sửa</button>
                                <button onClick={() => handleDelete(booking.id)} className="px-2 py-1 bg-blue-600 text-white rounded">Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


