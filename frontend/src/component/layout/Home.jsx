import React,{useEffect} from 'react'
import '../css/Home.css';
import { CgMouse } from "react-icons/all";
import ProductCard from '../shared/ProductCard';
import MetaData from '../shared/MetaData';
import {clearErrors, getProduct}from "../../actions/productA";
import {useSelector,useDispatch}from 'react-redux';
import {useAlert} from 'react-alert';

import Loader from '../shared/Loader';



const Home = () => {
  const alert=useAlert();
  const dispatch = useDispatch();
const {loading,error,products} = useSelector(state => state.productList)

useEffect(() => {
  if(error){
     alert.error(error);
     dispatch(clearErrors());
  }
    dispatch(getProduct());
  }, [dispatch,error,alert])
    return (
<>{loading ? (<Loader/> ) : ( 

  <>
          <MetaData
            title="Ecommerce"
          /> 

<div className="banner">
  <p>Welcome to Ecommerce</p>
  <h1>FIND AMAZING PRODUCTS BELOW</h1>

  <a href="#container">
    <button>
      Scroll <CgMouse/>
    </button>
  </a>
</div>

<h2 className="homeHeading">Featured Products</h2>
<div className="container" id="container">
{ 
  products && products.map((item)=><ProductCard key={item._id} product={item} />)
}

</div>
          
        </>


)}</>

       
    )
}

export default Home
