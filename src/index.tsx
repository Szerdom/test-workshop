import { rest, setupWorker } from "msw";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./const";
import "./index.css";
import { Item } from "./pages/Element";
import { Main } from "./pages/Main";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";

const router = createBrowserRouter([
  {
    path: ROUTES.Main,
    element: <Main />,
  },
  {
    path: ROUTES.Element,
    element: <Item />,
  },
]);

const worker = setupWorker(
  // Provide request handlers
  rest.get("http://localhost:4000/elements/:name", (req, res, ctx) => {
    const name = req.params.name;
    return res(ctx.json({ details: `Details of element ${name}` }));
  })
);
// Start the Mock Service Worker
worker.start();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
