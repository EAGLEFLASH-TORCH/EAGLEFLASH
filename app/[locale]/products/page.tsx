"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import ProductCard from "@/components/ProductCard";
import FadeInUp from "@/components/motion/FadeInUp";
import { products, categories } from "@/data/products";

export default function ProductsPage() {
  const t = useTranslations("products");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("全部");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch =
        search === "" ||
        p.name.includes(search) ||
        p.model.toUpperCase().includes(search.toUpperCase()) ||
        p.description.includes(search);
      const matchCategory = selectedCategory === "全部" || p.category === selectedCategory;
      return matchSearch && matchCategory;
    });
  }, [search, selectedCategory]);

  return (
    <div className="bg-white min-h-screen pt-14">
      <div className="bg-[#f5f5f7] pt-20 pb-16 px-6 text-center">
        <FadeInUp>
          <h1 className="font-bold text-[#1d1d1f] tracking-tight mb-3" style={{ fontSize: "clamp(40px, 6vw, 64px)" }}>
            {t("title")}
          </h1>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-[#6e6e73] text-[19px]">{t("subtitle")}</p>
        </FadeInUp>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <FadeInUp>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              type="text"
              placeholder={t("search_placeholder")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-[#f5f5f7] border-0 rounded-xl px-5 py-3 text-[15px] text-[#1d1d1f] placeholder-[#6e6e73] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/30"
            />
            <div className="flex gap-2 flex-wrap">
              {[t("all_categories"), ...categories].map((cat) => (
                <motion.button
                  key={cat}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedCategory(cat === t("all_categories") ? "全部" : cat)}
                  className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
                    (cat === t("all_categories") && selectedCategory === "全部") || selectedCategory === cat
                      ? "bg-[#1d1d1f] text-white"
                      : "bg-[#f5f5f7] text-[#6e6e73] hover:bg-[#e8e8ed]"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>
        </FadeInUp>

        <p className="text-[13px] text-[#6e6e73] mb-6">
          {t("found")} <span className="text-[#1d1d1f] font-medium">{filtered.length}</span> {t("found_unit")}
        </p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product, i) => (
              <FadeInUp key={product.id} delay={Math.min(i * 0.05, 0.4)}>
                <ProductCard product={product} />
              </FadeInUp>
            ))}
          </div>
        ) : (
          <div className="text-center py-32">
            <p className="text-[17px] text-[#6e6e73]">{t("no_results")}</p>
            <button
              onClick={() => { setSearch(""); setSelectedCategory("全部"); }}
              className="mt-4 text-[#0071e3] text-[15px] hover:underline"
            >
              {t("clear_filters")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
