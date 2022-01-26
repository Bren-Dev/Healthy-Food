import styled from "styled-components";


export const Container = styled.div`
  font-family: "Source Sans Pro";
  background-color: #ffffff;
  a {
    text-decoration: none;
  }
`;

export const ContentBlog = styled.div`
  background-color: #fafafc;
  padding-bottom: 4rem;
`;

export const DivCarousel = styled.div`
  display: flex;
  justify-content: space-around;
  #avatar {
    width: 50px;
  }
`;
export const DivCard = styled.div`
  img {
    width: 100%;
  }
  background: linear-gradient(to top, #eeeef2 0%, #ffffff 4%);

  border-radius: 5px;
  width: 20%;
  height: 400px;
  @media (max-width: 700px) {
    height: 200px;
  }
`;
export const TitleBlog = styled.div`
  h1 {
    color: #1d164d;
    font-size: 25px;
    margin-left: 2rem;
    @media (max-width: 700px) {
      font-size: 10px;
      margin-left: 6px;
    }
  }
  p {
    font-size: 9px;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 2rem;
  @media (max-width: 700px) {
    margin-left: 5px;
    margin-top: 2rem;
  }

  p {
    color: #9e9baf;
    margin-left: 1rem;
    @media (max-width: 700px) {
      font-size: 8px;
    }
  }
  #avatar {
    @media (max-width: 700px) {
      width: 25px;
    }
  }
`;
export const DivBlog = styled.div`
  h1 {
    color: #1d164d;
    font-size: 2.5vw;
    margin-top: 0;
    margin-bottom: 0.5vw;
    padding-top: 1rem;
  }
  p {
    color: #9e9baf;
    font-size: 1vw;
    font-weight: normal;
    margin-bottom: 3vw;
    
    font-weight: 400;
  }

  text-align: center;
`;
