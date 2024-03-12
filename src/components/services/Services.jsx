import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const varients = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transation: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <>
      <div className="services hidden">
        <div className="textContainer">
          <p>
            I focus on helping your brans grow <br /> and move forward
          </p>
          <hr />
        </div>
        <div className="titleContainer">
          <div className="title">
            <img src="/people.webp" alt="people" />
            <h1>
              <b>Unique</b> Ideas
            </h1>
          </div>
          <div className="title">
            <h1>
              <b>For Your</b>
              Business.
            </h1>
            <button>WHAT WE DO?</button>
          </div>
        </div>
        <div className="listContainer">
          <div className="box">
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button>Go</button>
          </div>

          <div className="box">
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button>Go</button>
          </div>

          <div className="box">
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button>Go</button>
          </div>

          <div className="box">
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button>Go</button>
          </div>
        </div>
      </div>

      <motion.div
        className="services show"
        variants={varients}
        initial="initial"
        //   whileInView="animate"
        ref={ref}
        animate={isInView && "animate"}
      >
        <motion.div className="textContainer" variants={varients}>
          <p>
            I focus on helping your brans grow <br /> and move forward
          </p>
          <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={varients}>
          <div className="title">
            <img src="/people.webp" alt="people" />
            <h1>
              <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
            </h1>
          </div>
          <div className="title">
            <h1>
              <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>
              Business.
            </h1>
            <button>WHAT WE DO?</button>
          </div>
        </motion.div>
        <motion.div className="listContainer" variants={varients}>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button>Go</button>
          </motion.div>

          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button>Go</button>
          </motion.div>

          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button>Go</button>
          </motion.div>

          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button>Go</button>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Services;
