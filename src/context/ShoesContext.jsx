"use client";

import { createContext, useContext, useState } from "react";
import data from "@/db/data";

const ShoesContext = createContext(null);

export function ShoesProvider({ children }) {
  const [shoes, setShoes] = useState(data);
  const [remain] = useState([10, 11, 12]);

  return (
    <ShoesContext.Provider value={{ shoes, setShoes, remain }}>
      {children}
    </ShoesContext.Provider>
  );
}

export function useShoes() {
  const context = useContext(ShoesContext);

  if (!context) {
    throw new Error("useShoes must be used inside ShoesProvider");
  }

  return context;
}
