import React from 'react';
import { Link } from 'react-router-dom';
import homeImg from '../../../images/home1.png';
import './headerMain.css'

const HeaderMain = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-4">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p className='my-4' style={{textSize:'16px'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt perspiciatis labore, cupiditate quam debitis!
                    </p>
                    <button className='btn btn-primary'> 
                        <Link to='/appointment' className='AppointmentStyle'>
                            Get Appointment
                        </Link> 
                    </button>
                </div>
                <div className="col-md-6 offset-md-2">
                    <div>
                        <img src={homeImg} alt="home Img" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;