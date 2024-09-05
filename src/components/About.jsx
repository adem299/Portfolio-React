import { ABOUT_TEXT } from "../constants";
import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { RiHtml5Line } from "react-icons/ri";
import { SiPython } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { RiCss3Line } from "react-icons/ri";
import { SiLaravel } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { RiJavaLine } from "react-icons/ri";
import { RiFlutterLine } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";
import { SiFigma } from "react-icons/si";

import {motion} from 'framer-motion';


const About = () => {
  return (
    <div className="border-b border-neutral-900 py-12">
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 0.5}}
          className="w-full lg:w-1/2 p-4 lg:p-8">
          <div className="items-center justify-center text-justify">
            <h1 className="my-10 text-center text-4xl py-8">About Me</h1>
            <p>{ABOUT_TEXT}</p>
          </div>
        </motion.div>
        <motion.div
            whileInView={{ opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 0.5}}
            className="w-full lg:w-1/2 p-4 lg:p-8">
          <div className="flex flex-col items-center justify-center">
            <h1 className="my-10 text-center text-4xl py-8">My Skills</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-2 flex items-center justify-center">
                  <RiJavascriptLine className="text-6xl text-yellow-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-2 flex items-center justify-center">
                  <SiPython className="text-6xl text-blue-800" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-2 flex items-center justify-center">
                  <RiNodejsLine className="text-6xl text-green-600" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-2 flex items-center justify-center">
                  <RiReactjsLine className="text-6xl text-cyan-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-2 flex items-center justify-center">
                  <RiHtml5Line className="text-6xl text-orange-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-2 flex items-center justify-center">
                  <RiCss3Line className="text-6xl text-cyan-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-2 flex items-center justify-center">
                  <SiLaravel className="text-6xl text-red-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-2 flex items-center justify-center">
                  <SiPhp className="text-6xl text-purple-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-2 flex items-center justify-center">
                  <RiFlutterLine className="text-6xl text-cyan-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-2 flex items-center justify-center">
                  <RiJavaLine className="text-6xl" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-2 flex items-center justify-center">
                  <SiFigma className="text-6xl" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-2 flex items-center justify-center">
                  <RiGithubLine className="text-6xl" />
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
