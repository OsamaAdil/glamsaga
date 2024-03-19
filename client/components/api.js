import axios from "axios";
import { baseURL } from "@/config/constant";

export async function fetchProducts() {
  try {
    // const response = await axios.get(`${baseURL}products`);
    // return response.data.data;
    const response = await axios.get("http://localhost:4000/products");
    return response.data

  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function fetchProductVariants() {
  try {
    // const response = await axios.get(`${baseURL}products`);
    // return response.data.data;
    const response = await axios.get("http://localhost:4000/productVariantId");
    return response.data

  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function catergories() {
  try {
    // const response = await axios.get(`${baseURL}products`);
    // return response.data.data;
    const response = await axios.get("http://localhost:4000/productVariantId");
    return response.data

  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}