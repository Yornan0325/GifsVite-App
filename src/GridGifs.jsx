import PropTypes from "prop-types";
import { Gif } from "./Gif";
import './estilos.css'
export const GridGifs = ({ gifs }) => {
  return (
    <div className="grid-gifs">
      {gifs.map((gif,index) => (
        <>
          <Gif key={gif.id} gif={gif} index={index}/>
        </>
      ))}
    </div>
  );
};

GridGifs.propTypes = {
  gifs: PropTypes.array,
};