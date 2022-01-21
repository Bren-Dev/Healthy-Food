import React from "react";
import { ContentHeader, ContentLogo, Nav, DivSearch } from "./styles";
import { IoIosSearch } from "react-icons/io";
import imgHeader from "../../assets/bloco_final_image.svg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <ContentHeader>
      
      <Nav>
        <ul>
          <li>HEALTHY RECIPES</li>
          <li>BLOG</li>
          <li>JOIN</li>
          <Link to="/register">
            {" "}
            <li id="register">
              <button>REGISTER</button>
            </li>
          </Link>
        </ul>
      </Nav>

      <header>
        <h1>Healthy Food</h1>
      </header>

      <DivSearch>
        <p>
          Ready for
          <br /> Trying a new
          <br /> recipe?
        </p>
        <div>
          <input placeholder="Search healthy recipes"/>
          <button>
            <IoIosSearch />
          </button>
        </div>
      </DivSearch>
    </ContentHeader>
  );
}

export default Header;
