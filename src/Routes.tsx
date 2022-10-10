import { Routes as Router, Route } from "react-router-dom";

import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { Consultations } from "./pages/Consultations";
import { Patients } from "./pages/Patients";
import { Schedule } from "./pages/Schedule";

export function Routes() {
  return (
    <Router>
      <Route path="/" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/pacientes" element={<Patients />} />
      <Route path="/consultas/:date" element={<Consultations />} />
      <Route path="/agendar" element={<Schedule />} />
    </Router>
  );
}
