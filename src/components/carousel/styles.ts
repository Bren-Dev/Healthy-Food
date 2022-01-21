import styled from "styled-components";

export const DivCard = styled.div`
  background: linear-gradient(to top, #eeeef2 0%, #ffffff 4%);
  border-radius: 5px;
  width: 30vw;
  height: 35vw;
`;
export const TitleBlog = styled.div`
  img {
    width: 100%;
  }
  h1 {
    color: #1d164d;
    font-size: 2vw;
    margin-left: 2vw;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 2vw;
  margin-top: 2vw;
  p {
    color: #9e9baf;
    margin-left: 1rem;
    font-size: 1vw;
  }
  #avatar {
    width: 3vw;
  }
`;
