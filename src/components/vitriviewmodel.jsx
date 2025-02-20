import React, { useState, useEffect } from 'react';

export function ViTriViewModel() {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(1);

    useEffect(() => {
        fetch('https://airbnbnew.cybersoft.edu.vn/api/vi-tri')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setLocations(data);
                } else {
                    console.error('Data is not an array', data);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching locations:', error);
                setLoading(false);
            });
    }, []);

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    return (


        <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg text-black">
            <div className="flex items-center justify-between gap-4">
                <div className="flex-1 flex items-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                    <input 
                        type="text" 
                        value={search} 
                        onChange={handleSearchChange} 
                        placeholder="Vui lòng chọn vị trí"
                        className="w-full p-3 mb-2 border rounded mt-4"
                        disabled={loading}
                    />
                </div>
                <div className="flex-1">
                    <h2>Nhận phòng</h2>
                    <input
                        type="date"
                        value={checkIn}
                        onChange={e => setCheckIn(e.target.value)}
                        className="w-full p-3 mb-2 border rounded mt-4"
                    />
                </div>
                <div className="flex-1">
                    <h2>Trả phòng</h2>
                    <input
                        type="date"
                        value={checkOut}
                        onChange={e => setCheckOut(e.target.value)}
                        className="w-full p-3 mb-2 border rounded mt-4"
                    />
                </div>
                <div className="flex-1">
                    <h2>Khách</h2>
                    <input
                        type="number"
                        value={guests}
                        onChange={e => setGuests(e.target.value)}
                        min="1"
                        placeholder="Khách"
                        className="w-full p-3 border rounded"
                    />
                </div>
        <button className="bg-green-500 text-white p-2 rounded-full">

            <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg text-black w-full"
                style={{ backgroundImage: "url('public/img/mark-de-jong-t-7Cy6ZD0-k-unsplash.jpg')" }}>
                <div className="flex items-center justify-between gap-6">
                    <div className="flex-1">
                        <h2>Địa điểm</h2>
                        <input
                            type="text"
                            value={search}
                            onChange={handleSearchChange}
                            placeholder="Vui lòng chọn vị trí"
                            className="w-full p-3 mb-2 border rounded mt-4"
                            disabled={loading}
                        />
                    </div>
                    <div className="flex-1">
                        <h2>Nhận phòng</h2>
                        <input
                            type="date"
                            value={checkIn}
                            onChange={e => setCheckIn(e.target.value)}
                            className="w-full p-3 mb-2 border rounded mt-4"
                        />
                    </div>
                    <div className="flex-1">
                        <h2>Trả phòng</h2>
                        <input
                            type="date"
                            value={checkOut}
                            onChange={e => setCheckOut(e.target.value)}
                            className="w-full p-3 mb-2 border rounded mt-4"
                        />
                    </div>
                    <div className="flex-1">
                        <h2>Khách</h2>
                        <input
                            type="number"
                            value={guests}
                            onChange={e => setGuests(e.target.value)}
                            min="1"
                            placeholder="Khách"
                            className="w-full p-3 border rounded"
                        />
                    </div>
                    <button className="w-1/3 p-3 bg-blue-500 text-white rounded text-lg">
                        Tìm kiếm
                    </button>
                </div>
            </div>
        </button>    
    );
    
}
