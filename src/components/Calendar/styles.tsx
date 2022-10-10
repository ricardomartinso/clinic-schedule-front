import styled from "styled-components";
import Calendar from "react-calendar";

export const CalendarStyled = styled(Calendar)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: black;
  background-color: aliceblue;
  border: 1px solid #ccc;

  span {
    font-size: 19px;
  }

  button {
    font-size: 12.5px;
  }
  abbr {
    font-size: 14px;
  }

  @media (max-width: 1250px) {
    padding: 8px 6px;
    span {
      font-size: 17.5px;
    }

    button {
      font-size: 13.5px;
    }
    abbr {
      font-size: 13.1px;
    }
  }

  @media (max-width: 900px) {
    span {
      font-size: 18.2px;
    }

    button {
      font-size: 15.5px;
    }
    abbr {
      font-size: 13.5px;
    }
  }
`;
