
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/NavigationBar.css"

const EcommerceNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">E-Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/category/electronics">Electronics</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/clothing">Clothing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/home-appliances">Home Appliances</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex ms-3">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ width: "200px" }}
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          <Nav className="ms-3">
            <Nav.Link as={Link} to="/cart">
              <i className="bi bi-cart-fill"></i> Cart
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              <i className="bi bi-person-circle"></i> Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default EcommerceNavbar;
