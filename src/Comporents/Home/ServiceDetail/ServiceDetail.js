import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '60px'}} src={service.img} alt="" />
            <h5 className='my-4'>{service.name}</h5>
            <p className="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?
            </p>
        </div>
        
    );
};

export default ServiceDetail;