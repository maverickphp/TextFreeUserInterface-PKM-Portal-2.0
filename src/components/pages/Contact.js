import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "../../styles/Contact.css";
import contactus from "../UI/OtherImages/contactus.png"
import { useForm } from "react-hook-form";

export default function Contact(props) {
  document.title = "PKM Punjab - Contact Us";


  //// EMAIL SEND ////
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rjcl93l', 'template_iqufgls', form.current, '6_E-tnjKWsv0w476X')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  }

  return (
    <div
      {...props.changeProgress(10)}
      className="container"
      style={{ paddingTop: "3%", paddingBottom: "150px" }}
    >
      <div style={{ textAlign: "center" }}>
        <h2>Contact Us</h2>
        <p>
          You can just leave us a message and we'll contact you as soon as
          possible
        </p>
      </div>
      <div className="row">
        <div className="column">
          <img
            {...props.changeProgress(50)}
            src={contactus}
            alt="ContactImage"
            style={{ width: "100%" }}
          />
        </div>
        <div className="column">
          <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              {...register("fname", { required: true })}
            />
            {errors?.fname?.type === "required" && <p style={{ color: "red" }}>This field is required</p>}

            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              {...register("lname", { required: true })}

            />
            {errors?.lname?.type === "required" && <p style={{ color: "red" }}>This field is required</p>}

            <label htmlFor="ename">Email</label>
            <input className="form-control" {...register("email", { required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i })} />
            {errors?.email?.type === "required" && <p style={{ color: "red" }}>This field is required</p>}
            {errors?.email?.type === 'pattern' && <p style={{ color: "red" }}>Entered email is in wrong format</p>}
            <label htmlFor="cname">Contact No.</label>

            <input
              {...props.changeProgress(70)}
              type="tel"
              id="cname"
              name="contact"
              placeholder="Your contact no.."
              {...register("contact", { required: true })}
            />
            {errors?.contact?.type === "required" && <p style={{ color: "red" }}>This field is required</p>}

            <label htmlFor="subject">Subject</label>
            <input
              {...props.changeProgress(70)}
              type="text"
              id="subject"
              name="subject"
              placeholder="Your Subject..."
              {...register("subject", { required: true })}
            />
            {errors?.subject?.type === "required" && <p style={{ color: "red" }}>This field is required</p>}

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write something.."
              style={{ height: "170px" }}
              {...register("message", { required: true })}

            ></textarea>
            {errors?.message?.type === "required" && <p style={{ color: "red" }}>This field is required</p>}

            <input
              type="submit"
              value="Send"
              {...props.changeProgress(100)}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
