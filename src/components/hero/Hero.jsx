import "./hero.scss";
import { motion } from "framer-motion";

const textVarients = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: { duration: 2, repeat: Infinity },
  },
};

const sliderVarients = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          initial="initial"
          animate="animate"
          variants={textVarients}
        >
          <motion.h2 variants={textVarients}>NEGAR PARVARESH</motion.h2>
          <motion.h1 variants={textVarients}>
            Web developer and UI designer
          </motion.h1>
          <motion.div className="buttons" variants={textVarients}>
            <motion.button variants={textVarients}>
              See the latest works
            </motion.button>
            <motion.button className="active" variants={textVarients}>
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVarients}
            animate="scrollButton"
            src="/scroll.png"
            alt="scroll icon"
          />
        </motion.div>
      </div>
      <motion.div
        variants={sliderVarients}
        initial="initial"
        animate="animate"
        className="slidingTextContainer"
      >
        Front-end Developer and Designer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="hero photo" />
      </div>
    </div>
  );
};

export default Hero;
