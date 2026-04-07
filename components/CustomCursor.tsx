"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Only enable on pointer (non-touch) devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let ringX = 0, ringY = 0;
    let dotX = 0, dotY = 0;
    let rafId: number;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ringX = lerp(ringX, dotX, 0.12);
      ringY = lerp(ringY, dotY, 0.12);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX}px, ${dotY}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const onMove = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const onHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, label, .cursor-pointer")) {
        setHovering(true);
      }
    };
    const onHoverEnd = () => setHovering(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onHoverStart);
    document.addEventListener("mouseout", onHoverEnd);

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onHoverStart);
      document.removeEventListener("mouseout", onHoverEnd);
      cancelAnimationFrame(rafId);
    };
  }, [visible]);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[999] will-change-transform"
        style={{
          marginLeft: "-3px",
          marginTop: "-3px",
          opacity: visible ? 1 : 0,
          transition: "opacity 300ms ease",
          mixBlendMode: "difference",
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-150 ${
            hovering ? "w-2 h-2" : clicking ? "w-1.5 h-1.5" : "w-1.5 h-1.5"
          }`}
        />
      </div>

      {/* Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[998] will-change-transform"
        style={{
          marginLeft: hovering ? "-20px" : clicking ? "-12px" : "-16px",
          marginTop: hovering ? "-20px" : clicking ? "-12px" : "-16px",
          opacity: visible ? 1 : 0,
          transition: "opacity 300ms ease, margin 300ms cubic-bezier(0.16,1,0.3,1), width 300ms cubic-bezier(0.16,1,0.3,1), height 300ms cubic-bezier(0.16,1,0.3,1)",
          width: hovering ? "40px" : clicking ? "24px" : "32px",
          height: hovering ? "40px" : clicking ? "24px" : "32px",
          mixBlendMode: "difference",
        }}
      >
        <div
          className={`w-full h-full rounded-full border transition-all duration-300 ${
            hovering
              ? "border-white bg-white/5"
              : "border-white/60 bg-transparent"
          }`}
        />
      </div>
    </>
  );
}
