"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageWithTransition({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const variants = {
    signIn: {
      initial: { opacity: 0, x: -20, justifyContent: "start" },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 20 },
    },
    signUp: {
      initial: { opacity: 0, x: 20, justifyContent: "end" },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 },
    },
  };

  const variantKey = pathname.includes("create") ? "signUp" : "signIn";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="flex"
        key={pathname}
        variants={variants}
        initial={variants[variantKey].initial}
        animate={variants[variantKey].animate}
        exit={variants[variantKey].exit}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
