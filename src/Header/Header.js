import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Header()
{
    return (
        <div>
            <Navbar bg = "dark" variant = "dark">
            <Navbar.Brand href = "#home" > Home </Navbar.Brand>
            <Nav className = "NavStyles">
                <Link to = "/login"> Login </Link>
                <Link to = "/register"> SignUp </Link>
            </Nav>
            <Nav>
                <NavDropdown title="user name">
                    <NavDropdown.Item>Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar>
        </div>
    )
}

export default Header;