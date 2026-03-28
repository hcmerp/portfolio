"use client";

import react from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from "react";

const navLinks = [
    { name: "Home", href: "/"},
    { name: "Works", href: "/work"},
    { name: "About", href: "/about"},
    { name: "Competition", href: "/competition"}
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 w-full z-50 px-8 py-5 flex items-center justify-between backdrop-blur-sm"
            >
                <Link href="/" className='text-white text-xl font-bold tracking-tight'>B33L<span className='text-yellow-100'>.</span>
                </Link>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className='text-white text-sm font-medium tracking-widest uppercase hover:text-white transition-colors duration-200'                
                >
                    {menuOpen ? "Close" : "Menu"}
                </button>
            </motion.nav>

            {/* Fullscreen Dropdown*/}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed top-0 left-0 w-full h-screen z-40 bg-#101010 backdrop-blur-md flex flex-col items-center justify-center gap-10"
                    >
                        {navLinks.map((link,index) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}  
                             >
                                <Link
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className='text-white text-5xl font-medium hover:text-yello-100 transition-colors duration-200'
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;


