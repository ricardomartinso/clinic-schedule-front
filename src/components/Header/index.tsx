import { Header as HeaderStyled, Menu, LinkStyled, MenuMobile } from "./styles";
import dayjs from "dayjs";
import { useContext, useState } from "react";
import DayContext from "../../contexts/DayContext";
import logo from "../../assets/maria-claudia-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

export function Header() {
  const navRef = useRef() as React.RefObject<HTMLDivElement>;
  const date = dayjs().locale("pt-br");
  const dateContext = useContext(DayContext);
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  }

  return (
    <HeaderStyled>
      <img src={logo} alt="" />

      <Menu ref={navRef} color={`${clicked}`}>
        <LinkStyled to="/home"> Home</LinkStyled>
        <LinkStyled to="/pacientes">Pacientes</LinkStyled>
        <LinkStyled
          onClick={() => {
            dateContext?.setToShowDate(`${dayjs().format("DD/MM")}`);
            dateContext?.setToGetDate(`${dayjs().format("MM-DD")}`);
          }}
          to={`/consultas/${date.format("DD-MM")}`}
        >
          Consultas
        </LinkStyled>
      </Menu>
      <MenuMobile>
        {clicked ? (
          <FaTimes onClick={handleClick} fontSize={"24px"} />
        ) : (
          <FaBars onClick={handleClick} fontSize={"24px"} />
        )}
      </MenuMobile>
    </HeaderStyled>
  );
}
