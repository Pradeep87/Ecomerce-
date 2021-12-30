import React, { useState } from "react";
import '../css/header.css';
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import Backdrop from "@material-ui/core/Backdrop";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { useAlert } from "react-alert";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../actions/userAction";


const UserOption = ({user}) => {
    const alert = useAlert();
    const navigate=useNavigate();
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const options = [
        { icon: <ListAltIcon />, name: "Orders", func: orders },
        { icon: <PersonIcon />, name: "Profile", func: account },
        { icon: <ShoppingCartIcon/>, name: "cart", func: cart },
        { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
       
      ];

      if (user.role === "admin") {
        options.unshift({
          icon: <DashboardIcon />,
          name: "Dashboard",
          func: dashboard,
        });
      }
      function dashboard() {
        navigate("/admin/dashboard",{replace:true});
      }
    
      function orders() {
        navigate("/orders",{replace:true});
      }
      function account() {
        navigate("/account",{replace:true});
      }
      function cart() {
        navigate("/cart",{replace:true});
      }
      function logoutUser() {
      dispatch(Logout());
        alert.success("Logout Successfully");
      }

    return (
        <>
           <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "11" }}
        open={open}
        direction="down"
        className="speedDial"
        icon={
          <img
            className="speedDialIcon"
            src={user.avatar.url ? user.avatar.url : "/Profile.png"}
            alt="Profile"
          />
        }
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={window.innerWidth <= 600 ? true : false}
          />
        ))}
      </SpeedDial>
        </>
    )
}

export default UserOption
