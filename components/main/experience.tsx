"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { Button, MovingBorder } from "@/components/ui/moving-border";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-10"
    >
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Professional Journey
        </h1>
      </motion.div>

      <motion.h1
        variants={slideInFromLeft(0.5)}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
      >
        Work Experience
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 w-full max-w-6xl">
        {/* Left Column */}
        <div className="space-y-8">
          {/* MidasCreed */}
          <Button
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.25rem"
            style={{
              background: "rgba(3,0,20,0.37)",
            }}
            className="w-full"
          >
            <div className="flex items-center gap-4 p-6">
              <div className="flex-shrink-0">
                <Image
                  src="/work/midascreed.svg"
                  alt="MidasCreed"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-bold text-white mb-1">
                  Lead Software Engineer
                </h2>
                <h3 className="text-gray-400 text-sm mb-2">
                  MidasCreed
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Oversees project strategies & processes, coordinates with stakeholders, and leads development teams.
                </p>
              </div>
            </div>
          </Button>

          {/* AI Innovation Hub */}
          <Button
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.25rem"
            style={{
              background: "rgba(3,0,20,0.37)",
            }}
            className="w-full"
          >
            <div className="flex items-center gap-4 p-6">
              <div className="flex-shrink-0">
                <Image
                  src="/work/ai-hub.svg"
                  alt="AI & Innovation Hub"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-bold text-white mb-1">
                  Recruitment & Promotion Officer
                </h2>
                <h3 className="text-gray-400 text-sm mb-2">
                  AI & Innovation Hub
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Led events and initiatives, establishing partnerships with educational institutions.
                </p>
              </div>
            </div>
          </Button>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* IDIAS */}
          <Button
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.25rem"
            style={{
              background: "rgba(3,0,20,0.37)",
            }}
            className="w-full"
          >
            <div className="flex items-center gap-4 p-6">
              <div className="flex-shrink-0">
                <Image
                  src="/work/idias.svg"
                  alt="Idias Corporation"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-bold text-white mb-1">
                  Software Engineer
                </h2>
                <h3 className="text-gray-400 text-sm mb-2">
                  Idias Corporation Limited
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Developed software solutions and conducted performance testing for clients.
                </p>
              </div>
            </div>
          </Button>

          {/* MidBridge */}
          <Button
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.25rem"
            style={{
              background: "rgba(3,0,20,0.37)",
            }}
            className="w-full"
          >
            <div className="flex items-center gap-4 p-6">
              <div className="flex-shrink-0">
                <Image
                  src="/work/midbridge.svg"
                  alt="MidBridge"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-bold text-white mb-1">
                  Facilitator
                </h2>
                <h3 className="text-gray-400 text-sm mb-2">
                  MidBridge Computer Training
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Led computer basics training and conducted regular assessments.
                </p>
              </div>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};
