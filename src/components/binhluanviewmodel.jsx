
export function BinhLuanViewModel() {
    return (
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-xl font-bold mb-4">Quản Lý Bình Luận</h1>
            <form action="">
                <div>
                    <input
                    className="w-full p-2 mb-2 border rounded"
                        type="text"
                        name="maphong"
                        placeholder="Mã Phòng" />
                    <input
                    className="w-full p-2 mb-2 border rounded"
                        type="text"
                        name="manguoibinhluan"
                        placeholder="Mã Người Bình Luận" />
                    <textarea
                    className="w-full p-2 mb-2 border rounded"
                        name="noidung"
                        id=""
                        placeholder="Nội Dung Bình Luận"></textarea>
                    <div className="flex item-center gap-4">
                        <span className="text-2xl cursor-pointer text-gray-300">★</span>
                        <span className="text-2xl cursor-pointer text-gray-300">★</span>
                        <span className="text-2xl cursor-pointer text-gray-300">★</span>
                        <span className="text-2xl cursor-pointer text-gray-300">★</span>
                        <span className="text-2xl cursor-pointer text-gray-300">★</span>
                        <span className="ml-2 text-gray-600">0 / 5</span>
                    </div>
                    <button type="submit" className="text-xl font-bold mb-4">
                        Thêm Bình Luận
                    </button>
                </div>
            </form>
            <div className="space-y-4">
                <div className="border p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-bold">Phòng: ...</span>
                        <span className="text-sm text-gray-500">Ngày bình luận</span>
                    </div>
                    <p className="mb-2">Nội dung: </p>
                    <div className="flex justify-between items-center">
                        <span>Người bình luận :</span>
                        <span>Đánh giá: </span>

                    </div>

                </div>
            </div>
        </div>
    );
}