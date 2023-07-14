import React, { Component } from 'react';

import "./../../assets/css/nucleo-icons.css";
import "./../../assets/css/nucleo-svg.css";
import "./../../assets/css/material-dashboard.css.map";
import "./../../assets/css/material-dashboard.min.css";


import Sidebar from '../../components/Sidebar';
 
import DashboardNav from '../../components/DashboardNav';
import { Link } from 'react-router-dom';
// import { Link } from '@material-ui/core';

class ExamsAdmin extends Component {
    render() {
        return (
            <>
                <Sidebar />
                <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg overflow-x-hidden ">
                <DashboardNav/>
                    <div className="container-fluid py-4">

                        <div class="row">
                            <div class="col-12">
                                <div class="card my-4">
                                    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                        <div class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3">
                                            <h6 class="text-white text-capitalize ps-3">الامتحانات</h6>
                                        </div>
                                    </div>
                                
                                    <div class="input-group input-group-outline">
                                        <label class="form-label">البحث...</label>
                                        <input type="text" class="form-control" onfocus="focused(this)" onfocusout="defocused(this)" />
                                        <button class="btn bg-gradient-success w-100 mb-0 toast-btn mr-2" type="button" data-target="dangerToast">بحث</button>
                                        <Link to="/dashboard/examsadmin/examedd" class="btn bg-gradient-info w-100 mb-0 toast-btn mr-2" >اضافة امتحان جديد</Link>
                                    </div>
                                 
                                    <div class="card-body px-0 pb-2">

                                        <div class="table-responsive p-0">
                                      
                                            <table class="table align-items-center mb-0">
                                                <thead>
                                                    <tr>

                                                        {/* <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"></th> */}
                                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">اسم الامتحان</th>
                                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">تاريخ الامتحان</th>
                                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">وقت البداية</th>
                                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">تاريخ النهاية</th>
                                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">وقت الناهية</th>
                                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">المدة الزمنية</th>
                                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">الشعب</th>
                                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">الاجراءات</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>

                                                        <td class="align-middle text-center">
                                                            <span class="text-secondary text-xs font-weight-bold">تربية اسلامية</span>
                                                        </td>
                                                        <td class="align-middle text-center text-sm">
                                                            <span class="text-secondary text-xs font-weight-bold">23/04/18</span>
                                                        </td>
                                                        <td class="align-middle text-center text-sm">
                                                            <span class="text-secondary text-xs font-weight-bold">9:00 AM</span>
                                                        </td>
                                                        <td class="align-middle text-center">
                                                            <span class="text-secondary text-xs font-weight-bold">23/04/18</span>
                                                        </td>
                                                        <td class="align-middle text-center">
                                                            <span class="text-secondary text-xs font-weight-bold">9:00 AM</span>
                                                        </td>
                                                        <td class="align-middle text-center">
                                                            <span class="badge badge-sm bg-gradient-success">2</span>
                                                        </td>
                                                        <td class="align-middle text-center">
                                                            <span class="text-secondary text-xs font-weight-bold">أ</span>
                                                        </td>
                                                        <td class="align-middle text-center">

                                                            <Link to="/dashboard/examsadmin/examedit" class="btn bg-gradient-warning w-100 mb-0 toast-btn" type="button" data-target="warningToast">تعديل</Link>
                                                            <button class="btn bg-gradient-danger w-100 mb-0 toast-btn mr-2" type="button" data-target="dangerToast">حذف</button>

                                                        </td>

                                                    </tr>





                                                </tbody>
                                            </table>

                                        </div>

                                    </div>

                                </div>
                                <ul class="pagination">
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li class="page-item active"><a class="page-link active" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>



                    </div>
                </main>



            </>
        )
    }
}
export default ExamsAdmin;