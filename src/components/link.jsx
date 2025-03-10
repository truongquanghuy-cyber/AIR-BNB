import { useState } from "react";
import DangNhapView from "./dangnhapview";
import TaoTaiKhoan from "./taotaikhoan";
export default function AuthContainer() {
    const [isRegister, setIsRegister] = useState(false);
  
    return (
      <div>
        {isRegister ? (
          <TaoTaiKhoan onSwitch={() => setIsRegister(false)} />
        ) : (
          <DangNhapView onSwitch={() => setIsRegister(true)} />
        )}
      </div>
    );
  }