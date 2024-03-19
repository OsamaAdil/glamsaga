import axios from 'axios';
import { baseURL } from '@/config/constant';

export async function fetchGenresDetails() { 
  
  // const tokenValue = JSON.parse(localStorage.getItem("token"));
  // const headers = {
  //   "x-access-token": `${tokenValue}`
  // };
  
  const url = `${baseURL}genres`;

  // const response = await axios.get(url, { headers });
  const response = await axios.get(url);
  return response.data;
};
