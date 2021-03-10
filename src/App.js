import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ProfileCard from "./ProfileCard";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          {/* <Route path="/" excat /> */}
          <Route path="/card" component={ProfileCard} />
          <Route path="/services" />
          <Route path="/sign-up" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
