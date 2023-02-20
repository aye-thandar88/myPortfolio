import React from "react";

const Navbar = () => {
  return (
    <header className="bg-gray-800 z-10 md:sticky top-0">
      <div className="container flex flex-wrap p-5 flex-col md:flex-row mx-auto items-center">
        <a href="#about" className="ml-3 text-xl text-white title-font font-medium items-center md:border-gray-700">Portfolio</a>
        <nav className="flex flex-wrap justify-center text-base">
            <a href="#experiences" className="mr-5 ml-5 hover:text-white">Experiences</a>
            <a href="#skills" className="mr-5 hover:text-white">Skills</a>
        </nav>
        <a href="#contact" className= "hover:text-white inline-flex items-center py-1 ml-auto">Contact</a>
      </div>
    </header>
  );
};

export default Navbar;
