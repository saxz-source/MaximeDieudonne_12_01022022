import React from "react";
import "./header.css";
import HeaderLogo from "./HeaderLogo";
import MainNav from "./MainNav";

const Header = () => {
    return (
        <header className="mainHeader">
            <HeaderLogo />
            <MainNav />
        </header>
    );
};

export default Header;
