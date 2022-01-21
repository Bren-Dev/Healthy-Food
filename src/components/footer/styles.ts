import styled from "styled-components";
import imgFooter from "../../assets/bloco_final_image.svg";

export const ContentFooter = styled.div``;
export const JoinFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${imgFooter});
  background-position-x: right;
  background-repeat: no-repeat;
  background-size: 55vw;
  height: 55vw;
  p {
    color: #2d3561;
    font-size: 3vw;
    font-weight: 700;
  }
  input {
    display: flex;
    width: 50vw;
    height: 2.5vw;
    font-size: 0.8vw;
    border: 0.15vw solid  #707070;
    border-radius: 4px;
    padding-left: 1rem;
    color: #9e9baf;
  }
`;
export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1vw;
  button {
    border-radius: 5px;
    width: 5vw;
    height: 2.7vw;
    background-color: #badc58;
    border: 1px solid #badc58;
    color: #ffffff;
    font-size: 1vw;
  }
`;
export const DivJoin = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  div {
    display: flex;
    justify-content: flex-start;
    width: 54%;
  }
`;
export const Copyright = styled.div`
  display: flex;
  justify-content: space-around;
  font-weight: 600;
  font-size: 1vw;
  p {
    color: #2d3561;
  }
  ul {
    list-style-type: none;
    color: #bcbcbc;
    display: flex;
  }
  ul li {
    margin-right: 3vw;
  }
`;
