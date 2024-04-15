import axios from "axios";
import { baseURL } from "@/config/constant";

let productCache = null;
let productVariantCache = null;
let categoriesCache = null;

export async function fetchProducts() {
  // if (productCache) {
  //   return productCache;
  // }

  try {
    const response = await axios.get(`${baseURL}products`);
    // Comment out the line below to use the server URL
    // const response = await axios.get("http://localhost:4000/products");
    productCache = response.data.data;
    console.log(productCache);
    return productCache;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function fetchProductVariants() {
  if (productVariantCache) {
    return productVariantCache;
  }

  try {
    const response = await axios.get(`${baseURL}productvariants`);
    // Comment out the line below to use the server URL
    // const response = await axios.get("http://localhost:4000/productVariantId");
    productVariantCache = response.data.data;
    console.log(productVariantCache);
    return productVariantCache;
  } catch (error) {
    console.error("Error fetching product variants:", error);
    throw error;
  }
}

export async function fetchCategories() {
  if (categoriesCache) {
    return categoriesCache;
  }

  try {
    const response = await axios.get(`${baseURL}categories`);
    // Comment out the line below to use the server URL
    // const response = await axios.get("http://localhost:4000/categories");
    categoriesCache = response.data.data;
    console.log(categoriesCache);
    return categoriesCache;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}
