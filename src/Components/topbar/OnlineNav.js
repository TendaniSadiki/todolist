import React from 'react';
import './topbar.css';

/*Online Nav Bar*/
//Topbar Icons
import {NavLink} from 'react-router-dom';
import {CgHome} from "react-icons/cg";
import {CgUserlane} from "react-icons/cg";

import {CgLogOff} from "react-icons/cg";
function OnlineNav(props) {

    //Topbar navlinks Online
    return (
        <div>
            
            <div className="linksContainer">  
                    <NavLink to="*" activestyle={{color: 'black'}} exact onClick={() => props.isMobile && props.closeMobileMenu()}><span></span>
                    </NavLink>
                    <NavLink to="./Home" activestyle={{color: 'black'}} exact onClick={() => {props.isMobile && props.closeMobileMenu(); window.location="/Home"}}><span><i><CgHome/>Home</i></span>
                    </NavLink>
                
                    <NavLink to="./Profile" activestyle={{color: 'black'}} exact onClick={() =>{ props.isMobile && props.closeMobileMenu(); window.location="/Profile"}} ><span><i ><CgUserlane/>Profile</i></span>
                    </NavLink>
                    <NavLink to="../Login" activestyle={{color: 'black'}} exact onClick={() => {props.isMobile && props.closeMobileMenu();  window.localStorage.setItem("loginState", "false");  window.location="/Login"}} ><span className="signout"><i><CgLogOff />Log Out</i></span>
                    </NavLink>
                    </div>
        </div>
    )
}

export default OnlineNav
