import About from '@/components/About'
import Image from 'next/image'
import myPicture from '../../public/assets/MyProfilPicture.png'
import projetsData from '../data/projets.json'
import ProjetCard from '../components/ProjetCard'
export default function Home() {
  const projetsRecent = projetsData.slice(0, 4)
  return (
    <div className="flex flex-col min-h-screen items-center bg-zinc-50 dark:bg-black font-sans">
      {/* HERO */}
      <section className="text-center pt-20">
        <Image
          className="w-52 mx-auto mb-12 object-cover drop-shadow-xl"
          src={myPicture}
          alt="image de profil"
          width={230}
          height={230}
          priority
        />

        <h1 className="text-4xl font-bold dark:text-white relative inline-block pb-4">
          OUBENALI MOHAMED
          <span className="absolute left-1/2 bottom-0 h-[3px] w-24 bg-cyan-500 -translate-x-1/2 rounded-full"></span>
        </h1>

        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Développeur Front-End • React • Next.js • TailwindCSS
        </p>

        <div className="mt-12 flex gap-10 justify-center">
          <a
            href="/projets"
            className="px-6 py-3 bg-cyan-500 text-white rounded-xl hover:bg-cyan-600 transition shadow-lg"
          >
            Voir mes projets
          </a>

          <a
            href="/contact"
            className="px-6 py-3 border border-cyan-500 text-cyan-500 rounded-xl hover:bg-cyan-500 hover:text-white transition"
          >
            Me contacter
          </a>
        </div>
      </section>

      {/* DIVIDER PREMIUM */}
      <div className="w-full my-20">
        <div className="h-px w-2/3 mx-auto bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>
      </div>

      <About />

      {/* COMPÉTENCES */}
      <section className="mt-20 w-full max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold dark:text-white uppercase">
          Compétences
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12">
          {[
            'HTML / CSS',
            'JavaScript',
            'React',
            'Next.js',
            'TailwindCSS',
            'WordPress',
          ].map((skill) => (
            <div
              key={skill}
              className="p-4 bg-white dark:bg-zinc-900 rounded-xl shadow hover:shadow-cyan-500/20 transition"
            >
              <p className="text-lg font-semibold text-cyan-600 dark:text-cyan-400">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DIVIDER PREMIUM */}
      <div className="w-full my-20">
        <div className="h-px w-2/3 mx-auto bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>
      </div>

      {/* PROJETS RÉCENTS */}
      <section className="mt-20 pb-10 w-full max-w-6xl mx-auto  dark:border-cyan-500 text-center">
        <h2 className="text-3xl mb-10 font-bold dark:text-white uppercase">
          Projets récents
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {projetsRecent.map((project) => (
            <ProjetCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      {/* DIVIDER PREMIUM */}
      <div className="w-full my-28">
        <div className="h-px w-2/3 mx-auto bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>
      </div>

      {/* SECTION VALEUR */}
      <section className="w-full max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold dark:text-white">Ce que j’apporte</h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          Passionné par le développement front-end, j’adore créer des interfaces
          modernes, intuitives et performantes. Je combine simplicité,
          efficacité et souci du détail.
        </p>
      </section>

      {/* CONTACT FINAL */}
      <section className="mt-28 mb-20 text-center">
        <h2 className="text-3xl font-bold dark:text-white">
          Envie de travailler ensemble ?
        </h2>

        <a
          href="/contact"
          className="mt-6 inline-block px-8 py-4 bg-cyan-500 text-white rounded-xl hover:bg-cyan-600 transition shadow-lg"
        >
          Me contacter
        </a>
      </section>
    </div>
  )
}
