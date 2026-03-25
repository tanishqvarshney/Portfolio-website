import Section from './Section';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { getAssetPath } from '../lib/utils';

export default function About() {
  return (
    <Section id="about" className="py-24">
      <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Engineering with Purpose.
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-12">
            <p>
              I am a results-driven backend and AI/ML engineer focused on building fault-tolerant architectures, integrating complex AI models, and optimizing database workflows for scale. 
            </p>
            <p>
              I believe that great software is invisible—it just works. My focus is on writing clean, modular code, optimizing data pipelines, and setting up robust CI/CD pipelines to ensure maximum uptime and zero friction for the end user.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <GraduationCap className="text-primary" /> Education
          </h3>

          <div className="space-y-6 relative mb-12 before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-primary bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2" />
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-4 md:pl-0 md:group-odd:pr-6 md:group-even:pl-6">
                <div className="flex flex-col mb-1">
                  <time className="text-sm font-medium text-primary mb-1">Aug 2023 – Dec 2025</time>
                  <h4 className="text-lg font-bold text-foreground leading-tight">M.S. in Computer Science</h4>
                  <span className="text-muted-foreground text-sm">Woolf University</span>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-muted-foreground bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2" />
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-4 md:pl-0 md:group-odd:pr-6 md:group-even:pl-6">
                <div className="flex flex-col mb-1">
                  <time className="text-sm font-medium text-primary mb-1">Aug 2023 – Aug 2024</time>
                  <h4 className="text-lg font-bold text-foreground leading-tight">Software Development</h4>
                  <span className="text-muted-foreground text-sm">Scaler Academy</span>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-muted-foreground bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2" />
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-4 md:pl-0 md:group-odd:pr-6 md:group-even:pl-6">
                <div className="flex flex-col mb-1">
                  <time className="text-sm font-medium text-primary mb-1">Aug 2018 – Aug 2022</time>
                  <h4 className="text-lg font-bold text-foreground leading-tight">B.Tech in CSE</h4>
                  <span className="text-muted-foreground text-sm">AKTU</span>
                </div>
              </div>
            </div>
            
          </div>

          <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
             <h4 className="font-bold mb-4 flex items-center gap-2">Certifications</h4>
             <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Accenture Dev & Advanced Engineering (2024)</li>
                <li>• Data Structures & Algorithms (Scaler)</li>
                <li>• Java, MERN, React, SQL, HLD (Scaler/NSDC)</li>
                <li>• Full Stack Data Science (iNeuron)</li>
             </ul>
          </div>
        </div>

        <div className="relative mt-8 md:mt-0 group">
          <div className="aspect-square rounded-2xl overflow-hidden bg-secondary border border-border/50 relative z-10">
             <img src={getAssetPath("/images/tanishq_personal.jpg")} alt="Tanishq Varshney" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
             <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
             
             <div className="absolute bottom-6 left-6 right-6 space-y-4">
               <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 className="pt-4 border-t border-white/10"
               >
                  <div className="text-2xl font-bold text-white">1.5+ Years</div>
                  <div className="text-white/70 text-xs font-medium uppercase tracking-wider">Production Experience</div>
               </motion.div>
               
               <div className="flex gap-4">
                 <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.4 }}
                 >
                    <div className="text-2xl font-bold text-white">25%</div>
                    <div className="text-white/70 text-xs font-medium uppercase tracking-wider">Uptime Lift</div>
                 </motion.div>
                 <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.6 }}
                 >
                    <div className="text-2xl font-bold text-white">40%</div>
                    <div className="text-white/70 text-xs font-medium uppercase tracking-wider">Incident Reduction</div>
                 </motion.div>
               </div>
             </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-full h-full rounded-2xl border border-muted -z-10" />
        </div>
      </div>
    </Section>
  );
}
