import React, { Component } from 'react';
import "./../assets/css/nucleo-icons.css";
import "./../assets/css/nucleo-svg.css";
import logo from './../../../../images/logoh.svg';
import { Link, useLocation } from 'react-router-dom';
import "./../assets/css/material-dashboard.min.css";
import "./../assets/css/material-dashboard.css";
// import { Link } from '@material-ui/core';
const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-end me-3 rotate-caret  bg-gradient-dark" id="sidenav-main">
      <div className="sidenav-header">
        <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
        <Link className="navbar-brand m-0" href=" " target="_blank">

          <img src={logo} className="navbar-brand-img h-200" alt="main_logo" />
        </Link>
      </div>

      <div className="collapse navbar-collapse  w-auto  max-height-vh-100" id="sidenav-collapse-main">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className={location.pathname === '/dashboard' ? 'nav-link text-white active bg-gradient-success' : 'nav-link text-white'} to="/dashboard">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">


                <span class="svg-icon svg-icon-muted svg-icon-2hx"><svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0.400024H1C0.4 0.400024 0 0.800024 0 1.40002V2.40002C0 3.00002 0.4 3.40002 1 3.40002H12C12.6 3.40002 13 3.00002 13 2.40002V1.40002C13 0.800024 12.6 0.400024 12 0.400024Z" fill="currentColor" />
                  <path opacity="0.3" d="M15 8.40002H1C0.4 8.40002 0 8.00002 0 7.40002C0 6.80002 0.4 6.40002 1 6.40002H15C15.6 6.40002 16 6.80002 16 7.40002C16 8.00002 15.6 8.40002 15 8.40002ZM16 12.4C16 11.8 15.6 11.4 15 11.4H1C0.4 11.4 0 11.8 0 12.4C0 13 0.4 13.4 1 13.4H15C15.6 13.4 16 13 16 12.4ZM12 17.4C12 16.8 11.6 16.4 11 16.4H1C0.4 16.4 0 16.8 0 17.4C0 18 0.4 18.4 1 18.4H11C11.6 18.4 12 18 12 17.4Z" fill="currentColor" />
                </svg>
                </span>


              </div>
              <span className="nav-link-text ms-1">الرئيسية</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={location.pathname === '/dashboard/division' ? 'nav-link text-white active bg-gradient-success' : 'nav-link text-white'} to="/dashboard/division">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">

                <span class="svg-icon svg-icon-muted svg-icon-2hx"><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.3" d="M19 3.40002C18.4 3.40002 18 3.80002 18 4.40002V8.40002H14V4.40002C14 3.80002 13.6 3.40002 13 3.40002C12.4 3.40002 12 3.80002 12 4.40002V8.40002H8V4.40002C8 3.80002 7.6 3.40002 7 3.40002C6.4 3.40002 6 3.80002 6 4.40002V8.40002H2V4.40002C2 3.80002 1.6 3.40002 1 3.40002C0.4 3.40002 0 3.80002 0 4.40002V19.4C0 20 0.4 20.4 1 20.4H19C19.6 20.4 20 20 20 19.4V4.40002C20 3.80002 19.6 3.40002 19 3.40002ZM18 10.4V13.4H14V10.4H18ZM12 10.4V13.4H8V10.4H12ZM12 15.4V18.4H8V15.4H12ZM6 10.4V13.4H2V10.4H6ZM2 15.4H6V18.4H2V15.4ZM14 18.4V15.4H18V18.4H14Z" fill="currentColor" />
                  <path d="M19 0.400024H1C0.4 0.400024 0 0.800024 0 1.40002V4.40002C0 5.00002 0.4 5.40002 1 5.40002H19C19.6 5.40002 20 5.00002 20 4.40002V1.40002C20 0.800024 19.6 0.400024 19 0.400024Z" fill="currentColor" />
                </svg>
                </span>

              </div>
              <span className="nav-link-text ms-1">الشعب</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={location.pathname === '/dashboard/examsadmin' ? 'nav-link text-white active bg-gradient-success' : 'nav-link text-white'} to="/dashboard/examsadmin">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">

                <span class="svg-icon svg-icon-muted svg-icon-2hx"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor" />
                  <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor" />
                </svg>
                </span>

              </div>
              <span className="nav-link-text ms-1">الامتحانات</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={location.pathname === '/dashboard/Category' ? 'nav-link text-white active bg-gradient-success' : 'nav-link text-white'} to="/dashboard/Category">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">

                <span class="svg-icon svg-icon-muted svg-icon-2hx"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.3" d="M2 21V14C2 13.4 2.4 13 3 13H21C21.6 13 22 13.4 22 14V21C22 21.6 21.6 22 21 22H3C2.4 22 2 21.6 2 21Z" fill="currentColor" />
                  <path d="M2 10V3C2 2.4 2.4 2 3 2H21C21.6 2 22 2.4 22 3V10C22 10.6 21.6 11 21 11H3C2.4 11 2 10.6 2 10Z" fill="currentColor" />
                </svg>
                </span>

              </div>
              <span className="nav-link-text ms-1">مواد الامتحانات</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={location.pathname === '/dashboard/group' ? 'nav-link text-white active bg-gradient-success' : 'nav-link text-white'} to="/dashboard/group">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">

                <span class="svg-icon svg-icon-muted svg-icon-2hx"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 2H10C10.6 2 11 2.4 11 3V10C11 10.6 10.6 11 10 11H3C2.4 11 2 10.6 2 10V3C2 2.4 2.4 2 3 2Z" fill="currentColor" />
                  <path opacity="0.3" d="M14 2H21C21.6 2 22 2.4 22 3V10C22 10.6 21.6 11 21 11H14C13.4 11 13 10.6 13 10V3C13 2.4 13.4 2 14 2Z" fill="currentColor" />
                  <path opacity="0.3" d="M3 13H10C10.6 13 11 13.4 11 14V21C11 21.6 10.6 22 10 22H3C2.4 22 2 21.6 2 21V14C2 13.4 2.4 13 3 13Z" fill="currentColor" />
                  <path opacity="0.3" d="M14 13H21C21.6 13 22 13.4 22 14V21C22 21.6 21.6 22 21 22H14C13.4 22 13 21.6 13 21V14C13 13.4 13.4 13 14 13Z" fill="currentColor" />
                </svg>
                </span>

              </div>
              <span className="nav-link-text ms-1">وحد المواد</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={location.pathname === '/dashboard/questions' ? 'nav-link text-white active bg-gradient-success' : 'nav-link text-white'} to="/dashboard/questions">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">

                <span class="svg-icon svg-icon-muted svg-icon-2hx"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.3" d="M17 10H11C10.4 10 10 9.6 10 9V8C10 7.4 10.4 7 11 7H17C17.6 7 18 7.4 18 8V9C18 9.6 17.6 10 17 10ZM22 4V3C22 2.4 21.6 2 21 2H11C10.4 2 10 2.4 10 3V4C10 4.6 10.4 5 11 5H21C21.6 5 22 4.6 22 4ZM22 15V14C22 13.4 21.6 13 21 13H11C10.4 13 10 13.4 10 14V15C10 15.6 10.4 16 11 16H21C21.6 16 22 15.6 22 15ZM18 20V19C18 18.4 17.6 18 17 18H11C10.4 18 10 18.4 10 19V20C10 20.6 10.4 21 11 21H17C17.6 21 18 20.6 18 20Z" fill="currentColor" />
                  <path d="M8 5C8 6.7 6.7 8 5 8C3.3 8 2 6.7 2 5C2 3.3 3.3 2 5 2C6.7 2 8 3.3 8 5ZM5 4C4.4 4 4 4.4 4 5C4 5.6 4.4 6 5 6C5.6 6 6 5.6 6 5C6 4.4 5.6 4 5 4ZM8 16C8 17.7 6.7 19 5 19C3.3 19 2 17.7 2 16C2 14.3 3.3 13 5 13C6.7 13 8 14.3 8 16ZM5 15C4.4 15 4 15.4 4 16C4 16.6 4.4 17 5 17C5.6 17 6 16.6 6 16C6 15.4 5.6 15 5 15Z" fill="currentColor" />
                </svg>
                </span>

              </div>
              <span className="nav-link-text ms-1"> بنك الأسئلة</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={location.pathname === '/dashboard/classificationquestions' ? 'nav-link text-white active bg-gradient-success' : 'nav-link text-white'} to="/dashboard/classificationquestions">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">

                <span class="svg-icon svg-icon-muted svg-icon-2hx"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 11H7C6.4 11 6 10.6 6 10V9C6 8.4 6.4 8 7 8H17C17.6 8 18 8.4 18 9V10C18 10.6 17.6 11 17 11ZM22 5V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4V5C2 5.6 2.4 6 3 6H21C21.6 6 22 5.6 22 5Z" fill="currentColor" />
                  <path opacity="0.3" d="M21 16H3C2.4 16 2 15.6 2 15V14C2 13.4 2.4 13 3 13H21C21.6 13 22 13.4 22 14V15C22 15.6 21.6 16 21 16ZM18 20V19C18 18.4 17.6 18 17 18H7C6.4 18 6 18.4 6 19V20C6 20.6 6.4 21 7 21H17C17.6 21 18 20.6 18 20Z" fill="currentColor" />
                </svg>
                </span>

              </div>
              <span className="nav-link-text ms-1"> تصنيفات الاسئلة</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={location.pathname === '/dashboard/users' ? 'nav-link text-white active bg-gradient-success' : 'nav-link text-white'} to="/dashboard/users">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">

                <span class="svg-icon svg-icon-muted svg-icon-2hx"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z" fill="currentColor" />
                  <path opacity="0.3" d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z" fill="currentColor" />
                </svg>
                </span>

              </div>
              <span className="nav-link-text ms-1">المستخدمين</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={location.pathname === '/dashboard/moderators' ? 'nav-link text-white active bg-gradient-success' : 'nav-link text-white'} to="/dashboard/moderators">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">

                <span class="svg-icon svg-icon-muted svg-icon-2hx"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.3" d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z" fill="currentColor" />
                  <path d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z" fill="currentColor" />
                  <rect x="7" y="6" width="4" height="4" rx="2" fill="currentColor" />
                </svg>
                </span>

              </div>
              <span className="nav-link-text ms-1">المشرفين</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={location.pathname === '/dashboard/socialsituations' ? 'nav-link text-white active bg-gradient-success' : 'nav-link text-white'} to="/dashboard/socialsituations">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">

                <span class="svg-icon svg-icon-muted svg-icon-2hx"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.0173 9H15.3945C14.2833 9 13.263 9.61425 12.7431 10.5963L12.154 11.7091C12.0645 11.8781 12.1072 12.0868 12.2559 12.2071L12.6402 12.5183C13.2631 13.0225 13.7556 13.6691 14.0764 14.4035L14.2321 14.7601C14.2957 14.9058 14.4396 15 14.5987 15H18.6747C19.7297 15 20.4057 13.8774 19.912 12.945L18.6686 10.5963C18.1487 9.61425 17.1285 9 16.0173 9Z" fill="currentColor" />
                  <rect opacity="0.3" x="14" y="4" width="4" height="4" rx="2" fill="currentColor" />
                  <path d="M4.65486 14.8559C5.40389 13.1224 7.11161 12 9 12C10.8884 12 12.5961 13.1224 13.3451 14.8559L14.793 18.2067C15.3636 19.5271 14.3955 21 12.9571 21H5.04292C3.60453 21 2.63644 19.5271 3.20698 18.2067L4.65486 14.8559Z" fill="currentColor" />
                  <rect opacity="0.3" x="6" y="5" width="6" height="6" rx="3" fill="currentColor" />
                </svg>
                </span>

              </div>
              <span className="nav-link-text ms-1">الحالات الاجتماعية</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={location.pathname === '/dashboard/memorizingquran' ? 'nav-link text-white active bg-gradient-success' : 'nav-link text-white'} to="/dashboard/memorizingquran">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">

                <span class="svg-icon svg-icon-muted svg-icon-2hx"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 15.9C9.5 13 6.5 11 3 11C3 15.6 6.5 19.4 11 19.9V15.9Z" fill="currentColor" />
                  <path opacity="0.3" d="M21 11C17.5 11 14.5 13 13 15.9V11C13 10.4 12.6 10 12 10C11.4 10 11 10.4 11 11V21C11 21.6 11.4 22 12 22C12.6 22 13 21.6 13 21V19.9C17.5 19.4 21 15.6 21 11Z" fill="currentColor" />
                  <path opacity="0.3" d="M12 9C13.933 9 15.5 7.433 15.5 5.5C15.5 3.567 13.933 2 12 2C10.067 2 8.5 3.567 8.5 5.5C8.5 7.433 10.067 9 12 9Z" fill="currentColor" />
                  <path d="M14 11L12 12L10 11V8.40002H14V11Z" fill="currentColor" />
                </svg>
                </span>

              </div>
              <span className="nav-link-text ms-1">حفظ القرءان</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={location.pathname === '/dashboard/qualifications' ? 'nav-link text-white active bg-gradient-success' : 'nav-link text-white'} to="/dashboard/qualifications">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">

                <span class="svg-icon svg-icon-muted svg-icon-2hx"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.3" d="M13.625 22H9.625V3C9.625 2.4 10.025 2 10.625 2H12.625C13.225 2 13.625 2.4 13.625 3V22Z" fill="currentColor" />
                  <path d="M19.625 10H12.625V4H19.625L21.025 6.09998C21.325 6.59998 21.325 7.30005 21.025 7.80005L19.625 10Z" fill="currentColor" />
                  <path d="M3.62499 16H10.625V10H3.62499L2.225 12.1001C1.925 12.6001 1.925 13.3 2.225 13.8L3.62499 16Z" fill="currentColor" />
                </svg>
                </span>

              </div>
              <span className="nav-link-text ms-1">المؤهلات</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className={location.pathname === '/' ? 'nav-link text-white active bg-gradient-success' : 'nav-link text-white'} to="/">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">

                <span class="svg-icon svg-icon-muted svg-icon-2hx"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 2.375L2 9.575V20.575C2 21.175 2.4 21.575 3 21.575H9C9.6 21.575 10 21.175 10 20.575V14.575C10 13.975 10.4 13.575 11 13.575H13C13.6 13.575 14 13.975 14 14.575V20.575C14 21.175 14.4 21.575 15 21.575H21C21.6 21.575 22 21.175 22 20.575V9.575L13 2.375C12.4 1.875 11.6 1.875 11 2.375Z" fill="currentColor" />
                </svg>
                </span>

              </div>
              <span className="nav-link-text ms-1">الموقع الرئيسي</span>
            </Link>
          </li>


        </ul>
      </div>

    </aside>
  );
};

export default Sidebar;





