"use client";
import React, { createContext, useState } from "react";
import { IRootDataType } from "./DataType";

interface DataType {
  plan: IRootDataType[];
  setPlan: React.Dispatch<React.SetStateAction<IRootDataType[]>>;
  save: IRootDataType[];
  setSave: React.Dispatch<React.SetStateAction<IRootDataType[]>>;
}

const dataContext = createContext<DataType | null>(null);

const Context = ({ children }: { children: React.ReactNode }) => {
  const [plan, setPlan] = useState<unknown[]>([]);
  const [save, setSave] = useState<unknown[]>([]);

  return (
    <dataContext.Provider value={{ plan, setPlan, save, setSave }}>
      {children}
    </dataContext.Provider>
  );
};

export default Context;
