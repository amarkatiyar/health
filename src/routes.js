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
import  FormExample from "./views/patient";
import CardBodyExample from "./views/patientacc";
import LoginForm from "./components/LoginForm";
import Message from "./views/Message";
import Billings from "./views/Billings";
import CreateMessage from "./views/CreateMessage";
import EditUser from "./views/EditUser";
import ManageUser from "./views/ManageUser";
import SetForms from "./views/SetForms";
import ChangePassword from "./views/ChangePassword";

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
    component: FormExample
  },

  {
    path: "/patientacc",
    layout: DefaultLayout,
    component: CardBodyExample
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
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/billings",
    layout: DefaultLayout,
    component: Billings
  },
  {
    path: "/message",
    layout: DefaultLayout,
    component: Message
  },
  {
    path: "/createmessage",
    layout: DefaultLayout,
    component: CreateMessage
  },
  {
    path: "/EditUser",
    layout: DefaultLayout,
    component: EditUser
  },
  {
    path: "/ManageUser",
    layout: DefaultLayout,
    component: ManageUser
  },
  {
    path: "/SetForms",
    layout: DefaultLayout,
    component: SetForms
  },
  {
    path: "/ChangePassword",
    layout: DefaultLayout,
    component: ChangePassword
  }
];
