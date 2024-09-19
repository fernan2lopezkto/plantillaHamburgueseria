import { useRouteError } from "react-router-dom";


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={{
        minHeight: '90vh'
    }}>

      <h1>Oops!</h1>
      <p>Perdon, ocurrio un error inesperado.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

    </div>
  );
}
