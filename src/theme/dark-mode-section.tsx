'use client';

import { motion } from 'framer-motion';

export function DarkModeSection() {
  return (
    <section className="deep-tech-section py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm"
          >
            DEEP TECH INNOVATION
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 glow-text tracking-tight"
          >
            Technology That Goes <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Beyond Surface Level
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            ขับเคลื่อนด้วย AI ขั้นสูงและ Deep Learning Model
            ที่ถูกฝึกฝนด้วยข้อมูลเกษตรกรรมไทยกว่า 10 ปี
            เพื่อผลลัพธ์ที่แม่นยำที่สุด
          </motion.p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Neural Networks',
              desc: 'จำลองโครงข่ายประสาทเพื่อวิเคราะห์โรคพืช',
              color: 'border-cyan-500',
            },
            {
              title: 'Satellite Imaging',
              desc: 'ประมวลผลภาพถ่ายดาวเทียมแบบ Real-time',
              color: 'border-blue-500',
            },
            {
              title: 'Predictive Analytics',
              desc: 'ทำนายสภาพอากาศและผลผลิตล่วงหน้า',
              color: 'border-indigo-500',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className={`p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 neon-border group`}
            >
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
