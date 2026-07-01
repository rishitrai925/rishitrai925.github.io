import { motion } from 'framer-motion';

export default function Education() {
  const stats = [
    {
      title: "B.Tech. Major",
      value: "IIT Guwahati",
      sub: "CGPA: 9.00",
      highlight: true
    },
    {
      title: "JEE Advanced",
      value: "AIR 925",
      sub: "Top 0.05% Nationally",
      highlight: false
    },
    {
      title: "JEE Mains",
      value: "AIR 2399",
      sub: "Top 0.2% Nationally",
      highlight: false
    },
    {
      title: "Codeforces",
      value: "1526",
      sub: "Specialist",
      highlight: true
    },
    {
      title: "CodeChef",
      value: "1695",
      sub: "3 Star",
      highlight: false
    },
    {
      title: "AtCoder",
      value: "864",
      sub: "6 Kyu",
      highlight: false
    }
  ];

  const achievements = [
    "Goldman Sachs India Hackathon (102nd national rank)",
    "Kriti Gold Medal in Optimization Challenge",
    "Qualified for INChO and INAO 2024",
    "IOQM Merit Certificate"
  ];

  return (
    <section>
      <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-10 font-semibold">
        Education & Ratings
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-zinc-800/50">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-zinc-950 p-6 md:p-8 flex flex-col justify-center glow-border"
          >
            <span className="text-zinc-500 text-sm mb-2 font-medium">{stat.title}</span>
            <span className={`text-2xl md:text-3xl font-bold tracking-tight mb-1 ${stat.highlight ? 'text-white' : 'text-zinc-300'}`}>
              {stat.value}
            </span>
            <span className="text-zinc-600 text-sm">{stat.sub}</span>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 pt-10 border-t border-zinc-900"
      >
        <h3 className="text-zinc-400 font-medium mb-6">Key Achievements</h3>
        <ul className="space-y-4">
          {achievements.map((ach, i) => (
            <li key={i} className="flex items-start gap-4 text-zinc-300">
              <span className="text-zinc-700 mt-1.5">▹</span>
              <span>{ach}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
