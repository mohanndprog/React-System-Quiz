import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header1';
import Footer from './../Layout/Footer1';
import PageTitle from './../Layout/PageTitle';
import {VisionBlog} from './Aboutus/Aboutus1';

import bnr from './../../images/banner/banner.svg'; 
 

import team1 from './../../images/testimonials/tes.svg';
import team2 from './../../images/testimonials/tes.svg';
import team3 from './../../images/testimonials/tes.svg';
import team4 from './../../images/testimonials/tes.svg';

const teamBlog = [
    { image: team1, }, { image: team2, }, { image: team3, }, { image: team4, },
];


 

class Team extends Component {
	componentDidMount() {
    }
    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr + ")" }}>
                        <PageTitle motherMenu='فريق الجمعية والقائمون عليها' activeMenu='الفريق'  />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- contact area --> */}
                    <div className="content-block">
                        {/* <!-- Team Section --> */}
                        <div className="section-full text-center bg-white content-inner-1">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h2>فريق الجمعية والقائمون عليها</h2>
                                    <p>تقوم فكرة المشروع على أن هناك فريق من الموظفين
                                            الذين يعملون في الادارة العامة للجمعية يشرفون على
                                            العمل القرآني المنتشر فـــــــي ربوع المملكة الأردنيــــــــة
                                            الهاشمية</p>
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
                        </div>
                        {/* <!-- Team Section END --> */}
                        {/* <!-- Mission And Vision --> */}
							<VisionBlog />
                        {/* <!-- Mission And Vision END --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default Team;