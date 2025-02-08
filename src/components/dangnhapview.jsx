export function DangNhapView() {
    return (
        <>
            <div className="bg-gray-200">
                <h1 className="title-dang-nhạp">DangNhap</h1>
                <input type="text" holderplace="Tài khoản"></input>
                <input type="password" holderplace="Mật khẩu"></input>
                <br />
                <h2>Nếu bạn quên mật khẩu: <a href="#">Ấn vào đây</a></h2>
                <br />

                <div>
                <button>Đăng Nhập</button>
                <button>Đăng ký</button>
                </div>
            </div>
        </>
    );
}