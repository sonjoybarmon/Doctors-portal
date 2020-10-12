import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

Modal.setAppElement('#root')
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width : '550px',
      boxShadow : '5px 5px 10px gray',
      padding : '30px',
      borderRadius: '10px',
    }
  };

const AppointmentForm = ({modalIsOpen , closeModal , appointmentOn , date}) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
          console.log(data);
          closeModal()
    }
     
  const formStyle = {
    padding: '20px 10px',
    borderRadius: '5px',
  }
  
    return (
        <div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}  contentLabel="Example Modal" >
 
          <h2 className="text-center text-brand">{appointmentOn}</h2>
          <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
          <form onSubmit={handleSubmit(onSubmit)} className="text-center">
              <input style={formStyle} name="firstName" placeholder="firstName" ref={register} className="form-control"/>
                {errors.firstName && <span>This field is required</span>} <br />
                <input style={formStyle} name="lastName" placeholder="lastName" ref={register} className="form-control"/>
                {errors.lastName && <span>This field is required</span>} <br />
                <input style={formStyle} name="email" placeholder="Email" ref={register} className="form-control" /> <br />
                {errors.email && <span>This field is required</span>}
                <input style={formStyle} name="password" placeholder="Password" ref={register} className="form-control"/> <br />
                {errors.Password && <span>This field is required</span>}
                <select name="gender" ref={register} className="form-control"> <br />
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="other">other</option>
                </select> 
                <input style={{width:"250px" , margin: "20px 0"}} className='btn btn-primary'  type="submit" />
            </form>
        </Modal>
      </div>

    );
};

export default AppointmentForm;