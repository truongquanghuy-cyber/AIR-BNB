import("./API/apidatphong")

export function DatPhongViewModel() {
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
                    <input className="px-2 py-1 rounded border border-gray-600 block w-full" type="text" name="name" placeholder="Tên Khách" />
                    <br />
                    <input className="px-2 py-1 rounded border border-gray-600 block w-full" type="text" name="loaiphong" placeholder="Loại Phòng" />
                    <br />
                    <div>
                        <h2 className="text-black">Ngày Nhận Phòng</h2>
                        <input className="px-2 py-1 rounded border border-gray-600 block w-full text-black" type="date" name="ngaynhanphong" />
                    </div>

                    <br />
                    <div>
                        <h2 className="text-black">Ngày trả phòng</h2>
                        <input className="px-2 py-1 rounded border border-gray-600 block w-full text-black" type="date" name="ngaytraphong" />
                    </div>
                    <br />

                    <input className="px-2 py-1 rounded border border-gray-600 block w-fulld" type="number" name="sokhach" placeholder="Số Khách" />
                    <br />
                    <input className="px-2 py-1 rounded border border-gray-600 block w-full" type="number" name="tonggia" placeholder="Tổng Giá" />
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
                    <td className="border border-gray-400 text-black">01</td>
                    <td className="border border-gray-400 text-black">Trương Quang Huy</td>
                    <td className="border border-gray-400 text-black">Vip</td>
                    <td className="border border-gray-400 text-black">20/11/2024</td>
                    <td className="border border-gray-400 text-black">22/11/2024</td>
                    <td className="border border-gray-400 text-black">0905435172</td>
                    <td className="border border-gray-400 text-black">2000$</td>
                    <td className="border border-gray-400 text-black">Đã Thanh Toán</td>
                    <td>
                        <button className="px-2 py-1 bg-red-600 text-white rounded">Sửa</button>
                        <button className="px-2 py-1 bg-blue-600 text-white rounded">Xóa</button>
                    </td>
                </tbody>
            </table>
        </div>




    )
}



