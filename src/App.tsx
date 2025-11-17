import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "./pages/LandingPage";
import LandingNavbarWrapper from "./components/landing/LandingNavbarWrapper";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingNavbarWrapper />,
      children: [{ index: true, element: <LandingPage /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
