import { useRouteError } from "react-router-dom";
import MyAppBar from "../components/MyAppBar";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      style={{
        minHeight: "100vh",
      }}
    >
      <MyAppBar />

      <h1>Oops!</h1>
      <p>Perdon, ocurrio un error inesperado.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
