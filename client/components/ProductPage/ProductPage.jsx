import { useState, useEffect } from "react";
import { fetchProductVariants } from "../api";
import { useDispatch } from "react-redux";
import { addItemToCart1 } from "@/redux/features/cartSlice";
import style from "./productpage.module.css";

const ProductPage = ({ product }) => {
  const [productVariants, setProductVariants] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState();
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);

  const images = product.images;

  const videos = product.video;

  const handleThumbnailClick = (item) => {
    setSelectedThumbnail(item);
  };

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

  console.log(requiredVariants);

  useEffect(() => {
    if (productVariants.length > 0 && !selectedVariant) {
      setSelectedVariant(requiredVariants[0]);
    }
  }, [productVariants]);

  // const variantMapping = requiredVariants.map((variant) => (
  //   <div
  //     key={variant.id}
  //     onClick={() => handleVariantSelection(variant)}
  //     className={`${style.variants} ${
  //       selectedVariant && selectedVariant.id === variant.id
  //         ? style.selectedVariant
  //         : ""
  //     }`}
  //   >
  //     <div>{variant.size}</div>
  //     <div>{variant.colour}</div>{" "}
  //   </div>
  // ));
  const handleVariantSelection = (variant) => {
    setSelectedVariant(variant);
    console.log(variant);
  };

  const variantMapping = requiredVariants.map((variant) => (
    <div
      key={variant._id}
      onClick={() => handleVariantSelection(variant)}
      className={`${style.variants} ${
        selectedVariant && selectedVariant._id === variant._id
          ? style.selectedVariant
          : style.variants
      }`}
    >
      <div>{variant.size}</div>
      <div>{variant.colour}</div>
    </div>
  ));

  const addToCart = () => {
    if (selectedVariant) {
      dispatch(addItemToCart1({ product, selectedVariant }));
    }
  };
  const imageMapping = images.map((item, index) => (
    <div key={index} className={style.thumbnail}>
      <img
        src={item}
        alt={`Thumbnail ${index}`}
        onClick={() => handleThumbnailClick(item)}
        style={{
          filter:
            selectedThumbnail === item ? "brightness(70%)" : "brightness(100%)",
        }}
      />
    </div>
  ));

  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.imageContainer}>
          <div className={style.mainImage}>
            {selectedThumbnail && selectedThumbnail.endsWith(".mp4") ? (
              <video
                src={selectedThumbnail}
                controls
                poster={selectedThumbnail}
                style={{ height: "400px" }}
                autoPlay
              />
            ) : (
              <img src={selectedThumbnail || "/bag.png"} alt="Product" />
            )}
          </div>
          <div className={style.gallery}>
            {imageMapping}

            <div className={style.thumbnail}>
              <img
                src="\defaultVideo.png"
                onClick={() => handleThumbnailClick(videos)}
              />
            </div>
          </div>
        </div>

        <div className={style.productDetails}>
          <h1 className={style.title}>{product.title} </h1>
          <div>
            <span> Ratings :</span> {product.rating}{" "}
          </div>
          <div className={style.price}>
            {" "}
            &#8377;
            {Math.round(
              product.price * (1 - product.discountPercent / 100)
            )}{" "}
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
