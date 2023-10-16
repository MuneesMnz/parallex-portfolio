import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/SIdebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar  */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          MNZ
        </motion.span>
        <div className="social">
          <img src="/facebook.png" alt="" />
          <img src="/instagram.png" alt="" />
          <img src="/youtube.png" alt="" />
          <img src="/dribbble.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
