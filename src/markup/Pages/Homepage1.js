import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header1';
import Footer from './../Layout/Footer1';
import HomeOwlSlider from './../Element/HomeOwlSlider';
import CountUp from 'react-countup';
import HomeOwlSlider2 from './../Element/HomeOwlSlider2';
import ImgCarouselContent from './../Element/ImgCarouselContent';
import HomeTab from './../Element/HomeTab';
import Counter from './../Element/Counter';
import PortfolioCarousel from './../Element/PortfolioCarousel';
import TestimonialCarousel from './../Element/TestimonialCarousel';
import FormStyle from './../Element/FormStyle';
import OurBlogSlider from './../Element/OurBlogSlider';
import { PortfolioItem } from './ShortCode/ProtfolioStyle3';
//Images
import bg17 from './../../images/background/bg17.jpg';
import pic4 from './../../images/about/about.svg';
import bgimg from './../../images/background/bg1.jpg';
import bgimg2 from './../../images/background/bg-map.jpg';
import bgimg3 from './../../images/background/bg1.jpg';
import team1 from './../../images/testimonials/tes.svg';
import team2 from './../../images/testimonials/tes.svg';
import team3 from './../../images/testimonials/tes.svg';
import team4 from './../../images/testimonials/tes.svg';
import bg13 from './../../images/background/bg13.jpg';
 
 

const counterBlog1 = [
    { icon: <i className="icon flaticon-bar-chart text-primary" />, num: '7652', title: 'حافظ لكتاب الله', },
    { icon: <i className="icon flaticon-avatar text-primary" />, num: '4562', title: 'حافظ لكتاب الله', },
    { icon: <i className="icon flaticon-file text-primary" />, num: '3569', title: 'حافظ لكتاب الله', },
    { icon: <i className="icon flaticon-pen text-primary" />, num: '2089', title: "حافظ لكتاب الله", },
];
const teamBlog = [
    { image: team1, }, { image: team2, }, { image: team3, }, { image: team4, },
];
 

class Homepage extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className="page-wraper">
                <Header />
                <div className="page-content bg-white">
                    {/*  Slider Banner */}
                    <div className="owl-slider-banner main-slider">
                        <HomeOwlSlider />
                        {/*  Service   */}
                        <div className="service-box-slide">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <ImgCarouselContent />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  Service End  */}
                    </div>
                    {/*  Slider Banner */}
                    <div className="content-block">


                        {/* <!-- About Us --> */}
                        <div className="section-full industry-service" style={{ backgroundImage: "url(" + bg17 + ")" }}>
                            <div className="container">

                                <div className="row d-flex align-items-center">
                                    <div className="col-lg-7 col-md-12">
                                        <img src={pic4} className="radius-sm" alt="" />
                                    </div>
                                    <div className="col-lg-5 col-md-12 m-b30">
                                        <h2 className="box-title m-t0 m-b20 font-40"><span className="font-weight-400">نبذة عن </span><br />جمعية المحافظة على القــــــــــــرآن الكريــــــــــم</h2>
                                        <p className="m-b20">تقوم فكرة المشروع على أن هناك فريق من الموظفين الذين يعملون في الادارة العامة للجمعية يشرفون على العمل القرآني المنتشر فـــــــي ربوع المملكة الأردنيــــــــة الهاشمية تقوم فكرة المشروع على أن هناك فريق من الموظفين الذين يعملون في الادارة العامة للجمعية يشرفون على العمل القرآني المنتشر فـــــــي ربوع المملكة الأردنيــــــــة الهاشمية تقوم فكرة المشروع على أن هناك فريق من الموظفين الذين يعملون في الادارة العامة للجمعية يشرفون على العمل القرآني المنتشر فـــــــي ربوع المملكة الأردنيــــــــة الهاشمية</p>
                                        <Link to={"./about-1"} className="site-button button-md">قراءة المزيد</Link>
                                    </div>

                                </div>
                                <div className="dlab-divider bg-gray-dark"><i className="icon-dot c-square"></i></div>
                                <div className="row m-t30">
                                    {counterBlog1.map((data, index) => (
                                        <div className="col-lg-3 col-md-6 col-sm-6  m-b30 " >
                                            <div className="counter-style-1">
                                                <div className="">
                                                    {data.icon}
                                                    <span className="counter"><CountUp end={data.num} /></span>
                                                </div>
                                                <span className="counter-text">{data.title}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* <!-- About Us End --> */}
                        <div className="section-full content-inner-2 bg-img-fix" style={{ backgroundImage: "url(" + bg13 + ")" }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 text-center section-head">
                                        <h2 className="font-weight-700 m-b0">فريق الجمعية والقائمون عليها</h2>
                                        <p className="m-b0">تقوم فكرة المشروع على أن هناك فريق من الموظفين
                                            الذين يعملون في الادارة العامة للجمعية يشرفون على
                                            العمل القرآني المنتشر فـــــــي ربوع المملكة الأردنيــــــــة
                                            الهاشمية</p>
                                    </div>
                                </div>
                                <div className="row m-b50">
                                    {teamBlog.map((item, index) => (
                                        <div className="col-lg-3 col-md-6 col-sm-6 m-b30" key={index}>
                                            <div className="team-section">
                                                <img src={item.image} alt="" />
                                                <div className="team-content text-white">
                                                    <p className="m-a0">د.أيمن سويد</p>
                                                    <h6 className="text-uppercase text-black m-b0">مدير التحفيظ في الجمعية</h6>
                                                    <div className="dlab-divider bg-white mt-2 mb-2"></div>
                                                    <ul className="list-inline m-a0">
                                                        <li><Link to={"#"} className="text-white"><i className="fa fa-facebook"></i></Link></li>
                                                        <li><Link to={"#"} className="text-white"><i className="fa fa-linkedin"></i></Link></li>
                                                        <li><Link to={"#"} className="text-white"><i className="fa fa-instagram"></i></Link></li>
                                                        <li><Link to={"#"} className="text-white"><i className="fa fa-twitter"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* <!-- Portfolio --> */}
                            <div className="section-full bg-white content-inner-1 portfolio">
                                <div className="container-fluid">
                                    <PortfolioItem />
                                </div>
                                <div className="row">
                                    <div className="col-md-12 text-center mt-5 mb-5">
                                        <Link to={'./portfolio-full-width'} className="site-button button-md">عرض جميع الصور</Link>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Portfolio End --> */}
                       
                        </div>



                        {/* <!-- Testimonials --> */}
                        <div className="section-full content-inner" style={{ backgroundImage: "url(" + bgimg2 + ")", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                            <div className="container">
                                <div className="section-head text-center">
                                    <h2 className="box-title m-tb0">قالوا عن الجمعية<span className="bg-primary"></span></h2>
                                    <p> تقوم فكرة المشروع على أن هناك فريق من الموظفين
                                        الذين يعملون في الادارة العامة للجمعية يشرفون على
                                        العمل القرآني المنتشر فـــــــي ربوع المملكة الأردنيــــــــة
                                        الهاشمية </p>
                                </div>
                                <div className="section-content m-b30 ">
                                    <TestimonialCarousel />
                                </div>
                            </div>
                        </div>
                        {/* <!-- Testimonials END --> */}

                        {/* <!-- Get in touch --> */}
                        <div className="section-full overlay-primary-dark bg-img-fix" style={{ backgroundImage: "url(" + bgimg3 + ")" }}>
                            <FormStyle />
                        </div>
                        {/* <!-- Get in touch --> */}

                    </div>
                </div>
                <Footer />

            </div>
        )
    }
}
export default Homepage;