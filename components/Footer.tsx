import Link from "next/link";

const footerLinks = [
  {
    title: "产品",
    links: [
      { label: "专业户外", href: "/products?category=专业户外" },
      { label: "战术系列", href: "/products?category=战术系列" },
      { label: "迷你便携", href: "/products?category=迷你便携" },
      { label: "充电系列", href: "/products?category=充电系列" },
      { label: "查看全部", href: "/products" },
    ],
  },
  {
    title: "服务",
    links: [
      { label: "OEM 定制", href: "/contact" },
      { label: "ODM 服务", href: "/contact" },
      { label: "批量采购", href: "/contact" },
      { label: "产品咨询", href: "/contact" },
    ],
  },
  {
    title: "关于",
    links: [
      { label: "公司介绍", href: "/" },
      { label: "联系我们", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-black/[0.08]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-4 uppercase tracking-wider">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-black/[0.08] pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-[12px] text-[#6e6e73]">
            Copyright © 2025 义乌市闪电鹰照明科技有限公司. All rights reserved.
          </p>
          <div className="flex gap-6 text-[12px] text-[#6e6e73]">
            <span>📞 18868923813</span>
            <span>💬 微信 18857944238</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
