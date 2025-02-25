import "tailwindcss";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faMapMarkerAlt, faCalendarAlt, faCalendarCheck, faSearch, faUsers } from '@fortawesome/free-solid-svg-icons';
import { OBatCuDau } from "../components/obatcudau";
import { Footer } from "../components/footer";
import { DiaDiemGanDay } from "../components/diadiemganday";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                <div className="flex-1 flex items-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                    <input
                        type="text"
                        value={search}
                        onChange={handleSearchChange}
                        placeholder="Vui lòng chọn vị trí"
                        className="w-full p-2 border rounded-full"
                        disabled={loading}
                    />
                </div>
                <div className="flex-1 flex items-center">
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                    <input
                        type="date"
                        value={checkIn}
                        onChange={e => setCheckIn(e.target.value)}
                        className="w-full p-2 border rounded-full"
                    />
                </div>
                <div className="flex-1 flex items-center">
                    <FontAwesomeIcon icon={faCalendarCheck} className="mr-2" />
                    <input
                        type="date"
                        value={checkOut}
                        onChange={e => setCheckOut(e.target.value)}
                        className="w-full p-2 border rounded-full"
                    />
                </div>
                <div className="flex-1 flex items-center">
                    <FontAwesomeIcon icon={faUsers} className="mr-2" /> {/* Icon for guests */}
                    <input
                        type="number"
                        value={guests}
                        onChange={e => setGuests(e.target.value)}
                        min="1"
                        placeholder="Khách"
                        className="w-full p-2 border rounded-full"
                    />
                </div>
                <button className="bg-green-500 text-white p-2 rounded-full text-sm w-20">
                    <FontAwesomeIcon icon={faSearch} className="mr-1" />
                    Tìm kiếm
                </button>

            </div>
            <div>
                <br />
                {/* <DiaDiemGanDay />
                <br />
                <OBatCuDau />
                <br />
                <Footer /> */}
            </div>


        </div>
    );
}
