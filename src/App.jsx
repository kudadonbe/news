import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import UsersPage from "./pages/UsersPage";
import UserInfoPage, { userLoader } from "./pages/UserInfoPage";
import UserEditPage from "./pages/UserEditPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} >
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/users" element={<UsersPage />}/>
      <Route path="/users/:id" element={<UserInfoPage />} loader={userLoader} />
      <Route path="/user/edit/:id" element={<UserEditPage />} loader={userLoader} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
