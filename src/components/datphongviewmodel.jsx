import { useState } from "react";

import("./API/apidatphong")

export function DatPhongViewModel() {
    const [datPhongs, setDatPhongs] = useState([]);
 

    const handleSubmit = (e) => {
        e.preventDefault(e);
        console.log(e);

        const formData = new FormData(e.target);
        console.log({
            name: formData.get("name"),
            loaiphong: formData.get("loaiphong"),
            ngaynhanphong: formData.get("ngaynhanphong"),
            ngaytraphong: formData.get("ngaytraphong"),
            sokhach: formData.get("sokhach"),
            tonggia: formData.get("tonggia"),
            dathanhtoan: formData.get("dathanhtoan")
        })

        const newBooking = {
            id: datPhongs.length + 1,
            name: formData.get("name"),
            loaiphong: formData.get("loaiphong"),
            ngaynhanphong: formData.get("ngaynhanphong"),
            ngaytraphong: formData.get("ngaytraphong"),
            sokhach: formData.get("sokhach"),
            tonggia: formData.get("tonggia"),
            dathanhtoan: formData.get("dathanhtoan") ? "Đã Thanh Toán" : "Chưa Thanh Toán",
        };
        setDatPhongs([...datPhongs, newBooking]); // cập nhật danh sách phòng
        e.target.reset(); // reset form sau khi đặt phòng thành công
      

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
                    <input className="px-2 py-1 rounded border border-gray-600 block w-full" type="text" name="name" placeholder="Tên Khách" required />
                    <br />

                    <input className="px-2 py-1 rounded border border-gray-600 block w-full" type="text" name="loaiphong" placeholder="Loại Phòng" required />
                    <br />
                    <div>
                        <h2 className="text-black">Ngày Nhận Phòng</h2>
                        <input className="px-2 py-1 rounded border border-gray-600 block w-full text-black" type="date" name="ngaynhanphong" required />
                    </div>

                    <br />
                    <div>
                        <h2 className="text-black">Ngày trả phòng</h2>
                        <input className="px-2 py-1 rounded border border-gray-600 block w-full text-black" type="date" name="ngaytraphong" required />
                    </div>
                    <br />

                    <input className="px-2 py-1 rounded border border-gray-600 block w-fulld" type="number" name="sokhach" placeholder="Số Khách" required />
                    <br />
                    <input className="px-2 py-1 rounded border border-gray-600 block w-full" type="number" name="tonggia" placeholder="Tổng Giá" required />
                    <br />
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" name="dathanhtoan" id="dathanhtoan" className="w-4 h-4" />
                        <label htmlFor="dathanhtoan" className="text-gray-700 font-medium text-black">Đã Thanh Toán</label>
                    </div>

                    <br />
                    <button className="w-full text-xl text-nowrap bg-zinc-800 text-white py-3 px-4 rounded-lg hover:bg-zinc-700 transition-colors ">
                        Thêm Đặt Phòng
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
                    {datPhongs.map((booking, index) => (
                        <tr key={index} className="text-center">
                            <td className="border border-gray-400 text-black">{booking.id}</td>
                            <td className="border border-gray-400 text-black">{booking.name}</td>
                            <td className="border border-gray-400 text-black">{booking.loaiphong}</td>
                            <td className="border border-gray-400 text-black">{booking.ngaynhanphong}</td>
                            <td className="border border-gray-400 text-black">{booking.ngaytraphong}</td>
                            <td className="border border-gray-400 text-black">{booking.sokhach}</td>
                            <td className="border border-gray-400 text-black">{booking.tonggia}</td>
                            <td className="border border-gray-400 text-black">{booking.dathanhtoan}</td>
                            <td>
                                <button className="px-2 py-1 bg-red-600 text-white rounded">Sửa</button>
                                <button className="px-2 py-1 bg-blue-600 text-white rounded">Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


// import { useState } from "react";

// export function DatPhongViewModel() {
//     const [datPhongs, setDatPhongs] = useState([]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.target);

//         const newBooking = {
//             id: datPhongs.length + 1, // Tạo mã phòng đơn giản
//             name: formData.get("name"),
//             loaiphong: formData.get("loaiphong"),
//             ngaynhanphong: formData.get("ngaynhanphong"),
//             ngaytraphong: formData.get("ngaytraphong"),
//             sokhach: formData.get("sokhach"),
//             tonggia: formData.get("tonggia"),
//             dathanhtoan: formData.get("dathanhtoan") ? "Đã Thanh Toán" : "Chưa Thanh Toán",
//         };

//         // Cập nhật danh sách đặt phòng
//         setDatPhongs([...datPhongs, newBooking]);
//         e.target.reset(); // Reset form sau khi đặt phòng thành công
//     };

//     return (
//         <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg w-full">
//             <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
//                 Danh Sách Đặt Phòng
//             </h1>
//             <form onSubmit={handleSubmit} className="mb-6">
//                 <input className="px-2 py-1 rounded border border-gray-600 block w-full" type="text" name="name" placeholder="Tên Khách" required />
//                 <br />
//                 <input className="px-2 py-1 rounded border border-gray-600 block w-full" type="text" name="loaiphong" placeholder="Loại Phòng" required />
//                 <br />
//                 <div>
//                     <h2 className="text-black">Ngày Nhận Phòng</h2>
//                     <input className="px-2 py-1 rounded border border-gray-600 block w-full text-black" type="date" name="ngaynhanphong" required />
//                 </div>
//                 <br />
//                 <div>
//                     <h2 className="text-black">Ngày Trả Phòng</h2>
//                     <input className="px-2 py-1 rounded border border-gray-600 block w-full text-black" type="date" name="ngaytraphong" required />
//                 </div>
//                 <br />
//                 <input className="px-2 py-1 rounded border border-gray-600 block w-full" type="number" name="sokhach" placeholder="Số Khách" required />
//                 <br />
//                 <input className="px-2 py-1 rounded border border-gray-600 block w-full" type="number" name="tonggia" placeholder="Tổng Giá" required />
//                 <br />
//                 <div className="flex items-center space-x-2">
//                     <input type="checkbox" name="dathanhtoan" id="dathanhtoan" className="w-4 h-4" />
//                     <label htmlFor="dathanhtoan" className="text-gray-700 font-medium text-black">Đã Thanh Toán</label>
//                 </div>
//                 <br />
//                 <button className="w-full text-xl bg-zinc-800 text-white py-3 px-4 rounded-lg hover:bg-zinc-700 transition-colors">
//                     Thêm Đặt Phòng
//                 </button>
//             </form>

//             {/* Hiển thị danh sách đặt phòng */}
//             <table className="w-full border-collapse border border-gray-400">
//                 <thead>
//                     <tr className="bg-gray-200">
//                         <th className="border border-gray-400 px-4 py-2">Mã Phòng</th>
//                         <th className="border border-gray-400 px-4 py-2">Tên Khách</th>
//                         <th className="border border-gray-400 px-4 py-2">Loại Phòng</th>
//                         <th className="border border-gray-400 px-4 py-2">Ngày Nhận Phòng</th>
//                         <th className="border border-gray-400 px-4 py-2">Ngày Trả Phòng</th>
//                         <th className="border border-gray-400 px-4 py-2">Số Khách</th>
//                         <th className="border border-gray-400 px-4 py-2">Tổng Giá</th>
//                         <th className="border border-gray-400 px-4 py-2">Đã Thanh Toán</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {datPhongs.map((booking, index) => (
//                         <tr key={index} className="text-center">
//                             <td className="border border-gray-400 px-4 py-2">{booking.id}</td>
//                             <td className="border border-gray-400 px-4 py-2">{booking.name}</td>
//                             <td className="border border-gray-400 px-4 py-2">{booking.loaiphong}</td>
//                             <td className="border border-gray-400 px-4 py-2">{booking.ngaynhanphong}</td>
//                             <td className="border border-gray-400 px-4 py-2">{booking.ngaytraphong}</td>
//                             <td className="border border-gray-400 px-4 py-2">{booking.sokhach}</td>
//                             <td className="border border-gray-400 px-4 py-2">{booking.tonggia}</td>
//                             <td className="border border-gray-400 px-4 py-2">{booking.dathanhtoan}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }
