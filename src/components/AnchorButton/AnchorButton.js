import React from "react";
import { Link } from "react-router-dom"
import { motion } from 'framer-motion';

import './AnchorButton.css';

function AnchorButton(props) {
    return (
        <Link to={props.to} className="anchor-button">
            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                {props.text}
            </motion.div>
        </Link>
    );
  }
  
  export default AnchorButton;