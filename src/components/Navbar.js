import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from "../logo.png";
import styled from 'styled-components';
import {ButtonContainer} from './Button';

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className = "navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/'>                                                                   {/* Link to the store home page */}
                    <img src={logo} alt="store" className="navbar-brand"></img>
                </Link>
                <ul className="navbar-nav align-items-center">                                  {/* Link to the product home page */}
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">                                           {/* Link to the shopping cart */}
                    <ButtonContainer>
                        <span className="mr-2">
                        <i className="fas fa-cart-plus" />
                        </span>
                        My Cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainPurple);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: Capitalize;
    }
`
export default Navbar;