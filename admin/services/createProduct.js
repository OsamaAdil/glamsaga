import axios from 'axios';
import { baseURL } from '@/config/constant';


export async function createProduct(data) { 

//   const tokenValue = JSON.parse(localStorage.getItem("token"));
//   const headers = {
//     "x-access-token": `${tokenValue}`
//   };

  const url = `${baseURL}products`;
//   const response = await axios.post(url, editedProduct, { headers });
  const response = await axios.post(url, data);
  
  console.log("response after update", response);
  return response.data;
};