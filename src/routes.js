import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";
import LoginLayout from "./layouts/LoginLayout";
import homelayout from "./components/fronthealth/home";
import Aboutlayout from "./components/fronthealth/Aboutus";
import Serviceslayout from "./components/fronthealth/Services";
import Contactlayout from "./components/fronthealth/Contact";
import signuplayout from "./components/fronthealth/signup";
import signinlayout from "./components/fronthealth/singin";

// ****frontpage home***********
import home from "./components/fronthealth/home";
import Aboutus from "./components/fronthealth/Aboutus";
import Services from "./components/fronthealth/Services";
import Contact from "./components/fronthealth/Contact";
import Calender from "./components/Calender/calender";


import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import ComponentsOverview from "./views/ComponentsOverview";
import BlogPosts from "./views/BlogPosts";
import Patient from "./components/Patient/Patient";
import PatientAcc from "./components/Patient/PatientAcc";
import NewhealthRecord from "./components/NewhealthRecord";

import ManageUser from "./views/ManageUser";
import SetForms from "./views/SetForms";
import ChangePassword from "./views/ChangePassword";
import CDS from "./views/CDS";
import CDS1 from "./views/CDS1";
import M_user1 from "./views/M_user1";
import AuditReport from "./views/AuditReport";
import NewUser from "./views/NewUser";
import Multiple from "./views/Multiple";
import Edit1 from "./views/Edit1";
import Edit2 from "./views/Edit2";
import Add2 from "./views/Add2";
import EditProfile from "./views/EditProfile";
import RestSetting from "./views/RestSetting";
import Add1 from "./views/Add1";
import Form from "./views/Form";
import signup from "./components/fronthealth/signup";
import Signin from "./components/fronthealth/singin";

import Hospital1 from "./views/Hospital1";
import Procedure1 from "./views/Procedure1";
import DrugCode1 from "./views/DrugCode1";
import TestCode1 from "./views/TestCode1";
import Symtom from "./views/Symtom";
import Problems from "./views/Problems";
import VisitReason from "./views/VisitReason";
import Procedure from "./views/Procedure";
import PatHealth from "./components/Patient/HealthRecord/PatHealth";
import Patsetting from "./components/Patient/HealthRecord/Patsetting";
import PatMessage from "./components/Patient/HealthRecord/PatMessage";
import PatCreateMessage from "./components/Patient/HealthRecord/PatCreateMessage";
import PatBilling from "./components/Patient/HealthRecord/PatBilling";
import HospitalForm from "./views/HospitalForm";

import Message from "./views/Message";
import CreateMessage from "./views/CreateMessage";
import Billing from "./views/Billing";
import NewBill from "./views/NewBill";
import Item from "./views/Item";
// import Date from "./views/Date";
import DocApp from "./views/DocApp";
import Pulse from "./views/Pulse";


export default [
  {
    path: "/",
    exact: true,
    layout: LoginLayout,
    component: () => <Redirect to="/blog-posts" />
  },
  // *****************************front page**********
  {
    path: "/home",
    layout: homelayout,
    component: home
  },
  {
    path: "/Aboutus",
    layout: Aboutlayout,
    component: Aboutus
  },
  {
    path: "/Services",
    layout: Serviceslayout,
    component: Services
  },
  {
    path: "/Contact",
    layout: Contactlayout,
    component: Contact
  },
  {
    path: "/signup",
    layout: signuplayout,
    component: signup
  },
  {
    path: "/signin",
    layout: signinlayout,
    component: Signin
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
    path: "/Calender",
    layout: DefaultLayout,
    component: Calender
  },

  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },

  {
    path: "/Message",
    layout: DefaultLayout,
    component: Message
  },
  {
    path: "/CreateMessage",
    layout: DefaultLayout,
    component: CreateMessage
  },
  {
    path: "/Billing",
    layout: DefaultLayout,
    component: Billing
  },
  {
    path: "/newbill",
    layout: DefaultLayout,
    component: NewBill
  },
  {
    path: "/item",
    layout: DefaultLayout,
    component: Item
  },
  // {
  //   path: "/date",
  //   layout: DefaultLayout,
  //   component: Date
  // },
  {
    path: "/docapp",
    layout: DefaultLayout,
    component: DocApp
  },
  {
    path: "/pulse",
    layout: DefaultLayout,
    component: Pulse
  },
  {
    path: "/EditProfile",
    layout: DefaultLayout,
    component: EditProfile
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
    path: "/HospitalForm",
    layout: DefaultLayout,
    component: HospitalForm
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
  },
  {
    path: "/Form",
    layout: DefaultLayout,
    component: Form
  },
  {
    path: "/Hospital1",
    layout: DefaultLayout,
    component: Hospital1
  },
  {
    path: "/Procedure1",
    layout: DefaultLayout,
    component: Procedure1
  },
  {
    path: "/DrugCode1",
    layout: DefaultLayout,
    component: DrugCode1
  },
  {
    path: "/TestCode1",
    layout: DefaultLayout,
    component: TestCode1
  },
  {
    path: "/Symtom",
    layout: DefaultLayout,
    component: Symtom
  },
  {
    path: "/Problems",
    layout: DefaultLayout,
    component: Problems
  },
  {
    path: "/VisitReason",
    layout: DefaultLayout,
    component: VisitReason
  },
  {
    path: "/Procedure",
    layout: DefaultLayout,
    component: Procedure
  },
  {
    path: "/PatHealth",
    layout: DefaultLayout,
    component: PatHealth
  },
  {
    path: "/Patsetting",
    layout: DefaultLayout,
    component: Patsetting
  },
  {
    path: "/PatMessage",
    layout: DefaultLayout,
    component: PatMessage
  },
  {
    path: "/PatCreateMessage",
    layout: DefaultLayout,
    component: PatCreateMessage
  },
  {
    path: "/PatBilling",
    layout: DefaultLayout,
    component: PatBilling
  },
  {
    path: "/CDS1",
    layout: DefaultLayout,
    component: CDS1
  },
  {
    path: "/M_user1",
    layout: DefaultLayout,
    component: M_user1
  }
];
