import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css'

const MakeAppointment = () => {
    const makeAppointment ={
        background: '#424A5D',
        marginTop: '100px'
    }
    return (
        <section style={makeAppointment} className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 doctorImg">
                        <img className='img-fluid' src={doctor} alt="doctor"/>
                    </div>
                    <div className="col-md-7 d-flex align-items-center">
                        <div className="text-white ">
                            <h5 className="text-primary text-uppercase ">Appointment</h5>
                            <h1 className="my-4"> Make an Appointment <br/> Today</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)};

export default MakeAppointment;