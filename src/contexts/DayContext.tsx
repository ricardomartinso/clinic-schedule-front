import { createContext } from "react";

interface IDateContextInterface {
  toShowDate: string;
  toGetDate: string;
  setToShowDate: Function;
  setToGetDate: Function;
  year: string;
  setYear: Function;
}

const DayContext = createContext<IDateContextInterface | null>(null);

export default DayContext;
