import style from "./filterProduct.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

export function FilterProduct({type}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

  }, []);

  const filteredArray= products.filter((product)=> product.Flag.includes(type)?true:false)

  console.log(filteredArray);

  return (
    <>
     
        {filteredArray.map((product, index) => (
          
            <div className={style.containerr}>
              <div>
                <img src={"/bag.png"} alt={`Product ${index}`} />
              </div>
              <div>{product.Title}</div>
              <div>
                <div className="cost">
                  Rs.{product.SellingPrice} <span>Rs{product.Price}</span>
                </div>
                <div className={style.rating}> </div>
              </div>
              <div>
                <button className={style.button}>Add to Cart</button>
              </div>
            </div>
         
        ))}
     
    </>
  );
}
