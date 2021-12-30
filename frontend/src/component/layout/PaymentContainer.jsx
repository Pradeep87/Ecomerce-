import React,{useState,useEffect} from 'react';
import axios from 'axios';


import {Elements} from "@stripe/react-stripe-js";
import { loadStripe} from "@stripe/stripe-js";

import PaymentScreen from '../shared/PaymentScreen';





const PaymentContainer = () => {
   
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
getStripeApiKey();
  }, [stripeApiKey]);

  
    return (
        <>{
            stripeApiKey && (
                <Elements stripe={loadStripe(stripeApiKey)}>
         <PaymentScreen/>
         </Elements>
            )
        }
     
        </>
    )
}

export default PaymentContainer
