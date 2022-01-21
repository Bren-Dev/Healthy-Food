import styled from "styled-components";
export const ContentRecipes = styled.div`
  background-color: #fafafc;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const DivRecipe1 = styled.div`
  h1 {
    color: #1d164d;
    font-size: 4vw;
    margin-bottom: 1vw;
  }
  p {
    color: #9e9baf;
    font-size: 1vw;
    font-weight: normal;
    margin-bottom: 0.8vw;
  }
  text-align: center;
`;
export const DivRecipe2 = styled.div`
  place-content: center;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
`;

export const RecipeItem = styled.div`
  box-shadow: rgb(0 0 0 / 7%) 10px 10px 10px;
  border-radius: 5px;
  display: flex;
  height: 14vw;
  margin: 0px 1.3vw 3vw 1vw;
  width: 35vw;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const DivRecipeButton = styled.div`
  padding: 1vw 3vw;
  @media (max-width: 768px) {
    padding: 0vw 3vw;
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }
  p {
    color: #1d164d;
    font-size: 2vw;
    font-weight: 700;
    margin-bottom: 1vw;
    @media (max-width: 425px) {
      margin-bottom: 0;
    }
  }
  button {
    letter-spacing: 0.1vw;
    width: 8vw;
    height: 3vw;
    background-color: #badc58;
    border: 1px solid #badc58;
    border-radius: 5px;
    font-size: 1vw;
    font-weight: normal;
    @media (max-width: 425px) {
      font-size: 3px;
    }
  }
`;
