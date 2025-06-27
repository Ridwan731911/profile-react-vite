import React from "react";
import {
  Code2,
  MapPin,
  MessageCircle,
  Star,
  User,
  MonitorSmartphone,
  FileText,
  Paintbrush,
  Database,
  Code,
  FileCheck2,
  Cloud,
  Zap,
  CheckCircle,
  Award,
  Clock,
  Shield,
  BookOpen,
  GraduationCap,
  Target,
  TrendingUp,
  Users,
  Heart,
  Coffee,
  Lightbulb,
  Rocket,
  Medal,
  Crown,
  Sparkles,
  Server,
  Globe,
  Layout,
} from "lucide-react";

const PortfolioPage = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-16 left-4 sm:top-20 sm:left-10 opacity-15 animate-pulse">
            <Code2 size={40} className="sm:w-16 sm:h-16 text-white" />
          </div>
          <div
            className="absolute top-32 right-4 sm:top-40 sm:right-20 opacity-15 animate-bounce"
            style={{ animationDelay: "0.5s" }}
          >
            <Database size={35} className="sm:w-12 sm:h-12 text-white" />
          </div>
          <div
            className="absolute bottom-16 left-4 sm:bottom-20 sm:left-20 opacity-10 animate-pulse"
            style={{ animationDelay: "1s" }}
          >
            <Server size={30} className="sm:w-11 sm:h-11 text-white" />
          </div>
          <div
            className="absolute top-48 left-1/2 transform -translate-x-1/2 opacity-10 animate-bounce"
            style={{ animationDelay: "1.5s" }}
          >
            <Globe size={25} className="sm:w-10 sm:h-10 text-white" />
          </div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="flex justify-center items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <Code2
              size={36}
              className="sm:w-12 sm:h-12 text-indigo-200 animate-bounce"
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-white via-indigo-100 to-pink-100 bg-clip-text text-transparent">
              Awansssa
            </h1>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl font-light mb-2 sm:mb-3 text-indigo-100">
            Developer & Programming Tutor
          </p>
          <p className="text-sm sm:text-base md:text-lg text-indigo-50 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
            Saya seorang developer berpengalaman yang siap membantu Anda dengan
            tugas programming, web development, database, dan berbagai proyek
            teknologi. Mari wujudkan ide digital Anda bersama!
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href="https://wa.me/62895363495800"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-indigo-600 font-bold rounded-full hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
            >
              <MessageCircle
                size={18}
                className="sm:w-5 sm:h-5 group-hover:animate-bounce"
              />
              <span className="text-sm sm:text-base">
                Konsultasi via WhatsApp
              </span>
            </a>
            <div className="flex items-center gap-2 text-indigo-100">
              <CheckCircle size={14} className="sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">
                Respon cepat & profesional
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 sm:p-4 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl shadow-lg">
              <GraduationCap
                size={36}
                className="sm:w-12 sm:h-12 text-indigo-600"
              />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-800">
            Tentang Saya
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 sm:mb-12 max-w-4xl mx-auto px-4">
            Saya adalah seorang developer yang berpengalaman dalam berbagai
            teknologi modern. Dengan passion untuk coding dan berbagi
            pengetahuan, saya siap membantu Anda menyelesaikan proyek-proyek
            teknologi, mulai dari website sederhana hingga aplikasi kompleks.
            Mari berkolaborasi untuk mewujudkan visi digital Anda!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: <Code2 className="text-indigo-500" />,
                title: "Full-Stack Development",
                desc: "Menguasai JavaScript ecosystem, Python, Java, dan teknologi modern lainnya",
              },
              {
                icon: <Database className="text-emerald-500" />,
                title: "Database Management",
                desc: "Expert dalam MySQL, PostgreSQL, MongoDB, dan optimasi database",
              },
              {
                icon: <Globe className="text-violet-500" />,
                title: "Modern Web Technologies",
                desc: "React, Node.js, Next.js, dan framework terkini untuk solusi web",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-50 to-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-white rounded-xl shadow-md">
                    {item.icon}
                  </div>
                </div>
                <h4 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-indigo-600">
              Layanan Profesional
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Solusi teknologi lengkap untuk berbagai kebutuhan development dan
              programming Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Code2 className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "JavaScript Development",
                desc: "Pengembangan aplikasi dengan JavaScript modern (ES6+), React, Vue.js, Node.js, dan framework terbaru untuk solusi web yang powerful.",
                color: "from-yellow-400 to-orange-500",
                skills: [
                  "React.js",
                  "Node.js",
                  "Vue.js",
                  "Express.js",
                  "TypeScript",
                ],
              },
              {
                icon: <Database className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Database Solutions",
                desc: "Desain dan implementasi database yang efisien, optimasi query, migrasi data, dan management sistem basis data enterprise.",
                color: "from-emerald-400 to-teal-600",
                skills: [
                  "MySQL",
                  "PostgreSQL",
                  "MongoDB",
                  "Redis",
                  "Database Design",
                ],
              },
              {
                icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Full-Stack Web Apps",
                desc: "Pengembangan aplikasi web lengkap dari frontend hingga backend, responsive design, dan deployment ke production.",
                color: "from-blue-400 to-indigo-600",
                skills: [
                  "React",
                  "Next.js",
                  "API Development",
                  "Responsive Design",
                ],
              },
              {
                icon: <Server className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Backend & API Development",
                desc: "Pengembangan backend yang robust, REST API, GraphQL, sistem authentication, dan integrasi dengan berbagai platform.",
                color: "from-gray-400 to-gray-600",
                skills: [
                  "REST API",
                  "GraphQL",
                  "Authentication",
                  "Third-party Integration",
                ],
              },
              {
                icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Optimization & Consulting",
                desc: "Konsultasi IT, optimasi sistem yang sudah ada, code review, dan implementasi best practices untuk performa maksimal.",
                color: "from-red-400 to-pink-600",
                skills: [
                  "IT Consulting",
                  "System Optimization",
                  "Code Review",
                  "Best Practices",
                ],
              },
              {
                icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Laporan & Dokumentasi",
                desc: "Pembuatan laporan teknis, dokumentasi sistem, proposal proyek, dan presentasi profesional untuk kebutuhan akademik maupun bisnis.",
                color: "from-teal-400 to-cyan-600",
                skills: [
                  "Technical Report",
                  "System Documentation",
                  "Project Proposal",
                  "Presentation",
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div
                  className={`h-1 sm:h-2 bg-gradient-to-r ${item.color}`}
                ></div>
                <div className="p-6 sm:p-8">
                  <div
                    className={`inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${item.color} text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    {item.desc}
                  </p>

                  <div className="mb-4 sm:mb-6">
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="https://wa.me/62895363495800"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition-all duration-300 bg-gradient-to-r ${item.color} text-white hover:shadow-lg transform hover:scale-105 text-sm sm:text-base`}
                  >
                    <MessageCircle size={16} />
                    Diskusi Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-800">
              Metodologi Kerja
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Proses development yang terstruktur dan transparan untuk hasil
              yang optimal
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: "1",
                title: "Analisis Kebutuhan",
                desc: "Memahami requirement, scope project, dan ekspektasi klien secara detail",
              },
              {
                step: "2",
                title: "Planning & Design",
                desc: "Merancang arsitektur, timeline, dan approach development yang tepat",
              },
              {
                step: "3",
                title: "Development",
                desc: "Coding dengan best practices, regular updates, dan quality assurance",
              },
              {
                step: "4",
                title: "Delivery & Support",
                desc: "Deployment, dokumentasi lengkap, dan ongoing support",
              },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <h4 className="font-bold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-800">
              Tech Stack & Expertise
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-4">
              Teknologi modern yang saya kuasai untuk memberikan solusi terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                category: "Frontend",
                items: [
                  "JavaScript (ES6+)",
                  "React.js",
                  "Vue.js",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                ],
                color: "from-blue-400 to-indigo-600",
              },
              {
                category: "Backend",
                items: [
                  "Node.js",
                  "Express.js",
                  "Python",
                  "Java",
                  "PHP",
                  "REST API",
                ],
                color: "from-emerald-400 to-teal-600",
              },
              {
                category: "Database",
                items: [
                  "MySQL",
                  "PostgreSQL",
                  "MongoDB",
                  "Redis",
                  "Firebase",
                  "Prisma",
                ],
                color: "from-purple-400 to-pink-600",
              },
              {
                category: "Tools & DevOps",
                items: ["Git", "Docker", "AWS", "Vercel", "Postman", "VS Code"],
                color: "from-orange-400 to-red-600",
              },
            ].map((skillGroup, i) => (
              <div
                key={i}
                className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div
                  className={`w-full h-1 bg-gradient-to-r ${skillGroup.color} rounded-full mb-4`}
                ></div>
                <h4 className="font-bold text-gray-800 mb-4 sm:mb-6 text-sm sm:text-base">
                  {skillGroup.category}
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  {skillGroup.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full"></div>
                      <span className="text-gray-700 text-xs sm:text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 sm:p-8 lg:p-10 shadow-xl">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 flex items-center gap-3">
            <MapPin className="text-indigo-500" size={24} />
            Lokasi & Kontak
          </h3>
          <div className="mb-6 sm:mb-8">
            <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
              Berlokasi di Sleman, Yogyakarta - Siap melayani klien dari seluruh
              Indonesia
            </p>

            <div className="w-full h-48 sm:h-64 lg:h-80 overflow-hidden shadow-lg mb-4 sm:mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126509.47704401384!2d110.20121494335937!3d-7.7450735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a597c42749039%3A0x704750f1bbb690d0!2sTeras%20solusi!5e0!3m2!1sid!2sid!4v1750791628142!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi di Sleman, Yogyakarta"
              ></iframe>
            </div>

            <a
              href="https://maps.app.goo.gl/GGCnonM7SyAs8b259"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
            >
              <MapPin size={16} className="sm:w-5 sm:h-5" />
              Buka di Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Siap Membantu Tugas-Tugas Anda!
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-indigo-100 mb-6 sm:mb-8 px-4">
            Mulai diskusi kebutuhan tugas Anda sekarang!
          </p>
          <a
            href="https://wa.me/62895363495800"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-3 sm:py-4 bg-white text-indigo-600 font-bold rounded-full hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-base sm:text-lg"
          >
            <MessageCircle size={20} className="sm:w-6 sm:h-6" />
            Mulai Konsultasi Gratis Disini
          </a>
          <p className="text-indigo-200 text-xs sm:text-sm mt-3 sm:mt-4">
            Respon cepat dalam 1-2 jam • Konsultasi gratis • Harga kompetitif
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex justify-center items-center gap-3 mb-3 sm:mb-4">
              <Code2 size={24} className="sm:w-8 sm:h-8 text-indigo-400" />
              <h4 className="text-xl sm:text-2xl font-bold">Awans</h4>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Professional Developer & Programming Solutions
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a
                href="https://wa.me/62895363495800"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors font-medium text-sm sm:text-base"
              >
                <MessageCircle size={16} className="sm:w-5 sm:h-5" />
                Chat WhatsApp
              </a>
            </div>

            <div className="text-xs sm:text-sm text-gray-400 space-y-1">
              <p>📍 Sleman, Yogyakarta, Indonesia</p>
              <p>💬 Konsultasi Gratis • Respon Cepat • Harga Kompetitif</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-4 sm:pt-6 text-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              &copy; 2025 Awans. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;
