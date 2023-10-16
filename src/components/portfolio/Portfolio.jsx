import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "React Commerce App",
    img: "https://images.pexels.com/photos/18400992/pexels-photo-18400992/free-photo-of-a-shrub-with-small-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore repellat voluptatibus dolores, perspiciatis, qui cum magni in laudantium quo ea hic, eum esse neque ipsum labore obcaecati dicta saepe libero.",
  },
  {
    id: 2,
    title: "React Native Shopping App",
    img: "https://images.pexels.com/photos/33961/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore repellat voluptatibus dolores, perspiciatis, qui cum magni in laudantium quo ea hic, eum esse neque ipsum labore obcaecati dicta saepe libero.",
  },
  {
    id: 3,
    title: "Next.js Booking App",
    img: "https://images.pexels.com/photos/17809500/pexels-photo-17809500/free-photo-of-men-riding-on-bicycles-on-a-road.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore repellat voluptatibus dolores, perspiciatis, qui cum magni in laudantium quo ea hic, eum esse neque ipsum labore obcaecati dicta saepe libero.",
  },
  {
    id: 4,
    title: "React Admin Dashboard",
    img: "https://images.pexels.com/photos/11544823/pexels-photo-11544823.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore repellat voluptatibus dolores, perspiciatis, qui cum magni in laudantium quo ea hic, eum esse neque ipsum labore obcaecati dicta saepe libero.",
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
    <section className="section" >
      <div className="container">
        <div className="wrapper">
          <motion.div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </motion.div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
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
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
