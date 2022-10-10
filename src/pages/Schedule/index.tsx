import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Header } from "../../components/Header";
import DayContext from "../../contexts/DayContext";
import { api } from "../../services/api";
import { Container, Form, Input, Logo, Button } from "./styles";

export function Schedule() {
  const navigate = useNavigate();
  const dateContext = useContext(DayContext);
  const [patientName, setPatientName] = useState("");
  const [phone, setPhone] = useState("");
  const [consultationDate, setConsultationDate] = useState(
    `${dateContext?.year}-${scheduleDate(dateContext?.toGetDate as string)}`
  );
  const [scheduleTurn, setScheduleTurn] = useState("");
  const [healthInsurance, setHealthSecurance] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    const formatedDate = formatDate(consultationDate);

    let data: any = {
      name: patientName,
      phone,
      date: consultationDate,
      turn: formatScheduleTurn(scheduleTurn),
    };

    if (healthInsurance !== "") {
      data = { ...data, health_insurance: healthInsurance };
    }

    api
      .post("/consultations", data, config)
      .then(() => {
        dateContext?.setToGetDate(`${formatedDate[0]}-${formatedDate[1]}`);
        dateContext?.setToShowDate(`${formatedDate[1]}/${formatedDate[0]}`);
        toast.success("Consulta realizada com sucesso!");
        navigate(`/consultas/${formatedDate[2]}-${formatedDate[1]}`);
      })
      .catch((err) => {
        if (
          err.response.data.error === '"turn" must be one of [manha, tarde]'
        ) {
          toast.error("Turno do atendimento só pode ser manhã ou tarde!");
        }

        if (
          err.response.status === 409 &&
          err.response.data === "Schedule Full!"
        ) {
          toast.error(`Agenda do turno da ${scheduleTurn} lotada`);
        }
      });
  }

  function formatScheduleTurn(turn: string) {
    turn = turn.toUpperCase();

    if (turn === "MANHÃ" || turn === "MANHA" || turn === "MANH") {
      return "manha";
    } else if (turn === "TARDE" || turn === "TARD") {
      return "tarde";
    }

    return turn;
  }

  function formatDate(day: string) {
    const separetedDate = day.split("-");

    if (Number(separetedDate[2]) < 10) {
      separetedDate[2] = `0${separetedDate[2]}`;
    }

    return separetedDate;
  }

  function scheduleDate(day: string) {
    let split: any = day.split("-");

    if (split[1].length === 1) {
      split[1] = `0${split[1]}`;
    }

    split = split.join("-");

    return split;
  }

  return (
    <>
      <Header />
      <Container>
        <Logo>Agendar consulta</Logo>

        <Form onSubmit={handleSubmit}>
          <label>Nome do paciente</label>
          <Input
            type={"text"}
            placeholder="Nome do paciente"
            value={patientName}
            required
            onChange={(e) => {
              setPatientName(e.target.value);
            }}
          ></Input>
          <label>Plano Odontológico</label>
          <Input
            type={"text"}
            placeholder="Plano Odontológico"
            value={healthInsurance}
            onChange={(e) => {
              setHealthSecurance(e.target.value);
            }}
          ></Input>
          <label>Número para contato</label>
          <Input
            type={"number"}
            placeholder="Número para contato"
            required
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          ></Input>
          <label>Data da consulta</label>
          <Input
            type={"date"}
            placeholder="Data da consulta"
            required
            value={consultationDate}
            onChange={(e) => {
              setConsultationDate(e.target.value);
            }}
          ></Input>

          <label htmlFor="turn">Turno do atendimento</label>
          <Input
            list="turns"
            name="turn"
            id="turn"
            required
            aria-disabled={true}
            value={scheduleTurn}
            onChange={(e) => setScheduleTurn(e.target.value)}
          />

          <datalist id="turns">
            <option value="Manhã" />
            <option value="Tarde" />
          </datalist>

          <Button>Agendar!</Button>
        </Form>
      </Container>
    </>
  );
}
