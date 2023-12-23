import { Toaster } from "react-hot-toast";
import Routers from "./routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routers />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
