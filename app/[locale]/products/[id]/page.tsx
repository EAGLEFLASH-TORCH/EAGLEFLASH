"use client";
import { use } from "react";
import { getLocalizedProducts } from "@/data/products";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import FadeInUp from "@/components/motion/FadeInUp";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string; locale: string }> }) {
  const { id, locale } = use(params);
  const t = useTranslations("product_detail");
  const products = getLocalizedProducts(locale);
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const specs = [
    { label: t("spec_model"), value: product.model },
    { label: t("spec_size"), value: product.size },
    { label: t("spec_weight"), value: product.weight },
    { label: t("spec_material"), value: product.material },
    { label: t("spec_battery"), value: product.batteryCapacity },
    { label: t("spec_lumens"), value: product.lumens ?? "—" },
    { label: t("spec_waterproof"), value: product.waterproof ?? "—" },
    { label: t("spec_colors"), value: product.colors.join("、") },
    { label: t("spec_category"), value: product.category },
  ];

  return (
    <div className="bg-white min-h-screen pt-14">
      <div className="bg-[#f5f5f7] w-full flex flex-col items-center justify-center" style={{ minHeight: "60vh" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[160px] md:text-[220px] leading-none py-12"
        >
          🔦
        </motion.div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 py-16 text-center">
        <FadeInUp>
          <span className="text-[13px] font-medium text-[#0071e3] tracking-widest uppercase">{product.category}</span>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <h1 className="font-bold text-[#1d1d1f] tracking-tight mt-3 mb-4" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            {product.name}
          </h1>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <p className="text-[#6e6e73] text-[19px] leading-relaxed mb-10">{product.description}</p>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <motion.a
              href="tel:18868923813"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#0071e3] text-white text-[17px] font-medium px-8 py-3.5 rounded-full hover:bg-[#0077ed] transition-colors"
            >
              📞 {t("call")}
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="border border-[#1d1d1f]/20 text-[#1d1d1f] text-[17px] font-medium px-8 py-3.5 rounded-full hover:bg-[#f5f5f7] transition-colors text-center cursor-default"
            >
              💬 {t("wechat")}
            </motion.div>
          </div>
          <p className="text-[12px] text-[#6e6e73]">{t("work_hours")}</p>
        </FadeInUp>
      </div>

      <div className="bg-[#f5f5f7] py-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <FadeInUp>
            <h2 className="text-[28px] font-bold text-[#1d1d1f] mb-10 text-center">{t("specs_title")}</h2>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              {specs.map((spec, i) => (
                <div key={spec.label} className={`flex items-center px-6 py-4 text-[15px] ${i !== specs.length - 1 ? "border-b border-black/[0.06]" : ""}`}>
                  <span className="w-36 text-[#6e6e73] shrink-0">{spec.label}</span>
                  <span className="text-[#1d1d1f] font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </div>

      <div className="py-12 text-center">
        <Link href={`/${locale}/products`} className="text-[#0071e3] text-[15px] hover:underline">
          {t("back")}
        </Link>
      </div>
    </div>
  );
}
