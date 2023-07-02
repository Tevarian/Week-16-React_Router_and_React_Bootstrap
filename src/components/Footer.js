import React from "react";
import Disclaimer from "./Disclaimer";
import "../styles/Footer.css";
import { GitHub } from "@mui/icons-material/";

const Footer = () => {
  return (
    <>
      <h4>Thank you for reading our reviews.</h4>
      <div className="footer">
        <div className="block">Created by: Cam Emerick</div>
        <div className="block">
          <a href="https://github.com/Tevarian?tab=repositories">
            <GitHub className="git" fontSize="large" color="primary"></GitHub>
          </a>
        </div>
      </div>
      <Disclaimer />
    </>
  );
};

export default Footer;
