import React, { useState } from "react";
import { Nav, NavItem, NavLink, Button, Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

const NavComp = (props) => {

    return (
        <div className="navHolder">
            <Row>
                <Nav className="navBar">
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            {/* <h1 className="navBarText"> Korean Back Hand! </h1> */}
                        </Col>
                        {/* <img src={`${process.env.PUBLIC_URL}/images/Background.png`} style={{ width: "100%" }} /> */}
                        <Col md="auto">
                            <Link to="/">
                                <img src={require('../images/Home.png')} alt="home" className="navImg" />
                            </Link>
                            <Link to="/blog">
                                <img src={require('../images/Blog.png')} alt="Blog" className="navImg" />
                            </Link>
                            <Link to="/merch">
                                <img src={require('../images/Merch.png')} alt="Merch" className="navImg" />
                            </Link>
                            <Link to="/stream">
                                <img src={require('../images/Stream.png')} alt="Stream" className="navImg" />
                            </Link>
                            <Link to="/leaderboard">
                                <img src={require('../images/Leaderboards.png')} alt="Leader Boards" className="navImg" />
                            </Link>



                        </Col>
                    </Row>

                </Nav>
            </Row>


        </div>
    )
}

export default NavComp; 