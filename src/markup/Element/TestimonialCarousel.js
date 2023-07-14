import React, { Component } from 'react';
import Slider from "react-slick";

//Images
 
import pic4 from './../../images/testimonials/tes.svg';
 



class TestimonialCarousel extends Component {
	render() {
		var settings = {
			arrows: false,
			slidesToShow: 3,
			infinite: true,
			dots: true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		};
		return (
			<>
				<Slider className="testimonial-box center-active-owl item-center owl-loaded owl-carousel owl-none  owl-dots-black-full " {...settings}>
					<div className="item">
						<div className="testimonial-8">
							<div className="testimonial-text">
							<p>
									 تقوم فكرة المشروع على أن هناك فريق
									عملون في الادارة العامة للجمعية
									العمل القرآني المنتشر فـــــــي
									الهاشمية
									 تقوم فكرة المشروع على أن هناك فريق
									عملون في الادارة العامة للجمعية
									العمل القرآني المنتشر فـــــــي
									الهاشمية
								 
									
									</p>
							</div>
							<div className="testimonial-detail clearfix">
								<div className="testimonial-pic radius shadow">
									<img src={pic4} width="100" height="100" alt="" />
								</div>
								<h5 className="testimonial-name m-t0 m-b5">الاسم كامل</h5>
								<span>التخصص</span>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="testimonial-8">
							<div className="testimonial-text">
							<p>
									 تقوم فكرة المشروع على أن هناك فريق
									عملون في الادارة العامة للجمعية
									العمل القرآني المنتشر فـــــــي
									الهاشمية
									 تقوم فكرة المشروع على أن هناك فريق
									عملون في الادارة العامة للجمعية
									العمل القرآني المنتشر فـــــــي
									الهاشمية
								 
									
									</p>
							</div>
							<div className="testimonial-detail clearfix">
								<div className="testimonial-pic radius shadow">
									<img src={pic4} width="100" height="100" alt="" />
								</div>
								<h5 className="testimonial-name m-t0 m-b5">الاسم كامل</h5>
								<span>التخصص</span>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="testimonial-8">
							<div className="testimonial-text">
								<p>
									 تقوم فكرة المشروع على أن هناك فريق
									عملون في الادارة العامة للجمعية
									العمل القرآني المنتشر فـــــــي
									الهاشمية
									 تقوم فكرة المشروع على أن هناك فريق
									عملون في الادارة العامة للجمعية
									العمل القرآني المنتشر فـــــــي
									الهاشمية
								 
									
									</p>
							</div>
							<div className="testimonial-detail clearfix">
								<div className="testimonial-pic radius shadow">
									<img src={pic4} width="100" height="100" alt="" />
								</div>
								<h5 className="testimonial-name m-t0 m-b5">الاسم كامل</h5>
								<span>التخصص</span>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="testimonial-8">
							<div className="testimonial-text">
							<p>
									 تقوم فكرة المشروع على أن هناك فريق
									عملون في الادارة العامة للجمعية
									العمل القرآني المنتشر فـــــــي
									الهاشمية
									 تقوم فكرة المشروع على أن هناك فريق
									عملون في الادارة العامة للجمعية
									العمل القرآني المنتشر فـــــــي
									الهاشمية
								 
									
									</p>
							</div>
							<div className="testimonial-detail clearfix">
								<div className="testimonial-pic radius shadow">
									<img src={pic4} width="100" height="100" alt="" />
								</div>
								<h5 className="testimonial-name m-t0 m-b5">الاسم كامل</h5>
								<span>التخصص</span>
							</div>
						</div>
					</div>




				</Slider>
			</>
		)
	}

}

export default TestimonialCarousel;