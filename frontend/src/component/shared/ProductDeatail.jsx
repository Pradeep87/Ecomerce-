import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
 import {clearErrors, getProductDetail,newReview}from '../../actions/productA';
import {useDispatch,useSelector }from 'react-redux';
import { useParams} from 'react-router-dom';
import MetaData from '../shared/MetaData';
import Loader from '../shared/Loader';
import { Rating } from "@material-ui/lab";
import { useAlert } from "react-alert";
import '../css/productDetail.css';
import ReviewCard from "./ReviewCard";
import {addItemsToCart} from '../../actions/cartAction';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";

import { NEW_REVIEW_RESET } from "../../constant/productC";

const ProductDeatail = ( ) => {
  

  const {id}=useParams();
  const alert = useAlert();
  const dispatch = useDispatch();
  const {loading,product,error} = useSelector(state => state.productDetail);
  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );

  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");


  const options = {
    size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };


   const [qty, setqty] = useState(1)

const decreaseQuantity=()=>{
  if(qty<=1)return;
  setqty(qty-1)
}

const increaseQuantity=()=>{
  if(product.Stock<=qty)return;
setqty(qty+1)
}

const addToCart=()=>{
 dispatch(addItemsToCart(id,qty));
  alert.success('item added to cart ')
}

const submitReviewToggle = () => {
  open ? setOpen(false) : setOpen(true);
};

const reviewSubmitHandler = () => {
  const myForm = new FormData();

  myForm.set("rating", rating);
  myForm.set("comment", comment);
  myForm.set("productId",id);

  dispatch(newReview(myForm));

  setOpen(false);
};

useEffect(() => {
  if (error) {
     alert.error(error);
     dispatch(clearErrors());
  }

  if (reviewError) {
    alert.error(reviewError);
    dispatch(clearErrors());
  }

  if (success) {
    alert.success("Review Submitted Successfully");
    dispatch({ type: NEW_REVIEW_RESET });
  }
 dispatch(getProductDetail(id))
}, [dispatch,error,id,alert,reviewError,success ])



    return (
      <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`${product.name} -- ECOMMERCE`} />
          <div className="ProductDetails">
            

            <div className="abc" >

            <div className="sld">
              <Carousel>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>

              </div>
            </div>

            <div>
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>
              <div className="detailsBlock-2">
                <Rating {...options} />
                <span className="detailsBlock-2-span">
                  {" "}
                  ({product.numOfReviews} Reviews)
                </span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input readOnly value={qty} type="number" />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button onClick={addToCart}
                    disabled={product.Stock < 1 ? true : false}>
                    Add to Cart
                  </button>
                </div>

                <p>
                  Status :
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "OutOfStock" : " InStock"}
                  </b>
                </p>
              </div>

              <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>

              <button onClick={submitReviewToggle}  className="submitReview">
                Submit Review
              </button>
            </div>
          </div>

          <h3 className="reviewsHeading">REVIEWS</h3>

          <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                size="large"
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              <Button onClick={reviewSubmitHandler} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>








          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}


        </>
      )}
    </>
    )
}

export default ProductDeatail;

