"use client";
import Image from "next/image";
import FadeInUp from "./motion/FadeInUp";

interface FeatureSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  dark?: boolean;
}

export default function FeatureSection({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  reverse = false,
  dark = false,
}: FeatureSectionProps) {
  const bg = dark ? "bg-[#1d1d1f]" : "bg-[#f5f5f7]";
  const eyebrowColor = dark ? "text-[#0071e3]" : "text-[#0071e3]";
  const titleColor = dark ? "text-[#f5f5f7]" : "text-[#1d1d1f]";
  const descColor = dark ? "text-[#a1a1a6]" : "text-[#6e6e73]";

  return (
    <section className={`${bg} min-h-screen flex items-center`}>
      <div className={`max-w-[1200px] mx-auto px-6 w-full py-24 flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-16 md:gap-24`}>
        {/* Text */}
        <div className="flex-1 max-w-xl">
          <FadeInUp delay={0}>
            <p className={`${eyebrowColor} text-[13px] font-semibold tracking-widest uppercase mb-4`}>
              {eyebrow}
            </p>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2
              className={`${titleColor} font-bold leading-tight tracking-tight mb-6`}
              style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
            >
              {title}
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className={`${descColor} text-[17px] leading-relaxed`}>{description}</p>
          </FadeInUp>
        </div>

        {/* Image */}
        <FadeInUp delay={0.15} className="flex-1 w-full">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image src={image} alt={imageAlt} fill className="object-cover" />
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
