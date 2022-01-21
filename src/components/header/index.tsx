import React from "react";
import { ContentHeader, Nav, DivSearch } from "./styles";
import { IoIosSearch } from "react-icons/io";
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
