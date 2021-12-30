const express=require('express');
const { newOrder, getSingleOrder, myOrders, getAllOrders,updateOrder, deleteOrder } = require('../Controllers/orderC');
const router=express.Router();
const {isAuthenticatedUser,authorizedRoles}=require("../middelware/Auth");

router.route('/order/new').post(isAuthenticatedUser,newOrder);

router.route('/order/:id').get(isAuthenticatedUser,authorizedRoles('admin'),getSingleOrder);

router.route('/orders/me').get(isAuthenticatedUser,myOrders);

router.route('/admin/orders').get(isAuthenticatedUser,authorizedRoles('admin'),getAllOrders);
router.route('/admin/order/:id').put(isAuthenticatedUser,authorizedRoles('admin'),updateOrder)
.delete(isAuthenticatedUser,authorizedRoles('admin'),deleteOrder);

module.exports=router;