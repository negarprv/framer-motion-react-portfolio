import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "  Quasi harum qui nam ipsam repellendus veniam odit at, alias laudantium voluptate maxime temporibus, ullam doloremque architecto quo doloribus corrupti, delectus dolorem.",
  },
  {
    id: 2,
    title: "React Dashboard",
    img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "  Quasi harum qui nam ipsam repellendus veniam odit at, alias laudantium voluptate maxime temporibus, ullam doloremque architecto quo doloribus corrupti, delectus dolorem.",
  },
  {
    id: 3,
    title: "Nextjs StackOverflow App ",
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "  Quasi harum qui nam ipsam repellendus veniam odit at, alias laudantium voluptate maxime temporibus, ullam doloremque architecto quo doloribus corrupti, delectus dolorem.",
  },
  {
    id: 4,
    title: "Socila Media App",
    img: "https://images.pexels.com/photos/331788/pexels-photo-331788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "  Quasi harum qui nam ipsam repellendus veniam odit at, alias laudantium voluptate maxime temporibus, ullam doloremque architecto quo doloribus corrupti, delectus dolorem.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="project image" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>See Demos</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
