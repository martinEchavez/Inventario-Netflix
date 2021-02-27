import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import {
    Link
} from "react-router-dom";
import {
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const Navegacion = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar style={{ backgroundColor: 'black', opacity: '0.7' }} expand="md">
                <Container>
                <Link to="/"><strong style={{ color: 'red', fontSize: '35px' }}>NETFLIX</strong></Link>
                <NavbarToggler style={{ backgroundColor: 'red'}} onClick={toggle} ><FaBars/></NavbarToggler>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink><Link to="/contratos"><strong style={{ color: 'red' }}>Contratos</strong></Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/cuentas"><strong style={{ color: 'red' }}>Cuentas</strong></Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/clientes"><strong style={{ color: 'red' }}>Clientes</strong></Link></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navegacion;