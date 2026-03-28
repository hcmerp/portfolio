"use client";

import React, { useState, useEffect, useRef} from "react";
import './Cursor.css';

const CursorFollower = () => {
    const [position, setPosition] = useState({ x:0, y:0})
    const [label, setLabel] = useState("");
    const target = useRef({ x: 0, y:0 });
    const current = useRef({ x: 0, y:0 });
    const rafRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            target.current = { x:e.clientX, y:e.clientY};
        };

        const handleLabel = (e:CustomEvent) => setLabel(e.detail);
        
        const animate = () => {
            const ease = 0.08;

            current.current.x += (target.current.x - current.current.x) * ease;
            current.current.y += (target.current.y - current.current.y) * ease;

            setPosition({ x: current.current.x, y: current.current.y });
            rafRef.current = requestAnimationFrame(animate);
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('cursorlabel',handleLabel as EventListener);
        rafRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('cursorlabel', handleLabel as EventListener);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
        }, []);

    return (
        <div
            className="cursor-dot"
            style={{left: `${position.x}px`, top: `${position.y}px`}}
        >
            {label && (
                <span className="cursor-label">{label}</span>
            )}
        </div>
    );
};

export default CursorFollower;
