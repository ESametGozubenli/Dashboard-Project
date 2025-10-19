import React from "react";
import DashboardNavbar from "./DashboardNavbar";
import Sidebar from "./Sidebar";
import "../styles/dashboard.css";
import { ReactComponent as CartIcon } from "../../assets/icons/cart.svg";
import { ReactComponent as GlobeIcon } from "../../assets/icons/globe.svg";
import { ReactComponent as DocumentIcon } from "../../assets/icons/document.svg";
import { ReactComponent as WalletIcon } from "../../assets/icons/wallet.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";
import WelcomeCard from "../../assets/images/welcome-card.png";

//cart-araba, wallet, document,globe

function Dashboard() {
  return (
    <div>
      <Sidebar />
      <DashboardNavbar />
      <div className="container">
        <div className="summary-container">
          <div className="summary-box">
            <div className="summary-content">
              <p>Today's Money</p>
              <h6>$53,000</h6>
            </div>
            <div className="summary-icon">
              <WalletIcon />
            </div>
          </div>

          <div className="summary-box">
            <div className="summary-content">
              <p>Today's Users</p>
              <h6>2,300</h6>
            </div>
            <div className="summary-icon">
              <GlobeIcon />
            </div>
          </div>

          <div className="summary-box">
            <div className="summary-content">
              <p>New Clients</p>
              <h6>+3,052</h6>
            </div>
            <div className="summary-icon">
              <DocumentIcon />
            </div>
          </div>

          <div className="summary-box">
            <div className="summary-content">
              <p>Total Sales</p>
              <h6>$173,000</h6>
            </div>
            <div className="summary-icon">
              <CartIcon />
            </div>
          </div>
        </div>

        {/* Welcome-Container */}
        <div className="welcome-container">
          <img
            src={WelcomeCard}
            alt="welcomeCardBg"
            className="welcome-container-bg"
          />

          <div className="welcome-box">
            <p>Welcome back,</p>
            <h5>Mark Johnson</h5>
            <p>Glad to see you again!</p>
            <p>Ask me anythink.</p>
          </div>

          <div className="record-link">
            <a href="#">Tap to record </a>
            <ArrowIcon className="record-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
