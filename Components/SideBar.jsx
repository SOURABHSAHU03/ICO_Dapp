import React, { useState } from "react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarStyle = {
    position: "fixed",
    top: 0,
    left: isOpen ? "0" : "-320px",
    width: "300px",
    height: "100vh",
    // background: "#0f0f0f",
    background : "black",
    color: "#e0e0e0",
    transition: "left 0.4s ease",
    zIndex: 1000,
    padding: "25px 20px",
    boxShadow: "4px 0 15px rgba(0,0,0,0.6)",
    backdropFilter: "blur(8px)",
  };

  const toggleButtonStyle = {
    position: "fixed",
    top: "15px",
    left: "20px",
    zIndex: 1100,
    padding: "5px 20px",
    background: "black",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    boxShadow: "0 0 5px rgba(255,255,255,0.1)",
  };

  const closeButtonStyle = {
    fontSize: "24px",
    color: "#888",
    background: "black",
    border: "none",
    cursor: "pointer",
    float: "right",
  };

  const inputStyle = {
    width: "70%",
    padding: "10px",
    marginTop: "15px",
    borderRadius: "6px",
    backgroundColor: "#1a1a1a",
    border: "1px solid #333",
    color: "#fff",
  };

  const searchBtnStyle = {
    padding: "10px",
    marginLeft: "8px",
    background: "black ",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "6px",
  };

  const menuListStyle = {
    listStyle: "none",
    padding: 0,
    marginTop: "30px",
  };

  const menuItemStyle = {
    marginBottom: "16px",
  };

  const linkStyle = {
    color: "#e0e0e0",
    textDecoration: "none",
    fontSize: "18px",
    padding: "8px 10px",
    display: "block",
    borderRadius: "6px",
    transition: "background 0.2s",
  };

  const linkHoverStyle = {
    backgroundColor: "#222",
  };

  const logoStyle = {
    maxWidth: "100%",
    marginBottom: "20px",
    filter: "brightness(0.8)",
  };

  return (
    <>
      {/* Toggle Button */}
      <button style={toggleButtonStyle} onClick={() => setIsOpen(true)}>
        ☰ 
      </button>

      {/* Sidebar */}
      <aside style={sidebarStyle}>
        <div>
          <button style={closeButtonStyle} onClick={() => setIsOpen(false)}>
            ×
          </button>
        </div>

        <nav>
          <a href="/" style={{ display: "block", marginTop: "30px" }}>
            <img
              src="assets/img/logo/logo.svg"
              alt="logo"
              style={logoStyle}
            />
          </a>

          {/* Search */}
          <div>
            <form>
              <input type="text" placeholder="Search..." style={inputStyle} />
              <button type="submit" style={searchBtnStyle}>
                🔍
              </button>
            </form>
          </div>

          {/* Menu */}
          <ul style={menuListStyle}>
            {[
              ["Home", "/"],
              ["About", "#about"],
              ["RoadMap", "#roadmap"],
              ["Team", "#team"],
              ["Blog", "#!"],
              ["Get In Touch", "#!"],
            ].map(([name, href], index) => (
              <li
                key={index}
                style={menuItemStyle}
                onMouseEnter={(e) => (e.currentTarget.firstChild.style.background = "#222")}
                onMouseLeave={(e) => (e.currentTarget.firstChild.style.background = "transparent")}
              >
                <a href={href} style={{ ...linkStyle }}>{name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
