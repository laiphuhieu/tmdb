import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@/assets/styles/all.scss";
import { BrowserRouter } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <Helmet>
          <title>The Movie Database (TMDB)</title>
          <meta
            name="description"
            content="The Movie Database (TMDB) is a popular, user editable database for movies and TV shows."
          />
        </Helmet>
      </HelmetProvider>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
