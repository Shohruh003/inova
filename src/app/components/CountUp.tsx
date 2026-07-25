"use client";

import { useEffect, useRef, useState } from "react";

// Raqamni 0 dan qiymatgacha sanab chiqadi (ko'rinishga kelganda). "14+", "2000+", "5 yil", "100%" ni qo'llab-quvvatlaydi.
export default function CountUp({
  value,
  duration = 1600,
  className,
  style,
}: {
  value: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const m = String(value).match(/^(\d[\d\s]*)(.*)$/);
  const target = m ? parseInt(m[1].replace(/\s/g, ""), 10) : 0;
  const suffix = m ? m[2] : value;

  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !m) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setN(target);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setStarted(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [m, target]);

  useEffect(() => {
    if (!started) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  // Raqam bo'lmasa (masalan sof matn) — o'zini ko'rsatamiz
  if (!m) return <span className={className} style={style}>{value}</span>;

  return (
    <span ref={ref} className={className} style={style}>
      {n}
      {suffix}
    </span>
  );
}
