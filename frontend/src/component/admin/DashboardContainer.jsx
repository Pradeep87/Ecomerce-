import React from 'react'
import { useSelector } from 'react-redux'
import Dashboard from './Dashboard';

const DashboardContainer = () => {
    const {user}= useSelector(state => state.user);

    return (
        <>

{ 
    user.role === 'admin' ?   (<Dashboard/>) : (  <h1>your role is not Admin </h1>)
}

          
        </>
    )
}

export default DashboardContainer
