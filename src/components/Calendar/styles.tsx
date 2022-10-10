import styled from "styled-components";
import Calendar from "react-calendar";

export const CalendarStyled = styled(Calendar)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: black;
  background-color: aliceblue;
  border: 1px solid black;

  @media (max-width: 1200px) {
    span {
      font-size: 17px;
    }

    button {
      font-size: 13px;
    }
    abbr {
      font-size: 11.5px;
    }
  }
`;
