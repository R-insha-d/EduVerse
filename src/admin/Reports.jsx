import React from 'react';

const styles = `
  .reports-container {
    padding: 2rem;
    font-family: 'Inter', sans-serif;
    color: #0f172a;
    max-width: 1400px;
  }

  .page-header {
    margin-bottom: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btn-download {
    background: white;
    border: 2px solid #3b82f6;
    padding: 0.75rem 1.5rem;
    border-radius: 12px;
    color: #3b82f6;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .btn-download:hover {
    background: #3b82f6;
    color: white;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  }

  .reports-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .chart-card {
    background: white;
    border-radius: 24px;
    border: 1px solid rgba(0,0,0,0.05);
    padding: 2rem;
    box-shadow: 0 10px 25px rgba(0,0,0,0.03);
    min-height: 400px;
    display: flex;
    flex-direction: column;
  }

  .chart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .chart-header h3 {
    font-size: 1.25rem;
    font-weight: 800;
    margin: 0;
  }

  .chart-placeholder {
    flex-grow: 1;
    background: #f8fafc;
    border: 2px dashed #e2e8f0;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #64748b;
    font-weight: 700;
  }

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .metric-card {
    background: white;
    border-radius: 16px;
    border: 1px solid rgba(0,0,0,0.05);
    padding: 1.5rem;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0,0,0,0.01);
    transition: all 0.3s ease;
  }

  .metric-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 20px rgba(0,0,0,0.04);
  }

  .metric-label {
    font-size: 0.8rem;
    color: #64748b;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .metric-value {
    font-size: 1.75rem;
    font-weight: 800;
    color: #0f172a;
  }

  .metric-change {
    font-size: 0.8rem;
    font-weight: 700;
    margin-top: 0.25rem;
  }

  .text-up { color: #10b981; }
  .text-down { color: #ef4444; }

  .animate-fade-up {
    animation: fadeInUp 0.6s ease-out forwards;
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 991px) {
    .reports-grid { grid-template-columns: 1fr; }
    .metrics-grid { grid-template-columns: 2fr 2fr; }
  }

  @media (max-width: 575px) {
    .metrics-grid { grid-template-columns: 1fr; }
  }
`;

function Reports() {
  return (
    <>
      <style>{styles}</style>
      <div className="reports-container animate-fade-up">
        <div className="page-header">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Executive Reports</h2>
          <button className="btn-download"><i className="bi bi-download"></i> Export Data</button>
        </div>

        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-label">Monthly Revenue</div>
            <div className="metric-value">$42,500</div>
            <div className="metric-change text-up"><i className="bi bi-arrow-up"></i> 12.5%</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">New Registrations</div>
            <div className="metric-value">1,450</div>
            <div className="metric-change text-up"><i className="bi bi-arrow-up"></i> 8.2%</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Active Courses</div>
            <div className="metric-value">124</div>
            <div className="metric-change text-up"><i className="bi bi-arrow-up"></i> 4.1%</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Avg. Rating</div>
            <div className="metric-value">4.8</div>
            <div className="metric-change text-down"><i className="bi bi-arrow-down"></i> 0.2%</div>
          </div>
        </div>

        <div className="reports-grid">
          <div className="chart-card">
            <div className="chart-header">
              <h3>Enrollment Growth</h3>
              <select style={{ padding: '0.4rem', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                <option>Yearly</option>
                <option>Monthly</option>
              </select>
            </div>
            <div className="chart-placeholder">
              <div style={{ textAlign: 'center' }}>
                <i className="bi bi-bar-chart-fill" style={{ fontSize: '3rem', opacity: 0.1 }}></i>
                <p>Growth Chart Data Visualization</p>
              </div>
            </div>
          </div>

          <div className="chart-card">
            <div className="chart-header">
              <h3>Revenue Distribution</h3>
              <i className="bi bi-info-circle text-muted"></i>
            </div>
            <div className="chart-placeholder">
              <div style={{ textAlign: 'center' }}>
                <i className="bi bi-pie-chart-fill" style={{ fontSize: '3rem', opacity: 0.1 }}></i>
                <p>Revenue Allocation Visualization</p>
              </div>
            </div>
          </div>
        </div>

        <div className="chart-card mt-5">
          <div className="chart-header">
            <h3>Engagement Metrics</h3>
          </div>
          <div className="chart-placeholder" style={{ minHeight: '300px' }}>
            <p>User Retention & Interaction Data Visualization</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reports;
