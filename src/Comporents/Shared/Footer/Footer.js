import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const noNamed = [
    {name: "Emergency Dental Care" , link: "/emergency"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
    {name: "Tooth Extraction" , link: "/tooth-extract"},
    {name: "Check Up" , link: "/checkup"},
]
const ourAddress = [
    {name: "New York - 101010 Hudson" , link: "//google.com/map"},
    {name: "Yards" , link: "//google.com/map"},
   
]
const oralHealth = [
    {name: "Emergency Dental Care" , link: "/emergency"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
    {name: "Tooth Extraction" , link: "/tooth-extract"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Check Up" , link: "/checkup"}
]
const services = [
    {name: "Emergency Dental Care" , link: "/emergency"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
    {name: "Tooth Extraction" , link: "/tooth-extract"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Check Up" , link: "/checkup"}
]

const Footer = () => {
    return (
        <footer className='footerContent' style={{padding:'100px 0 0 0'}}>
            <div className='container'>
                <div className="row" style={{padding:'0 0 100px 0'}}>
                    <div className="col-md-3">
                       <div style={{marginTop:'60px' , listStyle:'none'}}>
                            {
                                noNamed.map((li) => <li>{li.name}</li>)
                            }
                       </div>
                    </div>
                    <div className="col-md-3">
                        <h3>Services</h3>
                    <div style={{marginTop:'30px' , listStyle:'none'}}>
                        {
                            services.map((li) => <li>{li.name}</li>)
                        }
                    </div>
                    </div>
                    <div className="col-md-3">
                        <h3>Oral Health</h3>
                    <div style={{marginTop:'30px' , listStyle:'none'}}>
                        {
                            oralHealth.map((li) => <li>{li.name}</li>)
                        }
                    </div>
                    </div>
                    <div className="col-md-3">
                        <h3>Our address</h3>
                    <div style={{marginTop:'30px' , listStyle:'none'}}>
                        {
                           ourAddress.map((li) => <li>{li.name}</li>)
                        }
                    </div>

                    <div className='d-flex mt-5'>
                        <FontAwesomeIcon icon={faFacebookF } className='mx-2' 
                        style={{fontSize:'25px'}}/>
                        <FontAwesomeIcon icon={faInstagram}  className='mx-2' 
                        style={{fontSize:'25px'}}/>
                        <FontAwesomeIcon icon={faGooglePlusG } className='mx-2' 
                        style={{fontSize:'25px'}}/>
                    </div>
                    </div>
                </div>
            
                <div className="copyRight text-center">
                        <p>Copyright {(new Date()).getFullYear()} All Rights Reserved By sonjoybarmon19@gmail.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;