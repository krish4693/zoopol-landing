import { motion } from "motion/react";
import { Zap, ShieldCheck, CreditCard, Clock } from "lucide-react";

const BENTO_ITEMS = [
  {
    title: "Verified Professionals",
    description: "Every worker is thoroughly vetted and background-checked so you can hire with complete confidence.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop",
    className: "md:col-span-2",
    icon: ShieldCheck,
    isImage: true,
  },
  {
    title: "Fast Job Posting",
    description: "Post a job in under a minute. Get matched with local pros instantly.",
    className: "md:col-span-1 bg-[#0A0F1C]",
    icon: Zap,
    isImage: false,
  },
  {
    title: "Secure Payments",
    description: "All payments are protected and transparent throughout the process.",
    className: "md:col-span-1 bg-[#0A0F1C]",
    icon: CreditCard,
    isImage: false,
  },
  {
    title: "Flexible Scheduling",
    description: "Hire for an hour, a day, or a week. You control the schedule and the terms.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    className: "md:col-span-2",
    icon: Clock,
    isImage: true,
  },
];

export function BentoGrid() {
  return (
    <section id="features" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0F1C] border border-white/10 text-[#00E5FF] text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <span>Why Zoopol</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl text-white font-black tracking-tighter mb-6 max-w-2xl"
          >
            Everything you need to <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">get work done.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[320px] md:auto-rows-[380px]">
          {BENTO_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative rounded-[32px] overflow-hidden border border-white/10 group ${item.className}`}
            >
              {item.isImage ? (
                <>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/40 to-transparent" />
                  <div className="absolute inset-0 bg-[#00E5FF]/5 mix-blend-overlay" />
                  
                  <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-md">
                      <h3 className="text-2xl md:text-3xl text-white font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-300 text-sm md:text-base">{item.description}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20">
                      <item.icon className="w-6 h-6 text-[#00E5FF]" />
                    </div>
                  </div>
                </>
              ) : (
                <div className="h-full w-full p-8 md:p-10 flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-[#00E5FF]/10 flex items-center justify-center mb-auto border border-[#00E5FF]/20">
                    <item.icon className="w-7 h-7 text-[#00E5FF]" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-white font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
