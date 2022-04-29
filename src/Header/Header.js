import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Header()
{
    return (
        <div>
            <Navbar bg = "dark"variant = "dark">
            <Navbar.Brand href = "#home" > Home </Navbar.Brand>
            <Nav>
                <Link to = "/login"> Login </Link>
                <Link to = "/register"> SignUp </Link>
            </Nav>
            </Navbar>
        </div>
    )
}

export default Header;