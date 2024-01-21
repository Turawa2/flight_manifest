import React from "react";
import Table from "./Table";
import { useNavigate } from "react-router-dom";
import AttendedTable from "./AttendedTable";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HowToRegTwoToneIcon from "@mui/icons-material/HowToRegTwoTone";
import Checker from "../Login/Checker";

function DoctorAttendedTable() {
  const check = Checker()
  const reLocate = useNavigate();

  const handleDoctorDashboard = () => {
    reLocate("/doctorDashboard");
  };

  const handleAttendedPatient = () => {
    reLocate("/attendedPatientForDoctor");
  };
  const handleAddDoctor = () => {
    reLocate("/addDoctor");
  };
 
  return (
    <>
      <div className="container-scroller">
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
          <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <a className="navbar-brand brand-logo" href="index.html">
              <img src="/examLogo2.png" alt="logo" />
            </a>
            <a className="navbar-brand brand-logo-mini" href="index.html">
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
              Nigerian Institute Of Leather And Science Technilogy Zaria
            </div>

            <ul className="navbar-nav navbar-nav-right">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle nav-profile"
                  id="profileDropdown"
                  href="#"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="/face1.jpg" alt="image" />
                  <span className="d-none d-lg-inline">Pastor Musa</span>
                </a>
                <div
                  className="dropdown-menu navbar-dropdown w-100"
                  aria-labelledby="profileDropdown"
                >
                  <a className="dropdown-item" href="#">
                    <i className="mdi mdi-cached mr-2 text-success"></i>
                    Activity Log
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    <i className="mdi mdi-logout mr-2 text-primary"></i>
                    Signout
                  </a>
                </div>
              </li>

              <li className="nav-item nav-logout d-none d-lg-block">
                <a className="nav-link" href="#">
                  <i className="mdi mdi-power"></i>
                </a>
              </li>
            </ul>
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
                    onClick={handleDoctorDashboard}
                  >
                    <span className="menu-title">Doctor's Dashboard</span>

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
                      Attended Patience
                    </span>

                    <i className=" menu-icon">
                      <HowToRegTwoToneIcon />
                    </i>
                  </a>
                </li>

              </ul>
            </nav>

            <div className="content-wrapper">
              <AttendedTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorAttendedTable;
