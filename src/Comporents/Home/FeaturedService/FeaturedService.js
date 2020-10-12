import React from 'react';
import featured from '../../../images/featured.png';

const FeaturedService = () => {
    const FeaturedText= {
        lineHeight :'30px',
        fontSize : '16px'
    }
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img className="img-fluid" src={featured} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1 className='my-3'>
                            Exceptional Dental Care, <br/> on your Term
                        </h1>
                        <p className="text-secondary my-3" style={FeaturedText}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
                        </p>
                        <button className="btn btn-primary my-3">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;