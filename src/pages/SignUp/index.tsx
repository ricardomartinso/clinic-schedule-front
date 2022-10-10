import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { api } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [isError, setIsError] = useState(false);
  const [pwdError, setPwdError] = useState("");
  const [emailError, setEmailError] = useState("");

  const error = (message: string) =>
    toast.error(`${message}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  function submitForm(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    if (password !== confirmPassword) {
      setPwdError("true");
      setIsLoading(false);
      setIsError(true);
      return error("Confirme a senha e a senha precisam ser iguais!");
    }

    const signupInformation = {
      email,
      password,
      confirmPassword,
    };

    api
      .post("/signup", signupInformation)
      .then(() => {
        toast.success("Cadastro realizado com sucesso");
        setIsLoading(false);
        navigate("/");
      })
      .catch((err) => {
        if (err.response.status === 422) {
          setIsError(true);
          error("Senhas precisam ter 6 caracteres de tamanho!");
          setPwdError("true");
        }
        if (err.response.status === 409) {
          setIsError(true);
          error("Email já cadastrado");
          setEmailError("true");
          setPwdError("true");
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
            color={emailError}
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            color={pwdError}
            required
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            name="confirmPassword"
            color={pwdError}
            required
            placeholder="Confirme a senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {isError ? (
            <ToastContainer
              position="top-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              limit={4}
            />
          ) : (
            ""
          )}

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
