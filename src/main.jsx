import { createRoot } from "react-dom/client";
import App from "./App.jsx"
const root = createRoot(document.getElementById("root"));
import State from "./State.jsx";

root.render(
  <main>
    <State />
  </main>
)

