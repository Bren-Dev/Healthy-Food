import React from "react";
import Carousel from "../../components/carousel";
import Footer from "../../components/footer";
import Recipes from "../../components/recipes";
import Header from "../../components/header";
import { Container, DivBlog } from "./styles";
import Services from "../../components/services";

function Home() {
  return (
    <Container>
      <Header />
      <Recipes />
      <Services />
      <DivBlog>
        <h1>Read Our Blog</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          <br />
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </DivBlog>
      <Carousel />
      <Footer />
    </Container>
  );
}

export default Home;
