import React from 'react';
import { Link } from 'react-router-dom';

const styles = `
  .dashboard-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 2rem;
  }

  @media (max-width: 1200px) {
    .dashboard-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 768px) {
    .dashboard-grid { grid-template-columns: 1fr; padding: 1.5rem; }
  }

  .card {
    background: white;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.01);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }

  .card-header {
    background: linear-gradient(135deg, #1e3a8a, #1d4ed8);
    color: white;
    padding: 1.25rem 1.5rem;
    font-weight: 800;
    font-size: 1.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-body { padding: 1.5rem; }

  .stats-list { margin-bottom: 1.5rem; }

  .stats-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
  }

  .stats-label { color: #64748b; font-weight: 600; }
  .stats-value { color: #0f172a; font-weight: 800; }

  .action-btn {
    width: 100%;
    padding: 0.85rem;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
    background: white;
    font-weight: 700;
    color: #3b82f6;
    cursor: pointer;
    text-decoration: none;
    display: block;
    text-align: center;
    transition: all 0.2s;
  }

  .action-btn:hover {
    background: #eff6ff;
    border-color: #3b82f6;
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-fade-up {
    animation: fadeInUp 0.6s ease-out forwards;
  }
`;

function Dashboard() {
    return (
        <>
            <style>{styles}</style>
            <div className="dashboard-grid">
                {/* Column 1: Users Overview */}
                <div className="dashboard-column animate-fade-up" style={{ animationDelay: '0.1s' }}>
                    <section className="card">
                        <div className="card-header">User Management Overview</div>
                        <div className="card-body">
                            <div className="stats-list">
                                <div className="stats-row">
                                    <span className="stats-label">Total Users:</span>
                                    <span className="stats-value">1,250</span>
                                </div>
                                <div className="stats-row">
                                    <span className="stats-label">Active Students:</span>
                                    <span className="stats-value">980</span>
                                </div>
                                <div className="stats-row">
                                    <span className="stats-label">Instructors:</span>
                                    <span className="stats-value">45</span>
                                </div>
                            </div>
                            <Link to="/admin/users" className="action-btn">Go to User Management</Link>
                        </div>
                    </section>
                </div>

                {/* Column 2: Course Overview */}
                <div className="dashboard-column animate-fade-up" style={{ animationDelay: '0.2s' }}>
                    <section className="card">
                        <div className="card-header">Course Creation Overview</div>
                        <div className="card-body">
                            <div className="stats-list">
                                <div className="stats-row">
                                    <span className="stats-label">Total Courses:</span>
                                    <span className="stats-value">120</span>
                                </div>
                                <div className="stats-row">
                                    <span className="stats-label">Active Courses:</span>
                                    <span className="stats-value">85</span>
                                </div>
                                <div className="stats-row">
                                    <span className="stats-label">Pending Approval:</span>
                                    <span className="stats-value">5</span>
                                </div>
                            </div>
                            <Link to="/admin/courses" className="action-btn">Manage All Courses</Link>
                        </div>
                    </section>
                </div>

                {/* Column 3: System Overview */}
                <div className="dashboard-column animate-fade-up" style={{ animationDelay: '0.3s' }}>
                    <section className="card">
                        <div className="card-header">System Quick View</div>
                        <div className="card-body">
                            <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '12px', marginBottom: '1.5rem' }}>
                                <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 800 }}>System Status</h4>
                                <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>All major systems are operational and performing optimally.</p>
                            </div>
                            <Link to="/admin/settings" className="action-btn mb-2" style={{ marginBottom: '0.75rem' }}>System Settings</Link>
                            <Link to="/admin/reports" className="action-btn">View Detailed Reports</Link>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Dashboard;