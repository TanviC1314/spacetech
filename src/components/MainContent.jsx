import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Dashboard from './Dashboard';

function MainContent({ sidebarOpen }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Exploring Our Solar System",
      subtitle: "Journey through the cosmos with cutting-edge research.",
    },
    {
      title: "Unraveling Space Mysteries",
      subtitle: "Discover the latest in space science and exploration.",
    },
    {
      title: "Advancing Space Technologies",
      subtitle: "Pushing the boundaries of scientific knowledge.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const cards = [
    { 
      title: 'Weather Forecast', 
      description: 'Stay informed with our latest weather updates and predictions.', 
      icon: 'cloud',
      image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&w=300&q=80',
      link: '#weather-forecast'
    },
    { 
      title: 'Ocean Research', 
      description: 'Explore groundbreaking discoveries in oceanography and marine science.', 
      icon: 'droplet',
      image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=300&q=80',
      link: '#ocean-research'
    },
    { 
      title: 'Climate Change', 
      description: 'Analyze the impacts of climate change and our ongoing mitigation efforts.', 
      icon: 'thermometer',
      image: 'https://assets.science.nasa.gov/dynamicimage/assets/science/esd/climate/internal_resources/2719/effectsbannernew-opt.jpeg?w=4096&format=jpeg&fit=clip&crop=faces%2Cfocalpoint',
      link: '#climate-change'
    },
    { 
      title: 'Marine Life', 
      description: 'Investigate diverse marine ecosystems and species in our oceans.', 
      icon: 'fish',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80',
      link: '#marine-life'
    },
  ];

  const styles = {
    mainContent: {
      marginLeft: '-20px',
      padding: '0',
      transition: 'padding-left 0.3s ease-in-out',
    },
    sidebarOpen: {
      paddingLeft: '16px',
    },
    hero: {
      position: 'relative',
      height: '400px',
      overflow: 'hidden',
      background: 'linear-gradient(to bottom, #000033, #000066)',
    },
    heroContent: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      color: 'white',
      zIndex: 1,
    },
    heroTitle: {
      fontSize: '42px',
      fontWeight: 'bold',
      marginBottom: '16px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    },
    heroSubtitle: {
      fontSize: '20px',
      textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
    },
    cardContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px',
      padding: '32px',
    },
    card: {
      background: 'linear-gradient(135deg, #ffffff, #f0f0f0)',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    cardContent: {
      padding: '24px',
    },
    cardTitle: {
      fontSize: '22px',
      fontWeight: 'bold',
      marginBottom: '12px',
      color: '#333',
    },
    cardDescription: {
      color: '#555',
      marginBottom: '20px',
      fontSize: '16px',
      lineHeight: '1.5',
    },
    learnMore: {
      display: 'inline-flex',
      alignItems: 'center',
      color: '#0073CF',
      textDecoration: 'none',
      fontWeight: '600',
      transition: 'color 0.2s ease',
      fontSize: '16px',
    },
    learnMoreIcon: {
      marginLeft: '8px',
      transition: 'transform 0.2s ease',
    },
  };

  return (
    <main style={{...styles.mainContent, ...(sidebarOpen ? styles.sidebarOpen : {})}}>
      <div style={styles.hero}>
        <svg width="100%" height="100%" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="starGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#space-background)" />
          {[...Array(150)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1000}
              cy={Math.random() * 400}
              r={Math.random() * 2}
              fill="url(#starGradient)"
            >
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur={`${Math.random() * 3 + 2}s`}
                repeatCount="indefinite"
                begin={`${Math.random() * 3}s`}
              />
            </circle>
          ))}
          {[...Array(1)].map((_, i) => ( // Reduced number of shooting stars
            <line
              key={`shooting-star-${i}`}
              x1={Math.random() * 1000}
              y1={Math.random() * 200}
              x2={Math.random() * 1000}
              y2={Math.random() * 200 + 200}
              stroke="white"
              strokeWidth="1"
              opacity="0"
            >
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur="3s"
                repeatCount="indefinite"
                begin={`${Math.random() * 10}s`}
              />
            </line>
          ))}
          <circle cx="500" cy="200" r="50" fill="url(#planet-gradient)">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 20,-20; 0,0; -20,20; 0,0"
              dur="10s"
              repeatCount="indefinite"
            />
          </circle>
          <path d="M480 170 Q500 120 520 170 L510 190 Q500 200 490 190 Z" fill="#4ECDC4">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 500 200"
              to="360 500 200"
              dur="20s"
              repeatCount="indefinite"
            />
          </path>
          <circle cx="550" cy="180" r="10" fill="#A9A9A9">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 500 200"
              to="360 500 200"
              dur="15s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>{slides[currentSlide].title}</h1>
          <p style={styles.heroSubtitle}>{slides[currentSlide].subtitle}</p>
        </div>
      </div>
      
      <Dashboard />
      
      <div style={styles.cardContainer}>
        {cards.map((card, index) => (
          <div key={index} style={styles.card} className="animated-card">
            <img src={card.image} alt={card.title} style={{ width: '100%', height: 'auto' }} />
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>{card.title}</h3>
              <p style={styles.cardDescription}>{card.description}</p>
              <a href={card.link} style={styles.learnMore} className="learn-more-link">
                Learn More <ArrowRight size={18} style={styles.learnMoreIcon} />
              </a>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        :global(#space-background) {
          fill: url(#space-gradient);
          animation: gradientAnimation 15s ease infinite;
        }
        
        :global(#space-gradient) {
          --color-1: #000033;
          --color-2: #000066;
          --color-3: #0000AA;
        }
        
        :global(#planet-gradient) {
          --planet-color-1: #FF6B6B;
          --planet-color-2: #FF8E8E;
        }
        
        .animated-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .animated-card:hover {
          transform: translateY(-5px) scale(1.03);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        .learn-more-link:hover svg {
          transform: translateX(5px);
        }
      `}</style>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="space-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-1)" />
            <stop offset="50%" stopColor="var(--color-2)" />
            <stop offset="100%" stopColor="var(--color-3)" />
          </linearGradient>
          <radialGradient id="planet-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="var(--planet-color-1)" />
            <stop offset="100%" stopColor="var(--planet-color-2)" />
          </radialGradient>
        </defs>
      </svg>
    </main>
  );
}

export default MainContent;

