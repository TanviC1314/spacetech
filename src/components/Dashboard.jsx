import React, { useState } from 'react';
import { PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Sun, Wind, Activity, Zap } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('3-Day Forecast');

  const pieData = [
    { name: 'X-Class', value: 5 },
    { name: 'M-Class', value: 15 },
    { name: 'C-Class', value: 40 },
    { name: 'B-Class', value: 30 },
    { name: 'A-Class', value: 10 },
  ];

  const areaData = [
    { name: 'Day 1', 'Solar Wind Speed': 400, 'Kp Index': 3 },
    { name: 'Day 2', 'Solar Wind Speed': 450, 'Kp Index': 4 },
    { name: 'Day 3', 'Solar Wind Speed': 500, 'Kp Index': 5 },
    { name: 'Day 4', 'Solar Wind Speed': 420, 'Kp Index': 3 },
    { name: 'Day 5', 'Solar Wind Speed': 480, 'Kp Index': 4 },
  ];

  const COLORS = ['#FFB3BA', '#BAFFC9', '#BAE1FF', '#FFFFBA', '#FFD9BA'];

  const renderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    return (
      <g>
        <text x={cx} y={cy} dy={-10} textAnchor="middle" fill={fill} style={{ fontSize: '14px', fontWeight: 'bold' }}>
          {payload.name}
        </text>
        <text x={cx} y={cy} dy={20} textAnchor="middle" fill="#666" style={{ fontSize: '12px' }}>
          {`${value} (${(percent * 100).toFixed(0)}%)`}
        </text>
        <Pie
          data={[{ name: '', value: 100 }]}
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          fill="none"
          stroke="#e0e0e0"
        />
      </g>
    );
  };

  const styles = {
    dashboard: {
      padding: '24px',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '24px',
      textAlign: 'center',
    },
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '20px',
      marginBottom: '32px',
    },
    card: {
      background: '#ffffff',
      borderRadius: '8px',
      padding: '16px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    },
    cardTitle: {
      fontSize: '16px',
      fontWeight: 'semibold',
      color: '#555',
      marginTop: '12px',
      marginBottom: '8px',
    },
    cardValue: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#333',
    },
    cardSubValue: {
      fontSize: '12px',
      color: '#777',
    },
    chartContainer: {
      background: '#ffffff',
      borderRadius: '8px',
      padding: '16px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
      marginBottom: '24px',
    },
    chartTitle: {
      fontSize: '18px',
      fontWeight: 'semibold',
      color: '#333',
      marginBottom: '16px',
    },
    tabContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '24px',
    },
    tab: {
      padding: '8px 16px',
      borderRadius: '4px',
      marginRight: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease, color 0.2s ease',
      border: 'none',
      outline: 'none',
    },
    activeTab: {
      backgroundColor: '#f0f0f0',
      color: '#333',
    },
    inactiveTab: {
      backgroundColor: '#ffffff',
      color: '#777',
    },
    tabContent: {
      background: '#ffffff',
      borderRadius: '8px',
      padding: '16px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    },
  };

  return (
    <div style={styles.dashboard}>
      <h1 style={styles.title}>Space Weather Dashboard</h1>
      
      <div style={styles.cardGrid}>
        <div style={{...styles.card, backgroundColor: '#FFF5F5'}} className="dashboard-card">
          <Wind size={36} color="#FF9999" className="dashboard-icon" />
          <h3 style={styles.cardTitle}>Solar Wind Speed</h3>
          <p style={styles.cardValue}>450 km/s</p>
          <p style={styles.cardSubValue}>+12% from last hour</p>
        </div>
        <div style={{...styles.card, backgroundColor: '#F5F5FF'}} className="dashboard-card">
          <Activity size={36} color="#9999FF" className="dashboard-icon" />
          <h3 style={styles.cardTitle}>Kp Index</h3>
          <p style={styles.cardValue}>4</p>
          <p style={styles.cardSubValue}>Active</p>
        </div>
        <div style={{...styles.card, backgroundColor: '#FFFFF5'}} className="dashboard-card">
          <Sun size={36} color="#FFFF99" className="dashboard-icon" />
          <h3 style={styles.cardTitle}>X-Ray Flux</h3>
          <p style={styles.cardValue}>C2.3</p>
          <p style={styles.cardSubValue}>Low solar activity</p>
        </div>
        <div style={{...styles.card, backgroundColor: '#FFF5FF'}} className="dashboard-card">
          <Zap size={36} color="#FF99FF" className="dashboard-icon" />
          <h3 style={styles.cardTitle}>CME Probability</h3>
          <p style={styles.cardValue}>65%</p>
          <p style={styles.cardSubValue}>High likelihood in next 24h</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
        <div style={styles.chartContainer}>
          <h3 style={styles.chartTitle}>Solar Flare Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                activeShape={renderActiveShape}
                startAngle={180}
                endAngle={0}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div style={styles.chartContainer}>
          <h3 style={styles.chartTitle}>5-Day Forecast</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={areaData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="Solar Wind Speed" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
              <Area type="monotone" dataKey="Kp Index" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={styles.tabContainer}>
        {['3-Day Forecast', 'Current Conditions', 'Active Alerts'].map((tab) => (
          <button
            key={tab}
            style={{
              ...styles.tab,
              ...(activeTab === tab ? styles.activeTab : styles.inactiveTab),
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div style={styles.tabContent}>
        {activeTab === '3-Day Forecast' && (
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '12px' }}>3-Day Space Weather Forecast</h4>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Day 1: Moderate solar activity expected</li>
              <li>Day 2: High likelihood of geomagnetic storms</li>
              <li>Day 3: Solar wind speeds increasing</li>
            </ul>
          </div>
        )}
        {activeTab === 'Current Conditions' && (
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '12px' }}>Current Space Weather Conditions</h4>
            <p>Solar wind speed: 450 km/s</p>
            <p>Interplanetary magnetic field: 5 nT</p>
            <p>X-ray flux: C2.3</p>
          </div>
        )}
        {activeTab === 'Active Alerts' && (
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '12px' }}>Active Space Weather Alerts</h4>
            <p style={{ color: '#d32f2f', fontWeight: 'medium' }}>Geomagnetic Storm Watch: G2 (Moderate) level storm expected in next 24 hours</p>
            <p style={{ color: '#f57c00', fontWeight: 'medium' }}>Solar Radiation Storm: S1 (Minor) radiation storm in progress</p>
          </div>
        )}
      </div>
      <style jsx>{`
        .dashboard-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .dashboard-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }
        .dashboard-icon {
          transition: transform 0.3s ease;
        }
        .dashboard-card:hover .dashboard-icon {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default Dashboard;

