import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext({});

export function UserProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("userClinic");

    if (user !== null) {
      setUser(user);
      navigate("/home");

      return;
    }

    navigate("/");
  }, []);

  function loginUser(name: string) {
    setUser(name);
    localStorage.setItem("userClinic", name);
  }

  return (
    <UserContext.Provider
      value={{
        user,
        loginUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  return context;
}
