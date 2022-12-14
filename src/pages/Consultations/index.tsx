import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import DayContext from "../../contexts/DayContext";
import {
  Container,
  Month,
  LeftSide,
  RightSide,
  Content,
  ScheduleButton,
} from "./styles";
import { api } from "../../services/api";
import dayjs from "dayjs";
import { ConsultationButton } from "../../components/ConsultationButton";
import { Calendar } from "../../components/Calendar";

export function Consultations() {
  const navigate = useNavigate();
  const [value, onChange] = useState(new Date());
  const dateContext = useContext(DayContext);
  const { date } = useParams();
  const [morningPatients, setMorningPatients] = useState([]);
  const [afternoonPatients, setAfternoonPatients] = useState([]);
  const [isMobile, setIsMobile] = useState(true);

  function getPatientsConsultations() {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    api
      .get(
        `/consultations/${dateContext?.year}-${dateContext?.toGetDate}`,
        config
      )
      .then((res) => {
        setMorningPatients(res.data.consultations.morning);
        setAfternoonPatients(res.data.consultations.afternoon);
      });
  }

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    getPatientsConsultations();
    window.addEventListener("resize", handleResize);
  }, [date]);

  function dateFormat(date: string) {
    if (date.length === 4) {
      return `0${date}`;
    } else {
      return date;
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Content>
          {isMobile ? (
            <>
              <RightSide>
                <Calendar />
              </RightSide>
              <LeftSide>
                <Month>
                  Consultas dia{" "}
                  {`${dateFormat(dateContext?.toShowDate as string)}/${
                    dateContext?.year
                  }`}
                </Month>
                <ScheduleButton>
                  <ConsultationButton />
                </ScheduleButton>

                {morningPatients.length >= 1 ? (
                  <>
                    <h2>Consultas pela parte da manh??</h2>
                    <table className="morning-patients">
                      <thead>
                        <tr>
                          <th>Pacientes</th>
                          <th>Plano Odontol??gico</th>
                          <th>Contato</th>
                        </tr>
                      </thead>
                      <tbody>
                        {morningPatients.map((patient: any) => {
                          return (
                            <tr key={patient.id}>
                              <td data-label="Nome do Paciente">
                                {patient.patientName}
                              </td>
                              <td data-label="Plano Odontol??gico">
                                {patient.health_insurance
                                  ? patient.health_insurance
                                  : "N??o informado!"}
                              </td>
                              <td data-label="Contato">
                                {patient.patient.phone[0].number}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </>
                ) : (
                  <>
                    <h2>Consultas pela parte da manh??</h2>
                    <span>Ainda n??o h?? pacientes marcados.</span>
                  </>
                )}
                {afternoonPatients.length >= 1 ? (
                  <>
                    <h2>Consultas pela parte da tarde</h2>
                    <table className="afternoon-patients">
                      <thead>
                        <tr>
                          <th>Pacientes</th>
                          <th>Plano Odontol??gico</th>
                          <th>Contato</th>
                        </tr>
                      </thead>
                      <tbody>
                        {afternoonPatients.map((patient: any) => {
                          return (
                            <tr key={patient.id}>
                              <td data-label="Nome do Paciente">
                                {patient.patientName}
                              </td>
                              <td data-label="Plano Odontol??gico">
                                {patient.health_insurance
                                  ? patient.health_insurance
                                  : "N??o informado!"}
                              </td>
                              <td data-label="Contato">
                                {patient.patient.phone[0].number}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </>
                ) : (
                  <>
                    <h2>Consultas pela parte da tarde</h2>
                    <span>Ainda n??o h?? pacientes marcados.</span>
                  </>
                )}
              </LeftSide>
            </>
          ) : (
            <>
              <LeftSide>
                <Month>
                  Consultas dia{" "}
                  {`${dateFormat(dateContext?.toShowDate as string)}/${
                    dateContext?.year
                  }`}
                </Month>
                <ScheduleButton>
                  <ConsultationButton />
                </ScheduleButton>

                {morningPatients.length >= 1 ? (
                  <>
                    <h2>Consultas pela parte da manh??</h2>
                    <table className="morning-patients">
                      <thead>
                        <tr>
                          <th>Pacientes</th>
                          <th>Plano Odontol??gico</th>
                          <th>Contato</th>
                        </tr>
                      </thead>
                      <tbody>
                        {morningPatients.map((patient: any) => {
                          return (
                            <tr key={patient.id}>
                              <td data-label="Nome do Paciente">
                                {patient.patientName}
                              </td>
                              <td data-label="Plano Odontol??gico">
                                {patient.health_insurance
                                  ? patient.health_insurance
                                  : "N??o informado!"}
                              </td>
                              <td data-label="Contato">
                                {patient.patient.phone[0].number}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </>
                ) : (
                  <>
                    <h2>Consultas pela parte da manh??</h2>
                    <span>Ainda n??o h?? pacientes marcados.</span>
                  </>
                )}
                {afternoonPatients.length >= 1 ? (
                  <>
                    <h2>Consultas pela parte da tarde</h2>
                    <table className="afternoon-patients">
                      <thead>
                        <tr>
                          <th>Pacientes</th>
                          <th>Plano Odontol??gico</th>
                          <th>Contato</th>
                        </tr>
                      </thead>
                      <tbody>
                        {afternoonPatients.map((patient: any) => {
                          return (
                            <tr key={patient.id}>
                              <td data-label="Nome do Paciente">
                                {patient.patientName}
                              </td>
                              <td data-label="Plano Odontol??gico">
                                {patient.health_insurance
                                  ? patient.health_insurance
                                  : "N??o informado!"}
                              </td>
                              <td data-label="Contato">
                                {patient.patient.phone[0].number}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </>
                ) : (
                  <>
                    <h2>Consultas pela parte da tarde</h2>
                    <span>Ainda n??o h?? pacientes marcados.</span>
                  </>
                )}
              </LeftSide>
              <RightSide>
                <Calendar />
              </RightSide>
            </>
          )}
        </Content>
      </Container>
    </>
  );
}
