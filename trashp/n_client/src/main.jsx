import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Admin from "./components/Admin";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <App />
    },
    {
      path: "/admin",
      element: <Admin />
    },
    {
      path: "/signup",
      element: <SignupPage />
    },
    {
      path: "/login",
      element: <LoginPage />
    }
  ]
}])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
