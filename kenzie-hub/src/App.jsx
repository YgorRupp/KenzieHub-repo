import { RoutesComponent } from "./routes/routes.js";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext.jsx";

function App() {
  const { globalLoading } = useContext(UserContext);
  return (
    <>
      <div className="App">
        {globalLoading ? <h1>Carregando...</h1> : <RoutesComponent />}
      </div>
    </>
  );
}

export default App;
