import React from 'react';
import { replace, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log('submit values', values);
      values ? navigate('/', { replace: true }) : null;
    },
  });

  console.log(formik.values);
  return (
    <div className='form-handler'>
      <form onSubmit={formik.handleSubmit}>
        <label>email</label>
        <input
          id='email'
          type='email'
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <label>Password</label>
        <input
          id='password'
          type='password'
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Login;
