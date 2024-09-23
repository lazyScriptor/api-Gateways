import React, { useEffect, useState } from "react";
import { CourtTypeContext } from "../contexts/Contexts";

// Provider component to pass down context value
function CourtTypeContextProvider({ children }) {
  const [courtCreateForm, setCourtCreateForm] = useState(null); // Initialize state



  return (
    <CourtTypeContext.Provider value={{ courtCreateForm, setCourtCreateForm }}>
      {children}
    </CourtTypeContext.Provider>
  );
}

export default CourtTypeContextProvider;
