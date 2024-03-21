import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductPage from "@/components/ProductPage/ProductPage";
import { fetchProducts } from "@/components/api";

const ProductDetailPage = () => {
  const router = useRouter();
  const { _id: productId } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log("Router query:", router.query);
    console.log("ProductId:", productId);

    const fetchData = async () => {
      try {
        const products = await fetchProducts();
        const foundProduct = products.find(
          (product) => product._id === parseInt(productId)
        );
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          console.log("Product not found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  console.log(product);

  return (
    <>
      <ProductPage product={product} />
    </>
  );
};

export default ProductDetailPage;
