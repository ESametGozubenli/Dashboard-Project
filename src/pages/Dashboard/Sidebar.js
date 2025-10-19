import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/icons/dashboard-home.svg";
import { ReactComponent as TablesIcon } from "../../assets/icons/dashboard-tables.svg";
import { ReactComponent as BillingIcon } from "../../assets/icons/dashboard-billing.svg";
import { ReactComponent as RtlIcon } from "../../assets/icons/dashboard-rtl.svg";
import { ReactComponent as ProfileIcon } from "../../assets/icons/dashboard-profile.svg";
import { ReactComponent as SignInIcon } from "../../assets/icons/dashboard-signin.svg";
import { ReactComponent as SignUpIcon } from "../../assets/icons/dashboard-signup.svg";
import { ReactComponent as HelpIcon } from "../../assets/icons/help.svg";

import "../styles/dashboard-sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="Sidebar">
        <div className="sidebar-header hasBorder"></div>
        <div className="sidebar-menu">
          <button>
            <span className="icon-bg">
              <HomeIcon className="icon" />
            </span>
            <span>Dashboard</span>
          </button>
          <button>
            <span className="icon-bg">
              <TablesIcon className="icon" />
            </span>
            <span>Tables</span>
          </button>
          <button>
            <span className="icon-bg">
              <BillingIcon className="icon" />
            </span>
            <span>Billing</span>
          </button>
          <button>
            <span className="icon-bg">
              <RtlIcon className="icon" />
            </span>
            <span>RTL</span>
          </button>
          <h5>ACCOUNT PAGES</h5>
          <button>
            <span className="icon-bg">
              <ProfileIcon className="icon" />
            </span>
            <span>Profile</span>
          </button>
          <button onClick={() => navigate("/")}>
            <span className="icon-bg">
              <SignInIcon className="icon" />
            </span>
            <span>Sign In</span>
          </button>
          <button onClick={() => navigate("/Sign-Up")}>
            <span className="icon-bg">
              <SignUpIcon className="icon" />
            </span>
            <span>Sign Up</span>
          </button>
        </div>
        <div className="help-box">
          <button className="help-icon-btn">
            <HelpIcon className="help-icon" />
          </button>
          <p>Need help?</p>
          <p>Please check our docs</p>
          <button className="help-submit-btn">DOCUMENTATİON</button>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
