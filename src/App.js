import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { RouteProvider } from "./context/expert/RouteContext";

function App() {
  return (
    <> 
      <RouteProvider>
        <RouterProvider router={router} />
      </RouteProvider>
    </>
  );
}

export default App;
