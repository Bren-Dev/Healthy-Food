import React from "react";

import { ContentServices, DivService, ButtonService } from "./styles";
import services from "../../assets/bloco_services.svg";
function Services() {
  return (
    <ContentServices>
      <div>
        <img src={services} id="illustration" alt="www.google.com" />
      </div>
      <DivService>
        <h1>
          The best services ready
          <br /> To serve you
        </h1>
        <p>
          Far far away, behind the word mountains, far <br />
          from the countries Vokalia and Consonantia, there live the <br />
          blind texts.
        </p>
        <p>
          Separated they live in Bookmarksgrove right at the
          <br /> coast of the Semantics, a large language ocean.
        </p>
        <p>
          A small river named Duden flows by their place and
          <br />
          supplies it with the necessary regelialia.
        </p>
        <ButtonService>
          <button>
            <a href="google.com">Know More</a>
          </button>
        </ButtonService>
      </DivService>
    </ContentServices>
    
  );
}

export default Services;
