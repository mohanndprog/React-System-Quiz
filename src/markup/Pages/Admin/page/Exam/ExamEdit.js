import React, { Component ,useState } from 'react';

import "./../../assets/css/nucleo-icons.css";
import "./../../assets/css/nucleo-svg.css";
import "./../../assets/css/material-dashboard.css.map";
import "./../../assets/css/material-dashboard.min.css";
import "./../../assets/css/bootstrap.css";

import AddE from '../../components/Add';
 
 
 
import Sidebar from '../../components/Sidebar';
import DashboardNav from '../../components/DashboardNav';
import PopupUser from '../../components/PopupUser';
import { Link } from 'react-router-dom';

// import { Link } from '@material-ui/core';

class ExamEdit extends Component {
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
                                        <h4 className="font-weight-bolder">تعديل امتحان</h4>
                                 
                                    </div>
                                    <div className="card-body">
                                        <form role="form">
                                            <div className="row">
 
                                                <div className="col-md-6">
                                                    <div className="form-group  ">
                                                        <label  >اسم الامتحان عربي:</label>
                                                        <input type="text" className="form-control" placeholder="اسم الامتحان" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group  ">
                                                        <label  >اسم الامتحان انجليزي:</label>
                                                        <input type="text" className="form-control" placeholder="اسم الامتحان" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group  ">
                                                        <label  > المدة الزمنية للامتحان :</label>
                                                        <input type="time" className="form-control" placeholder="اسم الامتحان" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group  ">
                                                        <label  >تاريخ بداية الامتحان :</label>
                                                        <input type="date" className="form-control" placeholder="اسم الامتحان" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group  ">
                                                        <label  >تاريخ نهاية الامتحان :</label>
                                                        <input type="date" className="form-control" placeholder="اسم الامتحان" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group  ">
                                                        <label  >وقت بداية الامتحان :</label>
                                                        <input type="time" className="form-control" placeholder="اسم الامتحان" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group  ">
                                                        <label  >وقت نهاية الامتحان :</label>
                                                        <input type="time" className="form-control" placeholder="اسم الامتحان" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                     
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group  ">
                                                        <label  >شعب الامتحان :</label>
                                                        <PopupUser/>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                                            <label className="form-check-label" for="flexCheckChecked">
                                                                كل الشعب
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                            <label className="form-check-label" for="flexCheckDefault">
                                                                أ
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                            <label className="form-check-label" for="flexCheckDefault">
                                                                ب
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                        <td class="align-middle text-center">
                                                            <span class="badge badge-sm bg-gradient-success font-weight-bolder">منذر ابو عبدلله</span>
                                                        </td>
                                                        </div>
                                                      



                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group  ">
                                                        <label  >التصنيفات :</label>
                                                      
                                                        <AddE/>

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
export default ExamEdit;