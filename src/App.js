import "./App.css";
import { AppProvider } from "./context/AppProvider";
// import Home from "./pages/home";
// import About from "./pages/about";
// import DataFatch from "./Use-Reducer/DataFatch";
// import UseReducer from "./Use-Reducer/UseReducer";
import ComUseReducer from "./Use-Reducer/ComUseReducer";

function App() {
  return (
    <AppProvider>
      <h1>Hello! Reducer or Context Sir I am confucing you, but why? </h1>
      {/* <Home /> */}
      {/* <About /> */}
      {/* <DataFatch /> */}
      {/* <UseReducer /> */}
      <ComUseReducer />
    </AppProvider>
  );
}

export default App;
