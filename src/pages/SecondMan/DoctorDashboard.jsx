import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HowToRegTwoToneIcon from "@mui/icons-material/HowToRegTwoTone";

import { useNavigate } from "react-router-dom";
import Table from "./Table";

const backgroundImageStyle1 = {
  backgroundImage: "url('/lockscreen-bg.jpg')",
  backgroundSize: "cover", // Adjust as needed
  backgroundPosition: "center", // Adjust as needed
};
const backgroundImageStyle2 = {
  backgroundImage: "url('/Login_bg2.jpg')",
  backgroundSize: "cover", // Adjust as needed
  backgroundPosition: "center", // Adjust as needed
};
const backgroundImageStyle3 = {
  backgroundImage: "url('/lockscreen-bg.jpg')",
  backgroundSize: "cover", // Adjust as needed
  backgroundPosition: "center", // Adjust as needed
};

function Dashboard () {

  const reLocate = useNavigate();

  const handleAttendedPatient = () => {
    reLocate("/addDoctor");
  };

  const handleDoctornDashboard = () => {
    reLocate("/doctorDashboard");
  };
  return (
    <>
      <div className="container-scroller">
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <a className="navbar-brand brand-logo" href="/">
           <h1 style={{marginLeft: "18px"}}>  Manifest Sytem</h1>
            </a>
            <a className="navbar-brand brand-logo-mini" href="/">
              <img src="/logo-mini.svg" alt="logo" />
            </a>
          </div>
          <div className="navbar-menu-wrapper d-flex align-items-stretch">
            <div
              className="row purchace-popup"
              style={{
                marginTop: "12px",
                marginLeft: "20px",
                fontWeight: "900",
                wordSpacing: "6px",
              }}
            >
              Nigerian College of Aviation Technilogy Zaria, 
            </div>

          
            <button
              className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
              type="button"
              data-toggle="offcanvas"
            >
              <span className="mdi mdi-menu"></span>
            </button>
          </div>
        </nav>

        <div className="container-fluid page-body-wrapper">
          <div className="row row-offcanvas row-offcanvas-right">
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
              <ul className="nav">
              <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={handleDoctornDashboard}
                  >
                    <span className="menu-title">Dashboard</span>

                    <i className=" menu-icon">
                      <DashboardIcon />
                    </i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <span
                      className="menu-title"
                      style={{ cursor: "pointer" }}
                      onClick={handleAttendedPatient}
                    >
                      Add Passenger
                    </span>

                    <i className=" menu-icon">
                      <HowToRegTwoToneIcon />
                    </i>
                  </a>
                </li>

               
              </ul>
            </nav>

            <div className="content-wrapper">
              <div className="row">
                <div className="col-md-4 stretch-card grid-margin">
                <div className="card" style={backgroundImageStyle1}>
                    <div className="card-body text-white">
                      <h4 className="font-weight-normal mb-3">Elevating travel at NCAT</h4>
                      <h2 className="font-weight-normal mb-5"> Introducing our advanced Airplane Passenger Manifest System. </h2>
                      <p className="card-text">Nigerian College of Aviation Technilogy Zaria,</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 stretch-card grid-margin">
                <div className="card" style={backgroundImageStyle2}>
                    <div className="card-body text-white">
                      <h4 className="font-weight-normal mb-3">Seamless journeys at NCAT</h4>
                      <h2 className="font-weight-normal mb-5">Our Passenger Tracking System ensures every passenger is accounted for with ease.</h2>
                      <p className="card-text">Nigerian College of Aviation Technilogy Zaria,</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 stretch-card grid-margin">
                <div className="card" style={backgroundImageStyle1}>
                    <div className="card-body text-white">
                      <h4 className="font-weight-normal mb-3">Smooth skies, precise records</h4>
                      <h2 className="font-weight-normal mb-5">NCAT's Passenger Tracking System ensures a seamless flight experience. </h2>
                      <p className="card-text">Nigerian College of Aviation Technilogy Zaria,</p>
                    </div>
                  </div>
                </div>
              </div>

              <Table />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
