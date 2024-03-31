import { Navbar, Container } from "react-bootstrap";

const Header = () => {
    return (
    <Navbar expand="lg" className="bg-black">
      <Container>
        <Navbar.Brand href="#" className="text-white fw-bold fs-2">Notes</Navbar.Brand>
      </Container>
    </Navbar>
    )
}

export default Header;