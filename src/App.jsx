import { Buscador } from "./Buscador";
import { GridGifs } from "./GridGifs";
import { useSearchGifs } from "./useSearchGifs";
function App() {
  const { handleSubmit, onChange, valorInputs, gifs, estaCargando } =
    useSearchGifs();
  return (
    <>
      <div>
        <Buscador
          handleSubmit={handleSubmit}
          onChange={onChange}
          valorInputs={valorInputs}
        />
        {estaCargando ? <h2>Cargando..</h2> : <GridGifs gifs={gifs} />}
      </div>
    </>
  );
}

export default App;
