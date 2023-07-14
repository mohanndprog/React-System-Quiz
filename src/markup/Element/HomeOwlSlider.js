import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import Slider1 from './../../images/main-slider/slide1.jpg';
import Slider2 from './../../images/main-slider/slide2.jpg';
import Slider3 from './../../images/main-slider/slide3.jpg';
import Slider4 from './../../images/main-slider/hero.svg';


function SampleNextArrow(props) {
	const { onClick } = props;
	return (
		<div className="owl-nav">
			<div className="owl-next la la-angle-right" onClick={onClick} />
		</div>
	);
}

function SamplePrevArrow(props) {
	const { onClick } = props;
	return (
		<div className="owl-nav">
			<div className=" owl-prev la la-angle-left" onClick={onClick} style={{ zIndex: 1 }} />
		</div>
	);
}

class HomeOwlSlider extends Component {

	render() {
		var settings = {
			arrows: true,
			dots: true,
			slidesToShow: 1,
			infinite: true,
			autoplay: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 1,

					}
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 1,

					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,

					}
				}
			]
		};
		return (

			<Slider className="owl-slider owl-carousel owl-theme owl-none" {...settings}>
				<div className="item slide-item">
					<div className="slide-item-img"><img src={Slider4} className="w-100" alt="" /></div>
					<div className="slide-content overlay-primary">
						<div className="slide-content-box container">
							<div className="max-w600 text-white">
								<h2 className="text-white font-weight-400">جمعية المحافظة على القرآن الكريم</h2>
								<p>تقوم فكرة المشروع على أن هناك فريق من الموظفين الذين يعملون
									في الادارة العامة للجمعية يشرفون على العمل القرآني المنتشر فـــــــي
									ربوع المملكة الأردنية الهاشمية</p>
								<Link to={"./about-1"} className="site-button m-r10 white button-lg">نبذة عن الجمعية</Link>
								<Link to={"./contact"} className="site-button outline outline-2 button-lg">اتصــــــــل بنـــــــا</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="item slide-item">
					<div className="slide-item-img"><img src={Slider4} className="w-100" alt="" /></div>
					<div className="slide-content overlay-primary">
						<div className="slide-content-box container">
							<div className="max-w600 text-white">
								<h2 className="text-white font-weight-400">جمعية المحافظة على القرآن الكريم</h2>
								<p>تقوم فكرة المشروع على أن هناك فريق من الموظفين الذين يعملون
									في الادارة العامة للجمعية يشرفون على العمل القرآني المنتشر فـــــــي
									ربوع المملكة الأردنية الهاشمية</p>
								<Link to={"./about-1"} className="site-button m-r10 white button-lg">نبذة عن الجمعية</Link>
								<Link to={"./contact"} className="site-button outline outline-2 button-lg">اتصــــــــل بنـــــــا</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="item slide-item">
					<div className="slide-item-img"><img src={Slider4} className="w-100" alt="" /></div>
					<div className="slide-content overlay-primary">
						<div className="slide-content-box container">
							<div className="max-w600 text-white">
								<h2 className="text-white font-weight-400">جمعية المحافظة على القرآن الكريم</h2>
								<p>تقوم فكرة المشروع على أن هناك فريق من الموظفين الذين يعملون
									في الادارة العامة للجمعية يشرفون على العمل القرآني المنتشر فـــــــي
									ربوع المملكة الأردنية الهاشمية</p>
								<Link to={"./about-1"} className="site-button m-r10 white button-lg">نبذة عن الجمعية</Link>
								<Link to={"./contact"} className="site-button outline outline-2 button-lg">اتصــــــــل بنـــــــا</Link>
							</div>
						</div>
					</div>
				</div>
			</Slider>
		)

	}

}

export default HomeOwlSlider;