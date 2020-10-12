import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const prevDrawerOpenRef = useRef();

  useEffect(() => {
    prevDrawerOpenRef.current = drawerOpen;
  }, [prevDrawerOpenRef]);
  const prevDrawerOpen = prevDrawerOpenRef.current;

  const onDrawerToggleClick = () => {
    setDrawerOpen(!prevDrawerOpen);
  };

  const onBackdropClick = () => {
    setDrawerOpen(false);
  };

  return (
    <BrowserRouter>
    <div className="App">
      {/* navbar */}
      <Toolbar handleDrawerToggle={onDrawerToggleClick} />
      <SideDrawer isDrawerOpen={drawerOpen} handleSideDrawerLinkClick={onBackdropClick}/>
      {drawerOpen ? (
        <>
          <Backdrop handleBackdropClick={onBackdropClick} />
        </>
      ) : (
        <></>
      )}
      <div className="dd">

      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      </Switch>
      </div>
      
    </div>
    </BrowserRouter>
  );
};

export default App;
