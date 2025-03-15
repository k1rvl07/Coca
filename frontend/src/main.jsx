import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { ReactQueryProvider } from "./providers/ReactQuerry.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactQueryProvider>
      <App />
    </ReactQueryProvider>
  </StrictMode>,
);
