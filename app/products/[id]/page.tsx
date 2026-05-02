"use client";
import { use } from "react";
import { products } from "@/data/products";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import FadeInUp from "@/components/motion/FadeInUp";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const specs = [
    { label: "型号", value: product.model },
    { label: "尺寸", value: product.size },
    { label: "重量", value: product.weight },
    { label: "材质", value: product.material },
    { label: "电池容量", value: product.batteryCapacity },
    { label: "亮度", value: product.lumens ?? "—" },
    { label: "防水等级", value: product.waterproof ?? "—" },
    { label: "可选颜色", value: product.colors.join("、") },
    { label: "分类", value: product.category },
  ];

  return (
    <div className="bg-white min-h-screen pt-14">
      {/* Hero image area */}
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

      {/* Product info */}
      <div className="max-w-[800px] mx-auto px-6 py-16 text-center">
        <FadeInUp>
          <span className="text-[13px] font-medium text-[#0071e3] tracking-widest uppercase">
            {product.category}
          </span>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <h1 className="font-bold text-[#1d1d1f] tracking-tight mt-3 mb-4" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            {product.name}
          </h1>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <p className="text-[#6e6e73] text-[19px] leading-relaxed mb-10">{product.description}</p>
        </FadeInUp>

        {/* CTA */}
        <FadeInUp delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <motion.a
              href="tel:18868923813"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#0071e3] text-white text-[17px] font-medium px-8 py-3.5 rounded-full hover:bg-[#0077ed] transition-colors"
            >
              📞 电话咨询
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border border-[#1d1d1f]/20 text-[#1d1d1f] text-[17px] font-medium px-8 py-3.5 rounded-full hover:bg-[#f5f5f7] transition-colors text-center cursor-default"
            >
              💬 微信：18857944238
            </motion.div>
          </div>
          <p className="text-[12px] text-[#6e6e73]">工作时间 周一至周六 8:00–18:00</p>
        </FadeInUp>
      </div>

      {/* Specs */}
      <div className="bg-[#f5f5f7] py-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <FadeInUp>
            <h2 className="text-[28px] font-bold text-[#1d1d1f] mb-10 text-center">技术规格</h2>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              {specs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`flex items-center px-6 py-4 text-[15px] ${i !== specs.length - 1 ? "border-b border-black/[0.06]" : ""}`}
                >
                  <span className="w-32 text-[#6e6e73] shrink-0">{spec.label}</span>
                  <span className="text-[#1d1d1f] font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Back */}
      <div className="py-12 text-center">
        <Link href="/products" className="text-[#0071e3] text-[15px] hover:underline">
          ← 返回产品列表
        </Link>
      </div>
    </div>
  );
}
