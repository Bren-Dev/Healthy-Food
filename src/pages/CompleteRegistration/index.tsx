import React, { useState, useEffect} from "react";
import cepApi from "../../services/cep-api";
import InputMask from "react-input-mask";
import {
  Container,
  DivBlockGreen,
  ContentForm,
  DivForm,
  DivInput,
  DivButton,
  Button,
  DivText,
  ContentInput,
} from "./styles";
import { Link } from "react-router-dom";

type CepResponseType = {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  siafi: string;
  uf: string;
};

function CompleteRegistration() {
  const [cep, setCep] = useState("");
  const [cpf, setCPF] = useState("");
  const [date, setDate] = useState("");
  const [bairro, setBairro] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [logradouro, setLogradouro] = useState("");

  function getDataViaCep() {
    cepApi.get(`${cep}/json`).then((res) => {
      console.log(res.data);
      const data = res.data as CepResponseType;
      setCidade(data.localidade);
      setBairro(data.bairro);
      setEstado(data.uf);
      setLogradouro(data.logradouro);
    });
  }

  return (
    <Container onBlur={getDataViaCep}>
      <DivBlockGreen></DivBlockGreen>

      <ContentForm>
        <DivForm>
          <DivText>
            <p>Preencha os dados corretamente</p>
          </DivText>
          <ContentInput>
            <DivInput>
              <p>CEP</p>
              <InputMask
                mask={"99999-999"}
                value={cep}
                onChange={(event) => {
                  setCep(event.target.value);
                }}
              />
            </DivInput>
            <DivInput>
              <p>CPF</p>
              <InputMask
                mask={"999.999.999-99"}
                value={cpf}
                onChange={(event) => {
                  setCPF(event.target.value);
                }}
              />
            </DivInput>
            <DivInput>
              <p>Data de nascimento</p>
              <input
                type="date"
                value={date}
                onChange={(event) => {
                  setDate(event.target.value);
                }}
              />
            </DivInput>
          </ContentInput>
          <ContentInput>
            <DivInput>
              <p>Estado</p>
              <input
                value={estado}
                onChange={(event) => {
                  setEstado(event.target.value);
                }}
              />
            </DivInput>
            <DivInput>
              <p>Cidade</p>
              <input
                value={cidade}
                onChange={(event) => {
                  setCidade(event.target.value);
                }}
              />
            </DivInput>
            <DivInput>
              <p>Bairro</p>
              <input
                value={bairro}
                onChange={(event) => {
                  setBairro(event.target.value);
                }}
              />
            </DivInput>
          </ContentInput>

          <ContentInput>
            <DivInput>
              <p>Logradouro</p>
              <input
                value={logradouro}
                onChange={(event) => {
                  setLogradouro(event.target.value);
                }}
              />
            </DivInput>
            <DivInput>
              <p>Número</p>
              <InputMask mask={"9999"} />
            </DivInput>
            <DivInput>
              <p>Complemento</p>
              <input />
            </DivInput>
          </ContentInput>

          <DivButton>
            <Button>
              <Link to="/register">
                <button>Voltar</button>
              </Link>
            </Button>
            <Button>
              <Link to="">
                <button>Registrar</button>
              </Link>
            </Button>
          </DivButton>
        </DivForm>
      </ContentForm>
    </Container>
  );
}

export default CompleteRegistration;
