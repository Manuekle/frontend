import React from "react";

import { AnimatePresence, motion } from "framer-motion";

function Categories() {
  return (
    <>
      <AnimatePresence initial={true}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* checkbox */}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Categories;
