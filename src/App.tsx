import { RouterProvider } from "react-router-dom";
import "./core/i18n";
import "./css/color.css";
import router from "./router";
function App() {
  return <RouterProvider router={router} />;
}

export default App;
