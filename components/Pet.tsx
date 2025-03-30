"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Pet() {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [size, setSize] = useState(100);

  useEffect(() => {
    const moveObject = () => {
      const screenWidth = window.innerWidth - 80 * (size / 100);
      const screenHeight = window.innerHeight - 80 * (size / 100);
      const randomTop = Math.random() * screenHeight;
      const randomLeft = Math.random() * screenWidth;
      setPosition({ top: randomTop, left: randomLeft });
    };

    moveObject();
    const interval = setInterval(moveObject, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="animate-bounce hover:animate-spin fixed z-1000 bg-transparent rounded-2xl"
      style={{
        position: "fixed",
        top: `${position.top}px`,
        left: `${position.left}px`,
        transition: "top 1s ease-in-out, left 1s ease-in-out",
      }}
    >
      <Image
        onClick={() => setSize(size + 30)}
        src="/pet.svg"
        alt="Pet"
        title="Click me!"
        loading="lazy"
        placeholder="empty"
        draggable
        onDragEnd={(e) => {
          const newTop = e.clientY - 40; // Adjust for half the height of the image
          const newLeft = e.clientX - 40; // Adjust for half the width of the image
          setPosition({ top: newTop, left: newLeft });
        }}
        className={`cursor-pointer drop-shadow-lg scale-${size}`}
        style={{
          transform: `scale(${size / 100})`,
          transition: "transform 0.3s ease-in-out",
        }}
        width={80}
        height={80}
      ></Image>
    </div>
  );
}
