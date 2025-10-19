import { Children, createContext, useState } from "react";

const DashboardContext = createContext();

export const DashboardDataProvider = ({ Children }) => {
  return <DashboardContext.Provider>{Children}</DashboardContext.Provider>;
};

export default DashboardContext;
