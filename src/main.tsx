import "./index.css";
import { AddPost, Login, Posts } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/add-post" element={<AddPost />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
