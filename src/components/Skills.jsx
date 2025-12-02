'use client'

import { motion } from 'framer-motion'
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiVite } from 'react-icons/si'

const skills = [
  { name: 'JavaScript', icon: <FaJsSquare size={40} /> },
  { name: 'React', icon: <FaReact size={40} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={40} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} /> },
  { name: 'HTML5', icon: <FaHtml5 size={40} /> },
  { name: 'CSS3', icon: <FaCss3Alt size={40} /> },
  { name: 'Vite', icon: <SiVite size={40} /> },
  { name: 'Git', icon: <FaGitAlt size={40} /> },
]

export default function Skills() {
  return (
    <section className="mt-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center dark:text-white mb-10">
        Compétences
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="
              bg-white dark:bg-zinc-900 
              border dark:border-zinc-700 
              rounded-xl p-6 shadow-md
              flex flex-col items-center
              hover:shadow-cyan-500/20 hover:-translate-y-1 
              transition-all cursor-default
            "
          >
            <div className="text-cyan-500 mb-3">{skill.icon}</div>
            <p className="font-semibold dark:text-white">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
