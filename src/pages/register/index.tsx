import React from "react";
import {
  Container,
  ContentImage,
  ContentAllRegister,
  DivRegister,
  ContentRegister,
  DivInput,
  DivButton,
  WelcomeRegister,
  ContentInput,
} from "./styles";

import ImageRegister from "../../assets/image_register.svg";
import { Link } from "react-router-dom";

function Register() {
  return (
    <Container>
      <ContentAllRegister>
        <ContentRegister>
          <DivRegister>
            <WelcomeRegister>
              <h1>Seja bem-vindo(a) ao Healthy Food!</h1>
              <p>Preencha os dados abaixo para seguir com o cadastro</p>
            </WelcomeRegister>
            <ContentInput>
              <DivInput>
                <p>Nome</p>
                <input />
              </DivInput>

              <DivInput>
                <p>Email</p>
                <input />
              </DivInput>

              <DivInput>
                <p>Senha</p>
                <input type="password" />
              </DivInput>
            </ContentInput>

            <DivButton>
            <Link to="/">
                <button>↽ Voltar</button>
              </Link>
              <Link to="/CompleteRegistration">
                <button>Continuar ⇀</button>
              </Link>
            </DivButton>
          </DivRegister>
        </ContentRegister>

        <ContentImage>
          <img src={ImageRegister} alt="www.google.com" />
        </ContentImage>
      </ContentAllRegister>
    </Container>
  );
}

export default Register;
