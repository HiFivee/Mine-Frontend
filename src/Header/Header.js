import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Header()
{
    return (
        <section>
            <Navbar bg = "dark" variant = "dark">
            <Navbar.Brand href = "/" > Home </Navbar.Brand>
            <Nav className = "NavStyles">
                <Link to = "/Login"> Login </Link>
                <Link to = "/AccountCreate"> SignUp </Link>
                <Link to = "/Category" > Category </Link>
                {/* <Link to = "/accountFetch"> Mypage </Link>
                <Link to = "/projectFetch"> Projects </Link>
                <Link to = "/secondProject"> SecondProject </Link> */}
            </Nav>
            {/* <Nav>
                <NavDropdown title="user name">
                    <NavDropdown.Item>Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav> */}
            </Navbar>
        </section>
    )
}

export default Header;