import { RouterProvider } from "react-router-dom";
import "./App.css";
import TrangLoading from "./Pages/TrangLoading";
import { rootRoute } from "./Routes/rootRoute";

function App() {
  return (
    <div>
      <TrangLoading />
      <RouterProvider router={rootRoute} />
    </div>
  );
}

export default App;
