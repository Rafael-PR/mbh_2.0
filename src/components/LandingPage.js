import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import Declaration from './Declaration';
import TestUI from './TestUI';
import Facts from "./Facts.js"

const LandingPage = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <Declaration />
            {/* <TestUI/> */}
            <Facts/>
          
            
        </div>
    )
}

export default LandingPage
