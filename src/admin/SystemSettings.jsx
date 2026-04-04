import React from 'react';

const styles = `
  .settings-container {
    padding: 2rem;
    font-family: 'Inter', sans-serif;
    color: #0f172a;
    max-width: 1200px;
  }

  .page-header {
    margin-bottom: 2.5rem;
  }

  .settings-grid {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 2.5rem;
  }

  .settings-sidebar {
    background: white;
    border-radius: 20px;
    border: 1px solid rgba(0,0,0,0.05);
    padding: 1.5rem;
    height: fit-content;
  }

  .sidebar-item {
    padding: 0.85rem 1.25rem;
    border-radius: 12px;
    font-weight: 700;
    color: #64748b;
    margin-bottom: 0.5rem;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .sidebar-item:hover {
    background: #f8fafc;
    color: #3b82f6;
  }

  .sidebar-item.active {
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    color: white;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  }

  .settings-content-card {
    background: white;
    border-radius: 24px;
    border: 1px solid rgba(0,0,0,0.05);
    padding: 2rem;
    box-shadow: 0 10px 25px rgba(0,0,0,0.03);
  }

  .setting-section {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1.5px solid #f1f5f9;
  }

  .setting-section:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .setting-title {
    font-size: 1.15rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
  }

  .setting-desc {
    color: #64748b;
    font-size: 0.85rem;
    margin-bottom: 1.5rem;
  }

  .form-group {
    margin-bottom: 1.25rem;
  }

  .form-label {
    display: block;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #475569;
    font-size: 0.9rem;
  }

  .form-control {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1.5px solid #e2e8f0;
    border-radius: 12px;
    font-size: 0.95rem;
  }

  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 44px;
    height: 24px;
  }

  .toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .toggle-slider {
    position: absolute;
    cursor: pointer;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: #e2e8f0;
    transition: .4s;
    border-radius: 34px;
  }

  .toggle-slider:before {
    position: absolute;
    content: "";
    height: 18px; width: 18px;
    left: 3px; bottom: 3px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }

  input:checked + .toggle-slider {
    background-color: #3b82f6;
  }

  input:checked + .toggle-slider:before {
    transform: translateX(20px);
  }

  .toggle-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: #f8fafc;
    border-radius: 12px;
    margin-bottom: 1rem;
  }

  .btn-save {
     background: linear-gradient(135deg, #10b981, #059669);
     border: none;
     padding: 0.85rem 2rem;
     border-radius: 12px;
     color: white;
     font-weight: 800;
     cursor: pointer;
     transition: all 0.3s;
     box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  }

  .btn-save:hover {
     transform: translateY(-2px);
     box-shadow: 0 8px 16px rgba(16, 185, 129, 0.4);
  }

  .animate-fade-up {
    animation: fadeInUp 0.6s ease-out forwards;
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 991px) {
    .settings-grid { grid-template-columns: 1fr; }
  }
`;

function SystemSettings() {
  return (
    <>
      <style>{styles}</style>
      <div className="settings-container animate-fade-up">
        <div className="page-header">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>System Settings</h2>
        </div>

        <div className="settings-grid">
          <div className="settings-sidebar">
            <div className="sidebar-item active"><i className="bi bi-gear-fill"></i> Site Settings</div>
            <div className="sidebar-item"><i className="bi bi-bell-fill"></i> Notifications</div>
            <div className="sidebar-item"><i className="bi bi-shield-lock-fill"></i> Security</div>
            <div className="sidebar-item"><i className="bi bi-credit-card-fill"></i> Payments</div>
            <div className="sidebar-item"><i className="bi bi-cloud-upload-fill"></i> Backups</div>
          </div>

          <div className="settings-content-card">
            <div className="setting-section">
              <h3 className="setting-title">General Configuration</h3>
              <p className="setting-desc">Configure your site title, logo, and basic metadata.</p>
              <div className="form-group">
                <label className="form-label">Site Name</label>
                <input type="text" className="form-control" defaultValue="EduVerse Learning Console" />
              </div>
              <div className="form-group">
                <label className="form-label">Support Email</label>
                <input type="email" className="form-control" defaultValue="support@eduverse.com" />
              </div>
            </div>

            <div className="setting-section">
              <h3 className="setting-title">System Controls</h3>
              <p className="setting-desc">Manage core features and platform availability.</p>

              <div className="toggle-group">
                <div style={{ fontWeight: 700 }}>Maintenance Mode</div>
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="toggle-group">
                <div style={{ fontWeight: 700 }}>User Registration</div>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="toggle-group">
                <div style={{ fontWeight: 700 }}>Email Verification</div>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>

            <div style={{ textAlign: 'right', marginTop: '2rem' }}>
              <button className="btn-save">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SystemSettings;
