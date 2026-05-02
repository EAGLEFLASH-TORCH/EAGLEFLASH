"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import ProductCard from "@/components/ProductCard";
import FadeInUp from "@/components/motion/FadeInUp";
import {
  getLocalizedCategories,
  getLocalizedFilterGroups,
  getLocalizedProducts,
  getProductBatteryGroup,
  getProductLumensValue,
  getProductWaterproofGroup,
  ProductFilterOption,
} from "@/data/products";

export default function ProductsPage() {
  const t = useTranslations("products");
  const locale = useLocale();
  const products = useMemo(() => getLocalizedProducts(locale), [locale]);
  const categories = useMemo(() => getLocalizedCategories(locale), [locale]);
  const filterGroups = useMemo(() => getLocalizedFilterGroups(locale), [locale]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLumens, setSelectedLumens] = useState<string | null>(null);
  const [selectedWaterproof, setSelectedWaterproof] = useState<string | null>(null);
  const [selectedBattery, setSelectedBattery] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const lumens = getProductLumensValue(p);
      const matchSearch =
        search === "" ||
        p.name.includes(search) ||
        p.model.toUpperCase().includes(search.toUpperCase()) ||
        p.description.includes(search);
      const matchCategory = selectedCategory === null || p.category === selectedCategory;
      const matchLumens =
        selectedLumens === null ||
        (selectedLumens === "under-500" && lumens < 500) ||
        (selectedLumens === "500-999" && lumens >= 500 && lumens < 1000) ||
        (selectedLumens === "1000-1999" && lumens >= 1000 && lumens < 2000) ||
        (selectedLumens === "2000-plus" && lumens >= 2000);
      const matchWaterproof = selectedWaterproof === null || getProductWaterproofGroup(p) === selectedWaterproof;
      const matchBattery = selectedBattery === null || getProductBatteryGroup(p) === selectedBattery;
      return matchSearch && matchCategory && matchLumens && matchWaterproof && matchBattery;
    });
  }, [products, search, selectedCategory, selectedBattery, selectedLumens, selectedWaterproof]);

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory(null);
    setSelectedLumens(null);
    setSelectedWaterproof(null);
    setSelectedBattery(null);
  };

  const renderFilterGroup = (
    label: string,
    options: ProductFilterOption[],
    value: string | null,
    onChange: (value: string | null) => void
  ) => (
    <div>
      <p className="text-[12px] font-semibold text-[#1d1d1f] mb-3">{label}</p>
      <div className="flex gap-2 flex-wrap">
        <button
          type="button"
          onClick={() => onChange(null)}
          className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
            value === null ? "bg-[#1d1d1f] text-white" : "bg-[#f5f5f7] text-[#6e6e73] hover:bg-[#e8e8ed]"
          }`}
        >
          {t("all_categories")}
        </button>
        {options.map((option) => (
          <button
            type="button"
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
              value === option.value ? "bg-[#1d1d1f] text-white" : "bg-[#f5f5f7] text-[#6e6e73] hover:bg-[#e8e8ed]"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );

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
          <div className="flex flex-col gap-6 mb-8">
            <input
              type="text"
              placeholder={t("search_placeholder")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-[#f5f5f7] border-0 rounded-xl px-5 py-3 text-[15px] text-[#1d1d1f] placeholder-[#6e6e73] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/30"
            />

            <div className="bg-white border border-black/[0.06] rounded-3xl p-5 md:p-6 shadow-sm space-y-6">
              <div>
                <p className="text-[12px] font-semibold text-[#1d1d1f] mb-3">{t("filter_category")}</p>
                <div className="flex gap-2 flex-wrap">
                  {[t("all_categories"), ...categories].map((cat) => (
                    <motion.button
                      type="button"
                      key={cat}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setSelectedCategory(cat === t("all_categories") ? null : cat)}
                      className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
                        (cat === t("all_categories") && selectedCategory === null) || selectedCategory === cat
                          ? "bg-[#1d1d1f] text-white"
                          : "bg-[#f5f5f7] text-[#6e6e73] hover:bg-[#e8e8ed]"
                      }`}
                    >
                      {cat}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {renderFilterGroup(t("filter_lumens"), filterGroups.lumens, selectedLumens, setSelectedLumens)}
                {renderFilterGroup(t("filter_waterproof"), filterGroups.waterproof, selectedWaterproof, setSelectedWaterproof)}
                {renderFilterGroup(t("filter_battery"), filterGroups.battery, selectedBattery, setSelectedBattery)}
              </div>

              <button type="button" onClick={clearFilters} className="text-[#0071e3] text-[13px] font-medium hover:underline">
                {t("clear_filters")}
              </button>
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
              onClick={clearFilters}
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
