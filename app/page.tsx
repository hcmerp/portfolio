"use client";

import { useRef, useState } from "react";
import PersonaImage from "./components/Image";
import { correctBorderRadius, motion } from "framer-motion";
import Image from "next/image";
import Navbar from "./components/navbar";
import CursorFollower from "./components/dot";
import Footer from "./components/footer";
import Works from "./work/page";
import Video from "./components/video";

export default function Home() {

  const btn = document.getElementById("github");
  btn?.addEventListener("click", function () {
    window.location.href = "https://github.com/Premch504"
  });

  return (
    <main>
      <title>PremchP.</title>
      <CursorFollower />
      <Navbar />
      <div className="ml-40 flex flex-col item-center justify-center min-h-screen">
        <PersonaImage />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-yellow-100 text-5xl font-bold mt-4"

        >
          <h1>Premch Phaosatheanthanon</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20, width: 0 }}
          animate={{ opacity: 1, y: 0, width: '53ch' }}
          transition={{ duration: 0.5, delay: 0.5, width: { duration: 3 } }}
          className="overflow-hidden whitespace-nowrap font-mono border-r-4 border-white text-white mt-3 animate-blink"

        >
          <span>Wonder kid locate in Thailand - Studies at Thammasat</span>
        </motion.div>
      </div>
      <motion.div>

        { /* From Uiverse.io by EcheverriaJesus */}
        <div className="flex items-center justify-center pb-30 -mt-40 group relative">
          <button id="github">
            <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" className="w-8 hover:scale-125 duration-200 hover:stroke-white"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </button>
        </div>

      </motion.div>
      <Video />
      <Footer />
    </main>
  );
}