import  { Toaster } from "react-hot-toast";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="app-container">
      <Toaster />
      <Dashboard />
    </div>
  );
}

export default App;
