import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const styles = `
  :root {
    --sidebar-bg: #1a202c;
    --sidebar-grad: linear-gradient(180deg, #1a202c 0%, #2d3748 100%);
    --primary-blue: #3b82f6;
    --primary-grad: linear-gradient(135deg, #3b82f6, #1d4ed8);
    --header-blue: #1e3a8a;
    --bg-light: #f8fafc;
    --text-dark: #0f172a;
    --text-muted: #64748b;
    --border-color: rgba(0, 0, 0, 0.05);
    --transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .admin-dashboard-wrapper {
    display: flex;
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-light);
  }

  .admin-sidebar {
    width: 280px;
    background: var(--sidebar-grad);
    color: white;
    display: flex;
    flex-direction: column;
    transition: var(--transition);
    position: sticky;
    top: 0;
    height: 100vh;
    z-index: 1000;
  }

  .sidebar-logo {
    padding: 2rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.85rem;
    font-size: 1.5rem;
    font-weight: 800;
  }

  .sidebar-logo i { color: #fbbf24; font-size: 1.75rem; }

  .sidebar-nav {
    list-style: none;
    padding: 1rem 0.75rem;
    margin: 0;
    flex-grow: 1;
  }

  .nav-link-item {
    margin-bottom: 0.5rem;
    padding: 0.85rem 1.25rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    transition: var(--transition);
    font-weight: 600;
    border-radius: 12px;
    font-size: 0.95rem;
  }

  .nav-link-item:hover {
    background: rgba(255, 255, 255, 0.05);
    color: white;
  }

  .nav-link-item.active {
    background: var(--primary-grad);
    color: white;
    box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3);
  }

  .admin-main-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .admin-header {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border-color);
    position: sticky;
    top: 0;
    z-index: 900;
  }

  .header-left h1 { font-size: 1.25rem; font-weight: 800; margin: 0; }

  .header-right { display: flex; gap: 1.5rem; color: var(--text-muted); font-size: 1.25rem; }
  .header-right i { cursor: pointer; transition: 0.2s; }
  .header-right i:hover { color: var(--primary-blue); }

  .admin-content-body { padding: 0; }

  @media (max-width: 1024px) {
    .admin-sidebar { width: 80px; }
    .sidebar-logo span, .nav-link-item span { display: none; }
    .nav-link-item { justify-content: center; }
  }

  @media (max-width: 600px) {
    .admin-sidebar { position: fixed; bottom: 0; top: auto; width: 100%; height: 60px; flex-direction: row; border-radius: 20px 20px 0 0; }
    .sidebar-logo { display: none; }
    .sidebar-nav { flex-direction: row; padding: 0.5rem; justify-content: space-around; }
    .nav-link-item { flex-direction: column; gap: 2px; padding: 5px; flex: 1; border-radius: 8px; }
    .nav-link-item span { display: block; font-size: 0.65rem; }
    .admin-main-content { padding-bottom: 60px; }
  }
`;

function AdminLayout() {
  const location = useLocation();

  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/admin') return 'Dashboard Overview';
    if (path === '/admin/users') return 'User Management';
    if (path === '/admin/courses') return 'Course Creation';
    if (path === '/admin/settings') return 'System Settings';
    if (path === '/admin/reports') return 'Executive Reports';
    return 'Admin Panel';
  };

  return (
    <>
      <style>{styles}</style>
      <div className="admin-dashboard-wrapper">
        <aside className="admin-sidebar">
          <div className="sidebar-logo">
            <i className="bi bi-mortarboard-fill"></i>
            <span>EduAdmin</span>
          </div>
          <nav className="sidebar-nav">
            <NavLink to="/admin" end className="nav-link-item">
              <i className="bi bi-house-door"></i>
              <span>Dashboard</span>
            </NavLink>
            <NavLink to="/admin/users" className="nav-link-item">
              <i className="bi bi-person"></i>
              <span>Users</span>
            </NavLink>
            <NavLink to="/admin/courses" className="nav-link-item">
              <i className="bi bi-envelope"></i>
              <span>Courses</span>
            </NavLink>
            <NavLink to="/admin/settings" className="nav-link-item">
              <i className="bi bi-gear"></i>
              <span>Settings</span>
            </NavLink>
            <NavLink to="/admin/reports" className="nav-link-item">
              <i className="bi bi-bar-chart-line"></i>
              <span>Reports</span>
            </NavLink>
          </nav>
        </aside>

        <main className="admin-main-content">
          <header className="admin-header">
            <div className="header-left">
              <h1>{getPageTitle()}</h1>
            </div>
            <div className="header-right">
              <i className="bi bi-people"></i>
              <i className="bi bi-gear"></i>
              <i className="bi bi-bell"></i>
            </div>
          </header>
          <div className="admin-content-body">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}

export default AdminLayout;
