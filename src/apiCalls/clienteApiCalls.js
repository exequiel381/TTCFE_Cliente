const rootApiPath = "https://localhost:44373/";

export const postPedido = async (InvoiceNumber) => {
  const body = {
    InvoiceNumber: InvoiceNumber.toString(),
  };
  try {
    const response = await axios.post(rootApiPath + "/apiveteriania", body);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
