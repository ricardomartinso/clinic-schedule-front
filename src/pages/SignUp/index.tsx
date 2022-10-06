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
  SignupError,
} from "./styles";

export function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  function submitForm(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    if (password !== confirmPassword) {
      setIsLoading(false);
      return setIsError("Confirme a senha e a senha precisam ser iguais!");
    }

    const signupInformation = {
      email,
      password,
      confirmPassword,
    };

    api
      .post("/signup", signupInformation)
      .then(() => {
        setIsLoading(false);
        navigate("/");
      })
      .catch((err) => {
        if (err.response.status === 422) {
          setIsError("Senhas precisam ter 6 caracteres de tamanho!");
        }
        if (err.response.status === 409) {
          setIsError("Email já cadastrado, por favor altere o seu email");
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
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            required
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme a senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {isError !== "" ? <SignupError>{isError}</SignupError> : ""}

          {isLoading ? (
            <Button type="submit" disabled={isLoading}>
              <ThreeDots color="white" />
            </Button>
          ) : (
            <Button type="submit">Registrar!</Button>
          )}
        </Form>
        <LinkStyled to="/">Já tem uma conta? Faça o login</LinkStyled>
      </Container>
    </>
  );
}
