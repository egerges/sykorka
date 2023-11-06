import React from "react";
import { easeInOut, motion } from 'framer-motion';

import './Header.css';

import logo from '../../assets/img/logo.svg';

function Header() {
    return (
        <>
            <motion.header
                initial={{ height: '100vh', overflow: 'hidden' }}
                animate={{ height: '10vh' }}
                transition={{ duration: 4, ease: easeInOut }}
                >
                    <motion.img
                    src={logo}
                    className="header-logo"
                    alt="Sykorka Logo"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1.8, opacity: 1 }}
                    transition={{ duration: 4, ease: easeInOut }}
                    />
            </motion.header>
        </>
    );
  }
  
  export default Header;