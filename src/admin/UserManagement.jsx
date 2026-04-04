import React from 'react';

const styles = `
  .user-mgmt-container {
    padding: 2rem;
    font-family: 'Inter', sans-serif;
    color: #0f172a;
  }

  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .page-header h2 {
    font-size: 1.75rem;
    font-weight: 800;
    margin: 0;
  }

  .btn-primary {
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 10px;
    font-weight: 700;
    color: white;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    transition: all 0.3s ease;
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(59, 130, 246, 0.4);
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .stat-card {
    background: white;
    padding: 1.5rem;
    border-radius: 16px;
    border: 1px solid rgba(0,0,0,0.05);
    box-shadow: 0 4px 6px rgba(0,0,0,0.02);
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }

  .stat-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  }

  .stat-info h4 {
    font-size: 0.85rem;
    color: #64748b;
    margin: 0;
    font-weight: 600;
    text-transform: uppercase;
  }

  .stat-info p {
    font-size: 1.5rem;
    font-weight: 800;
    margin: 0.2rem 0 0 0;
  }

  .user-table-card {
    background: white;
    border-radius: 20px;
    border: 1px solid rgba(0,0,0,0.05);
    box-shadow: 0 10px 25px rgba(0,0,0,0.03);
    overflow: hidden;
  }

  .table-header {
    padding: 1.5rem;
    border-bottom: 1px solid #f1f5f9;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .search-input {
    padding: 0.6rem 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    width: 300px;
    font-size: 0.9rem;
  }

  .table-container {
    overflow-x: auto;
    width: 100%;
  }

  .user-table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
  }

  @media (max-width: 768px) {
    .user-mgmt-container { padding: 1.5rem; }
    .page-header h2 { font-size: 1.35rem; }
    .btn-primary { padding: 0.6rem 1rem; font-size: 0.85rem; }
    .stats-grid { grid-template-columns: 1fr; }
    .search-input { width: 220px; }
  }

  @media (max-width: 575px) {
    .table-header { flex-direction: column; align-items: stretch; gap: 1rem; }
    .search-input { width: 100%; }
  }

  .user-table th {
    text-align: left;
    background: #f8fafc;
    padding: 1rem 1.5rem;
    font-weight: 700;
    font-size: 0.8rem;
    color: #64748b;
    text-transform: uppercase;
  }

  .user-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #f1f5f9;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .user-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #e2e8f0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: #64748b;
    font-size: 0.75rem;
  }

  .status-badge {
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 700;
  }

  .status-active { background: #dcfce7; color: #166534; }
  .status-inactive { background: #fee2e2; color: #991b1b; }

  .action-btns {
    display: flex;
    gap: 0.5rem;
  }

  .btn-icon {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #64748b;
    cursor: pointer;
    transition: all 0.2s;
  }

  .btn-icon:hover {
    border-color: #3b82f6;
    color: #3b82f6;
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-fade-up {
    animation: fadeInUp 0.6s ease-out forwards;
  }
`;

function UserManagement() {
  const users = [
    { id: 1, name: 'Jessica Lee', email: 'jessica@example.com', role: 'Student', status: 'Active', initials: 'JL' },
    { id: 2, name: 'Mark Collins', email: 'mark@example.com', role: 'Instructor', status: 'Active', initials: 'MC' },
    { id: 3, name: 'Anna Patel', email: 'anna@example.com', role: 'Student', status: 'Inactive', initials: 'AP' },
    { id: 4, name: 'John Doe', email: 'john@example.com', role: 'Student', status: 'Active', initials: 'JD' },
    { id: 5, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'Instructor', status: 'Active', initials: 'SW' },
  ];

  return (
    <>
      <style>{styles}</style>
      <div className="user-mgmt-container animate-fade-up">
        <div className="page-header">
          <h2>User Management</h2>
          <button className="btn-primary">+ Add New User</button>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon"><i className="bi bi-people-fill"></i></div>
            <div className="stat-info">
              <h4>Total Users</h4>
              <p>1,250</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}><i className="bi bi-person-check-fill"></i></div>
            <div className="stat-info">
              <h4>Active Students</h4>
              <p>980</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}><i className="bi bi-mortarboard-fill"></i></div>
            <div className="stat-info">
              <h4>Instructors</h4>
              <p>45</p>
            </div>
          </div>
        </div>

        <div className="user-table-card">
          <div className="table-header">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0 }}>All Users</h3>
            <input type="text" className="search-input" placeholder="Search users by name or email..." />
          </div>
          <div className="table-container">
            <table className="user-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>
                    <div className="user-info">
                      <div className="user-avatar">{user.initials}</div>
                      <div>
                        <div style={{ fontWeight: 700 }}>{user.name}</div>
                        <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>{user.role}</td>
                  <td>
                    <span className={`status-badge status-${user.status.toLowerCase()}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-btns">
                      <button className="btn-icon"><i className="bi bi-pencil-square"></i></button>
                      <button className="btn-icon"><i className="bi bi-trash-fill"></i></button>
                      <button className="btn-icon"><i className="bi bi-shield-lock-fill"></i></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid #f1f5f9', textAlign: 'center' }}>
            <button style={{ background: 'none', border: 'none', color: '#3b82f6', fontWeight: 700, cursor: 'pointer' }}>View All Users</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserManagement;
