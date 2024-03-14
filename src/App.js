/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";

import StudentList from "./pages/students/StudentList";
import AddStudent from "./pages/students/AddStudent";

import InstructorsList from "./pages/instructors/InstructorsList";
import AddInstructor from "./pages/instructors/AddInstructor";

import AllClass from "./pages/classes/AllClass";
import ClassList from "./pages/classes/ClassList";
import MyClasses from "./pages/classes/MyClasses";
import AddClass from "./pages/classes/AddClass";

import PaymentList from "./pages/students/PaymentList";
import Checkout from "./pages/checkout/Checkout";

import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Main>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/billing" component={Billing} />
          <Route exact path="/profile" component={Profile} />

          <Route exact path="/" component={AllClass} />
          <Route exact path="/classes" component={ClassList} />
          <Route exact path="/my-classes" component={MyClasses} />
          <Route exact path="/add-class" component={AddClass} />

          <Route exact path="/students" component={StudentList} />
          <Route exact path="/add-student" component={AddStudent} />

          <Route exact path="/instructors" component={InstructorsList} />
          <Route exact path="/add-instructor" component={AddInstructor} />

          <Route exact path="/payments" component={PaymentList} />

          <Route exact path="/checkout" component={Checkout} />


          {/* <Redirect from="*" to="/dashboard" /> */}
        </Main>
      </Switch>
    </div>
  );
}

export default App;
