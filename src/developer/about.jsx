import edward from "../assets/edward.png";
import "animate.css";
import { forwardRef } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const About = forwardRef((props, ref) => {
  return (
    <section
      className="about h-full flex flex-col justify-center items-start overflow-hidden"
      ref={ref}
    >
      <div className="container lg:flex md:flex w-full justify-start gap-7 ml-7">
        {/* Profile Photo */}
        <div className="photo lg:w-[300px] w-[200px] lg:h-[300px] h-[200px] self-center rounded-full border-4 border-solid border-[#ffe4c4] p-6 flex flex-col justify-center">
          <div
            className="lg:w-[240px] w-[170px] lg:h-[240px] h-[170px] self-center rounded-full bg-no-repeat bg-cover bg-center border-solid shadow-xl"
            style={{ backgroundImage: `url(${edward})` }}
          />
        </div>

        {/* Text Content */}
        <div className="text flex flex-col p-2">
          <h1 className="role mt-5 font-bold text-2xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe4c4] to-[#ff8c00]">
              Lead Backend Engineer
            </span>{" "}
            @{" "}
            <strong>
              <a
                href="https://explore.hubtel.com/team/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Hubtel Limited
              </a>
            </strong>
          </h1>
          <h1 className="text-white font-extrabold lg:text-3xl text-xl mt-6 animate__animated animate__bounceInRight animate__slow">
            Edward Twumasi
          </h1>
          <p className="summary text-white text-md mt-4 lg:w-2/3 w-full">
            I’m a full-stack software engineer skilled in C#, .NET, JavaScript,TypeScript,Go, Python, and various technologies, building highly concurrent, scalable systems for multiple users. I have a strong foundation in computer science and AI.
          </p>
          <h2 className="role text-white mt-5 font-bold">
            <strong>Research Interests</strong>
          </h2>
          <div className="flex flex-row flex-wrap justify-start gap-4 mt-4 text-white text-md lg:w-2/3 w-full">
            <span>Machine Learning</span>
            <span>Computer Vision</span>
            <span>NLP</span>
            <span>Cybersecurity</span>
            <span>Software Engineering</span>
            <span>Data Science</span>
          </div>
          <div className="flex gap-6 mt-5">
            <button className="text-white rounded-full p-2 px-6 border-2 border-white hover:bg-white hover:text-black transition-colors">
              <Link to="/projects">Projects</Link>
            </button>
            <button className="text-white rounded-full p-2 px-6 border-2 border-white hover:bg-white hover:text-black transition-colors">
              <Link to="/contact">Contact</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;