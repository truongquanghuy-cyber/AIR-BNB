import React from 'react';
import './dashboard.css';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <ul>
          <li>Quản lý thông tin người dùng</li>
          <li>Quản lý thông tin vị trí</li>
          <li>Quản lý thông tin phòng</li>
        </ul>
      </div>
      <div className="main-content">
        <header>
          <input type="text" placeholder="Search..." />
          <div className="user-options">
            <button>Admin</button>
          </div>
        </header>
        <div className="user-management">
          <h2>Thêm quản trị viên</h2>
          <table>
            <thead>
              <tr>
                <th>Mã Phim</th>
                <th>Tên Phim</th>
                <th>Hình Ảnh</th>
                <th>Mô Tả</th>
                <th>Role</th>
                <th>Mã Nhóm</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>user1</td>
                <td><img src="avatar-url" alt="avatar" /></td>
                <td>User</td>
                <td>GP01</td>
                <td>
                  <button>Xem thông tin chi tiết</button>
                  <button>Sửa</button>
                  <button>X</button>
                </td>
              </tr>
              {/* Repeat for other users */}
            </tbody>
          </table>
          <div className="pagination">
            <button>prev</button>
            {/* Number buttons */}
            <button>next</button>
          </div>
        </div>
      </div>
    </div>
  );
}