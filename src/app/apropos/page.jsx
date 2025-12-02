/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Skills from '../../components/Skills'
import { FaCode, FaLightbulb, FaHandshake, FaRocket } from 'react-icons/fa'

export const metadata = {
  title: 'À propos de moi',
}

export default function AboutPage() {
  const tools = ['VSCode', 'GitHub', 'Figma']
  return (
    <div className="dark:bg-black pt-28 pb-20">
      <section className="flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24 px-6 max-w-5xl mx-auto">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-6 dark:text-white text-center md:text-left">
            À propos de moi
          </h1>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Je suis un développeur front-end passionné, spécialisé en
            <span className="text-cyan-500 font-semibold"> JavaScript</span>,
            <span className="text-cyan-500 font-semibold"> React</span> et
            <span className="text-cyan-500 font-semibold"> Next.js</span>.
            <br />
            <br />
            J'aime créer des interfaces modernes, performantes et centrées
            utilisateur. Curieux et autonome, j'adore apprendre et expérimenter.
          </p>

          <a
            href="/OUBENALI_MOHAMED_CV.pdf"
            download
            className="
    inline-flex items-center gap-3 mt-6 px-7 py-3 
    rounded-xl bg-cyan-600 text-white font-semibold
    shadow-[0_0_15px_rgba(0,255,255,0.4)]
    transition-all duration-300
    hover:shadow-[0_0_30px_rgba(0,255,255,0.8)]
    hover:-translate-y-1
  "
          >
            ⬇ Télécharger mon CV
          </a>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/picture_home.png"
            width={450}
            height={450}
            alt="Photo"
            className="rounded-xl shadow-xl dark:shadow-cyan-500/10"
          />
        </div>
      </section>

      <section className="mt-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center dark:text-white mb-12">
          Mon parcours
        </h2>

        <div className="border-l-4 border-cyan-500 pl-6 space-y-10">
          <div>
            <h3 className="text-xl font-bold dark:text-white">2022</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Début du développement web, premiers projets personnels.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold dark:text-white">2023</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Formation + montée en compétences sur React.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold dark:text-white">2024</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Spécialisation en Next.js, projets plus avancés.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold dark:text-white">2025</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Recherche d'une opportunité professionnelle en équipe.
            </p>
          </div>
        </div>
      </section>

      <Skills />

      <section className="mt-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center dark:text-white mb-12">
          Mes valeurs
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex items-start gap-4">
            <FaLightbulb size={30} className="text-cyan-500" />
            <div>
              <h3 className="font-bold dark:text-white text-lg">Curiosité</h3>
              <p className="text-gray-600 dark:text-gray-300">
                J’apprends constamment de nouvelles technologies.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaHandshake size={30} className="text-cyan-500" />
            <div>
              <h3 className="font-bold dark:text-white text-lg">
                Collaboration
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                J’aime travailler avec des personnes passionnées.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaCode size={30} className="text-cyan-500" />
            <div>
              <h3 className="font-bold dark:text-white text-lg">Rigueur</h3>
              <p className="text-gray-600 dark:text-gray-300">
                J’écris du code propre, clair et maintenable.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaRocket size={30} className="text-cyan-500" />
            <div>
              <h3 className="font-bold dark:text-white text-lg">Ambition</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Je veux progresser et contribuer à de vrais projets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center dark:text-white mb-10">
          Mes outils préférés
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-6 text-center">
          {tools.map((tool, index) => (
            <div
              key={tool}
              className="
                bg-white dark:bg-zinc-900 p-4 rounded-xl shadow  
                border dark:border-zinc-700
                hover:shadow-cyan-500/20 transition
              "
            >
              <p className="font-semibold text-cyan-500">{tool}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
