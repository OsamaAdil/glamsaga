import axios from "axios";
import { baseURL } from "@/config/constant";

export async function fetchProducts() {
  try {
    const response = await axios.get(`${baseURL}products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}