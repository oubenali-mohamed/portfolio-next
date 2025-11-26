import projetsData from '../../data/projets.json'
import ProjectCard from '../../components/ProjetCard'

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center  px-6 py-20 dark:bg-black">
      <h1 className="text-4xl font-bold dark:text-white uppercase mb-20">
        Tous les projets
      </h1>

      {<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl">
        {projetsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>}
    </div>
  )
}
