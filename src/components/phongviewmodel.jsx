import React from 'react';
// import '../index.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

export function PhongViewModel() {
    return (
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg bg-[url('public/img/prydumano-design-vYlmRFIsCIk-unsplash.jpg')]  flex">
            <div className="flex-1 pt-6 pl-20">
                <input
                    
                    type="text"
                    placeholder="Khu vực bạn đã chọn"
                    className="search-input px-2 py-1 rounded border border-gray-600 block w-80" />
                    <br />
                <input
                    type="date"
                    className="search-date px-2 py-1 rounded border border-gray-600 block w-80" />
                    <br />
                <input
                    type="date"
                    className="search-date px-2 py-1 rounded border border-gray-600 block w-80" />
                    <br />
                <input
                    type="number"
                    placeholder="Thêm khách"
                    className="search-guests px-2 py-1 rounded border border-gray-600 block w-80" />
                    <br />
                <button className="search-button w-80 p-2 bg-gray-500 text-white rounded text-lg">Tìm kiếm</button>
            </div>
            <div className=" flex-1">
                <h2>Hơn 3000 chỗ ở - Chỗ ở tại khu vực bản đồ đã chọn</h2>
                <div className="filters">
                    <button className='w-80 p-2 bg-gray-500 text-white rounded text-lg m-2'>Loại nơi ở</button>
                    <br />
                    <button className='w-80 p-2 bg-gray-500 text-white rounded text-lg m-2'>Giá</button>
                    <br />
                    <button className='w-80 p-2 bg-gray-500 text-white rounded text-lg m-2'>Đặt ngay</button>
                    <br />
                    <button className='w-80 p-2 bg-gray-500 text-white rounded text-lg m-2'>Phòng và phòng ngủ</button>
                    <br />
                    <button className='w-80 p-2 bg-gray-500 text-white rounded text-lg m-2'>Khác</button>
                </div>
            </div>
            <div className="listings-and-map">
                <div className="listings">
                    {/* Placeholder for dynamically populated listing items */}
                </div>
                <div className="map-view">
                    {/* Placeholder for map integration */}
                </div>
            </div>
        </div>
    );
}