import styled from "styled-components";

export const ContentServices = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 50vw;
  }
`;
export const DivService = styled.div`
  width: 50%;
  a {
    color: #ffffff;
  }
  button {
    font-size: 0.8vw;
    border-radius: 4px;
    background-color: #badc58;
    border: 1px solid #badc58;
  }
  h1 {
    font-size: 4vw;
    font-weight: 900;
    color: #2d3561;
  }
  p {
    color: #bcbcbc;
    font-size: 1.5vw;
  }
`;

export const ButtonService = styled.div`
  border-radius: 4px;
  background: linear-gradient(to top, #e4f1bc 0%, #badc58 15%);
  width: 9vw;
  height: 3vw;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
