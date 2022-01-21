import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins";
  background-color: #6b9655;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 745px;
  img {
    width: 295px;
  }
`;
export const ContentRegister = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 2rem;
  }
  background-color: #ffffff;
  width: 40%;

  margin-left: 7rem;
`;
export const DivRegister = styled.div`
  /* background: linear-gradient(to left, #eeeef2 0%, #ffffff 4%); */
  border-radius: 20px;
  box-shadow: 15px 15px 10px gray;
`;
export const ContentAllRegister = styled.div`
  @media (max-width: 768px) {
    width: 70%;
  }
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  width: 80%;
  height: 580px;
  #linha-horizontal {
    width: 300px;
    border: 1px solid #c1e8ae;
    background-color: #c1e8ae;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
export const ContentImage = styled.div`
  @media (max-width: 768px) {
    display: block;
    visibility: hidden;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c1e8ae;
  height: 100%;
  width: 35%;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
`;

export const DivInput = styled.div`
  p {
    font-size: 10px;
    margin-bottom: 7px;
    color: #000000;
  }
  input {
    width: 200px;
    border: #e2efdc 1px solid;
    background-color: #e2efdc;
    border-radius: 4px;
    padding-left: 10px;
  }
`;
export const DivButton = styled.div`
  @media (max-width: 768px) {
    justify-content: space-around;
  }
  display: flex;
  justify-content: space-between;
  padding: 4rem;
  a {
    text-decoration: none;
  }
  button {
    width: 100px;
    height: 40px;
    background-color: #81c962;
    border: 1px solid #81c962;
    border-radius: 23px;
    color: rgba(255, 255, 255, 1);
  }
`;
export const WelcomeRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: rgba(129, 201, 98, 1);
    font-weight: 600;
    font-size: 20px;
  }
  p {
    color: rgba(0, 0, 0, 0, 5);
    font-size: 10px;
  }
`;
export const ContentInput = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;
