import React from 'react';
import { ArrowRight } from 'lucide-react';

function MainContent({ sidebarOpen }) {
  const cards = [
    { title: 'Weather Forecast', description: 'Check the latest weather updates.', icon: 'cloud' },
    { title: 'Ocean Research', description: 'Explore our latest ocean discoveries.', icon: 'droplet' },
    { title: 'Climate Change', description: 'Learn about climate change impacts.', icon: 'thermometer' },
    { title: 'Marine Life', description: 'Discover diverse marine ecosystems.', icon: 'fish' },
  ];

  return (
    <main className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="hero">
        <h1>Exploring Our Planet and Beyond</h1>
        <p>Discover the latest in environmental science and conservation.</p>
      </div>
      <div className="card-container">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="card-icon">
              <i className={`feather icon-${card.icon}`}></i>
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a href="#" className="learn-more">
              Learn More <ArrowRight size={16} />
            </a>
          </div>
        ))}
      </div>
      <style jsx>{`
        .main-content {
          padding: 0;
          transition: padding-left 0.3s ease-in-out;
        }
        .main-content.sidebar-open {
          padding-left: 1rem;
        }
        .hero {
          background: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80') no-repeat center center;
          background-size: cover;
          color: white;
          padding: 4rem 2rem;
          text-align: center;
          margin: 0;
          border-radius: 0;
          margin-left: -22px;
          
        }
        .hero h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .card-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          padding: 2rem;
        }
        .card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
        .card-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #0073CF;
        }
        .card h3 {
          margin-bottom: 0.5rem;
        }
        .learn-more {
          display: inline-flex;
          align-items: center;
          color: #0073CF;
          text-decoration: none;
          margin-top: 1rem;
          font-weight: 500;
        }
        .learn-more svg {
          margin-left: 0.5rem;
          transition: transform 0.2s ease;
        }
        .learn-more:hover svg {
          transform: translateX(3px);
        }
      `}</style>
    </main>
  );
}

export default MainContent;

