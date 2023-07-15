import React, { Component } from 'react';

import "./../../assets/css/nucleo-icons.css";
import "./../../assets/css/nucleo-svg.css";
import "./../../assets/css/material-dashboard.css.map";
import "./../../assets/css/material-dashboard.min.css";
import DashboardNav from '../../components/DashboardNav';

import Sidebar from '../../components/Sidebar';

import { Link } from 'react-router-dom';

// import { Link } from '@material-ui/core';

class QualificationsAdd extends Component {
    render() {
        return (
            <>
                <Sidebar />
                <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg overflow-x-hidden ">
                <DashboardNav/>
                    <div className="container-fluid py-4">

                        <div className="row">
                            <div className="col-12">

                                <div className="card card-plain">
                                    <div className="card-header add">
                                        <h4 className="font-weight-bolder">اضافة حالة اجتماعية</h4>
                                        <p className="mb-0">الرجاء اضافة كل المطلوب</p>
                                    </div>
                                    <div className="card-body">
                                        <form role="form">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group  ">
                                                        <label  >اسم حالة اجتماعية عربي:</label>
                                                        <input type="text" className="form-control" placeholder="اسم حالة اجتماعية" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group  ">
                                                        <label  >اسم حالة اجتماعية انجليزي:</label>
                                                        <input type="text" className="form-control" placeholder="اسم v" />
                                                    </div>
                                                </div>
                                           
                                               
                                                <div className="col-md-12">
                                                <button type="button" class="btn btn-lg bg-gradient-success btn-lg w-100 mt-4 mb-0 form">اضـــافة</button>

                                                </div>

                                            </div>




                                        </form>
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
export default QualificationsAdd;