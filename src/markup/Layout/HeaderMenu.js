import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

class HeaderMenu extends Component {
  render() {
    return (
      <>
        <HeaderMenuContent />
      </>
    );
  }
}

function HeaderMenuContent() {
  const { t, i18n } = useTranslation();

  return (
    <ul className="nav navbar-nav">
      <li className="active">
        <Link to={'./'}>
          <span className="ti-home"></span>
        </Link>
      </li>
      <li>
        <Link to={'./about-1'}>{t('نبذة عن الجمعية')}</Link>
      </li>
      <li>
        <Link to={'./portfolio-full-width'}>معرض الصور</Link>
      </li>
      <li>
        <Link to={'./team'}>الفريق</Link>
      </li>
      <li>
        <Link to={'./contact'}>اتصل بنا</Link>
      </li>
      <li className="extra-nav extra-cell setlogin">
        <div to={'#'} className="dez-page site-button primary">
          تسجيل دخول <i className="fa fa-chevron-down"></i>
        </div>
        <ul className="sub-menu">
          <li>
            <Link to={'./login'} className="dez-page">
              تسجيل دخول طالب
            </Link>
          </li>
          <li>
            <Link to={'./dashboard/login'} className="dez-page">
              تسجيل دخول مشرف
            </Link>
          </li>
        </ul>
      </li>
      <div className="extra-nav">
        <div className="extra-cell">
          <Link to={'./register'} className="dez-page site-button primary">
            انشاء حساب
          </Link>
        </div>
      </div>
    </ul>
  );
}

export default HeaderMenu;
