// import {
//     faEye,
//     faUserEdit,
//     faComments,
//     faBed,
//     faUserCircle,
//     faMapMarkerAlt,
//     faSignInAlt,
//     faUserPlus
//   } from '@fortawesome/free-solid-svg-icons';
//   import { NavLink } from 'react-router-dom'
//   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// export function Header(){
//     return (
//         // <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}>
//         <div>
//         <div className="w-full flex justify-center items-center bg-gray-200" >
//           <img
//             src="./public/img/antonio-janeski-VIGLnzEpOm4-unsplash.jpg"
//             alt=""
//             className="w-full h-64 object-cover rounded-lg shadow-md" />
//         </div>
//         <header className='flex justify-between items-center h-32 w-full text-center bg-[#0072BD] text-white p-4 bg-opacity-70'>
//           <div>
//             <NavLink
//               to="/form"
//               className="w-42 h-32 flex justify-center items-center"
//             >
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
//                 alt="Logo"
//                 className="h-16"
//                 style={{ width: "auto", maxHeight: "100%", objectFit: "contain" }}
//               />
//             </NavLink>
//           </div>


//           <nav className="flex justify-center items-center   m-96 bg-[#0072BD] text-white p-4">
//             <ul className="flex items-center space-x-6 list-none m-0 p-0">
//               <li >
//                 <NavLink
//                   to="/phongview"
//                   className="text-black hover:text-blue-400 rounded-sm text-nowrap">
//                   <FontAwesomeIcon icon={faEye} className="mr-2" />
//                   Phòng View Model
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/capnhatnguoidung"
//                   className="text-black hover:text-blue-800 text-nowrap">
//                   <FontAwesomeIcon icon={faUserEdit} />
//                   Cập Nhật Người Dùng
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/binhluan"
//                   className="text-black hover:text-blue-800 text-nowrap">
//                   <FontAwesomeIcon icon={faComments} />
//                   Bình Luận
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/datphong"
//                   className="text-black hover:text-blue-800 text-nowrap">
//                   <FontAwesomeIcon icon={faBed} />
//                   Đặt Phòng
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/thongtinnguoidung"
//                   className="text-black hover:text-blue-800 text-nowrap">
//                   <FontAwesomeIcon icon={faUserCircle} />
//                   Thông Tin Người Dùng
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/vitri"
//                   className="text-black hover:text-blue-800 text-nowrap">
//                   <FontAwesomeIcon icon={faMapMarkerAlt} />
//                   Vị Trí
//                 </NavLink>
//               </li>
//               <li >
//                 <NavLink
//                   to="/dangnhap"
//                   className="text-black hover:text-blue-800 text-nowrap">
//                   <FontAwesomeIcon icon={faSignInAlt} />
//                   Đăng Nhập
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/taotaikhoan"
//                   className="text-black hover:text-blue-800 text-nowrap">
//                   <FontAwesomeIcon icon={faUserPlus} />
//                   Tạo Tài Khoản
//                 </NavLink>
//               </li>
//             </ul>
//           </nav>
//         </header>
//       </div>
//     )
// }