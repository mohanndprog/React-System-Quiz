import React, {  useEffect } from 'react';
import { Link } from 'react-router-dom';

import bnr1 from '../../../images/main-slider/hero.svg';
 

const Error404 =()=> {
	let resizeMargin = () => {
		var bgImag =  "background-image: url("+ bnr1 + ");";
		var screenHeight = window.innerHeight;
		document.getElementsByClassName('full-height')[0].setAttribute("style", bgImag+'height:'+screenHeight+'px;'); 
	};
		
	useEffect(() => {
		resizeMargin();
		window.addEventListener('resize', resizeMargin);
	}, []);
	return (
		<>
			<div className="dlab-bnr-inr full-height overlay-black-dark" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
				<div className="container">
					<div className="dlab-bnr-inr-entry align-m">
						<div className="row max-w700 dz_error-404 text-white m-auto">
							<div className="col-lg-4 m-tb30">
								<div className="dz_error" style={{backgroundColor:'#6cc000'}}>404</div>
							</div>
							<div className="col-lg-8 m-b30">
								<h2 className="error-head">هناك خطأ ما !</h2>
								<p className="font-16">
								نحن آسفون ولكن يبدو أن الصفحة التي تبحث عنها لا يمكن العثور عليها. نحن نعمل على حلها وسنصلحها في أسرع وقت ممكن.</p>
								<p className="font-16">يمكنك العودة إلى الصفحة الرئيسية بالنقر فوق الزر.</p>
								<Link to={"./"} className="site-button">الصفحة الرئيسية</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
    
}
export default Error404;
