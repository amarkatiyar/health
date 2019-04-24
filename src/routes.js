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
// import BlogPosts from "./views/BlogPosts";
import Patient from "./components/Patient/Patient";
import PatientAcc from "./components/Patient/PatientAcc";
import LoginForm from "./components/LoginForm";
import  NewhealthRecord from "./components/NewhealthRecord";

import Message from "./components/Message/Message";
import Billing from "./components/Billings/Billing";
import CreateBill from "./components/Billings/CreateBill";
import CreateMessage from "./views/CreateMessage";
import ManageUser from "./views/ManageUser";
import SetForms from "./views/SetForms";
import ChangePassword from "./views/ChangePassword";
import CDS from "./views/CDS";
import AuditReport from "./views/AuditReport";
import NewUser from "./views/NewUser";
import Multiple from "./views/Multiple";
import Edit1 from "./views/Edit1";
import Edit2 from "./views/Edit2";
import Add2 from "./views/Add2";
import EditProfile from "./views/EditProfile";
import RestSetting from "./views/RestSetting";
import HospitalService from "./views/HospitalService";

export default [
  {
    path: "/",
    exact: true,
    layout: LoginLayout,
    component: () => <Redirect to="/blog-posts" />
  },
  // {
  //   path: "/login",
  //   layout: LoginLayout,
  //   component: LoginForm
  // },
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

  // {
  //   path: "/dashboard",
  //   layout: DefaultLayout,
  //   component: BlogOverview
  // },
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

  // {
  //   path: "/errors",
  //   layout: DefaultLayout,
  //   component: Errors
  // },
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

  // {
  //   path: "/tables",
  //   layout: DefaultLayout,
  //   component: Tables
  // },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/billing",
    layout: DefaultLayout,
    component: Billing
  },
  {
    path: "/CreateBill",
    layout: DefaultLayout,
    component: CreateBill
  },
  {
    path: "/Message",
    layout: DefaultLayout,
    component: Message
  },
  {
    path: "/createmessage",
    layout: DefaultLayout,
    component: CreateMessage
  },
  {
    path: "/EditProfile",
    layout: DefaultLayout,
    component: EditProfile
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
  },
  {
    path: "/CDS",
    layout: DefaultLayout,
    component: CDS
  },
  {
    path: "/AuditReport",
    layout: DefaultLayout,
    component: AuditReport
  },
  {
    path: "/NewUser",
    layout: DefaultLayout,
    component: NewUser
  },
  {
    path: "/Multiple",
    layout: DefaultLayout,
    component: Multiple
  },
  {
    path: "/Edit1",
    layout: DefaultLayout,
    component: Edit1
  },
  {
    path: "/Add2",
    layout: DefaultLayout,
    component: Add2
  },
  {
    path: "/Edit2",
    layout: DefaultLayout,
    component: Edit2
  },
  {
    path: "/RestSetting",
    layout: DefaultLayout,
    component: RestSetting
  },
  {
    path: "/HospitalService",
    layout: DefaultLayout,
    component: HospitalService
  }
];
