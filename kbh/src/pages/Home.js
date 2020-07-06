import React, { useState } from "react";

import NavComp from "../components/Nav"


const Homepage = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    
    return (

        <div >
          <NavComp></NavComp>
          

        </div>
    )
}

export default Homepage;