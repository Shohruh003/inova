"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY } from "@/src/lib/data";

export default function Gallery() {
  const autoplay = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [autoplay.current]
  );
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="gallery" className="py-16" style={{ background: "#012F33" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span
            className="inline-block px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "rgba(20,184,166,0.15)",
              color: "#5EEAD4",
              fontSize: 13,
              fontWeight: 700,
              border: "1px solid rgba(20,184,166,0.3)",
            }}
          >
            Galereya
          </span>
          <h2
            style={{
              color: "#fff",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
            }}
          >
            Bajarilgan ishlarimiz
          </h2>
        </div>

        <div className="relative">
          <div
            className="overflow-hidden"
            ref={emblaRef}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={() => autoplay.current.reset()}
          >
            <div className="flex -ml-4">
              {GALLERY.map((img, i) => (
                <div
                  key={i}
                  className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.3333%] pl-4"
                >
                  <div
                    className="overflow-hidden rounded-2xl group"
                    style={{ height: 280 }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={`INOVA loyihasi ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Oldinga / orqaga tugmalar */}
          <button
            onClick={scrollPrev}
            aria-label="Oldingi rasm"
            className="absolute top-1/2 -translate-y-1/2 left-2 sm:-left-5 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              background: "rgba(255,255,255,0.92)",
              color: "#012F33",
              boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
            }}
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Keyingi rasm"
            className="absolute top-1/2 -translate-y-1/2 right-2 sm:-right-5 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              background: "rgba(255,255,255,0.92)",
              color: "#012F33",
              boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
            }}
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Nuqta indikatorlar */}
        <div className="flex justify-center gap-2 mt-7">
          {GALLERY.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`${i + 1}-rasmga o'tish`}
              className="rounded-full transition-all duration-300"
              style={{
                width: selected === i ? 26 : 9,
                height: 9,
                background:
                  selected === i ? "#5EEAD4" : "rgba(255,255,255,0.25)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
