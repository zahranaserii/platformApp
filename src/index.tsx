import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import Providers from "./Providers";
import store from "./Redux/store";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <Providers>
      <App />
    </Providers>
  </Provider>
);
