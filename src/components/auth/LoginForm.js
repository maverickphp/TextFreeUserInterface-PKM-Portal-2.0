import React, { useEffect } from 'react'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import API from '../../api';
import { setToken } from '../../store/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const LoginForm = () => {
  const [error, setError] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth);

  const onSubmit = async (values) => {
    try {
      const response = await API.post(`/login`, values);
      dispatch(setToken(response.data.access_token));
      localStorage.setItem('access_token', response.data.access_token);
    } catch (error) {
      setError(error.response.data.message);
    }
  }

  useEffect(() => {
    if(token){
      navigate('/myforms')
    }
  }, [navigate, token])
  
  return (
    <div>
      <form className="mx-1 mx-md-4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="d-flex flex-row align-items-center mb-4">
          <div className="form-outline flex-fill mb-0">
            <i className="fa fa-envelope mx-2" />
            <label
              className="form-label pb-2"
              htmlFor="form3Example3c"
            >
              Email
            </label>

            <div>
              {errors?.email?.type === "required" && <span style={{ color: "red" }}>This field is required</span>}
              {errors?.email?.type === 'pattern' && <p style={{ color: "red" }}>Entered email is in wrong format</p>}
              <input className="form-control" {...register("email", { required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i })} />
            </div>
          </div>
        </div>

        <div className="d-flex flex-row align-items-center mb-4 mx-auto">
          <div className="form-outline flex-fill mb-0">
            <i className="fa fa-lock mx-2" />
            <label
              className="form-label pb-2"
              htmlFor="form3Example4c"
            >
              Password
            </label>

            <div>
              <pre>
                {errors?.password?.type === "required" && <p style={{ color: "red" }}>This field is required</p>}
                {errors?.password?.type === "minLength" && (
                  <p style={{ color: "red" }}>password cannot less than 8 characters</p>
                )}
                <input
                  {...register("password", { required: true, minLength: 8 },)}
                  type="password"
                  className="form-control"
                />
                <br />
              </pre>
            </div>
          </div>
        </div>

        {/* <div className="form-check d-flex justify-content-center mb-5">
          <input
            {...props.changeProgress(80)}
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="form2Example3c"
          />
          <label
            className="form-check-label"
            htmlFor="form2Example3"
          >
            Remember me
          </label>
        </div> */}

        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
          <button
            type="submit" value="Submit"
            className="btn btn-primary btn-lg"
          >
            Sign In
          </button>
        </div>

        <div className="form-check d-flex justify-content-center mb-5">
          <label
            className="form-check-label"
            htmlFor="form2Example3"
          >
            Not a member? <Link to={"/sign-up"}>Register</Link>
          </label>
        </div>
      </form>
    </div>
  )
}

export default LoginForm