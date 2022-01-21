import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { DivCard, TitleBlog, Profile } from "./styles";

import block1 from "../../assets/blog_image_1.svg";
import block2 from "../../assets/bloco_image_2.svg";
import block3 from "../../assets/bloco_image_3.svg";
import block4 from "../../assets/bloco_image_4.svg";
import avatar1 from "../../assets/Avatar1.svg";
import avatar2 from "../../assets/Avatar2.svg";
import avatar3 from "../../assets/Avatar3.svg";
import avatar4 from "../../assets/Avatar4.svg";

const responsive = {
  0: { items: 2 },
  568: { items: 2 },
  1024: { items: 3 },
};
const items = [
    <DivCard data-value="1">
      <TitleBlog>
        <img src={block1} alt="" />
        <h1>
          Quick-start guide
          <br /> to nuts and seeds
        </h1>
      </TitleBlog>
      <Profile>
        <img src={avatar1} id="avatar" alt="" />
        <p>Kevin Ibrahim</p>
      </Profile>
    </DivCard>
    ,
    <DivCard data-value="2">
      <TitleBlog>
        <img src={block2} alt="" />
        <h1>
          Nutrition: Tips for <br />
          Improving Your Health
        </h1>
      </TitleBlog>
      <Profile>
        <img src={avatar2} id="avatar" alt="" />
        <p>Mike Jackson</p>
      </Profile>
    </DivCard>
    ,
    <DivCard data-value="3">
      <TitleBlog>
        <img src={block3} alt="" />
        <h1>
          The top 10 benefits <br />
          of eating healthy
        </h1>
      </TitleBlog>
      <Profile>
        <img src={avatar3} id="avatar" alt="" />
        <p>Bryan McGregor</p>
      </Profile>
    </DivCard>
    ,
    <DivCard data-value="4">
      <TitleBlog>
        <img src={block4} alt="" />
        <h1>
          Best Healthcare <br />
          in the World 2021
        </h1>
      </TitleBlog>
      <Profile>
        <img src={avatar4} id="avatar" alt="" />
        <p>Joseph Gregor</p>
      </Profile>
    </DivCard>,

];

const Carousel = () => (
  <AliceCarousel
    mouseTracking
    items={items}
    paddingLeft={50}
    paddingRight={50}
    responsive={responsive}
    disableDotsControls
  />
);

export default Carousel;
