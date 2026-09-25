"use client";
import React, { createContext, useState } from "react";
import { IRootDataType } from "./DataType";

interface DataType {
  plan: IRootDataType[];
  setPlan: React.Dispatch<React.SetStateAction<IRootDataType[]>>;
  save: IRootDataType[];
  setSave: React.Dispatch<React.SetStateAction<IRootDataType[]>>;
}

export const dataContext = createContext<DataType | null>(null);

const ProviderContext = ({ children }: { children: React.ReactNode }) => {
  const [plan, setPlan] = useState<IRootDataType[]>([]);
  const [save, setSave] = useState<IRootDataType[]>([]);

  const ContextShare = {
    plan,
    setPlan,
    save,
    setSave,
  };

  return (
    <dataContext.Provider value={ContextShare}>{children}</dataContext.Provider>
  );
};

export default ProviderContext;
