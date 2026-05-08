import Section from './Section';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

export default function Contact() {
  return (
    <footer id="contact" className="w-full bg-transparent border-t border-border mt-32 relative z-10">
      <Section className="py-24 md:py-32 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Let's build something great.
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-2">
          Noida, India · +91-7466019920
        </p>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
          Whether you have a question, a project in mind, or just want to say hi, my inbox is always open.
        </p>

        <a 
          href="mailto:tanishqvarshney9455@gmail.com" 
          className="inline-flex h-12 items-center justify-center rounded-xl bg-foreground px-8 text-sm font-medium text-background transition-transform hover:scale-105 active:scale-95 mb-16"
        >
          Say Hello
        </a>

        <div className="flex gap-8 mb-12">
          <a href="https://github.com/tanishqvarshney" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded-full">
            <span className="sr-only">GitHub</span>
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/tanishqvarshney" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded-full">
            <span className="sr-only">LinkedIn</span>
            <Linkedin size={24} />
          </a>
          <a href="https://leetcode.com/u/tanishqvarshney9455/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded-full">
            <span className="sr-only">LeetCode</span>
            <Code2 size={24} />
          </a>
          <a href="mailto:tanishqvarshney9455@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded-full">
            <span className="sr-only">Email</span>
            <Mail size={24} />
          </a>
        </div>

        <div className="w-full flex justify-between items-center text-sm text-muted-foreground pt-8 border-t border-border/30">
          <p>© {new Date().getFullYear()} Tanishq Varshney.</p>
          <p>Designed with <span className="text-primary italic">intent</span>.</p>
        </div>
      </Section>
    </footer>
  );
}
