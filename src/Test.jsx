import { motion } from "framer-motion";
import React, { useState } from "react";

//Crash Course for Framer motion
const Test = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    visible: (i) => ({
      opacity: 1,
      //   x: 600,
      //   transition: {
      //     duration: 2,
      //   },
      //   transition: {
      //     type: "spring",
      //     stiffness: 500,
      //     damping: 300,
      //   },
      transition: {
        // staggerChildren: 1,
        delay: i * 0.5,
      },
    }),
    hidden: {
      opacity: 0,
    },
  };

  const item = ["item1", "item2", "item3", "item4"];
  return (
    <div className="course">
      {/* Box Anination  */}

      {/* <motion.div
        className="box"
        variants={variants}
        // initial="hidden"
        animate={open ? "visible" : "hidden"}
        // initial={{ opacity: 0.5, scale: 0.5 }}
        // animate={{ opacity: 1, scale: 1, x: 200, y: 200 }}
        // transition={{ duration: 2 }}
        // whileTap={{ opacity: 1, scale: 2 }}
        // drag
      ></motion.div>
      <button onClick={() => setOpen((prev) => !prev)}>click</button> */}

      {/* Item Animation  */}

      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {item.map((value, i) => (
          <motion.li variants={variants} key={i} custom={i}>
            {value}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
