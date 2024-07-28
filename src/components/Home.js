import React from "react";
import img from "../assert/profolio.jpg";
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const history = useNavigate();
  function handle() {
    history("/about");
  }
  return (
    <div className="d-flex flex-column flex-lg-row align-items-center vh-100 w-100 justify-content-center text-bg-secondary px-3 pt-5">
      <div className="px-3 mt-3 " style={{ width: "310px", height: "250px" }}>
        <img
          src={img}
          alt=""
          className="rounded-circle img-fluid w-100 h-100"
          style={{
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
      </div>

      <div className="mx-2 w-75 px-4 text-light d-flex d-lg-block flex-column align-items-center">
        <h1 className="mb-3">Hi, I'm Deepan</h1>
        <h2 className="text-info mb-3">Web Developer</h2>
        <p className="mb-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
          temporibus doloremque beatae repellat autem voluptates ducimus quas
          distinctio dolorum quidem quasi earum, quos nihil unde error totam ea,
          recusandae fugiat?
        </p>
        <button className="p-0 button" onClick={handle}>
          About Me <FaArrowCircleRight className="fs-1 icon" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Home;
