// Footer.js

import React from "react";
import style from "./footer.module.css"; 

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.columnFooter}>
          <div>
            <span>Stay in touch</span>
          </div>
          <div>
            Subscribe to receive updates,
            <br />
            access to exclusive deals and more
          </div>
          <div>
            <input
              id="email"
              type="text"
              className={style.email}
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <button className={style.subscribe_btn}>SUBSCRIBE</button>
          </div>
        </div>
        <div className={style.columnFooter}>
          <div>
            <span>Help</span>
          </div>
          <div>Help Center</div>
          <div>FAQs</div>
          <div>Cookie policy</div>
          <div>Terms of use</div>
          <div>Manage cookie settings</div>
        </div>
        <div className={style.columnFooter}>
          <div>
            <span>Company</span>
          </div>
          <div>About Us</div>
          <div>Careers</div>
          <div>Press</div>
          <div>Blog</div>
        </div>
        <div className={style.columnFooter}>
          <div>
            <span>Follow us on</span>
          </div>
          <div className={style.imageContainer}>
            <img className={style.image} src={'/facebook.svg'} alt="Facebook" />
            <img className={style.image} src={'/instagram.svg'} alt="Instagram" />
            <img className={style.image} src={'/twitter.svg'} alt="Twitter" />
            <img className={style.image} src={'/tiktok.svg'} alt="TikTok" />
          </div>
        </div>
      </div>
      <div className={style.footer_footer}>
        <div>PRIVACY POLICY</div>
        <div>TERMS OF SERVICE</div>
      </div>
    </div>
  );
}
