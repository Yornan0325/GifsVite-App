import PropTypes from "prop-types";
import './estilos.css'
export const Buscador = ({ handleSubmit, valorInputs, onChange }) => {
  return (
    <>
      <form className="form-buscador" onSubmit={handleSubmit}>
        <input className="buscador" placeholder="Gifs" type="text" value={valorInputs} onChange={onChange} />
      </form>
    </>
  );
};

Buscador.propTypes = {
  handleSubmit: PropTypes.func,
  onChange: PropTypes.func,
  valorInputs: PropTypes.string,
};
