import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../images/logoh.svg';
class Footer1 extends Component {
    render() {
        return (
            <>
                <footer className="site-footer text-uppercase">
                    <div className="footer-top bg-primary">
                        <div className="container" >
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4 ">
                                    <div className="logo-footerr  ">
                                        <Link to={'./'} className="dez-page"><img src={logo} alt="" /></Link>
                                    </div>
                                    <div className="widget">
                                        {/* <h5 className="m-b30 text-white">Subscribe To Our Newsletter</h5> */}


                                        <p className="text-capitalize m-b20">تقوم فكرة المشروع على أن هناك فريق
                                            عملون في الادارة العامة للجمعية
                                            العمل القرآني المنتشر فـــــــي
                                            الهاشمية</p>

                                        <ul className="list-inline m-a0">
                                            <li><Link to={"#"} className="site-button facebook circle mr-1"><i className="fa fa-facebook"></i></Link></li>
                                            <li><Link to={"#"} className="site-button google-plus circle mr-1"><i className="fa fa-google-plus"></i></Link></li>
                                            <li><Link to={"#"} className="site-button linkedin circle mr-1"><i className="fa fa-linkedin"></i></Link></li>
                                            <li><Link to={"#"} className="site-button instagram circle mr-1"><i className="fa fa-instagram"></i></Link></li>
                                            <li><Link to={"#"} className="site-button twitter circle mr-1"><i className="fa fa-twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-5 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                                    <div className="widget widget_services border-0">
                                        <h5 className="m-b30 text-white">الجمعية</h5>
                                        <ul>
                                            <li><Link to={"#"}>الرئيسية </Link></li>
                                            <li><Link to={"#"}>من نحن </Link></li>
                                            <li><Link to={"#"}>تواصل معنا</Link></li>
                                            <li><Link to={"#"}>الفريق</Link></li>
                                            <li><Link to={"#"}>ألبوم الصور</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-7 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                                    <div className="widget widget_services border-0">
                                        <h5 className="m-b30 text-white">روابط مفيدة</h5>
                                        <ul>
                                            <li><Link to={"#"}>تسجيل دخول</Link></li>
                                            <li><Link to={"#"}>انشاء حساب </Link></li>
                                            <li><Link to={"#"}>حسابي</Link></li>
                                            <li><Link to={"#"}>الدعم الفني</Link></li>
                                            <li><Link to={"#"}>الدعم الفني</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4">
                                    <div className="widget widget_getintuch">
                                        <h5 className="m-b30 text-white ">تواصل معنا</h5>
                                        <ul>
                                            <li><i className="ti-location-pin"></i><strong>العنوان</strong> جمعية المحافظة على القرآن الكري
                                                - فرع الزرقاء الثاني </li>
                                            <li><i className="ti-mobile"></i><strong>رقم الجوال</strong>+972 598871102</li>
                                            <li><i className="ti-email"></i><strong>البريد الالكتروني</strong>mohanndprog@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom bg-primary">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 text-left "> <span>  جميع الحقوق  © محفزظة لدى جمعية المحافظة على القراء</span> </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 text-right ">
                                    <div className="widget-link ">
                                        <ul>
                                            <li><Link to={"#"}>سياسة الخصوصية</Link></li>
                                            <li className="ml-1"><Link to={"#"}> سياسة الاستخدام</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer1;