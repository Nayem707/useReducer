import "./App.css";
import { APIContextProvider } from "./context/ApiContext";
import Home from "./pages/home";

function App() {
  return (
    <APIContextProvider>
      <Home />
    </APIContextProvider>
  );
}

export default App;
