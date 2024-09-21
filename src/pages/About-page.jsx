import About from "../components/About";
import MyAppBar from "../components/MyAppBar";
import Servicios from "../components/Servicios";

function AboutPage() {
  return (
    <div
      style={{
        minHeight: "90vh",
      }}
    >
      <MyAppBar />
      <About />
      <Servicios />
    </div>
  );
}
export default AboutPage;
