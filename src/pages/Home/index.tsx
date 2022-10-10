import { Container, Month, LeftSide, RightSide, Content } from "./styles";
import { Header } from "../../components/Header";
import "react-calendar/dist/Calendar.css";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { api } from "../../services/api";
import { Calendar } from "../../components/Calendar";

export function Home() {
  const [morningPatients, setMorningPatients] = useState([]);
  const [afternoonPatients, setAfternoonPatients] = useState([]);

  const now = new Date().toLocaleDateString("pt-br", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  function getPatientsConsultations() {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    api
      .get(
        `/consultations/${dayjs().format("YYYY")}-${dayjs().format("MM-DD")}`,
        config
      )
      .then((res) => {
        console.log(res.data);
        setMorningPatients(res.data.consultations.morning);
        setAfternoonPatients(res.data.consultations.afternoon);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getPatientsConsultations();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <LeftSide>
            <Month>{now.toUpperCase()} DE 2022</Month>

            {morningPatients.length >= 1 ? (
              <>
                <h1>Consultas pela parte da manhã</h1>
                <table className="morning-patients">
                  <thead>
                    <tr>
                      <th>Pacientes</th>
                      <th>Plano Odontológico</th>
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
                          <td data-label="Plano Odontológico">
                            {patient.health_insurance
                              ? patient.health_insurance
                              : "Não informado!"}
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
                <h1>Consultas pela parte da manhã</h1>
                <span>Ainda não há pacientes marcados.</span>
              </>
            )}

            {afternoonPatients.length >= 1 ? (
              <>
                <h1>Consultas pela parte da tarde</h1>
                <table className="afternoon-patients">
                  <thead>
                    <tr>
                      <th>Pacientes</th>
                      <th>Plano Odontológico</th>
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
                          <td data-label="Plano Odontológico">
                            {patient.health_insurance
                              ? patient.health_insurance
                              : "Não informado!"}
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
                <h1>Consultas pela parte da tarde</h1>
                <span>Ainda não há pacientes marcados.</span>
              </>
            )}
          </LeftSide>

          <RightSide>
            <Calendar />
          </RightSide>
        </Content>
      </Container>
    </>
  );
}
