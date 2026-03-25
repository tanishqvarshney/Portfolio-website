import Section from './Section';
import { motion } from 'framer-motion';
import { getAssetPath } from '../lib/utils';

export default function Experience() {
  return (
    <Section id="experience" className="py-24 bg-secondary/30 rounded-3xl my-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
          Experience.
        </h2>

        <div className="relative pl-8 md:pl-0">
          {/* Vertical line timeline */}
          <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-border translate-x-3" />
          
          <div className="md:grid md:grid-cols-4 md:gap-8 items-start relative z-10 mb-20">
            <div className="md:col-span-1 md:text-right mt-1 mb-4 md:mb-0">
              <span className="text-muted-foreground font-medium text-sm border border-border/50 bg-background/50 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                Nov 2024 - Feb 2026
              </span>
            </div>
            
            <div className="md:col-span-3 pb-8 md:pl-0 pl-8 ml-[-32px] md:ml-0">
              <div className="absolute left-[-5px] md:left-[25%] md:-translate-x-1/2 mt-1.5 w-3 h-3 bg-primary rounded-full ring-4 ring-background" />
              
              <div className="flex items-center gap-4 mb-4">
                <img src={getAssetPath("/images/bidgely_logo.png")} alt="Bidgely Logo" className="w-12 h-12 rounded-lg bg-white p-2 shadow-sm object-contain" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Software Engineer</h3>
                  <h4 className="text-lg text-muted-foreground">Bidgely <span className="text-sm">· Bangalore</span></h4>
                </div>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Engineered and maintained scalable Spring Boot microservices and data ingestion pipelines for 7+ global utility clients (Nevada Energy, PSEG SMB, Rocky Mountain Power, OGE, SCG, NSP, OUC), ensuring accuracy and real-time performance.",
                  "Designed and deployed AB Experimentation infrastructure for NVE's EV analytics pipeline; authored shell scripts for cluster provisioning, environment validation, and API integration, cutting setup time by 30%.",
                  "Automated Monthly Summary Email workflows for RMP pilots (10094, 10095), achieving consistent data parity between email and web platforms and reducing manual effort by 20%.",
                  "Executed production fix scripts for SCG and 5+ other pilot environments, maintaining 99.9% uptime and achieving a 40% reduction in incident resolution time.",
                  "Administered AWS infrastructure (S3, SQS, EC2), optimizing cluster setup and CI/CD deployment pipelines across QA, UAT, and production environments.",
                  "Collaborated with Product, QA, DevOps, and Support teams to validate pipelines, align configuration resources with Figma UI/UX specifications, and deliver seamless client releases."
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex gap-3 text-muted-foreground"
                  >
                    <span className="text-primary mt-1.5 opacity-70">▹</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:grid md:grid-cols-4 md:gap-8 items-start relative z-10">
            <div className="md:col-span-1 md:text-right mt-1 mb-4 md:mb-0">
              <span className="text-muted-foreground font-medium text-sm border border-border/50 bg-background/50 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                Sept 2023 - Nov 2023
              </span>
            </div>
            
            <div className="md:col-span-3 pb-8 md:pl-0 pl-8 ml-[-32px] md:ml-0">
              <div className="absolute left-[-5px] md:left-[25%] md:-translate-x-1/2 mt-1.5 w-3 h-3 bg-muted-foreground rounded-full ring-4 ring-background shadow-sm" />
              
              <div className="flex items-center gap-4 mb-6">
                <img src={getAssetPath("/images/sparks_logo.png")} alt="The Sparks Foundation Logo" className="w-12 h-12 rounded-lg bg-white p-1 shadow-sm object-contain" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Software Developer Intern</h3>
                  <h4 className="text-lg text-muted-foreground">The Sparks Foundation <span className="text-sm">· Remote</span></h4>
                </div>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Built responsive full-stack web interfaces using HTML, CSS, and JavaScript, improving UI load performance and UX quality.",
                  "Designed and optimized MySQL database schemas for efficient data storage and backend integration.",
                  "Maintained version control workflows with Git/GitHub and authored project documentation to streamline team collaboration."
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex gap-3 text-muted-foreground"
                  >
                    <span className="text-primary mt-1.5 opacity-70">▹</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
