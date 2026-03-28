"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from "react";
import Navbar from '../components/navbar';
import CursorFollower from '../components/dot';
import Footer from '../components/footer';
import ImageComponent from '../components/comp_image';
import { useRouter } from "next/navigation";


const Compete: React.FC = () => {

    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const setCursorLabel = (text: string) =>
        window.dispatchEvent(new CustomEvent("cursorlabel", { detail: text }));

    const router = useRouter();

    const handleClick = (id: number) => {
        router.push(`CompDetail/${id}`)
    }

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

            <div ref={containerRef} className='-mt-80 flex items-center justify-center overflow-hidden rounded-xl group'>
                <div
                    style={{ borderRadius: "16px" }}
                    className="relative group cursor-pointer border border-white/10 backdrop-blur-sm before:absolute before:inset-0 before:rounded-2xl before:ring-1 before:ring-inset before:ring-white/20"
                    onMouseEnter={() => {
                        handleMouseEnter();
                        setCursorLabel("CP Cup 2026")
                    }}

                    onMouseLeave={() => {
                        handleMouseLeave();
                        setCursorLabel("")
                    }}
                >
                    <div>
                        <ImageComponent
                            imageUrl='https://scontent.fbkk13-1.fna.fbcdn.net/v/t39.30808-6/581328356_1339522087966402_938901949656087506_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeG-Be4RrEusqYB_5mhaAVChQUD4lWMsH49BQPiVYywfj8n4tFqf1jXv_dM3oCiXAO7ssddgyoZbvd0HbRXfB7EE&_nc_ohc=ulV4Ee-JRFEQ7kNvwHuvjDK&_nc_oc=Adr1EqL_CKW2DK96indknQ82NV5Hx9UC6DQk3AO6_zF4WgU3iXLi8VU2S_xB850SRgOsxLNeHOeVKR0oyAgUe097&_nc_zt=23&_nc_ht=scontent.fbkk13-1.fna&_nc_gid=qlWms4jaCNwbwOZL3jCbGA&_nc_ss=7a32e&oh=00_AfyvFfkwOVm6WqS20gBPutTP3vYkGhm7d_N4YZbGX5qSTA&oe=69CDDFD3'
                            onClick={() => handleClick(0)}
                        />
                    </div>
                </div>
            </div>

            <div ref={containerRef} className='mt-10 flex items-center justify-center'>
                <div
                    style={{ borderRadius: "16px" }}
                    className="relative group cursor-pointer border border-white/10 backdrop-blur-sm before:absolute before:inset-0 before:rounded-2xl before:ring-1 before:ring-inset before:ring-white/20"
                    onMouseEnter={() => {
                        handleMouseEnter();
                        setCursorLabel("National Software Contest (NSC) - 2025")
                    }}

                    onMouseLeave={() => {
                        handleMouseLeave();
                        setCursorLabel("")
                    }}
                >
                    <div>
                        <ImageComponent
                            imageUrl='https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/540592901_1273473871237891_4920071080682085772_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEG-LK1q0AA1P2MehGoJek0UfOnsyd1iAZR86ezJ3WIBmlLIRPi0l1Yegob8BwYGBfbm89W4VQZzUqBj3XjwRzQ&_nc_ohc=v7U799UzEj0Q7kNvwHmjId-&_nc_oc=AdqA5u5d5FCMnn0Z_ewaFePg4HoihlN9Ru3UFYN4WbsZ5nzUuJAmxT8Oy8i2u_ulUS-KmyZE1JYW5CiVCnfbFnvZ&_nc_zt=23&_nc_ht=scontent.fbkk13-2.fna&_nc_gid=_SKlwbexMe-SjFX2qpIB5g&_nc_ss=7a32e&oh=00_AfzuzubXcnA9oOilAieVLOBTbU_bCFy9drEWfqYqWNVQkA&oe=69CDE6EB'
                            onClick={() => handleClick(1)}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Compete;
