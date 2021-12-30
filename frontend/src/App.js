import React,{useEffect} from 'react';
import Header from './component/layout/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";


import WebFont from 'webfontloader';
import Footer from './component/layout/Footer';
import Home from './component/layout/Home';
import ProductDeatail from './component/shared/ProductDeatail';
import ProductPage from './component/layout/ProductPage';
import Search from './component/layout/Search';
import Login from './component/layout/Login';
import store from './store';
import { loadUser } from './actions/userAction';
import { useSelector } from 'react-redux'; 
import UserProfile from './component/layout/UserProfile';
import UserOption from './component/layout/UserOption';
import UpsdateProfie from './component/layout/UpsdateProfie';
import ForgotPassword from './component/layout/ForgotPassword';
import UpdatePassword from './component/layout/UpdatePassword';
import ResetPassword from './component/layout/ResetPassword';
import Cart from './component/layout/Cart';
import Shipping from './component/layout/Shipping';
import ConfirmOrder from './component/layout/ConfirmOrder';
import PaymentContainer from './component/layout/PaymentContainer';
import OrderSucces from './component/layout/OrderSucces';
import MyOrders from './component/orders/MyOrders';
import OrderDetail from './component/orders/OrderDetail';

import DashboardContainer from './component/admin/DashboardContainer';

import AdminProduct from './component/admin/AdminProduct';
import NewProduct from './component/admin/NewProduct';
import UpdateProduct from './component/admin/UpdateProduct';
import OrderList from './component/admin/OrderList';
import OrderUpdate from './component/admin/OrderUpdate';
import AdminUsers from './component/admin/AdminUsers';
import UpdateUser from './component/admin/UpdateUser';
import ReviewList from './component/admin/ReviewList';
import AboutUs from './component/layout/AboutUs';
import Contact from './component/layout/Contact';


const App = () => {

  const {isAthenticated,user} = useSelector(state => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
store.dispatch(loadUser());

  }, []);



  return (
    <div>
   <BrowserRouter>
    <Header/>
    {isAthenticated && <UserOption user={user}/>}
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/product/:id' element={<ProductDeatail/>} />
    <Route path='/products' element={<ProductPage/>} />
    <Route path='/products/:keyword' element={<ProductPage/>} />
 <Route path='/search' element={<Search/>} />
 <Route path='/login' element={<Login/>} />
 <Route path='/about' element={<AboutUs/>} />
 <Route path='/contact' element={<Contact/>} />


 { isAthenticated &&  <Route path='/account' element={<UserProfile/>} />  
  }

  { isAthenticated &&   <Route path='/me/update' element={<UpsdateProfie/>} /> 
  }
  { isAthenticated &&   <Route path='/password/update' element={<UpdatePassword/>} /> 
  }
 
   <Route path='/password/forgot' element={<ForgotPassword/>} /> 
  
   <Route path='/password/reset/:token' element={<ResetPassword/>} /> 
  
   { isAthenticated &&   <Route path='/cart' element={<Cart/>} /> 
  }
  { isAthenticated &&   <Route path='/shipping' element={<Shipping/>} /> 
  }
  
  { isAthenticated &&   <Route path='/order/confirm' element={<ConfirmOrder/>} /> 
  }

  { isAthenticated &&   <Route path='/process/payment' element={<PaymentContainer/>} /> 
  }
  { isAthenticated &&   <Route path='/success' element={<OrderSucces/>} /> 
  }

  { isAthenticated &&   <Route path='/orders' element={<MyOrders/>} /> 
  }

  { isAthenticated &&   <Route path='/order/:id' element={<OrderDetail/>} /> 
  }

  {isAthenticated &&  <Route path='/admin/dashboard' element={<DashboardContainer/>} /> 
  }

  {isAthenticated &&  <Route path='/admin/products' element={<AdminProduct/>} /> 
  }

  {isAthenticated &&  <Route path='/admin/product' element={<NewProduct/>} /> 
  }

  {isAthenticated &&  <Route path='/admin/product/:id' element={<UpdateProduct/>} /> 
  }


  {isAthenticated &&  <Route path='/admin/orders' element={<OrderList/>} /> 
  }
  {isAthenticated &&  <Route path='/admin/order/:id' element={<OrderUpdate/>} /> 
  }

  {isAthenticated &&  <Route path='/admin/users' element={<AdminUsers/>} /> 
  }

  {isAthenticated &&  <Route path='/admin/user/:id' element={<UpdateUser/>} /> 
  }
  {isAthenticated &&  <Route path='/admin/reviews' element={<ReviewList/>} /> 
  }


</Routes>
<Footer/>

    </BrowserRouter>
    </div>
  )
}

export default App;
