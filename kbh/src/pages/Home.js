import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Nav, NavItem, NavLink, Button, Container, Row, Col } from 'reactstrap';
import '../style/style.css'


const Homepage = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    
    return (
        <div >
            {/* <p>Korean Back Hand</p> */}
            {/* <Container > */}
                <Nav className="navBar">
                    <Row  className="justify-content-md-center">
                        <Col md="auto">
                            <h1 className="navBarText"> Korean Back Hand! </h1>
                        </Col>
                        {/* <img src={`${process.env.PUBLIC_URL}/images/Background.png`} style={{ width: "100%" }} /> */}
                        <Col md="auto">
                            <img src={require('../images/Home.png')} alt="home" className="navImg" />
                            <img src={require('../images/Blog.png')} alt="Blog" className="navImg" />
                            <img src={require('../images/Merch.png')} alt="Merch" className="navImg" />
                            <img src={require('../images/Stream.png')} alt="Stream" className="navImg" />
                            <img src={require('../images/Leaderboards.png')} alt="Leader Boards" className="navImg" />
                        </Col>
                    </Row>

                </Nav>
            
            {/* </Container> */}

        </div>
    )
}

export default Homepage;