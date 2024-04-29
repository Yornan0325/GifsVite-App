import { useRef } from "react";
import PropTypes from "prop-types";
import "./estilos.css";
import { motion, useInView } from "framer-motion";
const variants = {
  initial: { opacity: 0, scale: 0 },
  animate: ({ index }) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay: index * 1 },
  }),
};

export const Gif = ({ gif, index }) => {
  const ref = useRef(null);
  const estaVisto = useInView(ref,{
    once:true
  });

  return (
    <>
      <motion.img
        ref={ref}
        initial="initial"
        animate={estaVisto ? "animate" : ""}
        variants={variants}
        custom={index}
        whileHover={{scale:1.1}}
        className="gif"
        src={gif.images.original.url}
        alt={gif.title}
      />
    </>
  );
};

Gif.propTypes = {
  gif: PropTypes.array,
  index: PropTypes.number,
};
