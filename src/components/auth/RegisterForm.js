import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import API from "../../api";

const RegisterForm = (props) => {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const response = await API.post(`/register`, values);
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("refresh_token", response.data.refresh_token);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const token = localStorage.getItem("access_token");

  useEffect(() => {
    if (token) {
      navigate("/myforms");
    }
  }, [navigate, token]);

  return (
    <form className="mx-1 mx-md-4" onSubmit={handleSubmit(onSubmit)}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="d-flex flex-row align-items-center mb-4">
        <div className="form-outline flex-fill mb-0">
          {errors?.name?.type && (
            <p style={{ color: "red" }}>Name is required</p>
          )}
          <input
            {...register("name", { required: true })}
            type="text"
            id="form3Example1c"
            className="form-control"
          />
          <i className="fas fa-user fa-lg fa-fw mx-1" />
          <label
            className="form-label"
            htmlFor="form3Example1c"
            {...props.changeProgress(40)}
          >
            Your Name
          </label>
        </div>
      </div>

      <div className="d-flex flex-row align-items-center mb-4">
        <div className="form-outline flex-fill mb-0">
          {errors?.email?.type && (
            <p style={{ color: "red" }}>Email is required</p>
          )}
          {errors?.email?.type === "pattern" && (
            <p style={{ color: "red" }}>Entered email is in wrong format</p>
          )}
          <input
            type="email"
            id="form3Example3c"
            className="form-control"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
            })}
          />
          <i className="fas fa-envelope fa-lg fa-fw mx-1" />
          <label className="form-label" htmlFor="form3Example3c">
            Your Email
          </label>
        </div>
      </div>

      <div className="d-flex flex-row align-items-center mb-4">
        <div className="form-outline flex-fill mb-0">
          {errors?.password?.type === "required" && (
            <p style={{ color: "red" }}>Password is required</p>
          )}
          {errors?.password?.type === "minLength" && (
            <p style={{ color: "red" }}>
              Password should be at least 8 characters
            </p>
          )}
          <input
            type="password"
            id="form3Example4c"
            className="form-control"
            {...register("password", {
              required: true,
              minLength: 8,
            })}
          />
          <i className="fas fa-lock fa-lg fa-fw mx-1" />
          <label
            className="form-label mt-3"
            htmlFor="form3Example4c"
            {...props.changeProgress(70)}
          >
            Password
          </label>
        </div>
      </div>

      <div className="d-flex flex-row align-items-center mb-4">
        <div className="form-outline flex-fill mb-0">
          {errors?.confirm_password?.type === "required" && (
            <p style={{ color: "red" }}>This feild is required</p>
          )}
          {errors?.confirm_password?.type === "validate" && (
            <p style={{ color: "red" }}>Your passwords do no match</p>
          )}
          <input
            type="password"
            id="form3Example4cd"
            className="form-control"
            {...register("confirm_password", {
              required: true,
              validate: (val) => {
                if (watch("password") !== val) {
                  return "Your passwords do no match";
                }
              },
            })}
          />
          <i className="fas fa-key fa-lg fa-fw mx-1" />
          <label className="form-label mt-3" htmlFor="form3Example4cd">
            Repeat your password
          </label>
        </div>
      </div>

      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
        <button
          {...props.changeProgress(100)}
          className="btn btn-primary btn-lg"
          type="submit"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
