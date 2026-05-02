"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const locale = useLocale();

  return (
    <Link href={`/${locale}/products/${product.id}`}>
      <motion.div
        whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="bg-[#f5f5f7] rounded-3xl overflow-hidden cursor-pointer group"
      >
        {/* Image area */}
        <div className="relative h-52 flex items-center justify-center overflow-hidden bg-[#e8e8ed]">
          <motion.div
            className="text-7xl"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            🔦
          </motion.div>
          <div className="absolute top-4 left-4">
            <span className="text-[11px] font-medium text-[#6e6e73] bg-white/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
              {product.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-[12px] text-[#6e6e73] mb-1">{product.model}</p>
          <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-2 leading-snug">{product.name}</h3>
          <p className="text-[13px] text-[#6e6e73] line-clamp-2 leading-relaxed">{product.description}</p>

          <div className="mt-4 pt-4 border-t border-black/[0.06] grid grid-cols-2 gap-y-2 text-[12px] text-[#6e6e73]">
            <span>{product.lumens ?? "—"}</span>
            <span>{product.weight}</span>
            <span className="col-span-2 truncate">{product.batteryCapacity}</span>
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.colors.slice(0, 3).map((c) => (
              <span key={c} className="text-[11px] text-[#6e6e73] bg-white/80 px-2 py-0.5 rounded-full">
                {c}
              </span>
            ))}
            {product.colors.length > 3 && (
              <span className="text-[11px] text-[#6e6e73]">+{product.colors.length - 3}</span>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
