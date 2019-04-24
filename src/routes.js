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

import Message from "./views/Message";
import CreateMessage from "./views/CreateMessage";
import NewBill from "./views/NewBill";
import Item from "./views/Item";
import CreateBill from "./components/Billings/CreateBill";

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
import Add1 from "./views/Add1";
import Billings from "./views/Billings";
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
    path: "/CreateBill",
    layout: DefaultLayout,
    component: CreateBill
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
    path: "/newbill",
    layout: DefaultLayout,
    component: NewBill
  },
  {
    path: "/EditProfile",
    layout: DefaultLayout,
    component: EditProfile
  },
  {
    path: "/item",
    layout: DefaultLayout,
    component: Item
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
  },
  {
    path: "/Add1",
    layout: DefaultLayout,
    component: Add1
  },
  {
    path: "/ManageUser",
    layout: DefaultLayout,
    component: ManageUser
  }
];
