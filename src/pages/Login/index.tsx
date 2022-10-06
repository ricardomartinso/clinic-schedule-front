import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { api } from "../../services/api";
import {
  Container,
  Form,
  Logo,
  Button,
  LinkStyled,
  Input,
  LoginError,
} from "./styles";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  function submitForm(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    if (password.length < 6) {
      setIsLoading(false);
      return setIsError("Senha deve ter 6 caracteres de tamanho!");
    }

    const loginInformation = {
      email,
      password,
    };

    api
      .post("/login", loginInformation)
      .then(() => {
        setIsLoading(false);
        navigate("/home");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setIsError("Email ou senha inválidos");
        }
        setIsLoading(false);
      });
  }

  return (
    <>
      <Container>
        <Logo>Clinic Scheduler</Logo>

        <Form onSubmit={submitForm}>
          <Input
            type="email"
            name="email"
            disabled={isLoading}
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            disabled={isLoading}
            required
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {isError !== "" ? <LoginError>{isError}</LoginError> : ""}

          {isLoading ? (
            <Button type="submit" disabled={isLoading}>
              <ThreeDots color="white" />
            </Button>
          ) : (
            <Button type="submit">Logar!</Button>
          )}
        </Form>

        <LinkStyled to="/sign-up">Não tem uma conta? Cadastre-se</LinkStyled>
      </Container>
    </>
  );
}
