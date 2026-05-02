"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { routing } from "@/i18n/routing";

const localeLabels: Record<string, string> = {
  zh: "中文",
  en: "EN",
  fr: "FR",
  es: "ES",
  ar: "AR",
  ru: "RU",
};

export default function Navbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Extract current locale from pathname
  const currentLocale = routing.locales.find((l) => pathname.startsWith(`/${l}`)) ?? routing.defaultLocale;
  // Strip locale prefix to get the path segment
  const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "") || "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = (locale: string) => {
    setLangOpen(false);
    router.push(`/${locale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`);
  };

  const navLinks = [
    { href: `/${currentLocale}`, label: t("home") },
    { href: `/${currentLocale}/products`, label: t("products") },
    { href: `/${currentLocale}/contact`, label: t("contact") },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.08)]" : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
          <Link href={`/${currentLocale}`} className="text-[17px] font-semibold tracking-tight text-[#1d1d1f]">
            Eagle Flash
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-[13px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors">
                {l.label}
              </Link>
            ))}
            <Link href={`/${currentLocale}/contact`} className="text-[13px] bg-[#0071e3] text-white px-4 py-1.5 rounded-full hover:bg-[#0077ed] transition-colors">
              {t("cta")}
            </Link>

            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-[13px] text-[#1d1d1f]/70 hover:text-[#1d1d1f] transition-colors border border-black/10 rounded-full px-3 py-1.5"
              >
                🌐 {localeLabels[currentLocale]}
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-10 bg-white rounded-2xl shadow-xl border border-black/[0.06] py-2 min-w-[120px] z-50"
                  >
                    {routing.locales.map((locale) => (
                      <button
                        key={locale}
                        onClick={() => switchLocale(locale)}
                        className={`w-full text-left px-4 py-2 text-[13px] hover:bg-[#f5f5f7] transition-colors ${
                          locale === currentLocale ? "text-[#0071e3] font-medium" : "text-[#1d1d1f]"
                        }`}
                      >
                        {localeLabels[locale]}
                        {locale === currentLocale && " ✓"}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile: hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="text-[12px] text-[#1d1d1f]/70 border border-black/10 rounded-full px-2.5 py-1"
              >
                🌐 {localeLabels[currentLocale]}
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="absolute right-0 top-9 bg-white rounded-2xl shadow-xl border border-black/[0.06] py-2 min-w-[110px] z-50"
                  >
                    {routing.locales.map((locale) => (
                      <button
                        key={locale}
                        onClick={() => switchLocale(locale)}
                        className={`w-full text-left px-4 py-2 text-[13px] hover:bg-[#f5f5f7] ${
                          locale === currentLocale ? "text-[#0071e3] font-medium" : "text-[#1d1d1f]"
                        }`}
                      >
                        {localeLabels[locale]}{locale === currentLocale && " ✓"}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button className="p-2 -mr-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="菜单">
              <div className="w-5 space-y-[5px]">
                <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block h-[1.5px] bg-[#1d1d1f] rounded-full" />
                <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-[1.5px] bg-[#1d1d1f] rounded-full" />
                <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block h-[1.5px] bg-[#1d1d1f] rounded-full" />
              </div>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-14 flex flex-col"
          >
            <div className="flex flex-col px-6 py-8 gap-1">
              {navLinks.map((l, i) => (
                <motion.div key={l.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                  <Link href={l.href} className="block text-[28px] font-medium text-[#1d1d1f] py-3 border-b border-[#e5e5ea]" onClick={() => setMenuOpen(false)}>
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Close lang dropdown when clicking outside */}
      {langOpen && <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />}
    </>
  );
}
