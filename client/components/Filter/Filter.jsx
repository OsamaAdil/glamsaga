import React from 'react';
import style from './filter.module.css';

export default function Filter() {
  const categories = ['Slings', 'Diaper Bags', 'Elegant Hand Bags', 'Cool Kids Collection', 'Totes', 'Duffle Bags', 'Clutches', 'Accessories', 'Fashion Bag Packs', 'Others'];
  const prices = ["less than 500", '500 to 1000', '1000 to 1500', '1500 to 2000', 'more than 2000'];
  const discounts = [10, 20, 30];
  const ratings = [4, 3, 2, 1];

  const categoryFilter = categories.map((type, index) => (
    <div key={index} className={style.mainDiv}>
      <input type="radio" id={`category-${index}`} name="category" />
      <label htmlFor={`category-${index}`}>{type}</label>
    </div>
  ));

  const priceFilter = prices.map((type, index) => (
    <div key={index} className={style.mainDiv}>
      <input type="radio" id={`price-${index}`} name="price" />
      <label htmlFor={`price-${index}`}>{type}</label>
    </div>
  ));

  const discountFilter = discounts.map((type, index) => (
    <div key={index} className={style.mainDiv}>
      <input type="radio" id={`discount-${index}`} name="discount" />
      <label htmlFor={`discount-${index}`}>{type}% and above</label>
    </div>
  ));

  const ratingFilter = ratings.map((type, index) => (
    <div key={index} className={style.mainDiv}>
      <input type="radio" id={`rating-${index}`} name="rating" />
      <label htmlFor={`rating-${index}`}>{type}+<img src='/star.svg' alt={`star-${index}`} /></label>
    </div>
  ));

  return (
    <div className={style.container}>
     <span>Category</span>
      <div className={style.filter}>{categoryFilter}</div>
      <span>Price</span>
      <div className={style.filter}>{priceFilter}</div>
      <span>Discount</span>
      <div className={style.filter}>{discountFilter}</div>
      <span>Rating</span>
      <div className={style.filter}>{ratingFilter}</div>
    </div>
  );
}
