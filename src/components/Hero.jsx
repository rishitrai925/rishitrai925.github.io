import { motion } from 'framer-motion';
import { Code2, TerminalSquare, ArrowRight } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="pt-20 pb-10"
    >
      <motion.div variants={itemVariants} className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
          Rishit Rai
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 font-medium tracking-tight">
          B.Tech in Mathematics and Computing <br className="hidden md:block"/>
          <span className="text-zinc-500">| Minor in Data Science and AI</span>
        </p>
        <p className="text-zinc-500 text-lg">
          Indian Institute Of Technology Guwahati
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="flex items-center gap-6 mt-8">
        {[
          { icon: FiGithub, href: "https://github.com/rishitrai925", label: "GitHub" },
          { icon: FiLinkedin, href: "https://linkedin.com/in/rishit-rai-", label: "LinkedIn" },
          { icon: Code2, href: "https://codeforces.com/profile/rishitrai", label: "Codeforces" },
          { icon: TerminalSquare, href: "https://atcoder.jp/users/rishitrai", label: "AtCoder" },
        ].map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-zinc-500 hover:text-white transition-colors duration-300"
          >
            <link.icon className="w-6 h-6 stroke-[1.5]" />
          </a>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="flex items-center gap-4 mt-12">
        <a 
          href="#projects"
          className="group flex items-center gap-2 bg-white text-black px-6 py-3 font-medium hover:bg-zinc-200 transition-colors"
        >
          View Projects
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a 
          href="mailto:rishitkumarrai@gmail.com"
          className="flex items-center gap-2 border border-zinc-800 text-zinc-300 px-6 py-3 font-medium hover:bg-zinc-900 transition-colors"
        >
          Contact Me
        </a>
      </motion.div>
    </motion.section>
  );
}
