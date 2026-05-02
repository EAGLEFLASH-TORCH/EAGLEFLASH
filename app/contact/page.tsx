import FadeInUp from "@/components/motion/FadeInUp";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pt-14">
      {/* Header */}
      <div className="bg-[#f5f5f7] pt-20 pb-16 px-6 text-center">
        <FadeInUp>
          <h1 className="font-bold text-[#1d1d1f] tracking-tight mb-3" style={{ fontSize: "clamp(40px, 6vw, 64px)" }}>
            联系我们
          </h1>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-[#6e6e73] text-[19px] max-w-lg mx-auto">
            获取产品报价、定制服务或任何疑问，欢迎随时联系
          </p>
        </FadeInUp>
      </div>

      <div className="max-w-[800px] mx-auto px-6 py-20">
        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          <FadeInUp>
            <a
              href="tel:18868923813"
              className="group bg-[#f5f5f7] rounded-3xl p-8 flex flex-col items-center text-center hover:bg-[#e8e8ed] transition-colors"
            >
              <span className="text-4xl mb-4">📞</span>
              <h2 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">电话联系</h2>
              <p className="text-[#6e6e73] text-[15px] mb-5">随时致电，即刻获取报价</p>
              <span className="text-[22px] font-medium text-[#1d1d1f] tracking-wider">18868923813</span>
              <span className="mt-4 text-[#0071e3] text-[13px] font-medium group-hover:underline">立即拨打 →</span>
            </a>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="bg-[#f5f5f7] rounded-3xl p-8 flex flex-col items-center text-center">
              <span className="text-4xl mb-4">💬</span>
              <h2 className="text-[20px] font-semibold text-[#1d1d1f] mb-2">微信联系</h2>
              <p className="text-[#6e6e73] text-[15px] mb-5">添加微信，随时沟通需求</p>
              <span className="text-[22px] font-medium text-[#1d1d1f] tracking-wider">18857944238</span>
              <span className="mt-4 text-[13px] text-[#6e6e73]">搜索微信号添加好友</span>
            </div>
          </FadeInUp>
        </div>

        {/* Company info */}
        <FadeInUp delay={0.15}>
          <div className="bg-[#1d1d1f] rounded-3xl p-8 md:p-10">
            <h3 className="text-[#f5f5f7] text-[20px] font-semibold mb-6">公司信息</h3>
            <dl className="space-y-4">
              {[
                { label: "公司全称", value: "义乌市闪电鹰照明科技有限公司" },
                { label: "品牌", value: "Eagle Flash · 闪电鹰" },
                { label: "主营", value: "专业手电筒研发、生产、销售" },
                { label: "服务", value: "OEM / ODM 定制，支持打样" },
                { label: "所在地", value: "浙江省义乌市" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 text-[15px]">
                  <dt className="text-[#6e6e73] w-20 shrink-0">{item.label}</dt>
                  <dd className="text-[#f5f5f7]">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <div className="mt-5 bg-[#f5f5f7] rounded-3xl p-6 text-center">
            <p className="text-[#1d1d1f] font-medium text-[17px] mb-1">🏭 支持 OEM / ODM 定制</p>
            <p className="text-[#6e6e73] text-[13px]">可定制 Logo、颜色、包装，支持来图打样，欢迎咨询</p>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}
