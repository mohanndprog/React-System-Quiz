import React, { Component } from 'react';

import "./../../assets/css/nucleo-icons.css";
import "./../../assets/css/nucleo-svg.css";
import "./../../assets/css/material-dashboard.css.map";
import "./../../assets/css/material-dashboard.min.css";


import Sidebar from '../../components/Sidebar';
import DashboardNav from '../../components/DashboardNav';
import { Link } from 'react-router-dom';

// import { Link } from '@material-ui/core';

class UserAdd extends Component {
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
                                        <h4 className="font-weight-bolder">اضافة مشرف</h4>
                                        <p className="mb-0">الرجاء اضافة كل المطلوب</p>
                                    </div>
                                    <div className="card-body">
                                        <form role="form">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group  ">
                                                        <label  >الاسم الاول :</label>
                                                        <input type="text" className="form-control" placeholder="الاسم الاول" />
                                                    </div>
                                                </div>
                                               
                                                <div className="col-md-6">
                                                    <div className="form-group  ">
                                                        <label  >الاسم الثاني :</label>
                                                        <input type="text" className="form-control" placeholder="الاسم الثاني" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group  ">
                                                        <label  >الرقم الوطني :</label>
                                                        <input type="number" className="form-control" placeholder="الرقم الوطني" />
                                                    </div>
                                                </div>
                                               
                                                <div className="col-md-6">
                                                    <div className="form-group  ">
                                                        <label  >رقم الجوال :</label>
                                                        <input type="number" className="form-control" placeholder="اسم الامتحان" />
                                                    </div>
                                                </div>
                                               
                                                <div className="col-md-6">
                                                    <div className="form-group  ">
                                                        <label  >العنوان :</label>
                                                        <input type="text" className="form-control" placeholder="العنوان" />
                                                    </div>
                                                </div>
                                               
                                                <div className="col-md-6">
                                                    <div className="form-group  ">
                                                        <div class="input-group-prepend">
                                                            <label class="input-group-text" for="inputGroupSelect01">الحالة الاجتماعية :</label>
                                                        </div>
                                                        <select class="custom-select" id="inputGroupSelect01">
                                                            <option selected>اختر...</option>
                                                            <option value="1">أ</option>
                                                            <option value="1">أ</option>
                                                            <option value="1">أ</option>
                                                           
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group  ">
                                                        <div class="input-group-prepend">
                                                            <label class="input-group-text" for="inputGroupSelect01">كم يحفظ من القران :</label>
                                                        </div>
                                                        <select class="custom-select" id="inputGroupSelect01">
                                                            <option selected>اختر...</option>
                                                            <option value="1">أ</option>
                                                            <option value="1">أ</option>
                                                            <option value="1">أ</option>
                                                           
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group  ">
                                                        <label  >صورة :</label>
                                                        <input type="file" className="form-control" placeholder="صورة" />
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
export default UserAdd;