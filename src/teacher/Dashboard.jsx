import React from 'react';

const styles = `
  :root {
    --primary-blue: #0f62fe;
    --header-blue: #1d4ed8;
    --bg-light: #f1f5f9;
    --card-bg: rgba(255, 255, 255, 0.95);
    --text-dark: #0f172a;
    --text-muted: #475569;
    --border-color: rgba(0, 0, 0, 0.08);
    --orange-grad: linear-gradient(135deg, #f59e0b, #d97706);
    --green-grad: linear-gradient(135deg, #10b981, #059669);
    --blue-grad: linear-gradient(135deg, #3b82f6, #1d4ed8);
    --red-grad: linear-gradient(135deg, #ef4444, #dc2626);
    --transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .teacher-dashboard-body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-light);
    color: var(--text-dark);
    min-height: 100vh;
    padding: 1.5rem 2rem;
    -webkit-font-smoothing: antialiased;
  }

  .dashboard-card {
    background: var(--card-bg);
    border-radius: 16px;
    border: 1px solid var(--border-color);
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02), 0 2px 4px -1px rgba(0,0,0,0.02);
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: var(--transition);
    backdrop-filter: blur(8px);
  }

  .dashboard-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05), 0 10px 10px -5px rgba(0,0,0,0.02);
  }

  /* Upcoming Sessions */
  .sessions-header {
    background: var(--blue-grad);
    color: white;
    padding: 1rem 1.5rem;
    font-weight: 700;
    font-size: 1.15rem;
    letter-spacing: -0.01em;
  }

  .session-item {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--border-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: var(--transition);
  }

  .session-item:hover {
    background: rgba(15, 98, 254, 0.02);
  }

  .session-info h5 {
    font-size: 0.95rem;
    font-weight: 700;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .session-info h5::before {
    content: "";
    width: 6px;
    height: 6px;
    background: var(--header-blue);
    border-radius: 50%;
  }

  .session-info p {
    font-size: 0.8rem;
    color: var(--text-muted);
    margin: 0.3rem 0 0 1.25rem;
    font-weight: 500;
  }

  .session-icon {
    font-size: 1.25rem;
    color: var(--text-muted);
    opacity: 0.7;
  }

  .live-badge {
    background: var(--red-grad);
    color: white;
    font-size: 0.65rem;
    padding: 3px 10px;
    border-radius: 20px;
    font-weight: 800;
    letter-spacing: 0.05em;
    box-shadow: 0 4px 10px rgba(239, 68, 68, 0.3);
  }

  /* Pending Submissions */
  .submissions-header {
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid var(--border-color);
  }

  .submissions-header h2 {
    font-size: 1.15rem;
    font-weight: 700;
    margin: 0;
    color: var(--text-dark);
  }

  .submissions-header p {
    font-size: 0.8rem;
    color: var(--text-muted);
    margin: 0.2rem 0 0 0;
    font-weight: 500;
  }

  .submission-item {
    padding: 0.9rem 1.5rem;
    border-bottom: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    gap: 1.25rem;
    transition: var(--transition);
    cursor: pointer;
  }

  .submission-item:hover {
    background-color: rgba(59, 130, 246, 0.04);
  }

  .submission-item .bi-play-fill {
    color: var(--header-blue);
    font-size: 1.1rem;
    opacity: 0.8;
  }

  .submission-info {
    flex-grow: 1;
  }

  .submission-info h5 {
    font-size: 0.9rem;
    font-weight: 600;
    margin: 0;
  }

  .submission-info p {
    font-size: 0.75rem;
    color: var(--text-muted);
    margin: 0.15rem 0 0 0;
    font-weight: 500;
  }

  .chevron-icon {
    color: var(--text-muted);
    font-size: 0.9rem;
    opacity: 0.5;
  }

  /* Quick Actions */
  .actions-header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--border-color);
    font-size: 1.15rem;
    font-weight: 700;
  }

  .actions-container {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .action-btn {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    padding: 0.85rem 1.5rem;
    border-radius: 12px;
    color: white;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.95rem;
    transition: var(--transition);
    border: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .action-btn:hover {
    transform: translateY(-3px) scale(1.02);
    filter: brightness(1.05);
    color: white;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
  }

  .action-btn i {
    font-size: 1.25rem;
  }

  .btn-orange { background: var(--orange-grad); }
  .btn-green { background: var(--green-grad); }
  .btn-blue { background: var(--blue-grad); }
  .btn-red { background: var(--red-grad); }

  /* Class Overview */
  .overview-card {
    margin-top: 2rem;
    background: white;
    border-radius: 20px;
    border: 1px solid var(--border-color);
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.04);
  }

  .overview-header {
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid var(--border-color);
    font-weight: 700;
    font-size: 1.1rem;
    color: var(--text-dark);
  }

  .overview-grid {
    padding: 1.5rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }

  .stat-card {
    background: #ffffff;
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 1.25rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: var(--transition);
  }

  .stat-card:hover {
    border-color: var(--header-blue);
    transform: translateY(-4px);
    box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.05);
  }

  .stat-icon-box {
    width: 54px;
    height: 54px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  .bg-blue-light { background: rgba(59, 130, 246, 0.1); color: var(--header-blue); }
  .bg-green-light { background: rgba(16, 185, 129, 0.1); color: #059669; }
  .bg-red-light { background: rgba(239, 68, 68, 0.1); color: #dc2626; }

  .stat-content {
    flex-grow: 1;
  }

  .stat-label {
    font-weight: 600;
    color: var(--text-muted);
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.025em;
  }

  .stat-value {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--text-dark);
    line-height: 1.2;
  }

  .stat-new-pill {
    background: var(--red-grad);
    color: white;
    padding: 1px 6px;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 800;
    margin-left: 0.5rem;
    vertical-align: middle;
  }

  .card-link {
    display: block;
    padding: 0.75rem;
    text-align: center;
    color: var(--header-blue);
    text-decoration: none;
    font-weight: 700;
    font-size: 0.85rem;
    background: rgba(15, 98, 254, 0.03);
    transition: var(--transition);
  }

  .card-link:hover {
    background: rgba(15, 98, 254, 0.07);
    color: #1d4ed8;
  }

  /* Responsive Adjustments */
  @media (max-width: 991px) {
    .overview-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .teacher-dashboard-body {
      padding: 1rem;
    }
  }

  @media (max-width: 575px) {
    .overview-grid {
      grid-template-columns: 1fr;
    }
    .actions-container {
      padding: 1rem;
    }
    .action-btn {
      padding: 0.8rem 1.25rem;
      font-size: 0.9rem;
    }
  }

  /* Animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
  }

  .animate-fade-up {
    opacity: 0;
    animation: fadeInUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
  }

  .delay-1 { animation-delay: 0.1s; }
  .delay-2 { animation-delay: 0.2s; }
  .delay-3 { animation-delay: 0.3s; }
  .delay-4 { animation-delay: 0.4s; }

  .stat-card:hover {
    border-color: var(--header-blue);
    transform: translateY(-2px);
  }

  .stat-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .stat-icon-wrapper {
    font-size: 2.5rem;
    color: var(--header-blue);
  }

  .stat-right {
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .stat-label {
    font-weight: 700;
    color: #475569;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .stat-value {
    font-size: 1.75rem;
    font-weight: 800;
    color: var(--text-dark);
  }

  .stat-new {
    color: var(--red);
    font-weight: 700;
    font-size: 1.25rem;
  }

  .card-link {
    display: block;
    padding: 0.75rem;
    text-align: center;
    color: var(--header-blue);
    text-decoration: none;
    font-weight: 700;
    font-size: 0.9rem;
    border-top: 1px solid var(--border-color);
    margin-top: auto;
  }

  .card-link:hover {
    background: #f8fafc;
    color: var(--primary-blue);
  }
`;

function Dashboard() {
    const upcomingSessions = [
        { title: 'Math - Algebra 101', time: 'Today 10:00 AM', icon: 'bi-camera-video' },
        { title: 'Science - Physics', time: 'Today 1:00 PM', isLive: true },
        { title: 'History - World War II', time: 'Tomorrow 9:30 AM', icon: 'bi-display' },
    ];

    const pendingSubmissions = [
        { title: 'Essay on World War II', status: '12 Submissions Pending' },
        { title: 'Algebra Homework', status: '8 Assignments Pending' },
        { title: 'Science Lab Report', status: '5 Reports Pending' },
        { title: 'Geography Project', status: '3 Projects Pending' },
    ];

    return (
        <>
            <style>{styles}</style>
            <div className="teacher-dashboard-body animate-fade-in">
                <div className="row g-4">
                    {/* Upcoming Sessions */}
                    <div className="col-lg-4 col-md-6 animate-fade-up delay-1">
                        <div className="dashboard-card border-primary" style={{ borderWidth: '1.5px' }}>
                            <div className="sessions-header">Upcoming Sessions</div>
                            <div className="sessions-list">
                                {upcomingSessions.map((session, idx) => (
                                    <div className="session-item" key={idx}>
                                        <div className="session-info">
                                            <h5>{session.title}</h5>
                                            <p>{session.time}</p>
                                        </div>
                                        <div className="session-actions">
                                            {session.isLive ? (
                                                <span className="live-badge">LIVE</span>
                                            ) : (
                                                <i className={`session-icon bi ${session.icon}`}></i>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-auto">
                                <div style={{ height: '40px', borderBottom: '1px solid var(--border-color)' }}></div>
                                <a href="#" className="card-link">
                                    View Full Schedule <i className="bi bi-chevron-right" style={{ fontSize: '0.8rem' }}></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Pending Submissions */}
                    <div className="col-lg-4 col-md-6 animate-fade-up delay-2">
                        <div className="dashboard-card">
                            <div className="submissions-header">
                                <h2>Pending Submissions</h2>
                                <p>Tasks Awaiting Review</p>
                            </div>
                            <div className="submissions-list">
                                {pendingSubmissions.map((sub, idx) => (
                                    <div className="submission-item" key={idx}>
                                        <i className="bi bi-play-fill"></i>
                                        <div className="submission-info">
                                            <h5>{sub.title}</h5>
                                            <p>{sub.status}</p>
                                        </div>
                                        <i className="bi bi-chevron-right chevron-icon"></i>
                                    </div>
                                ))}
                            </div>
                            <a href="#" className="card-link">
                                See All Submissions <i className="bi bi-chevron-right" style={{ fontSize: '0.8rem' }}></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="col-lg-4 col-md-12 animate-fade-up delay-3">
                        <div className="dashboard-card">
                            <div className="actions-header">Quick Actions</div>
                            <div className="actions-container">
                                <a href="#" className="action-btn btn-orange">
                                    <i className="bi bi-file-earmark-text"></i>
                                    <span>Create Assignment</span>
                                </a>
                                <a href="#" className="action-btn btn-green">
                                    <i className="bi bi-question-square"></i>
                                    <span>Give a Quiz</span>
                                </a>
                                <a href="#" className="action-btn btn-blue">
                                    <i className="bi bi-chat-dots"></i>
                                    <span>Start Discussion</span>
                                </a>
                                <a href="#" className="action-btn btn-red">
                                    <i className="bi bi-calendar-event"></i>
                                    <span>Schedule a Class</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Class Overview */}
                <div className="overview-card animate-fade-up delay-4">
                    <div className="overview-header">Class Overview</div>
                    <div className="overview-grid">
                        <div className="stat-card">
                            <div className="stat-icon-box bg-blue-light">
                                <i className="bi bi-people-fill"></i>
                            </div>
                            <div className="stat-content">
                                <div className="stat-label">Total Students</div>
                                <div className="stat-value">120</div>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon-box bg-green-light">
                                <i className="bi bi-journal-check"></i>
                            </div>
                            <div className="stat-content">
                                <div className="stat-label">Assignments Due</div>
                                <div className="stat-value">14</div>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon-box bg-green-light">
                                <i className="bi bi-check-square-fill"></i>
                            </div>
                            <div className="stat-content">
                                <div className="stat-label">Tasks to Grade</div>
                                <div className="stat-value">28</div>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon-box bg-red-light">
                                <i className="bi bi-chat-dots-fill"></i>
                            </div>
                            <div className="stat-content">
                                <div className="stat-label">Messages</div>
                                <div className="stat-value">
                                    6 <span className="stat-new-pill">NEW</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;