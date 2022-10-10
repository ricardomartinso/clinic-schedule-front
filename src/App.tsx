import { GlobalStyle } from "./styles/globalStyle";
import { Routes } from "./Routes";
import { useContext, useState } from "react";
import DayContext from "./contexts/DayContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [toShowDate, setToShowDate] = useState("");
  const [toGetDate, setToGetDate] = useState("");

  return (
    <DayContext.Provider
      value={{ toShowDate, setToShowDate, toGetDate, setToGetDate }}
    >
      <GlobalStyle />
      <Routes />
      <ToastContainer />
    </DayContext.Provider>
  );
}

export default App;
