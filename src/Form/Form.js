import React from 'react';
import { useFormik } from 'formik';

const initialValues = {
    name: '',
    email: '',
    mobile: '',
    password:  ''
}

const onSubmit = () => {
    alert("Register Successfully")
}


const validate = values => {
    let errors = {}

    if(!values.name){
        errors.name = 'Required'
    }
    if(!values.email){
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email format'
    }
    if(!values.mobile){
        errors.mobile = 'Required'
    } else if (!/^[0-9]/i.test(values.mobile)){
        errors.mobile = 'please enter valid number'
    }


    if(!values.password){
        errors.password = 'Required'
    }
    return errors
    // if(!values.password){
    //     errors.password = 'Required'
    // }
    // return errors
}

function Form() {

    const formik = useFormik({
       initialValues,
       onSubmit,
       validate
    })

    console.log('Visited fields', formik.touched)

    return (
        <div className='form'>
            <h1>Registration Form</h1>
            <form onSubmit={formik.handleSubmit}>
            
            <div className='form-content'>
            <div className='form-control'>    
            <label htmlFor='name'>Name</label>
            <input 
            type='name' 
            id='name' 
            name='name' 
            placeholder='Enter Your Name' 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            value={formik.values.name}/>
            { formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null } </div>

            <div className='form-control'> 
            <label htmlFor='email'>Email</label>
            <input 
            type='email' 
            id='email' 
            name='email' 
            placeholder='Enter Your Email' 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            value={formik.values.email}/>
            {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null } </div>
           
            <div className='form-control'> 
            <label htmlFor='mobile'>Mobile Number</label>
            <input 
            type='mobile' 
            id='mobile' name='mobile' 
            placeholder='Enter Your Mobile Number' 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            value={formik.values.mobile}/>
            {formik.touched.mobile && formik.errors.mobile ? <div className='error'>{formik.errors.mobile}</div> : null }</div>

            <div className='form-control'> 
            <label htmlFor='password'>Password</label>
            <input 
            type='password' 
            id='password' 
            name='password' 
            placeholder='Enter Password' 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            value={formik.values.password}/>
            {formik.touched.password && formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null } </div>
            </div>
            
            <div className='form-btn'>
            <button type='submit'>Submit</button>
            </div>
                
            </form>
        </div>
    )
};

export default Form;
