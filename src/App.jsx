import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ProjectDetails from "./Pages/ProjectDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />} />
      <Route path="/:name" element={<ProjectDetails />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
