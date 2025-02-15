import "tailwindcss";
import React, { useState, useEffect } from 'react';

export function Form() {

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
                <div className="flex-1">
                    
                    <h2>Địa điểm</h2>
                    <input 
                        type="text" 
                        value={search} 
                        onChange={handleSearchChange} 
                        placeholder="Vui lòng chọn vị trí"
                        className="w-full p-2 border rounded"
                        disabled={loading}
                    />
                </div>
                <div className="flex-1">
                    <h2>Nhận phòng</h2>
                    <input 
                        type="date" 
                        value={checkIn} 
                        onChange={e => setCheckIn(e.target.value)} 
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="flex-1">
                    <h2>Trả phòng</h2>
                    <input 
                        type="date" 
                        value={checkOut} 
                        onChange={e => setCheckOut(e.target.value)} 
                        className="w-full p-2 border rounded"
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
                        className="w-full p-2 border rounded"
                    />
                </div>
            
                <button className="bg-green-500 text-white p-2 rounded">
                    Tìm kiếm
                </button>
            </div>
        </div>
    );
}





    