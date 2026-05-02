"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";

export default function HeroSection() {
  const t = useTranslations("hero");
  const pathname = usePathname();
  const currentLocale = routing.locales.find((l) => pathname.startsWith(`/${l}`)) ?? routing.defaultLocale;

  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen bg-[#1d1d1f] flex flex-col items-center justify-center overflow-hidden">
      {/* Parallax background image */}
      <motion.div style={{ y: imageY }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80"
          alt="Eagle Flash Hero"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1d1d1f]/20 via-transparent to-[#1d1d1f]/80" />
      </motion.div>

      {/* Text content */}
      <motion.div style={{ y: textY, opacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[#f5f5f7]/70 text-[17px] tracking-widest uppercase mb-4 font-medium"
        >
          {t("eyebrow")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[#f5f5f7] font-bold leading-tight tracking-tight mb-6 whitespace-pre-line"
          style={{ fontSize: "clamp(56px, 8vw, 96px)" }}
        >
          {t("title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#f5f5f7]/70 text-[19px] mb-10 max-w-2xl mx-auto leading-relaxed whitespace-pre-line"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href={`/${currentLocale}/products`}
            className="bg-[#0071e3] text-white text-[17px] font-medium px-8 py-3.5 rounded-full hover:bg-[#0077ed] transition-colors"
          >
            {t("cta_primary")}
          </Link>
          <Link
            href={`/${currentLocale}/contact`}
            className="border border-white/40 text-white text-[17px] font-medium px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors"
          >
            {t("cta_secondary")}
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-white/30 mx-auto"
        />
      </motion.div>
    </section>
  );
}
