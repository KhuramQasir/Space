import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom"; 

const SideBar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 991);
    const location = useLocation(); 

    useEffect(() => {
        const handleResize = () => {
            setSidebarOpen(window.innerWidth >= 991);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
            <header>
                <div className="image-text">
                    <span className="image">
                        <img src="src/assets/images/Space.svg" alt="Dashboard Icon" className="i" />
                    </span>
                    <div className="text header-text">
                        <h2 className="name1">SpaceX</h2>
                    </div>
                </div>

                <div className="menu-bar">
                    <div className="menu">
                        <ul className="menu-link">
                            <li
                                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                            >
                                <Link to="/">  
                                    <img
                                        src="src/assets/images/CompanyInfo.svg"
                                        alt="Dashboard Icon"
                                        className="icon"
                                    />
                                    <span className="text nav-text">
                                        Company Info &nbsp; &gt;
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="menu">
                        <ul className="menu-link">
                            <li
                                className={`nav-link ${location.pathname === "/history" ? "active" : ""}`}
                            >
                                <Link to="/history">  
                                    <img
                                        src="src/assets/images/History.svg"
                                        alt="History Icon"
                                        className="icon"
                                    />
                                    <span className="text nav-text">
                                        History &nbsp; &nbsp; &gt;
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="menu">
                        <ul className="menu-link">
                            <li
                                className={`nav-link ${location.pathname === "/mission" ? "active" : ""}`}
                            >
                                <Link to="/mission"> 
                                    <img
                                        src="src/assets/images/Menu.svg"
                                        alt="Icon"
                                        className="icon"
                                    />
                                    <span className="text nav-text">
                                        Missions &nbsp; &nbsp; &gt;
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="menu">
                        <ul className="menu-link">
                            <li
                                className={`nav-link ${location.pathname === "/ships" ? "active" : ""}`}
                            >
                                <Link to="/ships"> 
                                    <img
                                        src="src/assets/images/Menu.svg"
                                        alt="Icon"
                                        className="icon"
                                    />
                                    <span className="text nav-text">
                                        Ships &nbsp; &nbsp; &gt;
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <img
                        className={`upgrade ${isSidebarOpen ? "open" : "closed"}`}
                        src="src/assets/images/GetProNow.png"
                        alt="Upgrade"
                    />
                    <div className="profile">
                        <div className="round">
                            <img
                                src="src/assets/images/Ellipse 8.png"
                                alt="Profile"
                                className="iprofile"
                            />
                            <h3 className="Evano">Evano</h3>
                        </div>
                    </div>
                </div>
            </header>
        </nav>
    );
};

export default SideBar;
