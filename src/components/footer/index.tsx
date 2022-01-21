import React from "react";
import { ContentFooter, JoinFooter, DivJoin, Copyright, DivButton} from "./styles";

import imgFooter from "../../assets/bloco_final_image.svg";

function Footer() {
  return (
    <ContentFooter>
      <JoinFooter>
        <DivJoin>
          <p>
            Join our membership
            <br /> to get special offer
          </p>
          <div>
          <input placeholder="Enter your email address" />
          <DivButton>
          <button>Join</button>
          </DivButton>
          </div>
         
        </DivJoin>
      </JoinFooter>
      <Copyright>
        <div>
          <p>© Copyrights 2019 Stack. All Rights Reserved.</p>
        </div>
        <div>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>

   
      </Copyright>
    </ContentFooter>
  );
}

export default Footer;
