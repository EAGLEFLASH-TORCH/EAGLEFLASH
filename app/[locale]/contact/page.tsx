import { getTranslations } from "next-intl/server";
import FadeInUp from "@/components/motion/FadeInUp";

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<{ product?: string; name?: string }>;
}) {
  const t = await getTranslations("contact");
  const query = searchParams ? await searchParams : {};
  const inquiryProduct = query.product;
  const inquiryName = query.name;

  return (
    <div className="bg-white min-h-screen pt-14">
      <div className="bg-[#f5f5f7] pt-20 pb-16 px-6 text-center">
        <FadeInUp>
          <h1 className="font-bold text-[#1d1d1f] tracking-tight mb-3" style={{ fontSize: "clamp(40px, 6vw, 64px)" }}>
            {t("title")}
          </h1>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-[#6e6e73] text-[19px] max-w-lg mx-auto">{t("subtitle")}</p>
        </FadeInUp>
      </div>

      <div className="max-w-[800px] mx-auto px-6 py-20">
        {inquiryProduct && (
          <FadeInUp>
            <div className="bg-[#e8f2ff] border border-[#0071e3]/15 rounded-3xl p-6 mb-8">
              <p className="text-[#0071e3] text-[13px] font-semibold mb-2">{t("inquiry_label")}</p>
              <p className="text-[#1d1d1f] text-[20px] font-semibold">{inquiryProduct}</p>
              {inquiryName && <p className="text-[#6e6e73] text-[15px] mt-1">{inquiryName}</p>}
              <p className="text-[#6e6e73] text-[13px] mt-4">{t("inquiry_desc")}</p>
            </div>
          </FadeInUp>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          <FadeInUp>
            <a href="tel:18868923813" className="group bg-[#f5f5f7] rounded-3xl p-8 flex flex-col items-center text-center hover:bg-[#e8e8ed] transition-colors">
              <span className="text-4xl mb-4">📞</span>
              <h2 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">{t("phone_title")}</h2>
              <p className="text-[#6e6e73] text-[15px] mb-5">{t("phone_desc")}</p>
              <span className="text-[22px] font-medium text-[#1d1d1f] tracking-wider">18868923813</span>
              <span className="mt-4 text-[#0071e3] text-[13px] font-medium group-hover:underline">{t("phone_cta")}</span>
            </a>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <div className="bg-[#f5f5f7] rounded-3xl p-8 flex flex-col items-center text-center">
              <span className="text-4xl mb-4">💬</span>
              <h2 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">{t("wechat_title")}</h2>
              <p className="text-[#6e6e73] text-[15px] mb-5">{t("wechat_desc")}</p>
              <span className="text-[22px] font-medium text-[#1d1d1f] tracking-wider">18857944238</span>
              <span className="mt-4 text-[13px] text-[#6e6e73]">{t("wechat_hint")}</span>
            </div>
          </FadeInUp>
        </div>

        <FadeInUp delay={0.15}>
          <div className="bg-[#1d1d1f] rounded-3xl p-8 md:p-10">
            <h3 className="text-[#f5f5f7] text-[20px] font-semibold mb-6">{t("company_title")}</h3>
            <dl className="space-y-4">
              {[
                [t("company_name_label"), t("company_name")],
                [t("brand_label"), t("brand")],
                [t("business_label"), t("business")],
                [t("service_label"), t("service")],
                [t("location_label"), t("location")],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-4 text-[15px]">
                  <dt className="text-[#6e6e73] w-24 shrink-0">{label}</dt>
                  <dd className="text-[#f5f5f7]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <div className="mt-5 bg-[#f5f5f7] rounded-3xl p-6 text-center">
            <p className="text-[#1d1d1f] font-medium text-[17px] mb-1">{t("oem_title")}</p>
            <p className="text-[#6e6e73] text-[13px]">{t("oem_desc")}</p>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}
