"use client";

import react from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from "react";
import Navbar from '../components/navbar';
import CursorFollower from '../components/dot';
import Footer from '../components/footer';

const compete = () => {
    return (
        <main>
            <CursorFollower />
            <Navbar />
            <div className="ml-10 pb-50 flex flex-col item-center justify-center min-h-screen">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-yellow-100 text-8xl font-bold mt-4">
                        Competition
                    </span>
                    <p className='text-white text-xl mt-3'>Select Competition project</p>
                </motion.h1>
            </div>
            <Footer />
        </main>
    )
}

export default compete;
