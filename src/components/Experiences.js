import React from "react";

const Experiences = () => {
  return (
    <section id="experiences">
      <div className="container items-center text-center mx-auto my-10 px-20">
        <div className="my-5 flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-26 h-16 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            />
          </svg>
          <h1 className="mb-4 text-3xl"> Apps I've Built</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row p-5 justify-between">
          <a className="sm:w-1/2 w-100 ">
            <div className="flex relative">
              <img
                alt="exp"
                src="exp.png"
                className="absolute inset-0 w-full h-full object-cover object-center px-5"
              />
              <div className="relative z-10 w-full opacity-0 hover:opacity-100 text-black p-8">
                <h3 className="text-2xl">Project One</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Explicabo facilis repellat ab cupiditate alias vero aliquid
                  obcaecati quisquam fuga dolore. Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Explicabo facilis repellat ab
                  cupiditate alias vero aliquid obcaecati quisquam fuga dolore.
                </p>
              </div>
            </div>
          </a>
          <a className="sm:w-1/2 w-100 ">
            <div className="flex relative">
              <img
                alt="exp"
                src="exp.png"
                className="absolute inset-0 w-full h-full px-5"
              />
              <div className="relative z-10 w-full opacity-0 hover:opacity-100 text-black p-8">
                <h3 className="text-2xl">Project One</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Explicabo facilis repellat ab cupiditate alias vero aliquid
                  obcaecati quisquam fuga dolore. Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Explicabo facilis repellat ab
                  cupiditate alias vero aliquid obcaecati quisquam fuga dolore.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
