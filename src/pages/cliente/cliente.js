import { Button, TextField } from "@mui/material";
import React from "react";
import DropDown from "../../components/Dropdown/Dropdown";
import RadioButtons from "../../components/RadioButtons/RadioButtons";
import { StyleContainer } from "../../components/StyledComponents/StyleContainer";
import ModalComponent from "../../components/Modal/Modal";
import "./cliente.css";
import { postPedido, postPedidoPrev } from "../../apiCalls/clienteApiCalls";
import Loader from "../../components/Loader/Loader";

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
  const [peso, setPeso] = React.useState(1);
  const [error, setError] = React.useState(false);
  const [direccion, setDireccion] = React.useState("");
  const [telefono, setTelefono] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [modalProps, setModalProps] = React.useState({
    openModal: false,
    text: "",
    header: "Confirmacion",
    onConfirm: () => {},
  });

  const closeModal = () => {
    setModalProps({
      openModal: false,
    });
  };

  const RealizarPedido = () => {
    setLoading(true);
    postPedido(direccion, telefono, peso, edad, castrado, tipoMascota)
      .then((response) => {
        setModalProps({
          openModal: true,
          text: <h3>Pedido Realizado</h3>,
          header: "",
          onConfirm: () => {
            closeModal();
          },
        });
        setLoading(false);
      })
      .catch(function (error) {
        if (error.response) {
          setLoading(false);
          console.log(error.response.status);
          console.log(error.response.data);
        } else {
          console.log("Servidor rechazó la petición");
        }
      });
  };

  const handleClick = (e) => {
    if (direccion === "" || telefono === "") {
      setError(true);
    } else {
      setLoading(true);
      postPedidoPrev(direccion, telefono, peso, edad, castrado, tipoMascota)
        .then((response) => {
          setModalProps({
            openModal: true,
            text: (
              <>
                <h3>Desea realizar el pedido ?</h3>
                <h3>
                  Cantidad de alimento : {response._cantidadAlimento + "Kg"}
                </h3>
                <h3>
                  Cantidad de complementos dietarios :{" "}
                  {response._CantidadComplementosDietarios}
                </h3>
              </>
            ),
            header: "Confirmacion",
            onConfirm: () => {
              RealizarPedido();
            },
          });
          setLoading(false);
        })
        .catch(function (error) {
          setLoading(false);
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log("Servidor rechazó la petición");
          }
        });
    }
  };

  if (loading) {
    return (
      <StyleContainer marginLeft="20%" marginRight="50%">
        <Loader text="Espere por favor..."></Loader>;
      </StyleContainer>
    );
  } else {
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
        <div className="cliente_datos">
          <div>Ingrese el peso de la mascota en Kg:</div>
          <TextField
            required
            type={"number"}
            id="filled-required"
            label="Kg"
            defaultValue="1"
            variant="filled"
            onChange={(e) => setPeso(e.target.value)}
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
        <ModalComponent
          open={modalProps.openModal}
          setModalProps={setModalProps}
          type={"confirmation"}
          header={modalProps.header}
          onConfirm={modalProps.onConfirm}
        >
          {modalProps.text}
        </ModalComponent>
      </StyleContainer>
    );
  }
}

export default Cliente;
