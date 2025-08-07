import React from "react";
import fotoformal from "../../assets/fotoformal.png";
import { Mail } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-950 to-black flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* ======== KIRI ======== */}
          <div className="space-y-6 text-center lg:text-left pt-24">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 animate-fade-in-up">
              Ridwan Fattah
            </h1>

            <p className="text-gray-300 text-xl sm:text-xl font-light max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-100">
              Backend Developer | Building Scalable & Real-World Systems
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 text-white text-lg font-medium animate-fade-in-up delay-200">
              <a
                href="mailto:fatahridwan22@gmail.com"
                className="flex items-center gap-2 hover:underline"
              >
                <Mail className="text-yellow-400" size={20} />
                <span>fatahridwan22@gmail.com</span>
              </a>
              <span className="hidden sm:inline-block border-l border-gray-500 h-6" />
              <a
                href="https://instagram.com/rdwan.fth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 16.25 2h-8.5zM12 7.375A4.625 4.625 0 1 1 7.375 12 4.625 4.625 0 0 1 12 7.375zm0 7.25A2.625 2.625 0 1 0 9.375 12 2.625 2.625 0 0 0 12 14.625zm4.875-7.75a1.125 1.125 0 1 1-1.125 1.125 1.125 1.125 0 0 1 1.125-1.125z" />
                </svg>
                <span>@rdwan.fth</span>
              </a>
            </div>
          </div>

          {/* ======== KANAN (FOTO) ======== */}
          <div className="relative w-full flex justify-center items-center">
            <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-blue-100/20 via-purple-100/15 to-cyan-100/20 rounded-full z-0 blur-xl shadow-xl" />
            <div className="absolute w-[350px] h-[350px] bg-gradient-to-tl from-indigo-100/15 via-blue-100/10 to-purple-100/15 rounded-full z-0 animate-pulse blur-xl" />

            <div className="relative z-10 transform hover:scale-105 transition-all duration-500 ease-out">
              <div className="relative">
                <img
                  src={fotoformal}
                  alt="Ridwan"
                  className="w-[320px] h-[400px] object-cover rounded-2xl shadow-2xl border-4 border-white/10"
                  style={{
                    filter: "brightness(1.05) contrast(1.1)",
                    objectPosition: "center top",
                  }}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/5 via-transparent to-white/5 pointer-events-none" />
                <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DEKORASI KODE FLOATING */}
      {[
        "top-[20%] left-10",
        "top-[22%] right-10",
        "bottom-[16%] left-24",
        "bottom-8 right-[22%]",
      ].map((pos, i) => (
        <div
          key={i}
          className={`absolute ${pos} w-10 h-10 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg animate-float hover:scale-110 transition-transform`}
        >
          &lt;/&gt;
        </div>
      ))}

      {/* Animasi tambahan */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        .animate-fade-in-up.delay-100 {
          animation-delay: 0.1s;
        }
        .animate-fade-in-up.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-fade-in-up.delay-300 {
          animation-delay: 0.3s;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Home;
