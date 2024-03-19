import axios from 'axios';
import { baseURL } from '@/config/constant';


export async function createCustomer(data) { 

//   const tokenValue = JSON.parse(localStorage.getItem("token"));
//   const headers = {
//     "x-access-token": `${tokenValue}`
//   };

  const url = `${baseURL}customers`;
//   const response = await axios.post(url, editedProduct, { headers });
  const response = await axios.post(url, data);
  
  console.log("response after update", response);
  return response.data;
};