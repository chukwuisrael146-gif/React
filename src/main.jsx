import { createRoot } from "react-dom/client";
import App from "./App.jsx"
const root = createRoot(document.getElementById("root"));
import Header from "./App.jsx"


root.render(
  <main>
    <App />
  </main>
)

// function TemporaryName() {
//   return (
//     <main>
//       <img src="src\assets\react.svg" width="40px" alt="React logo" />
//       <h1>Fun Facts about React!</h1>
//       <ul>
//         <li>Was realesed in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 200k stars in GitHub</li>
//         <li>It is maintained by Meta</li>
//         <li>Power thousands of enterprise apps, including mobile apps</li>
//       </ul>
//     </main>
//   )
// }