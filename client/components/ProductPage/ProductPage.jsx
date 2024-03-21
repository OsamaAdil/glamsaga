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
    if (requiredVariants.length > 0) {
      setSelectedVariant(requiredVariants[0]);
    }
  }, [requiredVariants]);

  const handleVariantSelection = (variant) => {
    setSelectedVariant(variant);
  };

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
      {variant.size} {variant.colour}
    </div>
  ));

  const addToCart = (product, selectedVariant) => {
    dispatch(addItemToCart1({ product, selectedVariant }));
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
