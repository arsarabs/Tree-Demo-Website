"use client";

import { motion, type Variants } from "framer-motion";
import React from "react";

interface AnimatedGroupProps {
  children: React.ReactNode;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variants?: Record<string, any>;
}

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1.5,
    },
  },
};

export function AnimatedGroup({ children, className, variants }: AnimatedGroupProps) {
  const containerVariants = variants?.container ?? defaultContainerVariants;
  const itemVariants = variants?.item ?? defaultItemVariants;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div variants={itemVariants}>{child}</motion.div>
        ) : (
          child
        )
      )}
    </motion.div>
  );
}
