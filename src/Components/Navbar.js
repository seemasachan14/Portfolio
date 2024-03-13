import React from "react";
import gmailLogo from "../Resources/Navbar/gmailLogo.png";
import xLogo from "../Resources/Navbar/x twitterLogo.png";
import githubLogo from "../Resources/Navbar/githubLogo.png";
import linkedinLogo from "../Resources/Navbar/linkedinLogo.png";
import instaLogo from "../Resources/Navbar/instaLogo.png";
import "../CSS/Navbar.css";

export default function Navbar() {
    return ( <
        div className = "sticky-top" >
        <
        nav class = "navbar navbar-expand-lg" >
        <
        div class = "container-fluid" >
        <
        p class = "navbar-brand" >
        Seema Sachan <
        /p> <
        /div>




        <
        div class = "d-flex social-media" >
         <
        a href = "https://www.linkedin.com/in/seema-sachan-303b21231/"
        target = "_blank" > < img src = { linkedinLogo }
        alt = "." / > < /a> <
        a href = "https://github.com/seemasachan14"
        target = "_blank" > < img src = { githubLogo }
        alt = "." / > < /a> <
        /div>




        <
        /nav>











        <
        /div>
    );
}