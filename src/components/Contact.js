import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const onSubmit = () => {
    //event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "test", name, email, message }),
    })
      .then(() => {
        alert("Message sent!");
      })
      .catch((error) => alert(error));
  };

  return (
    <section id="contact">
      <div className="container flex flex-wrap sm:flex-nowrap mx-auto justify-center">
        <form
          netlify
          name="contactForm"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full px-20 py-10 md:w-1/2 lg:w-1/3 md:px-0 font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-26 h-16 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>

          <h1 className="text-3xl text-center mb-4">Contact to me</h1>
          <div className="relative mb-4 items-center">
            <label className="">Name</label>
            <input
              className="w-full h-10 rounded-md px-5"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              type="text"
              {...register("name", { required: true, maxLength: 20 })}
            ></input>
          </div>
          {errors.name && (
            <span className="text-red-400 font-thin mb-3">
              Please enter your name with max length 20.
            </span>
          )}
          <div className="relative mb-4 items-center">
            <label className="">Email</label>
            <input
              className="w-full h-10 rounded-md px-5"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            ></input>
          </div>
          {errors.email && (
            <span className="text-red-400 font-thin mb-3">
              Please check your email
            </span>
          )}
          <div className="relative mb-8 items-center">
            <label className="">Message</label>
            <textarea
              className="w-full h-20 rounded-md px-5"
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="relative mb-4 flex justify-center">
            <button
              className="bg-yellow-300 border-0 rounded-md text-black px-6 py-3 w-fit"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
