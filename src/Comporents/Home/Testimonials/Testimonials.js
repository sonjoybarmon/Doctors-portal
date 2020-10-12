import React from 'react';
import './Testimonials.css';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import Testimonial from '../Testimonial/Testimonial';

const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : wilson,
        id : 1
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema ,
        id : 2
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza ,
        id : 3
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header d-flex justify-content-between">
                    <div>
                        <h5 className="text-primary text-uppercase">Testimonial</h5>
                        <h1>What Our Patients <br/> Says </h1>
                    </div>
                    <div>
                        <span style={{fontSize:'150px'}}>&#10077;</span>
                    </div>
                </div>
                <div className="card-deck">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.id}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;