import React, { Fragment, Component } from 'react';

class FormStyle extends Component {
	render() {
		return (
			<Fragment>
				<div className="container">
					<div className="row">
						<div className="col-lg-7 col-md-7 m-b30">
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
						<div className="col-lg-5 col-md-5 content-inner chosesus-content text-white">
							<h2 className="box-title m-b15 " >دعونا الحصول على اتصال<span className="bg-primary"></span></h2>
							<p className="font-16 op8" >اتصل بنا أو أطلب الاتصال بنا في أي وقت ، ونسعى للرد على جميع الاستفسارات في غضون 24 ساعة في أيام العمل.</p>
							<p className="font-16 op8" >تقوم فكرة المشروع على أن هناك فريق من الموظفين الذين يعملون في الادارة العامة تقوم فكرة المشروع على أن هناك فريق من الموظفين الذين يعملون في الادارة العامة</p>
							{/* <h3 className="ont-16 m-b50 op6 " > تقوم فكرة المشروع على أن هناك فريق من الموظفين الذين يعملون في الادارة العامة</h3> */}
							<h4 className="" >

								: ماذا ستحصل

								&</h4>
							<ul className="list-checked primary " >
								<li><span>تقوم فكرة المشروع على أن هناك فريق من الموظفين</span></li>
								<li><span>تقوم فكرة المشروع على أن هناك فريق من الموظفين</span></li>
								<li><span>تقوم فكرة المشروع على أن هناك فريق من الموظفين</span></li>
							</ul>
						</div>

					</div>
				</div>
			</Fragment>
		)
	}
}
export default FormStyle;