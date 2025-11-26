import Image from 'next/image'

export default function Project({ title, picture, description, link, techno }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-cyan-500/20 transition transform hover:-translate-y-1">
      <div className="relative w-full h-48  rounded-t-xl overflow-hidden">
        <Image
          src={picture}
          alt={`aperçu du projet ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover mt-8 mb-8 transition-transform duration-500 hover:scale-110"
          priority
        />
      </div>

      <div className="p-5 text-center ">
        <h3 className="text-xl  font-semibold dark:text-white">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mt-2 text-xl font-semibold leading-relaxed">
          {description}
        </p>

        {techno && (
          <div className="flex gap-3 mt-4 ">
            {techno.map((tech, i) => (
              <div key={i} className="relative w-7 h-7 mx-auto">
                <Image
                  src={tech}
                  alt="Technologie"
                  fill
                  sizes="30px"
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}

        <a
          href={link}
          target="_blank"
          className="inline-block mt-5  text-cyan-500 font-medium hover:text-cyan-400 transition"
        >
          Voir le projet →
        </a>
      </div>
    </div>
  )
}
