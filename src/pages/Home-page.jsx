
// COMPONENTS
import Bienvenida from "../components/Bienvenida";
import MyAppBar from "../components/MyAppBar";
import Especialidad from "../components/Especialidad";
import PreguntasFrecuentes from "../components/PreguntasFrecuentes";

// TEXTOS
import texts from "../data/texts";


function HomePage() {
  return (
    <>
    <MyAppBar />
    <Bienvenida texts={texts} />
    <Especialidad texts={texts} />
    <PreguntasFrecuentes texts={texts} />
    </>
  );
}

export default HomePage;
