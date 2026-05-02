import { useTranslations } from "next-intl";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import ProductCard from "@/components/ProductCard";
import FadeInUp from "@/components/motion/FadeInUp";
import { products } from "@/data/products";
import Link from "next/link";

export default function Home() {
  const t = useTranslations();
  const featured = products.slice(0, 4);

  return (
    <>
      <HeroSection />
      <FeatureSection
        eyebrow={t("features.f1_eyebrow")}
        title={t("features.f1_title")}
        description={t("features.f1_desc")}
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
        imageAlt="high brightness flashlight"
        dark={false}
      />
      <FeatureSection
        eyebrow={t("features.f2_eyebrow")}
        title={t("features.f2_title")}
        description={t("features.f2_desc")}
        image="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80"
        imageAlt="durable flashlight"
        reverse
        dark
      />
      <FeatureSection
        eyebrow={t("features.f3_eyebrow")}
        title={t("features.f3_title")}
        description={t("features.f3_desc")}
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80"
        imageAlt="variety of flashlights"
        dark={false}
      />

      <section className="bg-white py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <FadeInUp>
            <p className="text-[13px] font-semibold text-[#0071e3] tracking-widest uppercase mb-3">
              {t("home.featured_eyebrow")}
            </p>
          </FadeInUp>
          <div className="flex items-end justify-between mb-12">
            <FadeInUp delay={0.1}>
              <h2 className="font-bold text-[#1d1d1f] leading-tight" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                {t("home.featured_title")}
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.15}>
              <Link href="/products" className="text-[#0071e3] text-[15px] hover:underline hidden md:block">
                {t("home.view_all")} →
              </Link>
            </FadeInUp>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((product, i) => (
              <FadeInUp key={product.id} delay={i * 0.08}>
                <ProductCard product={product} />
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1d1d1f] min-h-[60vh] flex items-center justify-center px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <FadeInUp>
            <h2 className="text-[#f5f5f7] font-bold leading-tight tracking-tight mb-6" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>
              {t("home.cta_title")}
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <p className="text-[#a1a1a6] text-[19px] mb-10 leading-relaxed whitespace-pre-line">
              {t("home.cta_desc")}
            </p>
          </FadeInUp>
          <FadeInUp delay={0.25}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="bg-white text-[#1d1d1f] text-[17px] font-medium px-8 py-3.5 rounded-full hover:bg-[#f5f5f7] transition-colors">
                {t("home.browse")}
              </Link>
              <Link href="/contact" className="bg-[#0071e3] text-white text-[17px] font-medium px-8 py-3.5 rounded-full hover:bg-[#0077ed] transition-colors">
                {t("home.contact_us")}
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
