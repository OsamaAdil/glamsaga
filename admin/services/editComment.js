import axios from 'axios';
import { baseURL } from '@/config/constant';


export async function editComment(data) { 

//   const tokenValue = JSON.parse(localStorage.getItem("token"));
//   const headers = {
//     "x-access-token": `${tokenValue}`
//   };
console.log("going editing in", data);
  const url = `${baseURL}comments`;
//   const response = await axios.post(url, editedProduct, { headers });
  const response = await axios.patch(url, data);
  
  console.log("response after update", response);
  return response.data;
};