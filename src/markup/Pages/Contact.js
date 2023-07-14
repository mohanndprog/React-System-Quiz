import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from './../Layout/Header1';
import Footer from './../Layout/Footer1';

import bgimg from './../../images/background/contactus.jpg';

class Contact extends Component {

    render() {
        return (
            <>
                <Header />
                <div className="full-section">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary-dark contact-page" style={{ backgroundImage: "url(" + bgimg + ")" }}>
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-8 col-xs-8">
                                <form className="inquiry-form  dzForm" action="script/contact.php">
								<div className="dzFormMsg"></div>
								<h3 className="box-title m-t0 m-b10">تواصل معنا <span className="bg-primary"></span></h3>
								<p>تقوم فكرة المشروع على أن هناك فريق من الموظفين الذين يعملون
									في الادارة العامة للجمعية يشرفون على العمل القرآني المنتشر فـــــــي
									ربوع المملكة الأردنية الهاشمية</p>
								<div className="row">
									<div className="col-lg-6">
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon"><i className="ti-user text-primary"></i></span>
												<input name="dzName" type="text" required className="form-control" placeholder="الاسم كامل" />
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon"><i className="ti-mobile text-primary"></i></span>
												<input name="dzOther[Phone]" type="text" required className="form-control" placeholder="رقم الجوال" />
											</div>
										</div>
									</div>
									<div className="col-lg-12">
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon"><i className="ti-email text-primary"></i></span>
												<input name="dzEmail" type="email" className="form-control" required placeholder="البريد الالكتروني" />
											</div>
										</div>
									</div>

									<div className="col-lg-12">
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon"><i className="ti-agenda text-primary"></i></span>
												<textarea name="dzMessage" rows="4" className="form-control" required placeholder="الرسالة"></textarea>
											</div>
										</div>
									</div>
									<div className="col-lg-12">
										<div className="form-group">
											<div className="input-group">
												<div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
												<input className="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha" />
											</div>
										</div>
									</div>
									<div className="col-lg-12">
										<button name="submit" type="submit" value="Submit" className="site-button button-lg"> <span>ارسال الرسالة !</span> </button>
									</div>
								</div>
							</form>

                                </div>
                                <div className="col-lg-4 col-xs-4">
                                    <div className="row text-white">
                                        <div className="col-lg-12 col-md-6 m-b30" >
                                            <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">
                                                        <span className="icon-sm text-primary text-left"><i className="ti-location-pin"></i></span>
                                                        العنوان
                                                    </h5>
                                                    <p>جمعية المحافظة على القرآن الكري
                                                        - فرع الزرقاء الثاني </p>
                                                    <h6 className="m-b15 font-weight-400"><i className="ti-alarm-clock"></i> ساعات العمل</h6>
                                                    <p className="m-b0">من الاثنين إلى السبت - 08.00-18.00
                                                    </p>
                                                    <p>الأحد - أغلق</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 m-b30 ">
                                            <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">
                                                        <span className="icon-sm text-primary text-left"><i className="ti-email"></i></span>
                                                        البريد الالكتروني
                                                    </h5>
                                                    <p className="m-b0">mohanndprog@gmail.com</p>
                                                    <p className="m-b0">mohanndprog@gmail.com</p>
                                                    <p className="m-b0">mohanndprog@gmail.com</p>
                                            
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 m-b30 ">
                                            <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">
                                                        <span className="icon-sm text-primary text-left"><i className="ti-mobile"></i></span>
                                                        رقم الجوال
                                                    </h5>
                                                    <p>+972 598871102</p>
                                                  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default Contact;