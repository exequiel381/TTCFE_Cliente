import { Button, TextField } from "@mui/material";
import React, { useEffect } from "react";
import Container from "../../components/Container/Container";
import DropDown from "../../components/Dropdown/Dropdown";
import RadioButtons from "../../components/RadioButtons/RadioButtons";
import { StyleContainer } from "../../components/StyledComponents/StyleContainer";
import "./cliente.css";

const valuesDrop = [
  {
    idPrueba: 1,
    text: "perro",
  },
  {
    idPrueba: 2,
    text: "gato",
  },
];

const radioButtons = [
  {
    value: "SI",
    label: "SI",
  },
  {
    value: "NO",
    label: "NO",
  },
];

function Cliente() {
  const [tipoMascota, setTipoMascota] = React.useState("");
  const [castrado, setCastrado] = React.useState("NO");
  const [edad, setEdad] = React.useState(0);

  const handleClick = (e) => {};

  useEffect(() => {
    console.log("la edad es", edad);
  }, [edad, castrado]);

  return (
    <StyleContainer marginLeft="20%" marginRight="50%">
      <h1>Registrar Pedido</h1>
      <DropDown
        items={valuesDrop}
        value={tipoMascota}
        label="Seleccione el tipo de mascota"
        set={setTipoMascota}
        width="100%"
        NameId="idPrueba"
      ></DropDown>
      <div className="cliente_edad">
        <div>Ingrese la Edad de la mascota en años:</div>
        <TextField
          required
          id="filled-required"
          label="0 si aun no cumplio"
          defaultValue="0"
          variant="filled"
          onChange={(e) => setEdad(e.target.value)}
        />
      </div>

      <RadioButtons
        title="Es castrado ?"
        row={true}
        RadioButtons={radioButtons}
        value={castrado}
        setValue={setCastrado}
      ></RadioButtons>

      <div>
        <Button
          sx={{ width: "100%", height: "50px" }}
          onClick={(e) => {
            handleClick(e);
          }}
          variant="outlined"
        >
          Realizar Pedido
        </Button>
      </div>
    </StyleContainer>
  );
}

export default Cliente;
