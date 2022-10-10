import { CalendarStyled } from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import DayContext from "../../contexts/DayContext";

export function Calendar() {
  const navigate = useNavigate();
  const dateContext = useContext(DayContext);
  const [value, onChange] = useState(new Date());

  function formatDateBelowTen(date: number) {
    if (date < 10) {
      return `0${date}`;
    }
  }

  return (
    <CalendarStyled
      onChange={onChange}
      value={value}
      onClickDay={(day) => {
        dateContext?.setToShowDate(`${day.getUTCDate()}/${day.getMonth() + 1}`);
        dateContext?.setToGetDate(`${day.getMonth() + 1}-${day.getUTCDate()}`);
        dateContext?.setYear(`${day.getFullYear()}`);
        navigate(`/consultas/${day.getUTCDate()}-${day.getMonth() + 1}`);
      }}
      selectRange={false}
      showNavigation={true}
    />
  );
}
