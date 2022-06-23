import { Button, TextField } from "@mui/material";
import React, { useEffect } from "react";
import Container from "../../components/Container/Container";
import DropDown from "../../components/Dropdown/Dropdown";
import RadioButtons from "../../components/RadioButtons/RadioButtons";
import { StyleContainer } from "../../components/StyledComponents/StyleContainer";
import ModalComponent from "../../components/Modal/Modal";
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
    value: true,
    label: "SI",
  },
  {
    value: false,
    label: "NO",
  },
];

function Cliente() {
  const [tipoMascota, setTipoMascota] = React.useState(1);
  const [castrado, setCastrado] = React.useState(false);
  const [edad, setEdad] = React.useState(0);
  const [error, setError] = React.useState(false);
  const [direccion, setDireccion] = React.useState("");
  const [telefono, setTelefono] = React.useState("");

  const handleClick = (e) => {
    if (direccion === "" || telefono === "") {
      setError(true);
    } else {
    }
  };

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
      <div className="cliente_datos">
        <div>Ingrese la Edad de la mascota en años:</div>
        <TextField
          required
          type={"number"}
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

      <h1>Datos de contacto</h1>
      <div className="cliente_datos">
        <div>Ingrese una direccion para la entrega del pedido :</div>
        <TextField
          required
          error={direccion === "" ? true : false}
          id="filled-required"
          label="Direccion"
          defaultValue=""
          variant="filled"
          onChange={(e) => setDireccion(e.target.value)}
        />
      </div>
      <div className="cliente_datos">
        <div>Ingrese un numero de contacto: </div>
        <TextField
          required
          error={telefono === "" ? true : false}
          id="filled-required"
          label="Telefono"
          defaultValue=""
          variant="filled"
          onChange={(e) => setTelefono(e.target.value)}
        />
      </div>
      <h4 style={{ display: error ? "block" : "none" }}>
        {" "}
        *Debe ingresar los datos de contacto
      </h4>
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
