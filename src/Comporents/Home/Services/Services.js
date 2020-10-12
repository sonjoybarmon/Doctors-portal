import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: whitening
    }
]

const Services = () => {
    const serviceContainer = {
        padding: '100px 0'
    }
    const rowContainer = {
        paddingTop: '70px'
    }
    return (
        <section style={serviceContainer}>
            <div className='container'>
                <div className='text-center'>
                    <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                    <h1>Service we provide</h1>
                </div>
                
                <div className="row" style={rowContainer}>
                    {
                        serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;