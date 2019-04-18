import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";
import LoginLayout from "./layouts/LoginLayout";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import Patient from "./components/Patient/Patient";
import PatientAcc from "./components/Patient/PatientAcc";
import LoginForm from "./components/LoginForm";
import  NewhealthRecord from "./components/NewhealthRecord";


export default [
  {
    path: "/",
    exact: true,
    layout: LoginLayout,
    component: () => <Redirect to="login" />
  },
  {
    path: "/login",
    layout: LoginLayout,
    component: LoginForm
  },
  {
    path: "/patient",
    layout: DefaultLayout,
    component: Patient
  },

  {
    path: "/PatientAcc",
    layout: DefaultLayout,
    component: PatientAcc
  },

  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/NewhealthRecord",
    layout: DefaultLayout,
    component: NewhealthRecord
  },

  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];
