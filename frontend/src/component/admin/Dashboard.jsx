import React, { useEffect } from 'react'
import Sidebar from './Sidebar';
import './dashboard.css';
import MetaData from '../shared/MetaData';
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {getAdminProduct}from '../../actions/productA';
const Dashboard = () => {

const dispatch = useDispatch();
  const {products } = useSelector(state => state.productList)
    
  const { orders } = useSelector((state) => state.allOrders);
  const { users } = useSelector((state) => state.allUsers);


  let outOfStock=0;
  products && products.forEach((item)=>{
    if(item.Stock ===0){
      outOfStock +=1;
    }
  })


  useEffect(() => {
    dispatch(getAdminProduct());
  
  }, [dispatch]);


    return (
        <div className='dashboard' >
  <MetaData title="Dashboard - Admin Panel" />
         <Sidebar/>
           
         <div className="dashboardContainer">
         <Typography component="h1">Dashboard</Typography>
         <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> 
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
            <p>Product</p>
              <p>{products && products.length}</p>
            </Link>
            <Link to="/admin/orders">
            <p>Orders</p>
              <p>{orders && orders.length}</p>
             
            </Link>
            <Link to="/admin/users">
            <p>Users</p>
              <p>{users && users.length}</p>


          
            </Link>


</div>

          
<p>Out Of Stock </p>
              <p>{outOfStock}</p>


        </div>
         </div>


        </div>
    )
}

export default Dashboard
