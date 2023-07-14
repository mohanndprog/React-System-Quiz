 
import React, { Component  } from 'react';
 
import { Link } from 'react-router-dom';

import SoundInputField from './Sound/SoundInputField';




 



class Questions extends Component {

    render() {
        return (
            <>

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr  questions" >
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">


                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li className="ml-1">الاسئلة</li>
                                        <li><Link to={"/"}>الرئيسية</Link></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        {/* <!-- About Us --> */}
                        <div className="section-full content-inner account">
                            <div className="container">
                                <div className="row">
                                <div className="col-lg-4 col-md-12 col-sm-12 sticky-top asifeaccount questions">
                                        <ul class="nav nav-pills flex-column mb-auto">
                                            <li class="nav-item">

                                                <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M55.2812 30.5C55.2812 37.0724 52.6704 43.3756 48.023 48.023C43.3756 52.6704 37.0724 55.2812 30.5 55.2812C23.9276 55.2812 17.6244 52.6704 12.977 48.023C8.32962 43.3756 5.71875 37.0724 5.71875 30.5C5.71875 23.9276 8.32962 17.6244 12.977 12.977C17.6244 8.32962 23.9276 5.71875 30.5 5.71875C37.0724 5.71875 43.3756 8.32962 48.023 12.977C52.6704 17.6244 55.2812 23.9276 55.2812 30.5ZM0 30.5C0 38.5891 3.21338 46.3469 8.93324 52.0668C14.6531 57.7866 22.4109 61 30.5 61C38.5891 61 46.3469 57.7866 52.0668 52.0668C57.7866 46.3469 61 38.5891 61 30.5C61 22.4109 57.7866 14.6531 52.0668 8.93324C46.3469 3.21338 38.5891 0 30.5 0C22.4109 0 14.6531 3.21338 8.93324 8.93324C3.21338 14.6531 0 22.4109 0 30.5ZM27.6406 14.2969V30.5C27.6406 31.4531 28.1172 32.3467 28.9154 32.8828L40.3529 40.5078C41.6635 41.3895 43.4387 41.032 44.3203 39.7096C45.202 38.3871 44.8445 36.6238 43.5221 35.7422L33.3594 28.975V14.2969C33.3594 12.7123 32.0846 11.4375 30.5 11.4375C28.9154 11.4375 27.6406 12.7123 27.6406 14.2969Z" fill="#6CC000" />
                                                </svg>
                                                <h4>الوقت المتبقي</h4>

                                                <h4 className="timer">01:02:57 </h4>
                                            </li>
                                            <div className="line"></div>
                                            <li class="nav-item  pt-3">

                                                <svg width="40" height="55" viewBox="0 0 40 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_41_1008)">
                                                        <path d="M33.3333 49.8438C34.25 49.8438 35 49.0703 35 48.125V17.1875H26.6667C24.8229 17.1875 23.3333 15.6514 23.3333 13.75V5.15625H6.66667C5.75 5.15625 5 5.92969 5 6.875V48.125C5 49.0703 5.75 49.8438 6.66667 49.8438H33.3333ZM0 6.875C0 3.08301 2.98958 0 6.66667 0H23.9062C25.6771 0 27.375 0.719727 28.625 2.00879L38.0521 11.7305C39.3021 13.0195 40 14.7705 40 16.5967V48.125C40 51.917 37.0104 55 33.3333 55H6.66667C2.98958 55 0 51.917 0 48.125V6.875Z" fill="#6CC000" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_41_1008">
                                                            <rect width="40" height="55" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>

                                                <h4>عدد الأسئلة</h4>

                                                <h4 className="timer">50 سؤال </h4>
                                            </li>



                                        </ul>
                                    </div>
                                    <div className="col-lg-8 col-md-12 col-sm-12">
                                        <div className="section-full content-inner examsetion ">

                                            <div className="container">

                                                <div className="row serv">
                                                    <form className="col-lg-12 col-md-12 col-sm-12 m-b30">
                                                        <div className="col-lg-12 col-md-12 col-sm-12 m-b30">
                                                            <div className="icon-bx-wraper expertise questionsactive  bx-style-1 p-lr10 p-tb20 center">
                                                                <div className="m-b20">
                                                                    <h5 className="dlab-tilte pb-3">1. كم كان عمر النبي محمد صلى الله عليه وسلم عندما توفيت أمه؟</h5>
                                                                    <div className="line"></div>
                                                                </div>
                                                                <div class="form-check pb-3">
                                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                                    <label class="form-check-label" for="flexRadioDefault1">
                                                                        3 سنوات
                                                                    </label>
                                                                </div>
                                                                <div class="form-check pb-3">
                                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                                    <label class="form-check-label" for="flexRadioDefault2">
                                                                        4 سنوات
                                                                    </label>
                                                                </div>
                                                                <div class="form-check pb-3">
                                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                                                    <label class="form-check-label" for="flexRadioDefault3">
                                                                        5 سنوات
                                                                    </label>
                                                                </div>
                                                                <div class="form-check pb-3">
                                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                                                    <label class="form-check-label" for="flexRadioDefault4">
                                                                        6 سنوات
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 col-sm-12 m-b30">
                                                            <div className="icon-bx-wraper expertise questionsactive  bx-style-1 p-lr10 p-tb20 center">
                                                                <div className="m-b20">
                                                                    <h5 className="dlab-tilte pb-3">1. كم كان عمر النبي محمد صلى الله عليه وسلم عندما توفيت أمه؟</h5>
                                                                    <div className="line"></div>
                                                                </div>
                                                                <SoundInputField />



                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 col-sm-12 m-b30">
                                                            <div className="icon-bx-wraper expertise questionsactive  bx-style-1 p-lr10 p-tb20 center">
                                                                <div className="m-b20">
                                                                    <h5 className="dlab-tilte pb-3">1. كم كان عمر النبي محمد صلى الله عليه وسلم عندما توفيت أمه؟</h5>
                                                                    <div className="line"></div>
                                                                </div>
                                                                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="اشرح المقصود بحيث لا تتجاوز الخمس سطور..." rows="5"></textarea>



                                                            </div>
                                                        </div>
                                                    </form>



                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                     
                                 
                                </div>
                                <div className="row">
                                <div className="text-center justify-content-center ml-5 questionsactive">
                                        <button className="site-button button-lg text-center  ">ارسال الاجوبة</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Services --> */}



                    </div>
                    {/* <!-- contact area END --> */}
                </div>


            </>
        )
    }
}
export default Questions;