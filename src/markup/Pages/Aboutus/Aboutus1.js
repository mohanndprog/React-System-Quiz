import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';
import SectionCounter from './../../Element/SectionCounter';
import TestimonialCarousel from './../../Element/TestimonialCarousel';
import FormStyle from './../../Element/FormStyle';

//Images
import about9 from './../../../images/about/about.png';
import bg2 from './../../../images/background/bg-map.jpg';
import services1 from './../../../images/about/about.svg';
import services2 from './../../../images/about/about.svg';
import bg1 from './../../../images/background/bg1.jpg';

import bnr from './../../../images/banner/banner.svg';

class Aboutus1 extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr + ")" }}>
                        <PageTitle motherMenu='نبذة عن الجمعية' activeMenu='نبذة عن الجمعية' />
                    </div>
                    <div className="content-block">
                        <div className="section-full content-inner-2">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h4 className="text-gray-dark m-b10">نبذة عن</h4>
                                    <h2 className="box-title m-tb0">جمعية المحافظة على القــــــــــــرآن الكريــــــــــم
                                        <span className="bg-primary"></span></h2>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row ">
                                    <div className="col-lg-5 col-md-4 about-img">
                                        <img src={about9} data-tilt alt="" />
                                    </div>
                                    <div className="col-lg-7 col-md-8">
                                        <div className="abuot-box left row m-lr0 ">
                                            <div className="col-lg-4">
                                                <h2 className="box-title m-tb0">من نحن<span className="bg-primary"></span></h2>
                                                <h4 className="text-gray-dark">جمعية المحافظة على القرآن الكريـم</h4>
                                            </div>
                                            <div className="col-lg-8">
                                                <p>تقوم فكرة المشروع على أن هناك فريق من الموظفين الذين يعملون في الادارة العامة للجمعية يشرفون على العمل القرآني المنتشر فـــــــي ربوع المملكة الأردنيــــــــة الهاشمية تقوم فكرة المشروع على أن هناك فريق من الموظفين الذين </p>
                                                <p>تقوم فكرة المشروع على أن هناك فريق من الموظفين الذين يعملون في الادارة العامة للجمعية يشرفون على العمل القرآني المنتشر فـــــــي ربوع المملكة الأردنيــــــــة الهاشمية تقوم فكرة المشروع على أن هناك فريق من الموظفين الذين </p>
                                                <p className="m-b0">تقوم فكرة المشروع على أن هناك فريق من الموظفين الذين يعملون في الادارة العامة للجمعية يشرفون على العمل القرآني المنتشر فـــــــي ربوع المملكة الأردنيــــــــة الهاشمية تقوم فكرة المشروع على أن هناك فريق من الموظفين الذين </p>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <VisionBlog />

                        {/* <!-- Testimonials --> */}
                        <div className="section-full content-inner" style={{ backgroundImage: "url(" + bg2 + ")", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                            <div className="container">
                                <div className="section-head text-center">
                                    <h2 className="box-title m-tb0">قالوا عن الجمعية
                                        <span className="bg-primary"></span></h2>
                                    <p> تقوم فكرة المشروع على أن هناك فريق من الموظفين الذين يعملون في الادارة العامة للجمعية يشرفون على العمل القرآني المنتشر فـــــــي ربوع المملكة الأردنيــــــــة الهاشمية
                                    </p>
                                </div>
                                <div className="section-content m-b30 ">
                                    <TestimonialCarousel />
                                </div>
                            </div>
                        </div>
                        {/* <!-- Testimonials END --> */}
                        <div className="section-full overlay-primary-dark bg-img-fix" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                            <FormStyle />
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
function VisionBlog() {
    return (
        <>
            <div className="section-ful our-about-info content-inner-1 " style={{ backgroundImage: "url(" + bg2 + ")", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <div className="container">
                    <div className="section-head text-center">
                        <h2 className="box-title m-tb0">الرسالة والرؤية<span className="bg-primary"></span></h2>
                        <p> جمعية المحافظة على القرآن الكريـم </p>
                    </div>
                    <div className=" row dzseth  m-b30">
                        <div className="col-lg-6 col-md-12 m-b30 about-img ">
                            <img src={services1} data-tilt alt="" />
                        </div>
                        <div className="col-lg-6 col-md-12 m-b30 dis-tbl text-justify">
                            <div className="dis-tbl-cell">
                                <h3 className="box-title">الرسالة<span className="bg-primary"></span></h3>
                                <p className="font-16">تقوم فكرة المشروع على أن هناك فريق من الموظفين الذين يعملون في الادارة العامة للجمعية يشرفون على العمل القرآني المنتشر فـــــــي ربوع المملكة الأردنيــــــــة الهاشمية تقوم فكرة المشروع على أن هناك فريق من الموظفين الذين </p>
                                <p className="font-16">تقوم فكرة المشروع على أن هناك فريق من الموظفين الذين يعملون في الادارة العامة للجمعية يشرفون على العمل القرآني المنتشر فـــــــي ربوع المملكة الأردنيــــــــة الهاشمية تقوم فكرة المشروع على أن هناك فريق من الموظفين الذين </p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="row dzseth column-reverse">
                        <div className="col-lg-6 col-md-12 dis-tbl text-justify">
                            <div className="dis-tbl-cell">
                                <h3 className="box-title">الرؤية<span className="bg-primary"></span></h3>
                                <p className="font-16">تقوم فكرة المشروع على أن هناك فريق من الموظفين الذين يعملون في الادارة العامة للجمعية يشرفون على العمل القرآني المنتشر فـــــــي ربوع المملكة الأردنيــــــــة الهاشمية تقوم فكرة المشروع على أن هناك فريق من الموظفين الذين </p>
                                <p className="font-16">تقوم فكرة المشروع على أن هناك فريق من الموظفين الذين يعملون في الادارة العامة للجمعية يشرفون على العمل القرآني المنتشر فـــــــي ربوع المملكة الأردنيــــــــة الهاشمية تقوم فكرة المشروع على أن هناك فريق من الموظفين الذين </p>
                               
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 about-img ">
                            <img src={services2} data-tilt alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { VisionBlog };
export default Aboutus1;