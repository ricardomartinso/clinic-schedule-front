import styled from "styled-components";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";

export const Logo = styled.h1`
  font-weight: 700;
  font-size: 30px;
  color: #555;
  margin-top: 40px;
`;

export const Container = styled.main`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  text-align: left;
  padding: 2% 3%;
  min-height: 93.7vh;
  margin-top: 50px;

  color: #555;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-top: 70px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 70px auto 0 0;
  }
`;

export const Month = styled.h2`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 34px;
  width: 85%;

  font-family: "Montserrat", sans-serif;
`;
export const CalendarStyled = styled(Calendar)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #555;
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 78%;
  margin-bottom: 100px;

  span {
    width: 85%;
    text-align: left;
    font-size: 20px;
    font-weight: 300;
    margin-top: 15px;
    color: #555;
  }

  h1 {
    text-align: left;
    width: 85%;
    margin-top: 50px;
  }

  table {
    width: 85%;
    border-collapse: collapse;
    border-spacing: 0;
    box-shadow: 0 2px 15px rgba(64, 64, 64, 0.7);
    border-radius: 12px 12px 0 0;
    overflow: hidden;
    margin-top: 12px;
  }

  td,
  th {
    padding: 15px 20px;
    text-align: center;
  }
  th {
    background-color: #476f94;
    color: #fafafa;
    font-family: "Raleway", Sans-serif;
    font-weight: 500;
    text-transform: uppercase;
  }
  tr {
    width: 100%;
    background-color: #fafafa;
    font-family: "Montserrat", sans-serif;
    color: #555;
  }
  tr:nth-child(even) {
    background-color: #eeeeee;
  }

  tr:last-child {
    border-bottom-left-radius: 20px;
  }

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 900px) {
    width: 100%;
    margin-top: 40px;
    margin-bottom: 50px;
  }

  @media (max-width: 470px) {
    table {
      margin-top: 30px;
    }
    table thead {
      display: none;
    }

    table,
    table tbody,
    table tr,
    table td {
      display: block;
      width: 100%;
    }

    table tr {
      margin-bottom: 15px;
    }
    table td {
      text-align: right;
      padding-left: 50%;
      text-align: right;
      position: relative;
    }

    table td::before {
      content: attr(data-label);
      color: #476f94;
      position: absolute;
      left: 0;
      width: 50%;
      padding-left: 15px;
      font-weight: bold;
      text-align: left;
    }
    tr:last-child {
      border-bottom-left-radius: 0;
    }
  }

  @media (min-width: 1000px) {
    align-items: flex-start;
  }

  @media (min-width: 1300px) {
    table {
      width: 68%;
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 22%;

  @media (max-width: 1200px) {
    width: 30%;
  }
  @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 70px;
  }

  @media (max-width: 720px) {
    margin-top: 30px;
    margin-bottom: 0;
  }
`;

export const ClinicName = styled.h1`
  width: 100%;
  font-size: 40px;
  margin: 30px 0 50px 0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Morning = styled.div``;

export const Afternoon = styled.div``;
