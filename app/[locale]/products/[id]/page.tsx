"use client";
import { use } from "react";
import { getLocalizedProducts, getProductDetailSections } from "@/data/products";
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
  const detail = getProductDetailSections(product, locale);

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

  const heroStats = [
    { label: t("spec_lumens"), value: product.lumens ?? "—" },
    { label: t("spec_waterproof"), value: product.waterproof ?? "—" },
    { label: t("spec_weight"), value: product.weight },
  ];
  const inquiryHref = `/${locale}/contact?product=${encodeURIComponent(product.model)}&name=${encodeURIComponent(product.name)}`;

  return (
    <div className="bg-white min-h-screen pt-14">
      <section className="bg-[#f5f5f7] px-6 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1fr_1.05fr] gap-12 md:gap-20 items-center">
          <div className="relative min-h-[320px] md:min-h-[520px] flex items-center justify-center rounded-[28px] bg-[#e8e8ed] overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-[150px] md:text-[240px] leading-none"
            >
              🔦
            </motion.div>
            <div className="absolute inset-x-8 bottom-8 h-[1px] bg-gradient-to-r from-transparent via-[#0071e3]/40 to-transparent" />
          </div>

          <div>
            <FadeInUp>
              <span className="text-[13px] font-medium text-[#0071e3] tracking-widest uppercase">{product.category}</span>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h1 className="font-bold text-[#1d1d1f] tracking-tight mt-3 mb-4" style={{ fontSize: "clamp(40px, 5vw, 72px)" }}>
                {product.name}
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.15}>
              <p className="text-[#6e6e73] text-[19px] leading-relaxed mb-8 max-w-2xl">{product.description}</p>
            </FadeInUp>

            <FadeInUp delay={0.18}>
              <div className="grid grid-cols-3 gap-3 mb-8">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="bg-white rounded-2xl px-4 py-4 shadow-sm">
                    <p className="text-[12px] text-[#6e6e73] mb-1">{stat.label}</p>
                    <p className="text-[17px] font-semibold text-[#1d1d1f] truncate">{stat.value}</p>
                  </div>
                ))}
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Link
                  href={inquiryHref}
                  className="bg-[#0071e3] text-white text-[17px] font-medium px-8 py-3.5 rounded-full hover:bg-[#0077ed] transition-colors text-center"
                >
                  {t("inquiry_cta")}
                </Link>
                <motion.a
                  href="tel:18868923813"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border border-[#1d1d1f]/20 text-[#1d1d1f] text-[17px] font-medium px-8 py-3.5 rounded-full hover:bg-white/70 transition-colors text-center"
                >
                  📞 {t("call")}
                </motion.a>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="border border-[#1d1d1f]/20 text-[#1d1d1f] text-[17px] font-medium px-8 py-3.5 rounded-full hover:bg-white/70 transition-colors text-center cursor-default"
                >
                  💬 {t("wechat")}
                </motion.div>
              </div>
              <p className="text-[12px] text-[#6e6e73]">{t("work_hours")}</p>
            </FadeInUp>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-3 gap-5">
          <FadeInUp>
            <div className="lg:col-span-2 bg-[#f5f5f7] rounded-3xl p-8 md:p-10 h-full">
              <h2 className="text-[28px] font-bold text-[#1d1d1f] mb-6">{t("highlights_title")}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {detail.highlights.map((item) => (
                  <div key={item} className="bg-white rounded-2xl p-5 text-[15px] leading-relaxed text-[#1d1d1f] shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="bg-[#1d1d1f] rounded-3xl p-8 md:p-10 h-full">
              <h2 className="text-[28px] font-bold text-[#f5f5f7] mb-6">{t("applications_title")}</h2>
              <div className="flex flex-wrap gap-2">
                {detail.applications.map((item) => (
                  <span key={item} className="text-[13px] font-medium text-[#f5f5f7] bg-white/10 px-3 py-2 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      <div className="bg-[#f5f5f7] py-20 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1fr_0.85fr] gap-8">
          <FadeInUp>
            <div>
              <h2 className="text-[28px] font-bold text-[#1d1d1f] mb-8">{t("specs_title")}</h2>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              {specs.map((spec, i) => (
                <div key={spec.label} className={`flex items-center px-6 py-4 text-[15px] ${i !== specs.length - 1 ? "border-b border-black/[0.06]" : ""}`}>
                  <span className="w-36 text-[#6e6e73] shrink-0">{spec.label}</span>
                  <span className="text-[#1d1d1f] font-medium">{spec.value}</span>
                </div>
              ))}
              </div>
            </div>
          </FadeInUp>

          <div className="grid gap-5">
            <FadeInUp delay={0.1}>
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="text-[24px] font-bold text-[#1d1d1f] mb-5">{t("package_title")}</h2>
                <ul className="space-y-3">
                  {detail.packageItems.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] text-[#1d1d1f]">
                      <span className="text-[#0071e3]">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.15}>
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="text-[24px] font-bold text-[#1d1d1f] mb-5">{t("oem_title")}</h2>
                <ul className="space-y-3">
                  {detail.oemOptions.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] text-[#1d1d1f]">
                      <span className="text-[#0071e3]">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>

      <div className="py-12 text-center px-6">
        <Link href={`/${locale}/products`} className="text-[#0071e3] text-[15px] hover:underline">
          {t("back")}
        </Link>
      </div>
    </div>
  );
}
