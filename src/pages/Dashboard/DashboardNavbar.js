import React from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as SignInIcon } from "../../assets/icons/profile.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/settings.svg";
import { ReactComponent as BellIcon } from "../../assets/icons/bell.svg";

import "../styles/dashboard-navbar.css";
function DashboardNavbar() {
  const location = useLocation();
  const currentPath = location.pathname.split("/").filter(Boolean).join(" > ");

  return (
    <div className="Navbar">
      <div className="location">
        <div className="location-path">
          <p>Pages / </p>
          <p>{currentPath}</p>
        </div>
        <p>{currentPath}</p>
      </div>

      <div className="rigth-navbar">
        <div className="search-bar">
          <SearchIcon />
          <input type="text" placeholder="Type here..." />
        </div>
        <div className="signIn-btn">
          <button>
            <SignInIcon />
            <span>Sign In</span>
          </button>
        </div>
        <div className="">
          <button>
            <SettingsIcon />
          </button>
        </div>
        <div className="">
          <button>
            <BellIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardNavbar;
