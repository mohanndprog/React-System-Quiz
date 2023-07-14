import React, { Component, useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper, useLightbox } from 'simple-react-lightbox';
import Masonry from 'react-masonry-component';

//images
import box1 from './../../../images/portfolio/profile.jpg';
import box2 from './../../../images/portfolio/profile.jpg';
import box3 from './../../../images/portfolio/profile.jpg';
import box4 from './../../../images/portfolio/profile.jpg';
import box5 from './../../../images/portfolio/profile.jpg';
import box6 from './../../../images/portfolio/profile.jpg';
import box7 from './../../../images/portfolio/profile.jpg';
import box8 from './../../../images/portfolio/profile.jpg';

const imageBlog = [
	{ Large: box1, tag: ['Web', 'Advertising',], },
	{ Large: box2, tag: ['Branding', 'Design',], },
	{ Large: box3, tag: ['Advertising', 'Web',], },
	{ Large: box4, tag: ['Design',], },
	{ Large: box5, tag: ['Branding',], },
	{ Large: box6, tag: ['Photography'], },
	{ Large: box7, tag: ['Web', 'Photography'], },
	{ Large: box8, tag: ['Design', 'Advertising',], },

]

//Light Gallery on icon click 
const Iconimage = props => {
	const { openLightbox } = useLightbox()
	return (
		<Link to={"#"} onClick={() => openLightbox(props.imageToOpen)} className="mfp-link portfolio-fullscreen" >
			<i className="ti-fullscreen icon-bx-xs"></i>
		</Link>
	)
}

// Masonry section
const masonryOptions = {
	transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }
// Masonry section end

const TagLi = ({ name, handlesettag, tagActive }) => {
	return (

		<li className={` tag ${tagActive ? 'btn active' : 'btn'}`} onClick={() => handlesettag(name)} >
			<input type="radio" />
			<Link to={"#"} className="site-button-secondry radius-sm" ><span>{name} {''}</span> </Link>
		</li>
	);
};


class ProtfolioStyle3 extends Component {
	render() {
		return (
			<Fragment>
				<div className="section-full bg-white content-inner-1 portfolio">
					<div className="container-fluid">
						<div className="sort-title-bx" data-name="Element Style 3">Element Style 3 <i className="fa fa-angle-double-right"></i></div>
						<PortfolioItem />
					</div>
				</div>
			</Fragment>
		)
	}
}
function PortfolioItem() {
	const [tag, setTag] = useState('All');
	const [filteredImages, setFilterdImages] = useState([]);

	useEffect(() => {
		tag === 'All' ? setFilterdImages(imageBlog) : setFilterdImages(imageBlog.filter(image => image.tag.find(element => element === tag)))
	}, [tag])

	return (
		<>
			<div className="max-w600 m-auto text-center m-b30">
				<h6 className="m-t0">المعرض</h6>
				<h2 className="m-t0">من ألبوماتنا</h2>
				<p className="m-t0">
					تقوم فكرة المشروع على أن هناك فريق من الموظفين
					الذين يعملون في الادارة العامة للجمعية يشرفون على
					العمل القرآني المنتشر فـــــــي ربوع المملكة الأردنيــــــــة
					الهاشمية
				</p>
			</div>
			<div className="site-filters clearfix center  m-b40">
				<ul className="filters" data-toggle="buttons">
					<TagLi name="الكــــل" handlesettag={setTag} tagActive={tag === 'All' ? true : false} />
					<TagLi name="تحفيــــظ" handlesettag={setTag} tagActive={tag === 'Web' ? true : false} />
					<TagLi name="تســـميع" handlesettag={setTag} tagActive={tag === 'Advertising' ? true : false} />
					<TagLi name="جــــــوائز" handlesettag={setTag} tagActive={tag === 'Branding' ? true : false} />
					<TagLi name="مسابـــــــقات" handlesettag={setTag} tagActive={tag === 'Design' ? true : false} />
					<TagLi name="حفـــــــلات" handlesettag={setTag} tagActive={tag === 'Photography' ? true : false} />
				</ul>
			</div>
			<div className="clearfix">
				<SimpleReactLightbox>
					<SRLWrapper >
						<ul id="masonry" className="dlab-gallery-listing gallery-grid-4 gallery mfp-gallery port-style1">
							<Masonry
								className={'my-gallery-class'} // default ''
								options={masonryOptions} // default {}
								disableImagesLoaded={false} // default false
								updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
								imagesLoadedOptions={imagesLoadedOptions} // default {}
							>
								{filteredImages.map((item, index) => (
									<li className=" card-container col-lg-3 col-md-6 col-xs-6 col-sm-6 p-a0" key={index}>
										<div className="dlab-box dlab-gallery-box">
											<div className="dlab-media dlab-img-overlay1 dlab-img-effect">
												<img src={item.Large} alt="" />
												<div className="overlay-bx">
													<div className="overlay-icon align-b text-white text-left">
														<div className="text-white text-left port-box">
															<h5>عنوان الصورة</h5>
															<p>وصف قصير وصف قصير وصف</p>
															<Iconimage />
														</div>
													</div>
												</div>
											</div>
										</div>
									</li>
								))}
							</Masonry>
						</ul>
					</SRLWrapper>
				</SimpleReactLightbox>
			</div>
		</>
	);
}
export { PortfolioItem };
export default ProtfolioStyle3;
