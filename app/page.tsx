import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import ProductCard from "@/components/ProductCard";
import FadeInUp from "@/components/motion/FadeInUp";
import { products } from "@/data/products";
import Link from "next/link";

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <>
      <HeroSection />

      {/* Feature 1 — Brightness */}
      <FeatureSection
        eyebrow="极致亮度"
        title="3000 流明
让黑暗无处遁形"
        description="Eagle Flash 旗舰系列采用最新 LED 芯片，最高输出 3000 流明，有效照射距离超过 1000 米。无论是深夜山林、矿井作业还是户外搜救，都能提供可靠光源。"
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
        imageAlt="高亮度手电筒"
        dark={false}
      />

      {/* Feature 2 — Durability */}
      <FeatureSection
        eyebrow="坚不可摧"
        title="航空铝合金
IPX8 深水防护"
        description="采用 6061-T6 航空级铝合金机身，阳极氧化处理，耐腐蚀、抗冲击。IPX8 防水等级可在水下 100 米正常工作，为专业潜水员量身打造。"
        image="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80"
        imageAlt="坚固耐用手电筒"
        reverse
        dark
      />

      {/* Feature 3 — Variety */}
      <FeatureSection
        eyebrow="多元选择"
        title="100+ 款型号
总有一款为你"
        description="从口袋里的迷你笔形手电，到专业战术灯；从 UV 紫外线验钞灯到潜水专用灯；从儿童安全夜灯到工地 COB 工作灯，覆盖所有使用场景。"
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80"
        imageAlt="多款手电筒选择"
        dark={false}
      />

      {/* Featured Products */}
      <section className="bg-white py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <FadeInUp>
            <p className="text-[13px] font-semibold text-[#0071e3] tracking-widest uppercase mb-3">精选产品</p>
          </FadeInUp>
          <div className="flex items-end justify-between mb-12">
            <FadeInUp delay={0.1}>
              <h2 className="font-bold text-[#1d1d1f] leading-tight" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                热门系列
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.15}>
              <Link href="/products" className="text-[#0071e3] text-[15px] hover:underline hidden md:block">
                查看全部 →
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

          <div className="mt-8 text-center md:hidden">
            <Link href="/products" className="text-[#0071e3] text-[15px]">查看全部产品 →</Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#1d1d1f] min-h-[60vh] flex items-center justify-center px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <FadeInUp>
            <h2 className="text-[#f5f5f7] font-bold leading-tight tracking-tight mb-6" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>
              寻找合适的产品？
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <p className="text-[#a1a1a6] text-[19px] mb-10 leading-relaxed">
              支持 OEM / ODM 定制，批量采购享优惠。
              <br />
              随时联系我们获取报价。
            </p>
          </FadeInUp>
          <FadeInUp delay={0.25}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-white text-[#1d1d1f] text-[17px] font-medium px-8 py-3.5 rounded-full hover:bg-[#f5f5f7] transition-colors"
              >
                浏览产品
              </Link>
              <Link
                href="/contact"
                className="bg-[#0071e3] text-white text-[17px] font-medium px-8 py-3.5 rounded-full hover:bg-[#0077ed] transition-colors"
              >
                联系我们
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
