import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import "./customStyles.css";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import {Login} from './components/Login/Login';


function BodyContent() {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Dashboard</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div classNameName="App">
      {/* <Navbar></Navbar>
      <Sidebar></Sidebar>
      <BodyContent></BodyContent> */}
      <Login/>

      {/* <header classNameName="App-header">
        <img src={logo} classNameName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          classNameName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
