import React, { useState } from "react";
import { CourtTypeContext } from "../contexts/Contexts";

// Provider component to pass down context value
function CourtTypeContextProvider({ children }) {
  const [courtType, setCourtType] = useState('fuck me'); // Add state or any value you want to provide

  return (
    <CourtTypeContext.Provider value={{ courtType, setCourtType }}>
      {children}
    </CourtTypeContext.Provider>
  );
}

export default CourtTypeContextProvider;
