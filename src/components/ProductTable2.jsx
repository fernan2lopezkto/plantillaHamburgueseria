import { useEffect, useState } from "react";
import papa from "papaparse";

const url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQGfjIyNVUnYeN03aB059xGJOkzD5p_yvIFKDWxhAsa5DC6q1cup0AbA16iIAS1oj-iU2eZ7gHFyORQ/pub?gid=0&single=true&output=csv";

function ProductTable() {
  // Función para transformar el enlace de Google Drive
  const transformGoogleDriveLink = (link) => {
    // Verifica si el link sigue el formato esperado de Google Drive
    const fileIdMatch = link.match(/[-\w]{25,}/);
    if (fileIdMatch) {
      const fileId = fileIdMatch[0];
      // Modificamos el formato del enlace para usar 'thumbnail'
      return `https://drive.google.com/thumbnail?id=${fileId}`;
    } else {
      console.error('El enlace proporcionado no es un enlace válido de Google Drive.');
      return null;
    }
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch de los datos CSV
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        // Parseo del CSV usando papa.parse
        const parsedData = papa.parse(data, { header: true }).data;
        setData(parsedData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {data.map((ham, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <div><strong>{ham.nombre}</strong></div>
          {ham.imagen && (
            <img 
              src={transformGoogleDriveLink(ham.imagen)} 
              alt={ham.nombre} 
              style={{ width: '200px', height: 'auto' }} 
            />
          )}
          <div>{ham.descripcion}</div>
          <div><strong>Precio:</strong> {ham.precio}</div>
        </div>
      ))}
    </div>
  );
}

export default ProductTable;
