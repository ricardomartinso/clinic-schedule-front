import styled from "styled-components";

export const Logo = styled.h1`
  font-weight: 700;
  font-size: 30px;
  color: #333;
  width: 100%;
`;

export const Container = styled.main`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 75%;
  margin: 100px auto 0 auto;

  text-align: left;
  padding: 2% 3%;
  min-height: 93.7vh;

  color: #333;

  @media (max-width: 650px) {
    width: 100%;
  }

  @media (min-width: 1000px) {
    width: 64%;
  }
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
  border: ${(props) => (props.color !== "" ? "2px solid red" : "none")};
  border: 1px solid black;
  border-radius: 5px;
  color: #000;
  font-size: 20px;

  line-height: 25px;
  padding: 12px 8px;
  outline: none;

  :disabled {
    background: #aaaaaa;
  }
  ::placeholder {
    color: #333;
    font-size: 18px;
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
  background-color: #1b4a74;
  color: white;
  font-size: 20px;
`;
