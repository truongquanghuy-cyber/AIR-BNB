import React from 'react';

export const DiaDiemGanDay = () => {

  const locations = [
    {
      name: 'Thành phố Hồ Chí Minh',
      driveTime: '15 phút lái xe',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQRiURbRQ-1VSLX8SR0eoe_p-yKNUr5siDxlAb0aiX-zBbkrRefRrSRP_r3YsxTOJZgtJpdaQEHPztrz3zlXzo6amTg4n8pdIAbV3kmGF4'
    },
    {
      name: 'Cần Thơ',
      driveTime: '3 giờ lái xe',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRcVysmk70M8Tfu6OBeBtSWdrORz3tw1uglhm7MgIyo0eezF_0VU_TVmhlqRs-OS0KN_A6sQlUtxafOIYsIM5WDPvCaEC1IYNAl7aPmyQ'
    },
    {
      name: 'Nha Trang',
      driveTime: '6.5 giờ lái xe',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRpS9RN6KYDYdaIAC_to7vbEf_xq2x6TYMHcZ1MYVdEGu0dSZlk_mM4M3USlYJJKizKXajqApTs5PrtP38r9BGt8588NUj-4vtMCs4sSg'
    },
    {
      name: 'Phú Quốc',
      driveTime: 'Phú Quốc',
      imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipPjsRN4ytEyCPZP5lEf906bu9zFV961YNoKZLQv=w1080-h624-n-k-no'
    },
    {
      name: 'Thành phố Tuy Hòa',
      driveTime: '7.5 giờ lái xe',
      imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipNh3xk-WC_7kwyiZ06mrhHUlclv7b1wVMFi5Qd1=w1080-h624-n-k-no'
    },
    {
      name: 'thành phố Biên Hòa',
      driveTime: '45 phút lái xe',
      imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipP9OCLFlHM39FmRSo6tdsRQMjg-FzPovXIvB0hm=w1080-h624-n-k-no'
    },
    {
      name: 'Thị xã Thuận An',
      driveTime: '30 phút lái xe',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/%E1%BB%A6y_ban_nh%C3%A2n_d%C3%A2n_th%C3%A0nh_ph%E1%BB%91_Thu%E1%BA%ADn_An_v%C3%A0_v%C3%B2ng_xoay.jpg'
    },
    {
      name: 'Thành phố Phan Rang - Tháp Chàm',
      driveTime: '5 giờ lái xe',
      imageUrl: 'https://prtc.ninhthuan.gov.vn/chinhquyen/prtc/Pictures/quangtruong16453873244.jpg'
    }
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg text-black">
      <h2 className="text-2xl font-bold mb-4">Khám phá những điểm đến gần đây</h2>
      <div className="grid grid-cols-4 gap-4">
        {locations.map((location, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg shadow-md"
          >
            <img
              src={location.imageUrl}
              alt={location.name}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div>
              <p className="font-semibold">{location.name}</p>
              <p className="text-sm text-gray-500">{location.driveTime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};