import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { HashRouter, Routes, Route } from "react-router-dom";
import Register from "./register";
import Deposit from "./deposit";
import Cashback from "./cashback";
import AllData from "./alldata";
import UserContext from "./context";
import Home from "./home";

import "./App.css";

function App() {
  const [users, setUsers] = useState([{ name: "John Doe", amount: 1000 }]); // Provide default user data

  return (
    <>
      <div className="nav-container">
        <Navbar>
          <Container>
            <Navbar.Brand href="#/">MERN</Navbar.Brand>
            <span className="boxone"></span>
            <span className="boxthree"></span>
            <span className="boxtwo"></span>
            <Nav className="me-auto">
              <Nav.Link href="#/">Home</Nav.Link>
              <Nav.Link href="#/register">Register</Nav.Link>
              <Nav.Link href="#/deposit">Deposit</Nav.Link>
              <Nav.Link href="#/cashback">Withdraw</Nav.Link>
              <Nav.Link href="#/alldata">All Data</Nav.Link>
            </Nav>
            <span className="boxfour"></span>
            <span className="boxfive"></span>
          </Container>
        </Navbar>
        <div className="navboxx">
          <p>Bank</p>
          <span className="boxsix"></span>
        </div>
      </div>

      <HashRouter>
        <UserContext.Provider value={{ users, setUsers }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/cashback" element={<Cashback />} />
            <Route path="/alldata" element={<AllData />} />
          </Routes>
        </UserContext.Provider>
      </HashRouter>
    </>
  );
}

export default App;





