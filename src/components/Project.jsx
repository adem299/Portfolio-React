import { PROJECTS } from "../constants"
import { motion } from "framer-motion"
const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl text-center my-20">
            Project
        </motion.h1>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
                    <motion.div
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -100}}
                        transition={{duration: 0.5}}
                     className="w-full lg:w-1/4">
                        <img 
                            src={project.image} 
                            width={200}
                            height={200}
                            alt={project.title} 
                            className="mb-6 rounded"
                        />
                    </motion.div>
                    <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 1}}
                    className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{project.title}</h6>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        {project.technologies.map((technology, index) => (
                            <span key={index}
                            className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                                    {technology}
                            </span>
                        ))}
                        <div className="mt-4">
                            <a 
                                href={project.githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-block px-3 py-1 mt-2 text-sm font-light text-white bg-purple-800 rounded hover:bg-purple-700">
                                View on GitHub
                            </a>
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Project