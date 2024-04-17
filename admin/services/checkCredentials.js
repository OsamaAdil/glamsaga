import axios from 'axios';
import { baseURL } from '@/config/constant';

export async function checkCredentials(user) {
  const tokenValue = JSON.parse(localStorage.getItem("token"));
  const headers = {
    "x-access-token": `${tokenValue}`
  };

  const url = `${baseURL}auth/login`;
  const response = await axios.post(url, user, { headers });
  return response.data;
};
