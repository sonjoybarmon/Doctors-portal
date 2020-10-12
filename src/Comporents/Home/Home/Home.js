import React from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';
import Services from '../Services/Services';
import Header from '../Header/Header';
import HakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonials from '../Testimonials/Testimonials';
import Doctors from '../Doctors/Doctors';
import Footer from '../../Shared/Footer/Footer';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <FeaturedService />
            <HakeAppointment />
            <Testimonials />
            <Blog />
            <Doctors />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;