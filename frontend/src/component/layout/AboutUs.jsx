import React from "react";
import "../css/aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";

import InstagramIcon from "@material-ui/icons/Instagram";
import WebIcon from '@mui/icons-material/Web';
import GitHubIcon from '@mui/icons-material/GitHub';
import MyImg from '../../images/my.jpg';

const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/pradeep87055/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={MyImg}
              alt="Founder"
            />
            <Typography>Pradeep Rajput </Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by Pradeep Rajput.with the help of @meabhisingh and the channel 6 Pack Programmer.  for practice 
              MERN Stack web development projects. 
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://business-grippers.herokuapp.com/?fbclid=IwAR10FimPXGPhv7rmIKUrUB4U8atK3WCagyfjLAa1lFCOzbJh2qL8eDo-74Q"
              target="blank"
            >
            Business Grippers
              <WebIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/pradeep87055/" target="blank">
             Instagram Profile <InstagramIcon className="instagramSvgIcon" />
            </a>

            <a href="https://github.com/Pradeep87" target="blank">
             GitHub Profile <GitHubIcon className="instagramSvgIcon" />
            </a>




          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
