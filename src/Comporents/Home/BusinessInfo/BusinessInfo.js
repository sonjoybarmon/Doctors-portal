import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkerAlt, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';

const BusinessInfo = () => {
    const infosData = [
        {
            title: 'Opening Hours',
            description: 'We are open 7 days',
            icon: faClock,
            background: 'primary',
            key:1
        },
        {
            title: 'Visit Our Location',
            description: 'Brooklyn, Ny 10008 USA',
            icon: faMapMarkerAlt,
            background: 'dark',
            key: 2
        },
        {
            title: 'Call us now',
            description: '+15637854124',
            icon: faPhoneSquareAlt,
            background: 'primary',
            key: 3
        }
    ]
    return (
        <div className='container'>
            <div className='row'>
                {
                infosData.map((info)=> <InfoCard info={info} key={info.key}> </InfoCard>)
                }
            </div>
        </div>
    );
};

export default BusinessInfo;