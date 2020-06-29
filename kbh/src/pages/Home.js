import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Nav, NavItem, NavLink, Button, Container } from 'reactstrap';

const bgImg = `${process.env.PUBLIC_URL}/images/Website_BG_V1.jpg`;

const Homepage = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const divStlye = {
        backgroundImage: `url(${bgImg})`,
        width: "fit-content(100%)"
    }
    return (
        <div className="App" style={divStlye}>
            <p>Korean Back Hand</p>
            <Container>
                <Nav>
                    <img src={`${process.env.PUBLIC_URL}/images/Background.png`} style={{ width: "100%" }} />
                    <NavItem>
                        <Button><img src={`${process.env.PUBLIC_URL}/images/Home.png`} alt="home" style={{ width: "25%" }} /></Button>
                        <Button><img src={`${process.env.PUBLIC_URL}/images/Blog.png`} alt="home" /></Button>
                        <Button><img src={`${process.env.PUBLIC_URL}/images/Merch.png`} alt="home" /></Button>
                        <Button><img src={`${process.env.PUBLIC_URL}/images/Stream.png`} alt="home" /></Button>
                        <Button><img src={`${process.env.PUBLIC_URL}/images/Leaderboards.png`} alt="home" /></Button>
                    </NavItem>
                </Nav>
            </Container>

        </div>
    )
}

export default Homepage;