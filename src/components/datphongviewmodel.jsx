export function DatPhongViewModel() {
    return (
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 ">
                Danh Sách Đặt Phòng
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <input className="px-2 py-1 rounded border border-gray-600 block w-full" type="text" name="name" placeholder="Tên Khách" />
                <br />
                <input className="px-2 py-1 rounded border border-gray-600 block w-full" type="text" name="loaiphong" placeholder="Loại Phòng" />
                <br />
                <div>
                    <h2>Ngày Nhận Phòng</h2>
                    <input className="px-2 py-1 rounded border border-gray-600 block w-full" type="date" name="ngaynhanphong" />
                </div>

                <br />
                <div>
                    <h2>Ngày trả phòng</h2>
                    <input className="px-2 py-1 rounded border border-gray-600 block w-full" type="date" name="ngaytraphong" />
                </div>
                <br />

                <input className="px-2 py-1 rounded border border-gray-600 block w-fulld" type="number" name="sokhach" placeholder="Số Khách" />
                <br />
                <input className="px-2 py-1 rounded border border-gray-600 block w-full" type="number" name="tonggia" placeholder="Tổng Giá" />
                <br />
                <div className="flex items-center space-x-2">
                    <input type="checkbox" name="dathanhtoan" id="dathanhtoan" className="w-4 h-4" />
                    <label htmlFor="dathanhtoan" className="text-gray-700 font-medium">Đã Thanh Toán</label>
                </div>

                <br />
                <button className="w-full text-xl text-nowrap bg-zinc-800 text-white py-3 px-4 rounded-lg hover:bg-zinc-700 transition-colors ">
                    Thêm Đặt Phòng
                </button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th className="border border-gray-400">Mã Phòng</th>
                        <th className="border border-gray-400">Tên Khách</th>
                        <th className="border border-gray-400">Loại Phòng</th>
                        <th className="border border-gray-400">Ngày Nhận Phòng</th>
                        <th className="border border-gray-400">Ngày Trả Phòng</th>
                        <th className="border border-gray-400">SĐT Khách</th>
                        <th className="border border-gray-400">Tổng Giá</th>
                        <th className="border border-gray-400">Đã Thanh Toán</th>
                        <th className="border border-gray-400">Thao Tác</th>
                    </tr>
                </thead>
                <tbody>
                    <td className="border border-gray-400">01</td>
                    <td className="border border-gray-400">Trương Quang Huy</td>
                    <td className="border border-gray-400">Vip</td>
                    <td className="border border-gray-400">20/11/2024</td>
                    <td className="border border-gray-400">22/11/2024</td>
                    <td className="border border-gray-400">0905435172</td>
                    <td className="border border-gray-400">2000$</td>
                    <td className="border border-gray-400">Đã Thanh Toán</td>
                    <td>
                        <button className="px-2 py-1 bg-red-600 text-white rounded">Sửa</button>
                        <button className="px-2 py-1 bg-blue-600 text-white rounded">Xóa</button>
                    </td>
                </tbody>
            </table>
        </div>




    )
}


// // import  React from "react"
// // import { useState } from "react"
// // import { Button } from "@/components/ui/button"
// // import { Input } from "@/components/ui/input"
// // import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// // import { Checkbox } from "@/components/ui/checkbox"

// // interface Booking {
// //   id: number
// //   guestName: string
// //   roomType: string
// //   checkIn: string
// //   checkOut: string
// //   numberOfGuests: number
// //   totalPrice: number
// //   isPaid: boolean
// // }

// // export default function BookingTable() {
// //   const [bookings, setBookings] = useState<Booking[]>([])
// //   const [newBooking, setNewBooking] = useState<Omit<Booking, "id">>({
// //     guestName: "",
// //     roomType: "",
// //     checkIn: "",
// //     checkOut: "",
// //     numberOfGuests: 1,
// //     totalPrice: 0,
// //     isPaid: false,
// //   })
// //   const [editingId, setEditingId] = useState<number | null>(null)

// //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const { name, value, type } = e.target
// //     setNewBooking((prev) => ({
// //       ...prev,
// //       [name]: type === "number" ? Number(value) : value,
// //     }))
// //   }

// //   const handleCheckboxChange = (checked: boolean) => {
// //     setNewBooking((prev) => ({ ...prev, isPaid: checked }))
// //   }

// //   const addBooking = () => {
// //     setBookings((prev) => [...prev, { ...newBooking, id: Date.now() }])
// //     setNewBooking({
// //       guestName: "",
// //       roomType: "",
// //       checkIn: "",
// //       checkOut: "",
// //       numberOfGuests: 1,
// //       totalPrice: 0,
// //       isPaid: false,
// //     })
// //   }

// //   const startEditing = (booking: Booking) => {
// //     setEditingId(booking.id)
// //     setNewBooking(booking)
// //   }

// //   const saveEdit = () => {
// //     setBookings((prev) =>
// //       prev.map((booking) => (booking.id === editingId ? { ...newBooking, id: editingId } : booking)),
// //     )
// //     setEditingId(null)
// //     setNewBooking({
// //       guestName: "",
// //       roomType: "",
// //       checkIn: "",
// //       checkOut: "",
// //       numberOfGuests: 1,
// //       totalPrice: 0,
// //       isPaid: false,
// //     })
// //   }

// //  return (
// //     <div className="container mx-auto p-4">
// //       <h1 className="text-2xl font-bold mb-4">Danh sách đặt phòng khách sạn</h1>

// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
// //         <Input placeholder="Tên khách" name="guestName" value={newBooking.guestName} onChange={handleInputChange} />
// //         <Input placeholder="Loại phòng" name="roomType" value={newBooking.roomType} onChange={handleInputChange} />
// //         <Input type="date" name="checkIn" value={newBooking.checkIn} onChange={handleInputChange} />
// //         <Input type="date" name="checkOut" value={newBooking.checkOut} onChange={handleInputChange} />
// //         <Input
// //           type="number"
// //           placeholder="Số khách"
// //           name="numberOfGuests"
// //           value={newBooking.numberOfGuests}
// //           onChange={handleInputChange}
// //         />
// //         <Input
// //           type="number"
// //           placeholder="Tổng giá"
// //           name="totalPrice"
// //           value={newBooking.totalPrice}
// //           onChange={handleInputChange}
// //         />
// //         <div className="flex items-center space-x-2">
// //           <Checkbox id="isPaid" checked={newBooking.isPaid} onCheckedChange={handleCheckboxChange} />
// //           <label htmlFor="isPaid">Đã thanh toán</label>
// //         </div>
// //         <Button onClick={editingId !== null ? saveEdit : addBooking}>
// //           {editingId !== null ? "Lưu" : "Thêm đặt phòng"}
// //         </Button>
// //       </div>

// //       <Table>
// //         <TableHeader>
// //           <TableRow>
// //             <TableHead>Tên khách</TableHead>
// //             <TableHead>Loại phòng</TableHead>
// //             <TableHead>Ngày nhận phòng</TableHead>
// //             <TableHead>Ngày trả phòng</TableHead>
// //             <TableHead>Số khách</TableHead>
// //             <TableHead>Tổng giá</TableHead>
// //             <TableHead>Đã thanh toán</TableHead>
// //             <TableHead>Thao tác</TableHead>
// //           </TableRow>
// //         </TableHeader>
// //         <TableBody>
// //           {bookings.map((booking) => (
// //             <TableRow key={booking.id}>
// //               <TableCell>{booking.guestName}</TableCell>
// //               <TableCell>{booking.roomType}</TableCell>
// //               <TableCell>{booking.checkIn}</TableCell>
// //               <TableCell>{booking.checkOut}</TableCell>
// //               <TableCell>{booking.numberOfGuests}</TableCell>
// //               <TableCell>{booking.totalPrice.toLocaleString()} VND</TableCell>
// //               <TableCell>{booking.isPaid ? "Có" : "Không"}</TableCell>
// //               <TableCell>
// //                 <Button variant="outline" onClick={() => startEditing(booking)}>
// //                   Sửa
// //                 </Button>
// //               </TableCell>
// //             </TableRow>
// //           ))}
// //         </TableBody>
// //       </Table>
// //     </div>
// //   )
// // }

