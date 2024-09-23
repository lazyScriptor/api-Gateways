import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourtTypeContextProvider from "./providers/CourtTypeContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CourtTypeContextProvider>
      <App />
    </CourtTypeContextProvider>
  </StrictMode>
);
x