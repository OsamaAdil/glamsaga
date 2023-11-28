import axios from 'axios';
import { baseURL } from '@/config/constant';

export async function createEntity(inputData, linkText) { 

  // const tokenValue = JSON.parse(localStorage.getItem("token"));
  // const headers = {
  //   "x-access-token": `${tokenValue}`
  // };

  const url = `${baseURL}${linkText}`;
  // const response = await axios.post(url, editedData, { headers });
  const response = await axios.post(url, inputData);
  console.log("response", response);
  console.log("response.data, which is going in return to FE", response.data);
  return response.data;
};