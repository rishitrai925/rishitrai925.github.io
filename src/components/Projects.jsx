import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "VELORA: Full-Stack Fleet Routing & Optimization Engine",
      description: "Engineered a multithreaded C++ backend using Crow REST framework for routing metaheuristics. Built a dynamic Next.js React frontend deployed on GCP and Vercel.",
      tags: ["C++", "Crow REST", "Next.js", "GCP", "Vercel", "Metaheuristics"],
    },
    {
      title: "CVM++: Stack-Based Virtual Machine & Custom Compiler",
      description: "Engineered an end-to-end custom scripting language pipeline in C++ with a lexer, bytecode compiler, and virtual machine. Used smart pointers for zero-leak memory management.",
      tags: ["C++", "Compilers", "Virtual Machine", "Smart Pointers", "Language Design"],
    },
    {
      title: "High-Frequency Order Matching Engine",
      description: "Built an ultra-low latency Order Matching Engine in C++17 processing 5.9 million orders/sec (sub-200ns latency). Used zero-allocation architecture with C++17 pmr.",
      tags: ["C++17", "Low Latency", "Finance", "Zero Allocation", "PMR"],
    }
  ];

  return (
    <section id="projects">
      <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-10 font-semibold">
        Featured Projects
      </h2>
      
      <div className="space-y-12">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="group block relative"
          >
            {/* Minimalist connecting line */}
            <div className="absolute -left-6 md:-left-10 top-0 bottom-0 w-px bg-zinc-900 group-hover:bg-zinc-700 transition-colors duration-500"></div>
            <div className="absolute -left-[27px] md:-left-[43px] top-2 w-1.5 h-1.5 bg-zinc-700 rounded-full group-hover:bg-white transition-colors duration-500"></div>

            <div className="pl-4 md:pl-0">
              <h3 className="text-2xl font-bold text-zinc-200 group-hover:text-white transition-colors duration-300 flex items-center gap-3">
                {project.title}
                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-zinc-400" />
              </h3>
              
              <p className="mt-4 text-zinc-400 leading-relaxed max-w-3xl">
                {project.description}
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag, j) => (
                  <span 
                    key={j} 
                    className="px-3 py-1 text-xs font-medium text-zinc-500 border border-zinc-800 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
