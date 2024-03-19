import axios from 'axios';
import { baseURL } from '@/config/constant';

export async function fetchProductsDetails() { 
  
  // const tokenValue = JSON.parse(localStorage.getItem("token"));
  // const headers = {
  //   "x-access-token": `${tokenValue}`
  // };
  
  const url = `${baseURL}products`;

  // const response = await axios.get(url, { headers });
  const response = await axios.get(url);
  console.log("response", response);

  return response.data;
};
