import Section from './Section';
import { motion } from 'framer-motion';

const skills = [
  {
    category: "Languages & Frameworks",
    items: ["Java", "Python", "JavaScript", "HTML/CSS", "Spring Boot", "React.js", "Express.js"]
  },
  {
    category: "AI & LLM Integration",
    items: ["LangChain", "OpenAI API", "HuggingFace", "FAISS", "ChromaDB", "Sentence Transformers"]
  },
  {
    category: "Databases & Vector DBs",
    items: ["MySQL", "PostgreSQL", "MongoDB", "FAISS", "ChromaDB"]
  },
  {
    category: "Cloud, DevOps & Tools",
    items: ["AWS (S3, SQS, EC2)", "Docker", "Jenkins & CI/CD", "Git & GitHub", "REST APIs", "Postman", "Figma", "Agile/Scrum"]
  }
];

export default function Skills() {
  return (
    <Section id="skills" className="py-24">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Technical Arsenal.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A comprehensive overview of the technologies and frameworks I use to build robust, scalable applications from end to end.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {skills.map((skillGroup, idx) => (
            <motion.div 
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-foreground font-semibold tracking-wide border-b border-border/50 pb-2">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((item) => (
                  <li key={item} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
