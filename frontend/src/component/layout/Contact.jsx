import React from "react";
import "../css/Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:pradeep87055@gmail.com">
        <Button>Contact: pradeep87055@gmail.com</Button>
      </a>

      <a href="tel:+8755819345">  
             <Button>mob : 8755819345</Button></a>
    </div>
  );
};

export default Contact;

