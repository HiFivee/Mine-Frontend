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
                <br/>
                <Link to = "/AccountCreate"> SignUp </Link>
                <br/>
                <Link to = "/Category" > Category </Link>
                <br/>
                <Link to = "/ProjectFetch"> Projects </Link>
                <br/>
                <Link to = "/SecondProject"> SecondProject </Link>
                <br/>
                <Link to = "/ThirdProject">ThirdProject</Link>
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