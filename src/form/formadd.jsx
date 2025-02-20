import React from 'react';


export function FormAdd() {
    <>
        <div>
            <form>
                <div>
                    <label htmlFor="name">Tên phòng</label>
                    <br />
                    <input
                        type="text"
                        id="name"
                        placeholder="Nhập tên phòng"
                        className="w-full p-2 mb-2 border rounded"
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="price">Giá phòng</label>
                    <br />
                    <input
                        type="number"
                        id="price"
                        placeholder="Nhập giá phòng"
                        className="w-full p-2 mb-2 border rounded"
                    />
                </div>
                <br />
                <button type="submit" className="w-1/2 p-2 bg-gray-500 text-white rounded text-lg">Thêm</button>
            </form>
        </div>
    </>
}