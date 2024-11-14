import React, { useState, useEffect } from "react";

const SideBar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 991);

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
                            <li className="nav-link">
                                <a href="/company">
                                    <img src="src/assets/images/CompanyInfo.svg" alt="Dashboard Icon" className="icon" />
                                    <span className="text nav-text">Company Info  &nbsp;  &gt;</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="menu">
                        <ul className="menu-link">
                            <li className="nav-link">
                                <a href="/history">
                                    <img src="src\assets\images\History.svg" alt="History Icon" className="icon" />
                                    <span className="text nav-text">History &nbsp; &nbsp; &gt;</span>
                                </a>
                            </li>
                        </ul>

                    </div>
                    <div className="menu">
                        <ul className="menu-link">
                            <li className="nav-link">
                                <a href="#">
                                    <img src='src\assets\images\Menu.svg' alt="Icon" className="icon" />
                                    <span className="text nav-text">Missions  &nbsp; &nbsp; &gt;</span>
                                </a>
                            </li>
                        </ul>

                    </div>
                    <img className={`upgrade ${isSidebarOpen ? "open" : "closed"}`} src="src/assets/images/GetProNow.png" alt="Upgrade" />
                    <div className="profile">
                        <div className="round ">
                            <img src="src/assets/images/Ellipse 8.png" alt="Profile" className="iprofile" />
                            <h3 className="Evano">Evano</h3>
                        </div>
                    </div>
                </div>
            </header>
         
        </nav>
    );
};

export default SideBar;


