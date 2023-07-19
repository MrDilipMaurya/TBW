import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import classnames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logoDark from '../../public/assets/img/tb-logo.svg';
import logoLight from '../../public/assets/img/tb-logo-black.svg';
import './header.css';


const CustomNavbar = ({ theme }) => {
    const router = useRouter();

    const navbarClass = classnames('navbar', {
        'navbar-dark': theme === 'dark',
        'navbar-light': theme === 'light',
    }, 'fixed-top');

    const logoImage = theme === 'dark' ? logoDark : logoLight;

    return (
        <Navbar className={navbarClass} expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <Image
                        src={logoImage}
                        alt="Taknik Bharti Logo"
                        width="200"
                        height="51"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/work" className={router.pathname === '/work' ? 'active' : ''}>Our Work</Nav.Link>
                        <Nav.Link href="/services" className={router.pathname === '/services' ? 'active' : ''}>Services</Nav.Link>
                    </Nav>
                    <Button variant="primary">
                        <Nav.Link href="/contact" className={router.pathname === '/contact' ? 'active' : ''}>Contact</Nav.Link>
                    </Button>
                </Navbar.Collapse></Container>
        </Navbar>
    );
};

export default CustomNavbar;
