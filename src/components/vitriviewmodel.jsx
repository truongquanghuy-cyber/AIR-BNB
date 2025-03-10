import React, { useState, useEffect } from 'react';
import("./API/apivitri")
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

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Search:', search);
        console.log('Check-in:', checkIn);
        console.log('Check-out:', checkOut);
        console.log('Guests:', guests);
    };

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    return (

        <div
        style={{
            backgroundImage: "url('/img/mark-de-jong-t-7Cy6ZD0-k-unsplash.jpg')",
          }}
          className="flex justify-center items-center bg-cover bg-center min-h-screen"
          
        >
            <form onSubmit={handleSubmit}>
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
                            onChange={(e) => setCheckIn(e.target.value)}
                            className="w-full p-3 mb-2 border rounded mt-4"
                        />
                    </div>
                    <div className="flex-1">
                        <h2>Trả phòng</h2>
                        <input
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            className="w-full p-3 mb-2 border rounded mt-4"
                        />
                    </div>
                    <div className="flex-1">
                        <h2>Khách</h2>
                        <input
                            type="number"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            min="1"
                            placeholder="Khách"
                            className="w-full p-3 border rounded"
                        />
                    </div>
                    <button className="w-1/3 p-3 bg-blue-500 text-white rounded text-lg">
                        Tìm kiếm
                    </button>
                </div>
            </form>

        </div>
    );
}    