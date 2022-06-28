import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const MenuBar = ({
  leftContent,
  headText,
  headText2,
  headText3,
  headText4,
  headText5,
  rightContent,
  rightContent2,
}) => {
  return (
    <>
      <header>
        <div className="leftContent">{leftContent}</div>
        <div className="headText">
          <li>{headText}</li>
          <li>{headText2}</li>
          <li>{headText3}</li>
          <li>{headText4}</li>
          <li>{headText5}</li>
        </div>
        <div className="rightContent">
          <li>{rightContent}</li>
          <li>{rightContent2}</li>
        </div>
      </header>
    </>
  );
};

export default MenuBar;
