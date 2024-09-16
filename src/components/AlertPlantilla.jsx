import { Collapse } from "@mui/material";
import Alert from "@mui/material/Alert";
//import Stack from '@mui/material/Stack';
import { useState } from "react";

function AlertPlantilla() {
  const [open, setOpen] = useState(true);

  return (
    <Collapse in={open}>
      <Alert
        severity="info"
        onClose={() => {
          setOpen(false);
        }}
      >
        Plantilla creada para mostrar ejemplos web, los lincks de contacto
        llevan al creador de esta plantilla, y el contenido esta generado con IA,
      </Alert>
    </Collapse>
  );
}
export default AlertPlantilla;
