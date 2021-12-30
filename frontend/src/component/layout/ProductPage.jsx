import React, { useEffect, useState } from 'react'
import ProductCard from '../shared/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getProduct } from '../../actions/productA';
import Loader from '../shared/Loader';
import MetaData from '../shared/MetaData';
import '../css/productPage.css';
import Pagination from 'react-js-pagination';
import { useParams } from 'react-router';
import Typography from "@material-ui/core/Typography";

import { Slider } from '@material-ui/core';
import {useAlert}from 'react-alert';

const categories = [
  "Clothes",
  "Footwear",
  "Electronics",
  "Statue",
  "Rings",
  "bags",
  "SmartPhones",
];

const ProductPage = () => {
const alert=useAlert();

  const { keyword } = useParams();
  const dispatch = useDispatch();
  const { loading, error, productCount, products, resultPerPage } = useSelector(state => state.productList)

  const [currentPage, setcurrPage] = useState(1);
  const setpageNo = (e) => {
    setcurrPage(e);
  }
  const [category, setCategory] = useState("");
const [ratings,setRatings] = useState(0)
  const [price, setprice] = useState([0, 2000])
  const priceHandler = (e, newPrice) => {
    setprice(newPrice)
  }
  useEffect(() => {
    if(error){
     alert.error(error);
     dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, price, category,ratings));
  }, [dispatch, keyword, currentPage, price, category,ratings,error,alert]);


  return (
    <>
      {
        loading ? (<Loader />) : (<>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>


          <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={2000}
            />

            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>

            <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
          </div>


          {
            resultPerPage < productCount && (

              <div className="paginationBox">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={productCount}
                  onChange={setpageNo}
                  nextPageText="Next"
                  prevPageText="Prev"
                  firstPageText="1st"
                  lastPageText="Last"
                  itemClass="page-item"
                  linkClass="page-link"
                  activeClass="pageItemActive"
                  activeLinkClass="pageLinkActive"
                />
              </div>
            )
          }


        </>)
      }
    </>
  )
}

export default ProductPage
