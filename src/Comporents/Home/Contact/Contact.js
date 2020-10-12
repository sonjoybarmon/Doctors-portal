import React from 'react';

const Contact = () => {
    return (
    <section style={{background:'#3B4154',padding:'60px'}}>
        <div className="container">
            <div className="section-header text-center text-white mb-5">
                 <h4 className="text-primary">Contact Us</h4>
                 <h1> Always connect with us</h1>
            </div>
            <div className="col-md-9 mx-auto">
                <form action="">
                    <div className="form-group">
                        <input type="text" className="form-control py-4" placeholder="Email Address *"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control py-4" placeholder="Subject *"/>
                    </div>
                    <div className="form-group">
                        <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                    </div>
                    <div className="form-group text-center">
                        <button style={{width:'200px' , height:'40px' , fontSize:'16px'}} type="button" className="btn btn-primary"> Submit </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
};

export default Contact;