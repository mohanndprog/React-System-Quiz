import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/Header1';
import Footer from '../Layout/Footer1';
import PageTitle from '../Layout/PageTitle';
import SectionCounter from '../Element/SectionCounter';
import TestimonialCarousel from '../Element/TestimonialCarousel';
import FormStyle from '../Element/FormStyle';

//Images

import bnr1 from './../../images/banner/banner.svg';
import php from './../../images/expertise/php.png';
import joomla from './../../images/expertise/joomla.png';
import drupal from './../../images/expertise/drupal.png';
import laravel from './../../images/expertise/laravel.png';
import magento from './../../images/expertise/magento.png';
import wordpress from './../../images/expertise/wordpress.png';
import oscommerce from './../../images/expertise/oscommerce.png';
import ecommerce from './../../images/expertise/ecommerce.png';
import zend from './../../images/expertise/zend-framework.png';
import ruby from './../../images/expertise/ruby-rails.png';
import zencart from './../../images/expertise/zencart.png';
import xcart from './../../images/expertise/xcart.png';
import python from './../../images/expertise/python-framework.png';
import bg1 from './../../images/background/bg1.jpg';
import bgmap from './../../images/background/bg-map.jpg';


import {
    wraperBlog, wraperBox2, wraperBox3, wraperBox4,
    wraperBox5, wraperBox6, wraperBox7, wraperBox8,
    dlabBox, dlabBox2,
} from './ShortCode/DataFile';


const imageBlog = [
    { image: php, title: 'Php', },
    { image: joomla, title: 'Joomla', },
    { image: drupal, title: 'Drupal', },
    { image: laravel, title: 'Laravel', },
    { image: magento, title: 'Magento 1.x', },
    { image: magento, title: 'Magento 2.x', },
    { image: wordpress, title: 'Wordpress', },
    { image: oscommerce, title: 'Oscommerce', },
    { image: ecommerce, title: 'ecommerce', },
    { image: zend, title: 'Zend Framework', },
    { image: ruby, title: 'Ruby Rails', },
    { image: zencart, title: 'Zencart', },
    { image: xcart, title: 'Xcart', },
    { image: python, title: 'Python Framework', },
];

class Passwordchange extends Component {
    componentDidMount() {
        var GalleryCategory = document.querySelectorAll('.box-hover');
        var fch = [].slice.call(GalleryCategory);

        for (var y = 0; y < fch.length; y++) {
            fch[y].addEventListener('mouseenter', function () {
                galleryActive(this);
            });
        }

        function galleryActive(current) {
            fch.forEach(el => el.classList.remove('active'));

            setTimeout(() => {
                current.classList.add('active');
            }, 100);
        }
    }
    render() {
        return (
            <>
                <Header />
                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
                        <PageTitle motherMenu='حسابي' activeMenu='حسابي' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        {/* <!-- About Us --> */}
                        <div className="section-full content-inner    shop-account account">
                            <div className="container">
                                <div className="row">
                                <div className="col-lg-4 col-md-5 sticky-top asifeaccount">
                                        <ul class="nav nav-pills flex-column mb-auto">
                                            <li class="nav-item">
                                                <Link to={"./exams"} class="nav-link " aria-current="page">
                                                    <svg width="27" height="37" viewBox="0 0 27 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_58_1884)">
                                                            <path d="M22.5 33.5312C23.1187 33.5312 23.625 33.0109 23.625 32.375V11.5625H18C16.7555 11.5625 15.75 10.5291 15.75 9.25V3.46875H4.5C3.88125 3.46875 3.375 3.98906 3.375 4.625V32.375C3.375 33.0109 3.88125 33.5312 4.5 33.5312H22.5ZM0 4.625C0 2.07402 2.01797 0 4.5 0H16.1367C17.332 0 18.4781 0.48418 19.3219 1.35137L25.6852 7.89141C26.5289 8.75859 27 9.93652 27 11.165V32.375C27 34.926 24.982 37 22.5 37H4.5C2.01797 37 0 34.926 0 32.375V4.625Z" fill="white" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_58_1884">
                                                                <rect width="27" height="37" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>

                                                    الامتحانات
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={"./account"} class="nav-link link-body-emphasis ">
                                                    <svg width="30" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_58_1876)">
                                                            <path d="M20.3571 8.25C20.3571 6.88248 19.7927 5.57097 18.7881 4.60398C17.7834 3.637 16.4208 3.09375 15 3.09375C13.5792 3.09375 12.2166 3.637 11.2119 4.60398C10.2073 5.57097 9.64286 6.88248 9.64286 8.25C9.64286 9.61752 10.2073 10.929 11.2119 11.896C12.2166 12.863 13.5792 13.4062 15 13.4062C16.4208 13.4062 17.7834 12.863 18.7881 11.896C19.7927 10.929 20.3571 9.61752 20.3571 8.25ZM6.42857 8.25C6.42857 6.06196 7.33163 3.96354 8.93908 2.41637C10.5465 0.869194 12.7267 0 15 0C17.2733 0 19.4535 0.869194 21.0609 2.41637C22.6684 3.96354 23.5714 6.06196 23.5714 8.25C23.5714 10.438 22.6684 12.5365 21.0609 14.0836C19.4535 15.6308 17.2733 16.5 15 16.5C12.7267 16.5 10.5465 15.6308 8.93908 14.0836C7.33163 12.5365 6.42857 10.438 6.42857 8.25ZM3.30134 29.9062H26.6987C26.1027 25.8264 22.4598 22.6875 18.0603 22.6875H11.9397C7.54018 22.6875 3.89732 25.8264 3.30134 29.9062ZM0 31.0857C0 24.7371 5.34375 19.5938 11.9397 19.5938H18.0603C24.6562 19.5938 30 24.7371 30 31.0857C30 32.1428 29.1094 33 28.0112 33H1.98884C0.890625 33 0 32.1428 0 31.0857Z" fill="white" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_58_1876">
                                                                <rect width="30" height="33" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>

                                                    حسابي
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={"./passwordchange"} href="#" class="nav-link link-body-emphasis active">
                                                    <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19.5 0C19.8504 0 20.2008 0.0761719 20.5207 0.220898L34.8639 6.30703C36.5397 7.01543 37.7889 8.66836 37.7813 10.6641C37.7432 18.2203 34.6354 32.0455 21.511 38.3297C20.2389 38.9391 18.7612 38.9391 17.4891 38.3297C4.36468 32.0455 1.25687 18.2203 1.21878 10.6641C1.21117 8.66836 2.46039 7.01543 4.13617 6.30703L18.4869 0.220898C18.7993 0.0761719 19.1496 0 19.5 0ZM19.5 5.08828V33.8812C30.0118 28.793 32.8377 17.5271 32.9063 10.7707L19.5 5.08828Z" fill="white" />
                                                    </svg>

                                                    تغيير كلمة المرور
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={"#"} href="#" class="nav-link link-body-emphasis">
                                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M29.4492 16.3242C30.1816 15.5918 30.1816 14.4023 29.4492 13.6699L21.9492 6.16992C21.2168 5.4375 20.0273 5.4375 19.2949 6.16992C18.5625 6.90234 18.5625 8.0918 19.2949 8.82422L23.5957 13.125H11.25C10.2129 13.125 9.375 13.9629 9.375 15C9.375 16.0371 10.2129 16.875 11.25 16.875H23.5957L19.2949 21.1758C18.5625 21.9082 18.5625 23.0977 19.2949 23.8301C20.0273 24.5625 21.2168 24.5625 21.9492 23.8301L29.4492 16.3301V16.3242ZM9.375 5.625C10.4121 5.625 11.25 4.78711 11.25 3.75C11.25 2.71289 10.4121 1.875 9.375 1.875H5.625C2.51953 1.875 0 4.39453 0 7.5V22.5C0 25.6055 2.51953 28.125 5.625 28.125H9.375C10.4121 28.125 11.25 27.2871 11.25 26.25C11.25 25.2129 10.4121 24.375 9.375 24.375H5.625C4.58789 24.375 3.75 23.5371 3.75 22.5V7.5C3.75 6.46289 4.58789 5.625 5.625 5.625H9.375Z" fill="white" />
                                                    </svg>

                                                    تسجيل خروج
                                                </Link>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="col-lg-8 col-md-7">
                                        <div className="section-full content-inner examsetion">

                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-12 m-b30">
                                                        <div className="p-a30    max-w510 m-auto">
                                                            <div className="tab-content">
                                                                <form id="login" className="tab-pane active">

                                                                    <div className="row">
                                                                        <div className="col-md-12 ">
                                                                            <div className="form-group">
                                                                                <label className="font-weight-700">كلمة السر القديمة*</label>
                                                                                <input name="password" required="" className="form-control" placeholder="كلمة السر القديمة" type="password"  />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-12 ">
                                                                            <div className="form-group">
                                                                                <label className="font-weight-700">كلمة السر الجديدة*</label>
                                                                                <input name="password" required="" className="form-control" placeholder="كلمة السر الجديدة" type="password"  />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-12 ">
                                                                            <div className="form-group">
                                                                                <label className="font-weight-700">تاكيد كلمة السر الجديدة*</label>
                                                                                <input name="password" required="" className="form-control" placeholder="تاكيد كلمة السر الجديدة" type="password"  />
                                                                            </div>
                                                                        </div>
                                                                     
                                                       
                                                                        

                                                                    </div>




                                                                    <div className="text-left">
                                                                        <button type="submit" className="site-button button-lg radius-no outline outline-2">حفظ التغيرات</button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Services --> */}



                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default Passwordchange;