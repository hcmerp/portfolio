"use client";

import react from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useRef } from "react";
import Navbar from '../components/navbar';
import CursorFollower from '../components/dot';
import Footer from '../components/footer';
import { useParams } from 'next/navigation';

const Detail: React.FC = () => {
    const { id } = useParams();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Competition Detail</h1>
            <p>Selected ID: {id}</p>

            {/* You can fetch data based on ID here */}
        </div>
    );
};


export default Detail;
