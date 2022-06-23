import axios from "axios";

const rootApiPath = "https://localhost:44373/api/Veterinaria/";

export const postPedido = async (
  direccion,
  telefono,
  peso,
  edad,
  castrado,
  tipoMascota
) => {
  const body = {
    _direccion: direccion,
    _telefono: telefono,
    _mascota: {
      _peso: peso,
      _edad: edad,
      _esCastrado: castrado,
    },
    _tipoMascota: tipoMascota,
  };
  try {
    const response = await axios.post(rootApiPath, body);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const postPedidoPrev = async (
  direccion,
  telefono,
  peso,
  edad,
  castrado,
  tipoMascota
) => {
  const body = {
    _direccion: direccion,
    _telefono: telefono,
    _mascota: {
      _peso: peso,
      _edad: edad,
      _esCastrado: castrado,
    },
    _tipoMascota: tipoMascota,
  };
  try {
    const response = await axios.post(rootApiPath + "confirmationPost", body);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
