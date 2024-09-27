import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import AboutUs from "./pages/about";
import Contact from "./pages/contact-router";
import ContactUs from "./pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children : [
      {
        path: "contact/:contactId",
        element: <Contact />,
      },
    ],
  },
  {
    path: "about",
    element: <AboutUs />,
  },
  {
    path: 'contact/:contactId',
    element: <Contact />
  },
  {
    path: 'contactus',
    element: <ContactUs />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
