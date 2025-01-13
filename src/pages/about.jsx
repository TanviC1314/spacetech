import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// import {Rajasekhar} from

const AboutUs = ({ sidebarOpen }) => {
  const members = [
    {
      name: "Mr. Srikanth Kodeboyina",
      title: "Founder, CEO",
      organization: "Blue Eye Soft Corp, USA",
      image: "src/assets/Srikanth.jpeg",
    },
    {
      name: "Mr. Joe Yang",
      title: "Principal Commercial Officer",
      organization: "U.S. Consulate Mumbai",
      image: "src/assets/Joe.jpeg",
    },
    {
      name: "Dr. Rajasekhar Meka",
      title: "Scientist SG/ Chief Meteorologist",
      organization: "ISRO",
      image: "src/assets/Rajasekhar.jpeg",
    },
    {
      name: "Mr. Jayant Patil",
      title: "Chairman, ISpA; Advisor",
      organization: "Larsen & Toubro",
      image: "src/assets/Jayant.jpeg",
    },
    {
      name: "Ms. Nashid Chowdhury",
      title: "Investment and Trade Commissioner",
      organization: "Government of Western Australia",
      image: "src/assets/Nashid.jpeg",
    },
    {
      name: "Prof. Dibyendu Chakrabarty",
      title: "Space and Atmospheric Sciences Division",
      organization: "PRL",
      image: "src/assets/Dibyendu.jpeg",
    },
    {
      name: "Mr. Sireesh Pallikonda",
      title: "Vice President of Business Development",
      organization: "Skyroot Aerospace",
      image: "src/assets/Sireesh.jpeg",
    },
    {
      name: "Shri. Jayantibhai K. Chhadva",
      title: "Chairman",
      organization: "SAKEC",
      image: "src/assets/Jayantibhai.jpeg",
    },
    {
      name: "Shri. Navin Karamshi Shah",
      title: "Managing Trustee",
      organization: "SAKEC",
      image: "src/assets/Navin.jpeg",
    },
    {
      name: "Dr. Bhavesh Patel",
      title: "Principal",
      organization: "SAKEC",
      image: "src/assets/Bhavesh.jpeg",
    },
  ];

  return (
    <>
      <Navbar sidebarOpen={sidebarOpen} />
      <div className="content-wrapper">
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
        <div className={`main-container ${sidebarOpen ? "sidebar-open" : ""}`}>
          <div className={`main-content ${sidebarOpen ? "sidebar-open" : ""}`}>
            <div className="about-us">
              <h2 className="about-title">In The Gracious Presence Of</h2>
              <div className="member-grid">
                {members.map((member, index) => (
                  <div className="member-card" key={index}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="member-image"
                      onError={(e) => {
                        e.target.src = "";
                      }}
                    />
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-title">{member.title}</p>
                    <p className="member-organization">{member.organization}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .content-wrapper {
          display: flex;
          height: 100vh;
        }
        .main-content {
          flex-grow: 1;
          padding: 20px;
          transition: margin-left 0.3s ease-in-out;
        }
        .main-content.sidebar-open {
          margin-left: 250px; /* Adjust according to your sidebar width */
        }
        .about-us {
          padding: 20px;
          background: linear-gradient(to bottom, #e6f2ff, #ffffff);
        }
        .about-title {
          font-size: 2rem;
          color: #003366;
          text-align: center;
          margin-bottom: 30px;
        }
        .member-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }
        .member-card {
          background: #ffffff;
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
        }
        .member-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
        }
        .member-image {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin-bottom: 15px;
        }
        .member-name {
          font-size: 1.2rem;
          font-weight: bold;
          color: #003366;
          margin-bottom: 10px;
        }
        .member-title {
          font-size: 1rem;
          color: #00509e;
          margin-bottom: 5px;
        }
        .member-organization {
          font-size: 0.9rem;
          color: #777;
        }
        .home {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          margin-top: -68px;
        }
        .content-wrapper {
          display: flex;
          flex-grow: 1;
        }
        .main-container {
          flex-grow: 1;
          margin-left: 60px;
          transition: margin-left 0.3s ease-in-out, width 0.3s ease-in-out;
          width: calc(100% - 60px);
          padding: 0;
        }
        .main-container.sidebar-open {
          margin-left: 250px;
          width: calc(100% - 250px);
        }
      `}</style>
    </>
  );
};

export default AboutUs;