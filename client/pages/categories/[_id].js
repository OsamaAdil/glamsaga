import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/components/api";
import Category from "@/components/Category/Category";

const CategoryPage = () => {
  const router = useRouter();
  const { _id: ID } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProducts();
        const foundProduct = products.filter(
          (product) => product.categoryId === ID
        );
        if (foundProduct.length > 0) {
          // Check if any products are found
          setProduct(foundProduct);
        } else {
          console.log("Products not found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [ID]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return <Category products={product} />;
};

export default CategoryPage;
