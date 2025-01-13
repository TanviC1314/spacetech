import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Data</a></li>
            <li><a href="#">Research</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Tribal & Indigenous Communities</a></li>
            <li><a href="#">Bipartisan Infrastructure Law</a></li>
            <li><a href="#">Inflation Reduction Act</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">FOIA</a></li>
            <li><a href="#">Information Quality</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect with Us</h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><Facebook size={24} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={24} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={24} /></a>
            <a href="#" aria-label="YouTube"><Youtube size={24} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 SWPC. All rights reserved.</p>
      </div>
      <style jsx>{`
        .footer {
          background: linear-gradient(to right, #003366, #004080);
          color: white;
          padding: 3rem 2rem 1rem;
          margin-left: -10px;
          margin-bottom: -10px;
          }
        .footer-content {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer-section {
          flex: 1;
          min-width: 200px;
          margin-bottom: 2rem;
        }
        .footer-section h3 {
          margin-bottom: 1rem;
          font-size: 1.2rem;
          position: relative;
        }
        .footer-section h3::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 30px;
          height: 2px;
          background-color: #ffffff;
        }
        .footer-section ul {
          list-style-type: none;
          padding: 0;
        }
        .footer-section ul li {
          margin-bottom: 0.5rem;
        }
        .footer-section a {
          color: #e0e0e0;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-section a:hover {
          color: #ffffff;
        }
        .social-icons {
          display: flex;
          gap: 1rem;
        }
        .social-icons a {
          color: #ffffff;
          transition: transform 0.3s ease;
        }
        .social-icons a:hover {
          transform: scale(1.1);
        }
        .footer-bottom {
          text-align: center;
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
      `}</style>
    </footer>
  );
}

export default Footer;

