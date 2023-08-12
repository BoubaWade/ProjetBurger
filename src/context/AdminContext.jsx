import { createContext } from "react";

export default createContext({
  isAdmin: false,
  setIsAdmin: () => {},
  isAddTabSelected: false,
  setIsAddTabSelected: () => {},
  isEditTabSelected: false,
  setIsEditTabSelected: () => {},
});
