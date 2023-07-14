import React, { Component } from 'react';
import Header from './../Layout/Header1';
import Footer from './../Layout/Footer1';
import PageTitle from './../Layout/PageTitle';
import { OrderDetail } from './Login';

import bnr from './../../images/banner/banner.svg';

class Register extends Component {


    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr + ")" }}>
                        <PageTitle motherMenu='انشاء حساب' activeMenu='انشاء حساب' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- contact area --> */}
                    <div className="section-full content-inner shop-account">
                        {/* <!-- Product --> */}
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h2 className="font-weight-700 m-t0 m-b30">انشاء حساب</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 m-b30">
                                    <div className="p-a30 border-1  max-w510 m-auto">
                                        <div className="tab-content">
                                            <form id="login" className="tab-pane active">
                                                <h4 className="font-weight-700">انشاء حساب</h4>
                                                <p className="font-weight-600">إذا كان لديك حساب معنا ، يرجى تسجيل الدخول.</p>
                                                <div className="row">
                                                    <div className="col-md-6 ">
                                                        <div className="form-group">
                                                            <label className="font-weight-700">الاسم الاول*</label>
                                                            <input name="dzName" required="" className="form-control" placeholder="الاسم الاول" type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6  ">
                                                        <div className="form-group">
                                                            <label className="font-weight-700">الاسم الثاني*</label>
                                                            <input name="dzName" required="" className="form-control" placeholder="الاسم الثاني" type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6  ">
                                                        <div className="form-group">
                                                            <label className="font-weight-700">الرقم الوطني*</label>
                                                            <input name="dzName" required="" className="form-control" placeholder="الرقم الوطني" type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6  ">
                                                        <div className="form-group">
                                                            <label className="font-weight-700">المؤهل العلمي*</label>
                                                            <select className="form-control" aria-label="المؤهل العلمي">
                                                                <option selected>المؤهل العلمي</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 ">
                                                        <div className="form-group">
                                                            <label className="font-weight-700">رقم الهاتف*</label>
                                                            <input name="dzName" required="" className="form-control" placeholder="رقم الهاتف" type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6  ">
                                                        <div className="form-group">
                                                            <label className="font-weight-700">العنوان*</label>
                                                            <input name="dzName" required="" className="form-control" placeholder="العنوان" type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6  ">
                                                        <div className="form-group">
                                                            <label className="font-weight-700">كم تحفظ من القرءان *</label>
                                                            <select className="form-control" aria-label="اختر عدد الاجزاء">
                                                                <option selected>اختر عدد الاجزاء</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                            </select>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6  ">
                                                        <div className="form-group">
                                                            <label className="font-weight-700">الحالة الاجتماعية*</label>
                                                            <select className="form-control" aria-label="الحالة الاجتماعية">
                                                                <option selected>الحالة الاجتماعية</option>
                                                                <option value="1">اعزب</option>
                                                                <option value="2">متجوز</option>
                                                                <option value="3">ارمل</option>
                                                                <option value="3">مطلق</option>
                                                            </select>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 ">
                                                        <div className="form-group">
                                                            <label className="font-weight-700">اسم المستخدم*</label>
                                                            <input name="username" required="" className="form-control" placeholder="اسم المستخدم" type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6  ">
                                                        <div className="form-group">
                                                            <label className="font-weight-700">الرقم السري*</label>
                                                            <input name="dzName" required="" className="form-control " placeholder="الرقم السري" type="password" />
                                                        </div>
                                                    </div>

                                                </div>




                                                <div className="text-left">
                                                    <button className="site-button button-lg radius-no outline outline-2">انشاء حساب</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Product END --> */}
                    </div>
                    { /* <-- Icon Blog and Order detail--> */}
            
                    {/* <-- Icon Blog and Order detail End--> */}
                    {/* <!-- contact area  END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default Register;