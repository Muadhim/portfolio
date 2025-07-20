import { Maximize, X } from "lucide-react";
import Image from "next/image";
import React, { FC, useState, useEffect } from "react";

interface WindowProps {
    title?: string;
    desc?: string;
    img?: string;
}

const Window: FC<WindowProps> = ({ title, desc, img }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = () => {
        if (img) setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // Disable body scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isModalOpen]);

    return (
        <>
            <div className="relative">
                {/* Header */}
                <div className="bg-foreground/90 w-fit flex gap-2 pl-3 pr-10 pt-3 cp-bevel-tl-tr">
                    <div className="w-3 h-3 rounded-full bg-background"></div>
                    <div className="w-3 h-3 rounded-full border-background border"></div>
                    <div className="w-3 h-3 rounded-full border-background border"></div>
                </div>

                {/* Body */}
                <div className="cp-bevel-tr-bl-br bg-foreground/90 p-5 text-background flex gap-4">
                    <div>
                        <h3 className="text-xl font-bold max-w-[250px]">{title}</h3>
                        <p className="text-sm max-w-[300px]">{desc}</p>
                    </div>

                    {img && (
                        <div
                            className="w-[300px] h-[200px] relative cp-bevel cursor-pointer hover:opacity-90 transition group"
                            onClick={handleImageClick}
                        >
                            <Image src={img} alt={title ?? ""} fill />
                            <Maximize size={60} className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    )}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999]"
                    onClick={handleCloseModal}
                >
                    <div
                        className="relative w-full max-w-5xl mx-4"
                        onClick={(e) => e.stopPropagation()} // Prevent close on image click
                    >
                        <Image
                            src={img ?? ""}
                            alt={title ?? ""}
                            layout="responsive"
                            width={1200}
                            height={800}
                            className="cp-bevel shadow-lg"
                        />
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-3 right-3 text-white bg-black/50 hover:bg-black cp-bevel p-2"
                        >
                            <X />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Window;
