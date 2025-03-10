import("./API/apibinhluan")

export function BinhLuanViewModel() {
    const handleSubmit = (e) => {
        e.preventDefault(e);
        console.log(e);

        const formData = new FormData(e.target);
        console.log({
            maphong: formData.get("maphong"),
            manguoibinhluan: formData.get("manguoibinhluan"),
            noidung: formData.get("noidung")
        })
    }



    return (
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg"
            style={{ backgroundImage: "url('/img/francesco-ungaro-0F_BpQa47S0-unsplash.jpg')" }}>
            <h1 className="text-xl font-bold mb-4 text-black">Quản Lý Bình Luận</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        className="w-full p-2 mb-2 border rounded text-black"
                        type="text"
                        name="maphong"
                        placeholder="Mã Phòng" />
                    <input
                        className="w-full p-2 mb-2 border rounded text-black"
                        type="text"
                        name="manguoibinhluan"
                        placeholder="Mã Người Bình Luận" />
                    <textarea
                        className="w-full p-2 mb-2 border rounded text-black"
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
                    <button type="submit" className="w-full text-xl text-nowrap bg-zinc-800 text-white py-3 px-4 rounded-lg hover:bg-zinc-700 transition-colors">
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