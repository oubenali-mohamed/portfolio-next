/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import imageHero from '../../public/assets/picture_home.png'

export default function About() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24 px-6 mt-20 max-w-5xl mx-auto">
      {/* Texte */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl text-center font-bold mb-6 dark:text-white">
          À propos de moi
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
          Je suis un développeur front-end passionné, spécialisé en
          <span className="text-cyan-500 font-semibold"> JavaScript</span>,
          <span className="text-cyan-500 font-semibold"> React</span> et
          <span className="text-cyan-500 font-semibold"> Next.js</span>. J'aime
          créer des interfaces modernes, intuitives et performantes.
          <br />
          <br />
          Grâce à ma formation et à mes projets personnels, j'ai acquis une
          bonne compréhension du développement front-end et des concepts clés de
          JavaScript. Je suis motivé, curieux, et j'adore apprendre de nouvelles
          technologies.
          <br />
          <br />
          Aujourd'hui, je recherche une opportunité pour évoluer dans une équipe
          dynamique, contribuer à des projets ambitieux et continuer à
          progresser. Si vous souhaitez en savoir plus ou discuter d'un projet,
          je serai ravi d'échanger avec vous.
        </p>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={imageHero}
          alt="image hero"
          width={450}
          height={450}
          priority
          className="rounded-xl shadow-xl dark:shadow-cyan-500/10"
        />
      </div>
    </section>
  )
}
