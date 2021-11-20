import React, { FC } from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import RecruitmentIndexPage from "./scenes/recruitment/RecruitmentIndexPage";
import SignInPage from "./scenes/signIn";
import ProfilePage from "./scenes/profile";
import AccountPage from "./scenes/account";

const App: FC = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={RecruitmentIndexPage} />
      <Route path="/sign_in" component={SignInPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/account" component={AccountPage} />
    </div>
  </BrowserRouter>
);

export default App;
