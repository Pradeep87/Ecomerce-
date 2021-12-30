import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        {/* <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" /> */}
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy;</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/pradeep87055/">Instagram</a>
     <a href="https://www.facebook.com/profile.php?id=100025231511617">Facebook</a>
     <a href="https://github.com/Pradeep87">GitHub</a>




      </div>
    </footer>
  );
};

export default Footer;
