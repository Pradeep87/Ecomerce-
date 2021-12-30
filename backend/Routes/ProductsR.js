const express=require('express');
const router=express.Router();
const { getAllProducts, createProduct, updateProducts, deleteProduct,
     getProductDetails, createProductReview, deleteReview,
      getProductReviews,getAdminProducts } = require('../Controllers/ProductC');
const { isAuthenticatedUser,authorizedRoles } = require('../middelware/Auth');



router.route('/products').get(getAllProducts);

router.route('/products/new').post(isAuthenticatedUser,authorizedRoles("admin") ,createProduct);


router.route('/products/:id').put(isAuthenticatedUser,authorizedRoles("admin") ,updateProducts)
.delete(isAuthenticatedUser,authorizedRoles("admin"),deleteProduct);



router.route('/products/:id').get(getProductDetails)
router.route('/review').put(isAuthenticatedUser,createProductReview);

router.route('/reviews').get(getProductReviews).delete(isAuthenticatedUser,deleteReview);


router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizedRoles("admin"), getAdminProducts);


module.exports=router;