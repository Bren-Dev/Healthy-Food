import styled from "styled-components";
import illustration from "../../assets/illustration.svg";

export const ContentHeader = styled.div`
  display: flex;
  height: 50vw;
  flex-direction: column;

  h1 {
    color: #badc58;
    font-size: 3vw;
    margin-left: 5vw;
  }

  svg {
    color: #ffffff;
    width: 2vw;
  }
  p {
    color: #1d164d;
    font-size: 3vw;
    font-weight: 1000;
  }

  main * {
    z-index: 10;
  }
`;

export const ContentLogo = styled.div`
  display: flex;
`;

export const Nav = styled.div`
  position: absolute;
  right: 0;
  background-image: url(${illustration});
  background-repeat: no-repeat;
  background-position-x: right;
  background-size: 55vw;
  height: 55vw;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 1;

  nav {
    width: 50%;
    display: flex;
    flex-direction: row;

    flex-wrap: wrap;
  }

  a {
    color: #badc58;
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    width: 50%;
    justify-content: center;
    align-items: center;
    font-size: 1.2vw;
  }
  ul li {
    margin-right: 1.5vw;
    font-weight: 600;
    color: #ffffff;
  }
  #register {
    background-color: #ffffff;
    border-radius: 6px;
    font-weight: 800;
    width: 100%;
    height: 3vw;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      background-color: #ffffff;
      border: 1px solid #ffffff;
      color: #badc58;
      font-size: 1vw;
    }
  }
`;
export const DivSearch = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin-left: 5%;
  width: 50%;
  z-index: 1000;
  div {
    width: 45%;
    display: flex;
    justify-content: space-between;
  }
  input {
    width: 80%;
    height: 3vw;
    font-size: 0.8vw;
    border: 1px solid #1d164d;
    border-radius: 4px;
    padding-left: 1vw;
    color: #9e9baf;
    margin-right: 1vw;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 2vw;
    width: 5vw;
    height: 3vw;
    background-color: #badc58;
    border: 1px solid #badc58;
    color: #ffffff;
  }
`;
