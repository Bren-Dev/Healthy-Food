import styled from "styled-components";

export const Container = styled.div`
  display: flex;

`;
export const DivBlockGreen = styled.div`
  width: 468px;
  height: 815px;
  background: #81c962;
  box-shadow: 0px 4px 140px rgba(54, 72, 197, 0.25);
  @media (max-width:768px) {
    display: block;
    visibility: hidden;
  }
`;

export const ContentForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5rem;
  @media (max-width:768px) {
    margin-left:0;
  }  
`;

export const DivForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 918px;
  height: 620px;
  left: 731px;
  top: 150px;
  background: #ffffff;
  box-shadow: 0px 4px 35px rgba(41, 82, 144, 0.25);
  border-radius: 5px;
  @media (max-width:1440px){
    width: 838px;
  }
  @media (max-width:768px) {
    margin-right: 0;
  }

`;

export const Button = styled.div`

  a {
    text-decoration: none;
  }
  button {
    background-color: #81c962;
    border: 1px solid #b5b5b5;
    border-radius: 5px;
    width: 120px;
    height: 37px;
    color: #ffffff;
  }
`;

export const DivButton = styled.div`
  margin-top: 5rem;
  width: 120px;
  height: 37px;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

export const DivInput = styled.div`
  margin-left: 1rem;
  input {
    padding-left: 1rem;
    border: 1px solid #b5b5b5;
    box-sizing: border-box;
    filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.25));
    border-radius: 5px;
    width: 250px;
    height: 36px;
  }
`;

export const DivText = styled.div`
  p {
    font-size: 40px;
    line-height: 54px;
    letter-spacing: 0.04em;
    margin-top: 0;
    color: #000000;
  }
`;

export const ContentInput = styled.div`
  display: flex;
`;
