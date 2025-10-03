import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  // Mock data - in real app, this would come from API
  const userData = {
    name: 'Ahmed Al-Saud',
    upcomingVisits: [
      { id: 1, prisoner: 'Mohammed Al-Saud', date: '2024-01-15', time: '14:00', status: 'Confirmed' },
      { id: 2, prisoner: 'Mohammed Al-Saud', date: '2024-01-22', time: '10:30', status: 'Pending' }
    ],
    recentActivity: [
      { id: 1, action: 'Visit Requested', date: '2024-01-10', status: 'Approved' },
      { id: 2, action: 'Profile Updated', date: '2024-01-08', status: 'Completed' }
    ]
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome back, {userData.name}</h1>
        <p>Here's your visitation overview</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon">📅</div>
          <div className="stat-info">
            <h3>Upcoming Visits</h3>
            <p className="stat-number">2</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-info">
            <h3>Completed</h3>
            <p className="stat-number">12</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏳</div>
          <div className="stat-info">
            <h3>Pending</h3>
            <p className="stat-number">1</p>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="content-section">
          <h2>Upcoming Visits</h2>
          <div className="visits-list">
            {userData.upcomingVisits.map(visit => (
              <div key={visit.id} className="visit-card">
                <div className="visit-info">
                  <h4>Visit with {visit.prisoner}</h4>
                  <p>{visit.date} at {visit.time}</p>
                </div>
                <div className={`visit-status ${visit.status.toLowerCase()}`}>
                  {visit.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="content-section">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            {userData.recentActivity.map(activity => (
              <div key={activity.id} className="activity-item">
                <div className="activity-details">
                  <p className="activity-action">{activity.action}</p>
                  <span className="activity-date">{activity.date}</span>
                </div>
                <div className={`activity-status ${activity.status.toLowerCase()}`}>
                  {activity.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;