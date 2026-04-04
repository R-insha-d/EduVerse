import React from 'react';

const styles = `
  :root {
    --primary-blue: #0f62fe;
    --bg-light: #f4f7fe;
    --card-bg: rgba(255, 255, 255, 0.95);
    --text-dark: #161616;
    --text-muted: #525252;
    --border-color: #e0e0e0;
    --tag-new: #fa4d56;
    --tag-reminder: #24a148;
    --tag-event: #4589ff;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .student-dashboard-body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-light);
    color: var(--text-dark);
    min-height: 100vh;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }

  .fw-500 { font-weight: 500 !important; }
  .fw-600 { font-weight: 600 !important; }
  .fw-700 { font-weight: 700 !important; }

  .dashboard-container {
    padding: 1.5rem 2rem;
    max-width: 1300px;
    margin: 0 auto;
  }

  .welcome-header {
    margin-bottom: 1.5rem;
  }

  .welcome-header h1 {
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 0.15rem;
    color: var(--text-dark);
  }

  .welcome-header p {
    color: var(--text-muted);
    font-size: 1rem;
  }

  @media (max-width: 575.98px) {
    .welcome-header h1 {
      font-size: 1.15rem;
    }

    .welcome-header p {
      font-size: 0.9rem;
    }

    .dashboard-container {
      padding: 1rem;
    }

    .dashboard-card-header {
      margin-bottom: 1rem;
    }
  }

  /* Animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(25px);
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
    animation: fadeInUp 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
  }

  /* Staggered load delays */
  .delay-1 { animation-delay: 0.1s; }
  .delay-2 { animation-delay: 0.2s; }
  .delay-3 { animation-delay: 0.3s; }
  .delay-4 { animation-delay: 0.4s; }

  .dashboard-card {
    background: var(--card-bg);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    box-shadow: 0 10px 30px -5px rgba(0,0,0,0.04), 0 5px 15px -5px rgba(0,0,0,0.04);
    padding: 1.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    backdrop-filter: blur(12px);
    position: relative;
    overflow: hidden;
  }

  .dashboard-card:hover {
    transform: translateY(-8px) scale(1.002);
    box-shadow: 0 32px 64px -16px rgba(0,0,0,0.12);
    border-color: rgba(15, 98, 254, 0.2);
  }

  .dashboard-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.6s;
  }

  .dashboard-card:hover::after {
    left: 100%;
  }

  .dashboard-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .dashboard-card-title {
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--text-dark);
  }

  .dashboard-card-title i {
    color: var(--primary-blue);
    background: rgba(15, 98, 254, 0.1);
    padding: 6px;
    border-radius: 8px;
    font-size: 1rem;
  }

  .schedule-table-wrapper {
    margin: 0 -1.25rem;
  }

  .schedule-table {
    width: 100%;
    border-collapse: collapse;
  }

  .schedule-table th {
    background-color: #f8f9fa;
    color: var(--text-muted);
    text-transform: uppercase;
    font-size: 0.7rem;
    letter-spacing: 0.05em;
    font-weight: 600;
    padding: 0.75rem 1.25rem;
    text-align: left;
  }

  .schedule-table td {
    padding: 0.75rem 1.25rem;
    border-bottom: 1px solid var(--border-color);
    font-size: 0.85rem;
  }

  .schedule-table tr:hover td {
    background-color: #f8faff;
  }

  .class-link {
    color: var(--primary-blue);
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
  }

  .class-link:hover {
    color: #0043ce;
  }

  .task-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.6rem;
    border-radius: 10px;
    transition: var(--transition);
    border: 1px solid transparent;
  }

  .task-item:hover {
    background-color: #f8f9fa;
    border-color: var(--border-color);
  }

  .task-checkbox {
    width: 20px;
    height: 20px;
    border-radius: 6px;
    border: 2px solid var(--border-color);
    cursor: pointer;
    appearance: none;
    display: grid;
    place-content: center;
    transition: var(--transition);
    flex-shrink: 0;
  }

  .task-checkbox:checked {
    background-color: var(--primary-blue);
    border-color: var(--primary-blue);
  }

  .task-checkbox:checked::before {
    content: "✔";
    color: white;
    font-size: 12px;
  }

  .task-due {
    color: var(--tag-new);
    font-weight: 600;
    font-size: 0.85rem;
    padding: 2px 8px;
    background: rgba(250, 77, 86, 0.1);
    border-radius: 4px;
    margin-left: 0.5rem;
    white-space: nowrap;
  }

  .tag {
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.01em;
  }

  .tag-new { color: var(--tag-new); background: rgba(250, 77, 86, 0.1); }
  .tag-reminder { color: var(--tag-reminder); background: rgba(36, 161, 72, 0.1); }
  .tag-campus-event { color: var(--tag-event); background: rgba(69, 137, 255, 0.1); }

  .task-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .announcement-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .announcement-item {
    border-left: 3px solid transparent;
    padding-left: 1rem !important;
    transition: var(--transition);
  }

  .announcement-item:hover {
    background: rgba(15, 98, 254, 0.03);
    border-left-color: var(--primary-blue);
  }

  .announcement-header {
    display: flex;
    align-items: center;
  }

  .announcement-title {
    font-size: 0.9rem;
    font-weight: 600;
  }

  .announcement-desc {
    font-size: 0.85rem;
    color: var(--text-muted);
  }

  .card-footer-btn {
    margin-top: auto;
    align-self: flex-start;
    background: transparent;
    color: var(--primary-blue);
    border: 1.5px solid var(--primary-blue);
    padding: 0.45rem 1.1rem;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: var(--transition);
    text-decoration: none;
    width: fit-content;
    cursor: pointer;
  }

  .card-footer-btn:hover {
    background-color: var(--primary-blue);
    color: white;
  }

  .student-dashboard-body ::-webkit-scrollbar { width: 8px; }
  .student-dashboard-body ::-webkit-scrollbar-track { background: var(--bg-light); }
  .student-dashboard-body ::-webkit-scrollbar-thumb { background: #ccd2e3; border-radius: 10px; }
  .student-dashboard-body ::-webkit-scrollbar-thumb:hover { background: #aeb6c9; }

  /* Mobile Responsiveness */
  @media (max-width: 991.98px) {
    .dashboard-container {
      padding: 1rem 1.25rem;
    }
    
    .welcome-header h1 {
      font-size: 1.25rem;
    }

    .dashboard-card {
      padding: 1rem;
    }
  }

  @media (max-width: 767.98px) {
    .welcome-header .d-flex {
      flex-direction: column;
      align-items: flex-start !important;
      gap: 1rem;
    }

    .welcome-header .text-end {
      text-align: left !important;
      width: 100%;
    }

    .schedule-table-wrapper {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      margin: 0 -1rem;
      padding: 0 1rem;
    }

    .schedule-table {
      min-width: 500px;
    }

    .dashboard-card-title {
      font-size: 0.95rem;
    }

    .tag {
      padding: 2px 8px;
      font-size: 0.7rem;
    }

    .task-item {
      padding: 0.5rem;
      gap: 0.75rem;
    }

    .task-item .d-flex {
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .task-due {
      margin-left: 0 !important;
      font-size: 0.75rem;
      padding: 1px 6px;
    }

    .dashboard-card-header-actions .btn {
      padding: 2px 10px;
      font-size: 0.75rem;
    }

    .dashboard-card-header {
      flex-wrap: wrap;
      gap: 1rem;
    }
  }

  @media (max-width: 575.98px) {
    .welcome-header h1 {
      font-size: 1.15rem;
    }

    .welcome-header p {
      font-size: 0.9rem;
    }

    .dashboard-container {
      padding: 1rem;
    }

    .dashboard-card-header {
      margin-bottom: 1rem;
    }
  }
`;

function Dashboard() {
    const upcomingClasses = [
        { date: 'Tue, Apr 23', time: '10:00 AM', class: 'Math 101', location: 'Room 204' },
        { date: 'Wed, Apr 24', time: '1:30 PM', class: 'History 201', location: 'Online' },
        { date: 'Thu, Apr 25', time: '9:00 AM', class: 'Biology 102', location: 'Room 105' },
        { date: 'Fri, Apr 26', time: '11:00 AM', class: 'English Literature', location: 'Online' },
    ];

    const tasks = [
        { id: 1, text: 'Complete Math Homework', completed: false },
        { id: 2, text: 'Read Chapter 5 of History Book', completed: false },
        { id: 3, text: 'Submit Biology Lab Report', completed: false, due: 'Apr 26', urgent: true },
        { id: 4, text: 'Prepare for English Quiz', completed: false },
    ];

    const announcements = [
        {
            id: 1,
            type: 'New',
            title: 'Virtual Study Session Tomorrow at 6 PM',
            desc: 'Join the Zoom link for a group study session!',
        },
        {
            id: 2,
            type: 'Reminder',
            title: 'History Project Due This Friday',
            desc: 'Make sure to submit your project by Friday.',
        },
        {
            id: 3,
            type: 'Campus Event',
            title: 'Science Fair Next Week!',
            desc: 'Sign up to participate in the annual Science Fair.',
        },
    ];

    return (
        <>
            <style>{styles}</style>
            <div className="student-dashboard-body">
                <div className="dashboard-container animate-fade-in">
                    {/* Welcome Header */}
                    <header className="welcome-header mb-3 mb-md-5 animate-fade-up delay-1">
                        <div className="d-flex justify-content-between align-items-end">
                            <div>
                                <h1>Welcome back, Alex!</h1>
                                <p className="text-muted mb-0">
                                    It's a great day to learn something new. Here's what's happening today.
                                </p>
                            </div>
                            <div className="text-end">
                                <span className="badge bg-white text-dark shadow-sm px-3 py-2 rounded-pill border">
                                    <i className="bi bi-clock me-2 text-primary"></i>
                                    {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                                </span>
                            </div>
                        </div>
                    </header>

                    <div className="row g-4">
                        {/* Upcoming Classes */}
                        <div className="col-lg-7">
                            <div className="dashboard-card h-100 shadow-lg animate-fade-up delay-2">
                                <div className="dashboard-card-header">
                                    <h2 className="dashboard-card-title">
                                        <i className="bi bi-calendar-event"></i> Upcoming Classes
                                    </h2>
                                    <div className="dashboard-card-header-actions">
                                        <i className="bi bi-three-dots-vertical"></i>
                                    </div>
                                </div>
                                <div className="schedule-table-wrapper">
                                    <table className="schedule-table">
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Time</th>
                                                <th>Course Name</th>
                                                <th>Location</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {upcomingClasses.map((item, idx) => (
                                                <tr key={idx}>
                                                    <td className="fw-500">{item.date}</td>
                                                    <td>{item.time}</td>
                                                    <td>
                                                        <a href="#" className="class-link">{item.class}</a>
                                                    </td>
                                                    <td>
                                                        {item.location === 'Online' ? (
                                                            <span className="text-primary fw-600">
                                                                <i className="bi bi-camera-video me-1"></i> Online
                                                            </span>
                                                        ) : (
                                                            <span className="text-muted">
                                                                <i className="bi bi-geo-alt me-1"></i> {item.location}
                                                            </span>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-auto pt-3 d-flex">
                                    <a href="#" className="card-footer-btn shadow-sm">
                                        <span>View Full Schedule</span>
                                        <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Tasks and Announcements */}
                        <div className="col-lg-5">
                            <div className="row g-4 h-100">
                                {/* Tasks */}
                                <div className="col-12 text-start">
                                    <div className="dashboard-card animate-fade-up delay-3">
                                        <div className="dashboard-card-header">
                                            <h2 className="dashboard-card-title">
                                                <i className="bi bi-check2-all"></i> My Tasks
                                            </h2>
                                            <div className="dashboard-card-header-actions">
                                                <button className="btn btn-sm btn-outline-primary rounded-pill me-2">
                                                    + Add Task
                                                </button>
                                                <i className="bi bi-funnel"></i>
                                            </div>
                                        </div>
                                        <div className="task-list">
                                            {tasks.map((task) => (
                                                <div className="task-item" key={task.id}>
                                                    {task.urgent ? (
                                                        <div className="task-checkbox bg-danger border-danger shadow-sm">
                                                            <i
                                                                className="bi bi-exclamation-triangle-fill text-white"
                                                                style={{ fontSize: '10px' }}
                                                            ></i>
                                                        </div>
                                                    ) : (
                                                        <input type="checkbox" className="task-checkbox" />
                                                    )}
                                                    <div className="flex-grow-1">
                                                        <div className="d-flex justify-content-between">
                                                            <span className={task.urgent ? 'fw-600' : 'fw-500'}>{task.text}</span>
                                                            {task.due && <span className="task-due">Due {task.due}</span>}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="pt-3 d-flex">
                                            <button className="card-footer-btn shadow-sm">
                                                View All Tasks <i className="bi bi-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Announcements */}
                                <div className="col-12 text-start">
                                    <div className="dashboard-card animate-fade-up delay-4">
                                        <div className="dashboard-card-header">
                                            <h2 className="dashboard-card-title">
                                                <i className="bi bi-megaphone"></i> Announcements
                                            </h2>
                                            <div className="dashboard-card-header-actions">
                                                <span className="badge bg-light text-muted fw-normal rounded-pill">3 New</span>
                                            </div>
                                        </div>
                                        <div className="announcement-list">
                                            {announcements.map((ann) => (
                                                <div className="announcement-item px-3 mb-2" key={ann.id}>
                                                    <div className="announcement-header justify-content-start mb-1">
                                                        <span className={`tag tag-${ann.type.toLowerCase().replace(' ', '-')}`}>
                                                            {ann.type}
                                                        </span>
                                                        <span className="announcement-title ms-2">{ann.title}</span>
                                                    </div>
                                                    <div className="announcement-desc ms-0 opacity-75">{ann.desc}</div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="pt-3 d-flex">
                                            <button className="card-footer-btn shadow-sm">
                                                Open Bulletin Board <i className="bi bi-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
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