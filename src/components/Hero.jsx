import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Download, Code2 } from 'lucide-react';
import { cn } from '../lib/utils';
import Section from './Section';

export default function Hero() {
  return (
    <Section id="home" className="min-h-[90vh] flex flex-col justify-center relative pt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-sm text-sm font-medium text-muted-foreground mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse border border-green-400"></span>
          Available for new opportunities in Delhi NCR or Pune
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-foreground mb-6">
          Tanishq Varshney. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-neutral-500 dark:from-neutral-200 dark:to-neutral-500 block mt-2 text-4xl md:text-6xl">
            Software Engineer <br/> Backend + AI/ML Integration
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          Results-driven Software Engineer with 1.5+ years of industry experience building scalable microservices, data pipelines, and full-stack applications for enterprise utility clients. Proven track record of improving system uptime by 25% and reducing incident resolution time by 40%.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background font-medium hover:scale-105 transition-transform active:scale-95"
          >
            View Projects <ArrowRight size={18} />
          </a>
          <a
            href="https://github.com/tanishqvarshney" target="_blank" rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors"
          >
            <Terminal size={18} /> GitHub Profile
          </a>
          <a
            href="https://leetcode.com/u/tanishqvarshney9455/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary/60 transition-colors"
          >
            <Code2 size={18} /> LeetCode
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=12Hih8fpr1zxTGrlUTAyDUgLn3zEnMvjn"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary/60 transition-colors"
          >
            <Download size={18} /> Resume
          </a>
        </div>
      </motion.div>

    </Section>
  );
}
