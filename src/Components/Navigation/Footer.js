import React from "react";
import "./Footer.css";

const date = new Date();
const year = date.getFullYear();

function Footer (){
    return(
    <footer className = "footer">
    <p>Created By Ali Sadek {year}</p>
    </footer>
    );
};

export default Footer;