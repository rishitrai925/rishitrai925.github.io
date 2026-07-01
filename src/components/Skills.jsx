import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["C", "C++", "Python"]
    },
    {
      title: "Web",
      skills: ["HTML", "CSS", "JavaScript", "ReactJS"]
    },
    {
      title: "Tools & OS",
      skills: ["Linux", "Git", "LaTeX", "MySQL", "Gem5", "Verilog"]
    }
  ];

  return (
    <section>
      <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-10 font-semibold">
        Technical Skills
      </h2>

      <div className="space-y-8">
        {skillCategories.map((category, i) => (
          <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <h3 className="text-sm font-medium text-zinc-400 w-32 shrink-0">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, j) => (
                <motion.span
                  key={j}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i * 0.1) + (j * 0.05) }}
                  className="px-4 py-2 bg-zinc-900 text-zinc-300 text-sm font-medium hover:bg-white hover:text-black transition-colors duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
