import React from "react";
import { motion } from "framer-motion";
function Modal({ handleClose, children }) {
  const fallDown = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  return (
    <>
      <div className="bg-black">
        <motion.div
          className="backdrop"
          onClick={handleClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal"
            onClick={(e) => e.stopPropagation()}
            variants={fallDown}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {children}s

            <motion.button
              className="modal-button gradient"
              type="button"
              onClick={handleClose}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              CLOSE
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Modal;
