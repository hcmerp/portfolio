"use client";

import react from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from "react";
import Navbar from '../components/navbar';
import CursorFollower from '../components/dot';
import Footer from '../components/footer';

const About = () => {
    return (
        <main>
            <CursorFollower />
            <Navbar />
            <Footer />
        </main>
    )
}

export default About;
