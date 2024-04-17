import React from "react";
import style from "./contactUs.module.css";

export default function ContactUs() {
  return (
    <div className={style.container}>
      <div className={style.description}>
        <h3>
          Welcome to GlamSaga, where bags aren't just accessories; they're
          statements! 🌟{" "}
        </h3> <br/>
        <br />
        At GlamSaga, we're more than a brand; we're a vibe, a celebration of
        style! Dive into our world of ladies' bags—each piece crafted with
        passion and flair.
        <br />
        <br />{" "}
        <span>
          From chic totes to trendy clutches, our collection caters to every
          mood and occasion. What sets us apart? It's not just about the bags;
          it's about the GlamSaga experience—top-notch quality, on-trend
          designs, and a commitment to your satisfaction.
        </span>
        <br />
        <br />
        Because when you carry GlamSaga, you're not just carrying a bag; you're
        carrying confidence! Let your style narrate your story with GlamSaga!
        💼✨{" "}
      </div>
      <div className={style.contactUs}>
        <h4> Contact Us</h4>
       
          <div><img src="/email.png"></img> </div>
          <div><img src ="/phone.png"></img> </div>
          <div> <img src ="/address.png"></img></div>
        
      </div>
    </div>
  );
}
