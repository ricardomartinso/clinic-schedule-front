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
  LoginError,
} from "./styles";
import { useUser } from "../../hooks/useUser";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [pwdError, setPwdError] = useState("");
  const [emailError, setEmailError] = useState("");

  const { loginUser }: any = useUser();

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

    if (password.length < 6) {
      setPwdError("true");
      setIsLoading(false);
      error("Senha precisa ter pelo menos 6 caracteres");
      setIsError(true);
      return;
    }

    const loginInformation = {
      email,
      password,
    };

    api
      .post("/login", loginInformation)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          const { token } = response.data;

          localStorage.setItem("token", token);
          loginUser("User");
          navigate("/home");
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setPwdError("true");
          setEmailError("true");
          setEmail("");
          setPassword("");
          setIsError(true);
          error("Email ou senha inválidos");
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
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            color={emailError}
            disabled={isLoading}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            color={pwdError}
            disabled={isLoading}
            required
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
            <Button type="submit">Logar!</Button>
          )}
        </Form>

        <LinkStyled to="/sign-up">Não tem uma conta? Cadastre-se</LinkStyled>
      </Container>
    </>
  );
}
