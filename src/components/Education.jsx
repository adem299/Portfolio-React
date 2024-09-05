import { EDUCATION } from "../constants"
import { motion } from "framer-motion"

const Education = () => {
  return (
    <div className="pb-4 border-b border-neutral-900">
        <motion.h1 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="my-20 text-center text-4xl">Education</motion.h1>
    {EDUCATION.map((experience, index) => (   
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }} 
                className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-3/4 max-w-xl">
                <h6>
                    {experience.school} -{" "}
                    <span className="text-purple-100">{experience.address}</span>
                </h6>
                <p className="mb-4 text-neutral-400">{experience.description}</p>
            </motion.div>
        </div>
    ))}
    </div>
  )
}

export default Education