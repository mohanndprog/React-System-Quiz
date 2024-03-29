import React, { Component } from 'react';

import "./../../assets/css/nucleo-icons.css";
import "./../../assets/css/nucleo-svg.css";
import "./../../assets/css/material-dashboard.css.map";
import "./../../assets/css/material-dashboard.min.css";

import ExamForm from './../../components/ExamForm';
import Sidebar from '../../components/Sidebar';
import DashboardNav from '../../components/DashboardNav';
import { Link } from 'react-router-dom';

// import { Link } from '@material-ui/core';

class QuestionsEdit extends Component {
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
                                        <h4 className="font-weight-bolder">تعديل سؤال</h4>
                                      
                                    </div>
                                    <div className="card-body">
                                        <form role="form">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group  ">
                                                        <label  >السؤال :</label>
                                                        <textarea type="text" className="form-control" placeholder="السؤال"  />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group  ">
                                                        <div class="input-group-prepend">
                                                            <label class="input-group-text" for="inputGroupSelect01">اسم المجموعة التابع لها</label>
                                                        </div>
                                                        <select class="custom-select" id="inputGroupSelect01">
                                                            <option selected>اختر...</option>
                                                            <option value="1">متقدم</option>
                                                            <option value="2">متوسط</option>
                                                            <option value="3">مبتدء</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group  ">
                                                        <label  >العلامة :</label>
                                                        <input type="number" className="form-control" placeholder="العلامة" />
                                                    </div>
                                                </div>
                                                
                                                <div className="col-md-6">
                                                    <div className="form-group  ">
                                                    <ExamForm />
                                                    </div>
                                                </div>
                                             
                                              
                                                <div className="col-md-12">
                                                <button type="button" class="btn btn-lg bg-gradient-success btn-lg w-100 mt-4 mb-0 form">حفظ التغيرات</button>

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
export default QuestionsEdit;