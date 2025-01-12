import React, { useState } from 'react';
import { Search, Bell, User } from 'lucide-react';

function Navbar({ sidebarOpen }) {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <nav className={`navbar ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="logo">EcoExplorer</div>
      <ul className="nav-links">
        {['Home', 'News', 'Data', 'Research', 'About'].map((tab) => (
          <li key={tab} className={activeTab === tab ? 'active' : ''}>
            <a href="#" onClick={() => setActiveTab(tab)}>{tab}</a>
          </li>
        ))}
      </ul>
      <div className="nav-actions">
        <button aria-label="Search"><Search size={20} /></button>
        <button aria-label="Notifications"><Bell size={20} /></button>
        <button aria-label="User Profile"><User size={20} /></button>
      </div>
      <style jsx>{`
        .navbar {
          background: linear-gradient(to right, #003366, #004080);
          padding: 0 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 60px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: padding-left 0.3s ease-in-out;
        }
        .navbar.sidebar-open {
          padding-left: 270px;
        }
        .logo {
          color: white;
          font-size: 1.5rem;
          font-weight: bold;
          margin-left:60px;
        }
        .nav-links {
          display: flex;
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
        .nav-links li {
          margin: 0 1rem;
        }
        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 0;
          transition: all 0.3s ease;
          border-bottom: 2px solid transparent;
        }
        .nav-links li.active a,
        .nav-links a:hover {
          border-bottom-color: white;
        }
        .nav-actions {
          display: flex;
          gap: 1rem;
        }
        .nav-actions button {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .nav-actions button:hover {
          transform: scale(1.1);
        }
      `}</style>
    </nav>
  );
}

export default Navbar;

