import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './infoCard.css'

const InfoCard = ({info}) => {
    return (
                <div className='col-md-4' style={{marginBottom:'50px'}}>
                    <div 
                    className={`d-flex align-items-center info-${info.background}`} 
                    style={{padding: '10px', height: '120px', borderRadius:'5px'}}>
                        <div style={{width: '35%', fontSize: '50px' , paddingRight:'15px'}} className='d-flex justify-content-end'>
                            <FontAwesomeIcon icon={info.icon} style={{color:'#ffffff'}}/>
                        </div>
                        <div style={{color:'#ffffff'}}>
                            <h5>{info.title}</h5>
                            <small>{info.description}</small>
                        </div>
                    </div>
                </div>
    );
};

export default InfoCard;