import { motion, useInView } from "framer-motion";
import "./services.scss";
import { useRef } from "react";

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
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const data = [
    {
      title: "Title",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum undetenetur consequatur quia eligendi ducimus. Dignissimos iusto veniamodio dolores eum,",
    },
    {
      title: "Title",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum undetenetur consequatur quia eligendi ducimus. Dignissimos iusto veniamodio dolores eum,",
    },
    {
      title: "Title",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum undetenetur consequatur quia eligendi ducimus. Dignissimos iusto veniamodio dolores eum,",
    },
    {
      title: "Title",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum undetenetur consequatur quia eligendi ducimus. Dignissimos iusto veniamodio dolores eum,",
    },
  ];
  const ref = useRef();
  const isView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={varients}
      ref={ref}
      initial={"initial"}
      animate={ "animate"}
    >
      <motion.div className="textContainer" variants={varients}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing
          <br />
          elit. Consequatur
        </p>
        <hr />
      </motion.div>
      <motion.div className="tittleContainer" variants={varients}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique </motion.b>
            Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For your </motion.b>
            Business
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={varients}>
        {data.map((item, ind) => (
          <motion.div
            className="box"
            key={ind}
            whileHover={{ backgroundColor: "lightgray", color: "black" }}
          >
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <button>click Here</button>
          </motion.div>
        ))}
        
      </motion.div>
    </motion.div>
  );
};

export default Services;
