import { Toaster } from "react-hot-toast";
import "./App.css";
import Routers from "./routes";

function App() {
  return (
    <div className="App">
      <Routers />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
