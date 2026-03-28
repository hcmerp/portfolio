"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const PersonaImage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-[150px] h-[150px]"
        >
            <Image
                src="/profile.png"
                alt="me"
                fill
                className="rounded-full object-cover"
            />
        </motion.div>
    );
}

export default PersonaImage;
