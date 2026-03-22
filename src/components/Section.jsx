import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { forwardRef } from 'react';

const Section = forwardRef(({ className, children, id, delay = 0 }, ref) => {
  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn("py-20 md:py-32 w-full max-w-7xl mx-auto px-6 md:px-12", className)}
    >
      {children}
    </motion.section>
  );
});

Section.displayName = "Section";
export default Section;
