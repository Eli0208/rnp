import React from "react";
import { FaCar, FaClock } from "react-icons/fa6";
import { GiHomeGarage } from "react-icons/gi";
import "./dashboardHeader.css";

const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      <div className="dashboard-item">
        <div>
          <FaCar size={30} style={{ marginRight: "5px" }} />
        </div>
        <div style={{ fontSize: "40px" }}>100</div>
        <div>Registered Vehicles</div>
      </div>
      <div className="dashboard-item">
        <div>
          <GiHomeGarage size={30} style={{ marginRight: "5px" }} />
        </div>
        <div style={{ fontSize: "40px" }}>50</div>
        <div>Currently Parked</div>
      </div>
      <div className="dashboard-item">
        <div>
          <FaClock size={30} style={{ marginRight: "5px" }} />
        </div>
        <div style={{ fontSize: "40px" }}>20</div>
        <div>Parking within 24 Hours</div>
      </div>
    </div>
  );
};

export default DashboardHeader;
