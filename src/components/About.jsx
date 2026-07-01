import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="border-l-2 border-zinc-800 pl-6 md:pl-10 ml-2 py-2"
    >
      <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-8 font-semibold">
        About Me
      </h2>
      <div className="space-y-6 text-xl md:text-3xl font-medium tracking-tight leading-snug text-zinc-300">
        <p>
          I am a Mathematics and Computing engineering student specializing in <span className="text-white">algorithmic optimization</span>, <span className="text-white">advanced data structures</span>, and <span className="text-white">machine learning architectures</span>.
        </p>
        <p className="text-zinc-500">
          Currently pursuing my B.Tech at IIT Guwahati, my academic foundation lies at the intersection of advanced math and systems engineering.
        </p>
        <p>
          I apply mathematical rigor to <span className="text-white">competitive programming in C++</span> and the development of <span className="text-white">scalable architectures</span>.
        </p>
      </div>
    </motion.section>
  );
}
