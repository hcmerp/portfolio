"use client"

import { ReactServerDOMTurbopackClient } from 'next/dist/server/route-modules/app-page/vendored/ssr/entrypoints';
import { useRef, useState, useEffect } from 'react';

const Video = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        videoRef.current?.play();
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        videoRef.current?.pause();
    };

    const setCursorLabel = (text: string) =>
        window.dispatchEvent(new CustomEvent("cursorlabel", { detail: text }));

    return (
        <main>
            <div ref={containerRef} className="flex items-center justify-center" style={{ minHeight: "100vh" }}>
                <div
                    style={{ borderRadius: "16px" }}
                    className="relative group cursor-pointer border border-white/10 backdrop-blur-sm before:absolute before:inset-0 before:rounded-2xl before:ring-1 before:ring-inset before:ring-white/20"
                    onMouseEnter={() => {
                        handleMouseEnter();
                        setCursorLabel("Like4k - Streaming WebApp")
                    }}

                    onMouseLeave={() => {
                        handleMouseLeave();
                        setCursorLabel("")
                    }}
                >
                    <video
                        ref={videoRef}
                        muted
                        playsInline
                        loop
                        width={1464}
                        height={991}
                        disablePictureInPicture
                        style={{
                            pointerEvents: "none",
                            display: "block",
                            borderRadius: "16px",
                            maxWidth: "100%",
                            height: "auto"
                        }}
                    >
                        <source src="/like4k.mov" type="video/mp4" />
                    </video>
                </div>
            </div>
        </main>
    );
}

export default Video;
