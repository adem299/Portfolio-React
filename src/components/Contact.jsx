import { CONTACT } from "../constants"
import { SiGmail } from "react-icons/si";
import { RiWhatsappLine } from "react-icons/ri";
import { delay, motion } from "framer-motion";
import { RiGithubLine, RiLinkedinLine, RiTwitterLine } from "react-icons/ri";

const iconVariant = (duration) => ({
  initial: { y: -2},
  animate: {
    y: [2, -2],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})
const Contact = () => {
  return (
    <div className="bg-neutral-900 text-white pt-10 pb-5 mt-16">
        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="text-3xl text-center font-semibold mb-8">Let's Get in Touch</motion.h2>
        <div className="max-w-xl mx-auto text-center">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="mb-4 font-light tracking-tighter">{CONTACT.address}</motion.p>
            <div className="pt-4 flex justify-center space-x-4">
            <motion.a
              variants={iconVariant(2.5)}
              initial="initial"
              animate="animate"
              href="mailto:mulyanaade30@gmail.com" className="hover:text-purple-500">
                <SiGmail size={24} />
              </motion.a>
              <motion.a 
                variants={iconVariant(4)}
                initial="initial"
                animate="animate"
                href="https://whatsapp.com/089630048231" className="hover:text-purple-500">
                <RiWhatsappLine size={24} />
              </motion.a>
              <motion.a
                variants={iconVariant(3)}
                initial="initial"
                animate="animate"
                href="https://github.com/adem299" className="hover:text-purple-500">
                <RiGithubLine size={24} />
              </motion.a>
              <motion.a
                variants={iconVariant(5)}
                initial="initial"
                animate="animate"
               href="https://linkedin.com/in/ademulyn" className="hover:text-purple-500">
                <RiLinkedinLine size={24} />
              </motion.a>
              <motion.a 
                variants={iconVariant(3.5)}
                initial="initial"
                animate="animate"
                href="https://twitter.com/adetaken__" className="hover:text-purple-500">
                <RiTwitterLine size={24} />
              </motion.a>
            </div>
        </div>
    </div>
  )
}

export default Contact
