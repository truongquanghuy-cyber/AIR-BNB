export function DangNhapView() {
    return (
        <>

        <div>
            <div className="bg-gray-200 flex flex-col items-center justify-center">
                <h1 className="title-dang-nhạp">DangNhap</h1>
                <input type="text" placeholder="Tài khoản"></input>
                <input type="password" placeholder="Mật khẩu"></input>
                <br />
                <h2>Nếu bạn quên mật khẩu: <a href="#">Ấn vào đây</a></h2>
                <br />

                <div>
                <button>Đăng Nhập</button>
                <button>Đăng ký</button>
                </div>
            </div>
        </div>
        </>
    );
}