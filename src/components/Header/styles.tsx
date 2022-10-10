import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 65px;
  background-color: #9e5767;
  padding: 0 2rem;

  img {
    width: auto;
    height: 100%;
    margin-left: 1%;
  }
`;

export const Menu = styled.nav`
  @media (max-width: 570px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: fixed;
    top: 65px;
    right: ${(props) => (props.color !== "true" ? "-70%" : "0")};
    width: 70%;
    height: 100vh;
    background-color: #be8e99;
    box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
    padding: 40px 0 0 10px;
  }
`;

export const MenuMobile = styled.nav`
  color: white;
  display: none;

  @media (max-width: 570px) {
    display: block;
  }
`;

export const LinkStyled = styled(Link)`
  margin-right: 30px;
  font-size: 18px;
  border-bottom: 1px solid #ccc;
  color: white;
  font-weight: 500;

  :hover {
    color: #163d61;
  }

  @media (max-width: 900px) {
    margin-right: 20px;
    font-size: 18px;
  }

  @media (max-width: 570px) {
    display: block;
    font-size: 26px;
    margin-left: 20px;
    margin-bottom: 25px;
  }
`;
