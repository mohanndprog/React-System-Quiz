import React, { Component } from 'react';

import "./../../assets/css/nucleo-icons.css";
import "./../../assets/css/nucleo-svg.css";
import "./../../assets/css/material-dashboard.css.map";
import "./../../assets/css/material-dashboard.min.css";


import Sidebar from '../../components/Sidebar';
import DashboardNav from '../../components/DashboardNav';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import baseURL from './../../../../../Api/baseURL';
// import { Link } from '@material-ui/core';



class MemorizingQuran extends Component {
    render() {
        return (
            <>
                 <Sidebar />
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg overflow-x-hidden ">
                <DashboardNav />
                <div className="container-fluid py-4">

                    <div class="row">
                        <div class="col-12">
                            <div class="card my-4">
                                <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                    <div class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3">
                                        <h6 class="text-white text-capitalize ps-3">حفظ القران</h6>
                                    </div>
                                </div>

                                <div class="input-group input-group-outline">
                                    <label class="form-label">البحث...</label>
                                    <input type="text" class="form-control" onfocus="focused(this)" onfocusout="defocused(this)" />
                                    <button class="btn bg-gradient-success w-100 mb-0 toast-btn mr-2" type="button" data-target="dangerToast">بحث</button>
                                    <Link to="/dashboard/memorizingquran/memorizingquranadd" class="btn bg-gradient-info w-100 mb-0 toast-btn mr-2" >اضافة خيار جديد</Link>
                                </div>

                                <div class="card-body px-0 pb-2">

                                    <div class="table-responsive p-0">

                                        <table class="table align-items-center mb-0">
                                            <thead>
                                                <tr>

                                                    {/* <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"></th> */}
                                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">اسم عربي</th>
                                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">اسم انجليزي</th>

                                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">الاجراءات</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>

                                                    <td class="align-middle text-center">
                                                        <span class="text-secondary text-xs font-weight-bold">30 جزء</span>
                                                    </td>
                                                    <td class="align-middle text-center">
                                                        <span class="text-secondary text-xs font-weight-bold">30 parts
                                                        </span>
                                                    </td>


                                                    <td class="align-middle text-center">

                                                        <Link to="/dashboard/memorizingquran/memorizingquranedit" class="btn bg-gradient-warning w-100 mb-0 toast-btn" type="button" data-target="warningToast">تعديل</Link>
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
        );
    }
}
 

export default MemorizingQuran;