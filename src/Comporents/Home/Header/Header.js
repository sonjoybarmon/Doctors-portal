import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBar from '../../Shared/NavBar/NavBar';
import './Header.css';
import BusinessInfo from '../BusinessInfo/BusinessInfo';

const Header = () => {
    return (
        <div className='header-container'>
            <NavBar></NavBar>
            <div style={{height: '80vh'}} 
            className="d-flex align-items-center justify-content-center">
            <HeaderMain />
            </div>
            <BusinessInfo />
        </div>
    );
};

export default Header;