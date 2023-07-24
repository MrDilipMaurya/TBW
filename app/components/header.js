import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import classnames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logoDark from '../../public/assets/img/tb-logo.svg';
import logoLight from '../../public/assets/img/tb-logo-black.svg';
import './header.css';
import React, { useEffect, useState } from 'react';

const CustomNavbar = ({ theme }) => {
    const router = useRouter();
    const [activePath, setActivePath] = useState('/');

    useEffect(() => {
        // Function to handle route change
        const handleRouteChange = (url) => {
            setActivePath(url);
        };

        // Check if router.events exists before adding the event listener
        if (router?.events) {
            // Listen to the 'routeChangeComplete' event to update the active path
            router.events.on('routeChangeComplete', handleRouteChange);

            // Clean up the event listener when the component unmounts
            return () => {
                router.events.off('routeChangeComplete', handleRouteChange);
            };
        }
    }, [router]);

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
                        <Nav.Link href="/work" className={activePath === '/work' ? 'active' : ''}>Our Work</Nav.Link>
                        <Nav.Link href="/services" className={activePath === '/services' ? 'active' : ''}>Services</Nav.Link>
                    </Nav>
                    <Button variant="primary">
                        <Nav.Link href="/contact" className={activePath === '/contact' ? 'active' : ''}>Contact</Nav.Link>
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
