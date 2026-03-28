"use client"

import Image from "next/image";

type Props = {
    imageUrl: string;
    onClick?: () => void;
};

const ImageComponent: React.FC<Props> = ({ imageUrl, onClick }) => {
    return <img
        src={imageUrl}
        alt="Dynamic"
        className="w-350 h-auto rounded-lg shadow object-cover transition-transform duration-500 group-hover:scale-110"
        onClick={onClick}
    />;
};

export default ImageComponent;
