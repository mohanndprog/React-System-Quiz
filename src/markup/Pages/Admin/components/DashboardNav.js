import React, { Component } from 'react';
import "./../assets/css/nucleo-icons.css";
import "./../assets/css/nucleo-svg.css";
 
import "./../assets/css/material-dashboard.min.css";
import "./../assets/css/material-dashboard.css";
 
const DashboardNav = () => {
 

  return (
    <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
    <div className="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 ">
                <li className="breadcrumb-item text-sm ps-2"><a className="opacity-5 text-dark" href="javascript:;">لوحة التحكم</a></li>

            </ol>

        </nav>
        <div className="collapse navbar-collapse mt-sm-0 mt-2 px-0" id="navbar">

            <ul className="navbar-nav me-auto ms-0 justify-content-end">
                <li className="nav-item d-flex align-items-center">
                    <a href="javascript:;" className="nav-link text-body font-weight-bold px-0">
                        <i className="fa fa-user me-sm-1 pl-2"></i>
                        <span className="d-sm-inline d-none">تسجيل خروح</span>
                    </a>
                </li>

            </ul>
        </div>
    </div>
</nav>
  );
};

export default DashboardNav;





