import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = styled.h1`
  font-family: "Saira Stencil One";
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;
  color: #85464f;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: auto;
  margin-inline: 24px;
  min-height: 100vh;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 14px;
  margin-top: 32px;
`;
export const Input = styled.input`
  width: 100%;
  background: #ffffff;
  border-radius: 5px;
  color: #000;
  font-size: 20px;
  line-height: 25px;
  padding: 12px 8px;
  outline: none;
  :disabled {
    background: #f2f2f2;
  }
  ::placeholder {
    color: #000;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 9px;
  background-color: #9e5767;
  color: white;
  font-size: 20px;
`;

export const LinkStyled = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  margin-top: 36px;
  color: #fff;
`;

export const SignupError = styled.span`
  color: #8a1f1f;
  font-weight: 700;
  font-size: 14px;
  line-height: 10px;
`;
