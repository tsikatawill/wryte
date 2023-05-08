import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { CreatePost, EditPost, Error404, Login, Post, Posts } from "./pages";
import App from "./App.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App />} />
        {/* <Route path="/posts" element={<Posts />} /> */}
        <Route path="/posts" element={<Outlet />}>
          <Route index element={<Posts />} />
          <Route path=":title" element={<Post />} />
          <Route
            path="edit-post/:id"
            element={
              <AuthProvider>
                <EditPost />
              </AuthProvider>
            }
          />
        </Route>
        <Route
          path="/create-post"
          element={
            <AuthProvider>
              <CreatePost />
            </AuthProvider>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
