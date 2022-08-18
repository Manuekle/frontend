/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

function Categories() {
  return (
    <AnimatePresence initial>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* checkbox */}
      </motion.div>
    </AnimatePresence>
  );
}

export default Categories;
