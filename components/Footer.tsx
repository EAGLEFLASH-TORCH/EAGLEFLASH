"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations("footer");
  const pathname = usePathname();
  const currentLocale = routing.locales.find((l) => pathname.startsWith(`/${l}`)) ?? routing.defaultLocale;
  const base = `/${currentLocale}`;

  return (
    <footer className="bg-[#f5f5f7] border-t border-black/[0.08]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-4 uppercase tracking-wider">{t("products")}</h4>
            <ul className="space-y-2.5">
              {[
                [t("outdoor"), `${base}/products?category=专业户外`],
                [t("tactical"), `${base}/products?category=战术系列`],
                [t("mini"), `${base}/products?category=迷你便携`],
                [t("rechargeable"), `${base}/products?category=充电系列`],
                [t("all_products"), `${base}/products`],
              ].map(([label, href]) => (
                <li key={label}><Link href={href} className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-4 uppercase tracking-wider">{t("services")}</h4>
            <ul className="space-y-2.5">
              {[t("oem"), t("odm"), t("bulk"), t("inquiry")].map((label) => (
                <li key={label}><Link href={`${base}/contact`} className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-4 uppercase tracking-wider">{t("about")}</h4>
            <ul className="space-y-2.5">
              {[[t("intro"), `${base}`], [t("contact"), `${base}/contact`]].map(([label, href]) => (
                <li key={label}><Link href={href} className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-black/[0.08] pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-[12px] text-[#6e6e73]">{t("copyright")}</p>
          <div className="flex gap-6 text-[12px] text-[#6e6e73]">
            <span>📞 18868923813</span>
            <span>💬 18857944238</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
