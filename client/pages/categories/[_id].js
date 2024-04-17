import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchProducts, fetchCategories } from "@/components/api";
import Category from "@/components/Category/Category";

const CategoryPage = () => {
  const router = useRouter();
  const { _id: ID } = router.query;
  const [product, setProduct] = useState(null);
  // const [categories, setCategories] = useState(null);
  const [variable, setVariable] = useState(null);

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
        const fetchedCategories = await fetchCategories();
        // setCategories(fetchCategories);
        const filteredCategory = fetchedCategories.filter(
          (item) => item._id === ID
        );
        setVariable(filteredCategory[0]?.name);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      // console.log(variable);
    };
    fetchData();
  }, [ID]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Category products={product} variables={variable} />
    </>
  );
};

export default CategoryPage;
