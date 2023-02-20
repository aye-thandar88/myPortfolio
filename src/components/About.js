import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container flex flex-col justify-center md:flex-row mx-auto p-20">
        <div className="md:w-1/2 items-center flex-col lg:px-20 md:px-0">
          <h1 className="mb-4 text-3xl">
            Hi, I'm Reed.I love to build amazing apps.
          </h1>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
          <div className="flex justify-center">
            <a href="#contact" className="text-black bg-yellow-300 px-6 py-3 rounded-md mr-5 text-center">Work with me</a>
            <a href="#experiences" className="bg-gray-800 text-white px-6 py-3 rounded-md text-center">See my experiences</a>
          </div>
        </div>
        <div className="md:w-1/2  lg:w-1/3 items-center flex justify-center px-5">
          <img
            className="w-full h-fit"
            alt="hero"
            src="profile.png"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
