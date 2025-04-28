"use client";
import { motion } from "motion/react";

export default function Logo({
  style = "text-3xl font-bold",
}: {
  style?: string;
}) {
  const logos: string[] = ["S", "a", "g", "a", "S", "t", "o", "r", "e"];
  return (
    <div>
      {logos.map((logo, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20, rotate: 90 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.2, delay: index * 0.2 }}
          className={`${style}`}
        >
          {logo}
        </motion.span>
      ))}
    </div>
  );
}
