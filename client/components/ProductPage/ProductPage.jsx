import { useState, useEffect } from "react";
import { fetchProductVariants } from "../api";
import { useDispatch } from "react-redux";
import { addItemToCart1 } from "@/redux/features/cartSlice";
import style from "./productpage.module.css";

const ProductPage = ({ product }) => {
  const [productVariants, setProductVariants] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const variants = await fetchProductVariants();
        setProductVariants(variants);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const requiredVariants = productVariants.filter(
    (item) => item.productId === product._id
  );

  useEffect(() => {
    if (productVariants.length > 0 && !selectedVariant) {
      // Ensure no selected variant is already set
      setSelectedVariant(productVariants[0]); // Set first variant as default
    }
  }, [productVariants]);

  const variantMapping = requiredVariants.map((variant) => (
    <div
      key={variant.id}
      onClick={() => handleVariantSelection(variant)}
      className={`${style.variants} ${
        selectedVariant && selectedVariant.id === variant.id
          ? style.selectedVariant
          : ""
      }`}
    >
      <div>{variant.size}</div>
      <div>{variant.colour}</div>{" "}
    </div>
  ));

  const handleVariantSelection = (variant) => {
    setSelectedVariant(variant);
  };

  const addToCart = () => {
    if (selectedVariant) {
      dispatch(addItemToCart1({ product, selectedVariant }));
    }
  };
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.image}>
          <img src={"/bag.png"} alt="Product" />
        </div>
        <div className={style.productDetails}>
          <h1 className={style.title}>{product.title} </h1>
          <div>
            <span> Ratings :</span> {product.rating}{" "}
          </div>
          <div className={style.price}>
            {" "}
            Rs.
            {Math.round(
              product.price * (1 - product.discountPercent / 100) * 100
            ) / 100}{" "}
            <span className={style.costPrice}>{product.price}</span>{" "}
          </div>
          <div className={style.variantContainer}>
            <span>Select Color & Size:</span>
            <br /> {variantMapping}
          </div>
          <div>
            {" "}
            <span>Description :</span> <br />
            {product.longDescription}
          </div>
          <button
            className={style.button}
            onClick={() => {
              addToCart(product, selectedVariant);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
