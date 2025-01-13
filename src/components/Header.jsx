import React from 'react';
import logoL from '../assets/logoL.png';
import logoR from '../assets/logoL.png';

function Header({ className }) {
  return (
    <header className={`header ${className}`}>
      <img src={logoL} width={50} height={50} alt="Left Logo" className="left-logo" />
      <div className="header-content">
        <h1>Mahavir Education Trust's</h1>
        <h2>SHAH & ANCHOR KUTCHHI ENGINEERING COLLEGE</h2>
        <p>An Autonomous Institute Affiliated to University of Mumbai, Approved by D.T.E & A.I.C.T.E ISO 9001 CERTIFIED</p>
      </div>
      <img src={logoR} width={50} height={50} alt="Right Logo" className="right-logo" />
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-size: cover;
          background-position: center;
          padding: 1.5rem 2rem;
          color: black;
          text-align: center;
          margin-top: -12px;
          transition: margin-left 0.3s ease-in-out;
          background: linear-gradient(to right, #003366, #004080);
          color: white;
        }
        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        .left-logo {
          flex-shrink: 0;
          margin-left: 40px; 
        }
        .right-logo {
          flex-shrink: 0;
        }
        h1 {
          font-family: 'Times New Roman', serif;
          font-size: 1.5rem;
          font-weight: normal;
          margin: 0 0 0.5rem 0;
          opacity: 0.9;
        }
        h2 {
          font-size: 2rem;
          font-weight: bold;
          margin: 0 0 0.5rem 0;
          letter-spacing: 1px;
        }
        p {
          font-size: 0.9rem;
          margin: 0;
          opacity: 0.8;
        }
      `}</style>
    </header>
  );
}

export default Header;


