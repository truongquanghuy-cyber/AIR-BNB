import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer className="bg-white text-black p-4 mt-8">
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4 text-sm">
        {/* Keeping the structure unchanged as per your provided snippet */}
        <div>
          <h3 className="font-bold mb-2">GIỚI THIỆU</h3>
          <ul>
            <li>Phương thức hoạt động của Airbnb</li>
            <li>Trang tin tức</li>
            <li>Nhà đầu tư</li>
            <li>Airbnb Plus</li>
            <li>Airbnb Luxe</li>
            <li>HotelTonight</li>
            <li>Airbnb for Work</li>
            <li>Nhờ có Host, mọi điều đều có thể</li>
            <li>Cơ hội nghề nghiệp</li>
            <li>Thư của nhà sáng lập</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">CỘNG ĐỒNG</h3>
          <ul>
            <li>Sự đa dạng và Cảm giác thân thuộc</li>
            <li>Tiện nghi phù hợp cho người khuyết tật</li>
            <li>Đối tác liên kết Airbnb</li>
            <li>Chỗ ở cho tuyến đầu</li>
            <li>Lượt giới thiệu của khách</li>
            <li>Airbnb.org</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">ĐÓN TIẾP KHÁCH</h3>
          <ul>
            <li>Cho thuê nhà</li>
            <li>Tổ chức Trải nghiệm trực tuyến</li>
            <li>Tổ chức trải nghiệm</li>
            <li>Đón tiếp khách có trách nhiệm</li>
            <li>Trung tâm tài nguyên</li>
            <li>Trung tâm cộng đồng</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">HỖ TRỢ</h3>
          <ul>
            <li>Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi</li>
            <li>Trung tâm trợ giúp</li>
            <li>Các tùy chọn hủy</li>
            <li>Hỗ trợ khu dân cư</li>
            <li>Tin cậy và an toàn</li>
          </ul>
        </div>
      </div>
      <hr className="my-4"/>
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm px-4">
        <div>
          @2023 Cuong/Huy Cybersoft. All rights reserved.
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-2">Quyền riêng tư</a>
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-2">Điều khoản</a>
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-2">Sơ đồ trang web</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faGlobe} className="mx-2"/> 
          <span>Tiếng Việt/Tiếng Anh</span>
          <FontAwesomeIcon icon={faMoneyBillWave} className="mx-2"/> 
          <span>VNĐ/USD</span>
        </div>
        <div>
          Follow us:
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-2"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-2"><FontAwesomeIcon icon={faTwitterSquare} /></a>
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-2"><FontAwesomeIcon icon={faInstagramSquare} /></a>
        </div>
      </div>
    </footer>
  );
};