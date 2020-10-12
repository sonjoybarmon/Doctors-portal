import React from 'react';
import homeImg from '../../../images/home1.png';
import './AppointmentHeader.css';
import Calendar from 'react-calendar' ;
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
    const appointmentHeader = {
        height : '80vh' ,
        background : 'url(../../../../../images/homebg.png)',
        width : '100%'
    }
   
    return (
        <main className='appointmentImg'>
            <div className='container d-flex align-items-center' style={appointmentHeader}>
                <div className="row ">
                    <div className="col-md-4">
                        <h1> AppointMent </h1>
                        <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                        />
                        
                        
                    </div>
                    <div className="col-md-6 offset-md-2">
                        <div>
                            <img src={homeImg} alt="home Img" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AppointmentHeader;