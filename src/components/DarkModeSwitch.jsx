import React, { useState } from "react";

import Moon from "../assets/svg/moon";
import Sun from "../assets/svg/sun";

import { motion } from "framer-motion";

function DarkModeSwitch() {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  return (
    <>      
      <div className="flex justify-center items-center" onClick={toggleSwitch}>
        <motion.div
          layout
          transition={spring}
        >
          <motion.div whileTap={{ rotate: 360 }}>
            {isOn ? <Sun fill="white" /> : <Moon fill="white" />}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default DarkModeSwitch;
