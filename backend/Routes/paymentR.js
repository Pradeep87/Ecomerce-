const express = require("express");

const {processPayment,sendStripeApiKey} =require('../Controllers/paymentC');

const router = express.Router();
const { isAuthenticatedUser } = require('../middelware/Auth');


router.route("/payment/process").post(isAuthenticatedUser, processPayment);

router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);

module.exports = router;
