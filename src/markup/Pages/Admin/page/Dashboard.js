import React, { Component } from 'react';

import "./../assets/css/nucleo-icons.css";
import "./../assets/css/nucleo-svg.css";
import "./../assets/css/material-dashboard.css.map";
import "./../assets/css/material-dashboard.min.css";

import Sidebar from '../components/Sidebar';


// import { Link } from '@material-ui/core';

class Dashboard extends Component {
  render() {
    return (
      <>
 
          <Sidebar />
          <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg overflow-x-hidden ">
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
            <div className="container-fluid py-4">
              <div className="row">
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                  <div className="card">
                    <div className="card-header p-3 pt-2">
                      <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                      <i className="fa fa-user me-sm-1  "></i>
                      </div>
                      <div className="text-end pt-1">
                        <p className="text-sm mb-0 text-capitalize">مستخدم</p>
                        <h4 className="mb-0">53k</h4>
                      </div>
                    </div>

                    <div className="card-footer p-3">
                      <p className="mb-0"><span className="text-success text-sm font-weight-bolder">55 </span>مستخدم</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                  <div className="card">
                    <div className="card-header p-3 pt-2">
                      <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                      <i className="fa fa-user me-sm-1  "></i>
                      </div>
                      <div className="text-end pt-1">
                        <p className="text-sm mb-0 text-capitalize">مستخدم</p>
                        <h4 className="mb-0">2,300</h4>
                      </div>
                    </div>

                    <div className="card-footer p-3">
                      <p className="mb-0"><span className="text-success text-sm font-weight-bolder">23 </span>سؤال</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                  <div className="card">
                    <div className="card-header p-3 pt-2">
                      <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                      <i className="fa fa-user me-sm-1  "></i>
                      </div>
                      <div className="text-end pt-1">
                        <p className="text-sm mb-0 text-capitalize">سؤال</p>
                        <h4 className="mb-0">3,462</h4>
                      </div>
                    </div>

                    <div className="card-footer p-3">
                      <p className="mb-0"><span className="text-danger text-sm font-weight-bolder">255</span> سؤال</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <div className="card">
                    <div className="card-header p-3 pt-2">
                      <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                      <i className="fa fa-user me-sm-1  "></i>
                      </div>
                      <div className="text-end pt-1">
                        <p className="text-sm mb-0 text-capitalize">طالب</p>
                        <h4 className="mb-0">2323</h4>
                      </div>
                    </div>

                    <div className="card-footer p-3">
                      <p className="mb-0"><span className="text-success text-sm font-weight-bolder">255 </span>طالب</p>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </main>

     



      </>
    )
  }
}
export default Dashboard;