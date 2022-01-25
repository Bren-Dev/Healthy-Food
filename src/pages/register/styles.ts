import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins";
  background-color: #6b9655;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55vw;
  img {
    width: 25vw;
  }
`;
export const ContentRegister = styled.div`
  background-color: #ffffff;
  width: 40%;
  margin-left: 7vw;
  border-radius:20px;
`;
export const DivRegister = styled.div`
  border-radius: 20px;
  box-shadow: 1vw 1vw 0.7vw gray;
`;
export const ContentAllRegister = styled.div`
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  width: 80vw;
  height: 43vw;
`;
export const ContentImage = styled.div`
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
    font-size: 0.8vw;
    margin-bottom: 0.5vw;
    color: #000000;
  }
  input {
    width: 20vw;
    height: 1vw;
    border: #e2efdc 1px solid;
    background-color: #e2efdc;
    border-radius: 4px;
    padding-left: 0.8vw;
  }
`;
export const DivButton = styled.div`

  display: flex;
  justify-content: space-between;
  padding: 2vw;
  a {
    text-decoration: none;
  }
  button {
    font-size: 0.8vw;
    width: 7vw;
    height: 2vw;
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
    font-size: 1.5vw;
  }
  p {
    color: rgba(0, 0, 0, 0, 5);
    font-size: 0.8vw;
  }
`;
export const ContentInput = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 2vw;
`;
