import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import BasicExample from "./Accordion";
import Wordle from "./Wordle";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "../App";

function ColorSchemesExample() {
  return (
    <>
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#">
              Wordle
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link as={Link} to={"/accordion"}>
                Accordion Component
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="accordion" element={<BasicExample />}></Route>
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default ColorSchemesExample;
