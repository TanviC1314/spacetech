import React, { useState } from 'react';
import { Search, MapPin, X } from 'lucide-react';

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen">
      <style>{`
        .nav-item {
          display: flex;
          align-items: center;
          padding: 12px 20px;
          color: white;
          text-decoration: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .nav-item:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        
        .nav-icon {
          width: 24px;
          height: 24px;
          margin-right: 12px;
        }
        
        .sidebar {
          width: 260px;
          background-color: #003087;
          position: fixed;
          height: 100vh;
          overflow-y: auto;
          transition: transform 0.3s ease;
        }
        
        .main-content {
          margin-left: 260px;
          transition: margin-left 0.3s ease;
        }
        
        .hero-section {
          position: relative;
          height: 400px;
          overflow: hidden;
        }
        
        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .hero-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2rem;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
        }
        
        .nav-tabs {
          background-color: #002255;
          display: flex;
          flex-wrap: wrap;
        }
        
        .nav-tab {
          padding: 1rem 1.5rem;
          color: white;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .nav-tab:hover {
          background-color: #003087;
        }
        
        @media (max-width: 768px) {
          .sidebar {
            transform: translateX(-100%);
          }
          
          .sidebar.open {
            transform: translateX(0);
          }
          
          .main-content {
            margin-left: 0;
          }
        }
      `}</style>

      {/* Sidebar Navigation */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="flex justify-between items-center p-4 bg-blue-900">
          <span className="text-white font-bold">Menu</span>
          <button onClick={() => setIsSidebarOpen(false)} className="text-white">
            <X size={24} />
          </button>
        </div>
        <nav>
          <a href="#" className="nav-item">
            <img src="/api/placeholder/24/24" alt="" className="nav-icon" />
            Home
          </a>
          <a href="#" className="nav-item">
            <img src="/api/placeholder/24/24" alt="" className="nav-icon" />
            Weather
          </a>
          <a href="#" className="nav-item">
            <img src="/api/placeholder/24/24" alt="" className="nav-icon" />
            Climate
          </a>
          <a href="#" className="nav-item">
            <img src="/api/placeholder/24/24" alt="" className="nav-icon" />
            Ocean & Coasts
          </a>
          <a href="#" className="nav-item">
            <img src="/api/placeholder/24/24" alt="" className="nav-icon" />
            Fisheries
          </a>
          <a href="#" className="nav-item">
            <img src="/api/placeholder/24/24" alt="" className="nav-icon" />
            Satellites
          </a>
          <a href="#" className="nav-item">
            <img src="/api/placeholder/24/24" alt="" className="nav-icon" />
            Research
          </a>
          <a href="#" className="nav-item">
            <img src="/api/placeholder/24/24" alt="" className="nav-icon" />
            Marine & Aviation
          </a>
          <a href="#" className="nav-item">
            <img src="/api/placeholder/24/24" alt="" className="nav-icon" />
            Charting
          </a>
          <a href="#" className="nav-item">
            <img src="/api/placeholder/24/24" alt="" className="nav-icon" />
            Sanctuaries
          </a>
          <a href="#" className="nav-item">
            <img src="/api/placeholder/24/24" alt="" className="nav-icon" />
            Education
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Government Banner */}
        <div className="bg-gray-100 px-4 py-1 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <span>🇺🇸</span>
            <span>An official website of the United States government</span>
          </div>
          <button className="text-blue-600 hover:underline">Here's how you know ▾</button>
        </div>

        {/* Location Bar */}
        <div className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MapPin size={20} />
            <span>Find your local weather</span>
          </div>
          <div className="flex gap-6">
            <button>News</button>
            <button>Tools</button>
            <button>About</button>
          </div>
        </div>

        {/* NOAA Header */}
        <header className="bg-blue-700 text-white p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <img src="/api/placeholder/48/48" alt="NOAA Logo" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">National Oceanic and</h1>
                <h2 className="text-xl">Atmospheric Administration</h2>
                <p className="text-sm">U.S. Department of Commerce</p>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search NOAA sites"
                className="w-64 px-4 py-2 rounded text-gray-800"
              />
              <Search className="absolute right-3 top-2.5 text-gray-500" size={20} />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <div className="hero-section">
          <img
            src="/api/placeholder/1600/400"
            alt="Iceberg in ocean"
            className="hero-image"
          />
          <div className="hero-overlay">
            <h1 className="text-6xl font-bold text-white">Climate</h1>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="nav-tabs">
          <button className="nav-tab">Climate home</button>
          <button className="nav-tab">Climate 101</button>
          <button className="nav-tab">Collaborations and partnerships</button>
          <button className="nav-tab">Funding opportunities</button>
          <button className="nav-tab">Tools and resources</button>
          <button className="nav-tab">News and stories</button>
        </div>

        {/* Feedback Banner */}
        <div className="bg-blue-600 text-white text-center py-2">
          <button className="hover:underline">Help improve this site</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;