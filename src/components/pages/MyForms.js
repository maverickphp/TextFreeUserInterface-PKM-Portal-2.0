import React, { useContext, useState, useEffect } from "react";
import formContext from "../../context/forms/formContext.js";
import Formitem from "../UI/Formitem.js";
import { useForm } from "react-hook-form";
import API from '../../api';
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('access_token')}`
}

const MyForms = () => {
  const context = useContext(formContext);
  // const { addForm, forms } = context;
  const [error, setError] = useState('')
  const [forms, setForms] = useState('')
  const [action, setAction] = useState('ADD')
  const [subjectId, setSubjectId] = useState('')

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const { token } = useSelector(state => state.auth);

  const onSubmit = async (values) => {
    console.log(values);
    try {
      if(subjectId){
        const response = await API.put(`/subject/${subjectId}`, values);
        reset({
          subject: '',
          message: '',
        })
        setSubjectId('')
      } else{
        const response = await API.post(`/subject`, values);
        reset()
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  }

  const editSubject = async (subject) => {
      reset({
        subject: subject.subject,
        message: subject.message,
        user: decodedToken._id
      })
      setSubjectId(subject._id)
  }

  const removeSubject = async (id) => {
    try {
      const response = await API.delete(`/subject/${id}`);
    } catch (error) {
      setError(error.response.data.message);
      console.log(error.response.data.message);
    }
  }

  let decodedToken;

  if(token){
    decodedToken = jwt_decode(token);
  }

  useEffect(() => {
    (async function () {
        try {
          const response = await API.get(`/subjects/${decodedToken._id}`);
          setForms(response.data)
        } catch (error) {
          setError(error.response.data.message);
        }
    })()
  }, [forms])


  return (
    <>
      <div className="my-5">
        <h1>Add a Form</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="col-7 text-start"
          style={{
            margin: "auto",
          }}
        >
          <input type="text" value={decodedToken._id} {...register("user")} className="invisible" />
          <div className="mb-3 text-start">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Subject
            </label>

            <input className="form-control" {...register("subject", { required: true })} />
            {errors?.subject?.type === "required" && <span style={{ color: "red" }}>This field is required</span>}
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Message
            </label>
            <input
              name="message"
              type="text"
              className="form-control"
              id="message"
              {...register("message", { required: true })}
            />
            {errors?.message?.type === "required" && <span style={{ color: "red" }}>This field is required</span>}
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Add Form
          </button>
        </form>
      </div>
      <div className="row my-5">
        <h1>My Form Subsmissions</h1>
        {forms ? (forms.map((form) => {
          return <div className="col-md-4">
            <div className="card my-3 container" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">
                  <b>Subject:</b> {form.subject}
                </h5>
                <p className="card-text">
                  <b>Message:</b> {form.message}
                </p>
                <i className="fa-solid fa-trash mx-1" onClick={() => removeSubject(form._id)}></i>
                <i className="fa-solid fa-edit mx-1" onClick={() => editSubject(form)}></i>
              </div>
            </div>
          </div>
        })) : null}
      </div>
    </>
  );
};

export default MyForms;
