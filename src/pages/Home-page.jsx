
// COMPONENTS
import Bienvenida from "../components/Bienvenida";
import MyAppBar from "../components/MyAppBar";
import Especialidad from "../components/Especialidad";
import PreguntasFrecuentes from "../components/PreguntasFrecuentes";
import Contact from "../components/Contact"

// TEXTOS
import texts from "../data/texts";
import clientData from "../data/clientData";


function HomePage() {
  return (
    <>
    <MyAppBar />
    <Bienvenida texts={texts} />
    <Especialidad texts={texts} />
    <PreguntasFrecuentes texts={texts} />
    <Contact clientData={clientData}/>
    </>
  );
}

export default HomePage;
