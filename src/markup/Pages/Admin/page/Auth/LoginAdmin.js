import React, { Component } from 'react';

import "./../../assets/css/nucleo-icons.css";
import "./../../assets/css/nucleo-svg.css";
import "./../../assets/css/material-dashboard.min.css";
import "./../../assets/css/material-dashboard.css";
import loginbg from './../../../../../images/background/contactus.jpg';

import { Link } from 'react-router-dom';

// import { Link } from '@material-ui/core';

class LoginAdmin extends Component {
  render() {
    return (
      <>


        <main className="main-content  mt-0">
          <div className="page-header align-items-start min-vh-100" style={{ backgroundImage: "url(" + loginbg + ")" }}>
            <span className="mask bg-gradient-dark opacity-6"></span>
            <div className="container my-auto">
              <div className="row">
                <div className="col-lg-4 col-md-8 col-12 mx-auto">
                  <div className="card z-index-0 fadeIn3 fadeInBottom">
                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                      <div className="bg-gradient-success  shadow-success  border-radius-lg py-3 pe-1">
                        <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">تسجيل دخول</h4>
                        <div className="row mt-3">
                          <div className="col-12 text-center ms-auto">
                            <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">جمعية المحافظة على القران الكريم</h4>
                          </div>


                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <form role="form" className="text-start">
                        <div className="form-group input-group-outline my-3">
                          <label className="form-label">البريد الالكتروني</label>
                          <input type="email" className="form-control" />
                        </div>
                        <div className="form-group input-group-outline mb-3">
                          <label className="form-label">كلمة المرور</label>
                          <input type="password" className="form-control" />
                        </div>

                        <div className="text-center">
                          <button type="button" className="btn bg-gradient-success  w-100 my-4 mb-2">تسجيل دخول</button>
                          <br></br>
                          <Link to="/dashboard" className="btn bg-gradient-success  w-100 my-4 mb-2">لوحة التحكم</Link>
                        </div>

                      </form>
                    </div>
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
export default LoginAdmin;