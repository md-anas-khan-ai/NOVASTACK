"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  Workflow,
  MessageCircle,
  Mic,
  Rocket,
  Users,
  BadgeCheck,
  Menu,
  X,
} from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    ["About", "#about"],
    ["Services", "#services"],
    ["Internship", "#internship"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <div className="fixed inset-0 -z-10">
        <div className="particles">
          {Array.from({ length: 45 }).map((_, i) => (
            <span
              key={i}
              style={{
                left: `${(i * 7) % 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${8 + (i % 5)}s`,
              }}
            />
          ))}
        </div>

        <div className="glow-animation absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="glow-animation absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="NOVASTACK Logo"
              width={48}
              height={48}
              className="rounded-xl shadow-[0_0_25px_rgba(34,211,238,0.5)]"
            />

            <h1 className="text-2xl font-black tracking-wider">
              NOVASTACK
            </h1>
          </a>

          <div className="hidden gap-8 text-sm md:flex">
            {navLinks.map(([label, link]) => (
              <a
                key={label}
                href={link}
                className="transition hover:text-cyan-300"
              >
                {label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-white/10 bg-white/5 p-3 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-4 mb-4 rounded-3xl border border-white/10 bg-black/90 p-5 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map(([label, link]) => (
                <a
                  key={label}
                  href={link}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl bg-white/5 px-4 py-3 text-gray-200 hover:bg-cyan-400/10 hover:text-cyan-300"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      <section className="flex min-h-screen flex-col items-center justify-center px-6 pb-16 pt-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-xs font-medium tracking-wide text-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.2)] sm:text-sm"
        >
          AI Agents • Automation • Internships
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-5xl font-black leading-[1.05] text-transparent sm:text-6xl md:text-8xl"
        >
          Build The
          <br />
          Future With
          <br />
          AI Automation
        </motion.h1>

        <p className="mt-7 max-w-xl text-base leading-8 text-gray-300 sm:text-lg md:text-xl">
          NOVASTACK builds AI Agents, AI Automation systems, Chatbots, Voice
          Assistants and practical AI solutions for students and businesses.
        </p>

        <div className="mt-10 flex w-full max-w-md flex-col gap-4">
          <a
            href="#contact"
            className="flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-black transition hover:scale-[1.03] hover:bg-cyan-200"
          >
            Start Automation →
          </a>

          <a
            href="#internship"
            className="flex items-center justify-center rounded-full border border-cyan-400/40 bg-black/40 px-8 py-4 text-lg font-bold text-white transition hover:scale-[1.03] hover:border-cyan-300"
          >
            Apply For Internship →
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 sm:pb-24">
        <div className="grid grid-cols-3 gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:gap-6 sm:p-8">
          {[
            ["100+", "Students"],
            ["25+", "Projects"],
            ["10+", "Automation"],
          ].map(([number, title]) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              key={title}
              className="text-center"
            >
              <h3 className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-3xl font-black text-transparent sm:text-5xl">
                {number}
              </h3>

              <p className="mt-2 text-xs text-gray-300 sm:text-base">
                {title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto mb-6 w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-2 text-sm font-bold tracking-[0.25em] text-cyan-300">
          ABOUT US
        </div>

        <h2 className="mb-8 text-center text-4xl font-bold sm:text-5xl">
          About NOVASTACK
        </h2>

        <p className="text-center text-base leading-8 text-gray-300 sm:text-lg">
          NOVASTACK is an AI Automation and AI Learning startup focused on
          helping students and businesses build modern AI solutions using AI
          Agents, Chatbots, Workflow Automation, and AI tools.
        </p>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24">
        <h2 className="mb-12 text-center text-4xl font-bold sm:text-5xl">
          Our Services
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["AI Chatbots", Bot],
            ["AI Agents", BrainCircuit],
            ["WhatsApp Automation", MessageCircle],
            ["Workflow Automation", Workflow],
            ["AI Voice Assistants", Mic],
          ].map(([title, Icon]) => (
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              key={title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition hover:border-cyan-400/40 sm:p-8"
            >
              <Icon size={42} className="mb-6 text-cyan-300" />

              <h3 className="text-2xl font-bold">
                {title}
              </h3>

              <p className="mt-4 text-gray-400">
                Premium AI automation solutions for modern startups and
                businesses.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="internship" className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24">
        <div className="rounded-3xl border border-purple-500/20 bg-purple-500/10 p-7 backdrop-blur-xl sm:p-10">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Free AI/ML Internship Program
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg">
            Apply for NOVASTACK internship and work on real AI projects,
            automation systems, AI agents, and portfolio-ready practical
            projects.
          </p>

          <form
            action="https://formsubmit.co/hr.novastack@gmail.com"
            method="POST"
            encType="multipart/form-data"
            className="mt-8 grid gap-4"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Internship Application - NOVASTACK"
            />
            <input type="hidden" name="_captcha" value="false" />

            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="w-full rounded-xl bg-white/10 p-4 outline-none"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="w-full rounded-xl bg-white/10 p-4 outline-none"
            />

            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone Number"
              className="w-full rounded-xl bg-white/10 p-4 outline-none"
            />

            <input
              type="text"
              name="college"
              required
              placeholder="College Name"
              className="w-full rounded-xl bg-white/10 p-4 outline-none"
            />

            <textarea
              name="skills"
              required
              placeholder="Your Skills: Python, AI, ML, React, etc."
              className="h-28 w-full rounded-xl bg-white/10 p-4 outline-none"
            />

            <div className="rounded-xl bg-white/10 p-4">
              <label className="mb-2 block text-sm text-gray-300">
                Upload Resume
              </label>

              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                className="w-full text-sm text-gray-300"
              />
            </div>

            <button
              type="submit"
              className="rounded-xl bg-white py-4 font-bold text-black transition hover:bg-cyan-200"
            >
              Submit Internship Application
            </button>
          </form>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24">
        <h2 className="mb-12 text-center text-4xl font-bold sm:text-5xl">
          AI Projects Showcase
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "AI Resume Screener",
            "WhatsApp AI Bot",
            "AI Study Assistant",
            "Voice AI Receptionist",
            "Instagram DM Automation",
            "Business AI Copilot",
          ].map((project) => (
            <motion.div
              key={project}
              whileHover={{ scale: 1.03 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-7 backdrop-blur-xl sm:p-8"
            >
              <h3 className="text-2xl font-bold">
                {project}
              </h3>

              <p className="mt-4 text-gray-300">
                Real-world AI project built using modern automation and AI
                tools.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24">
        <h2 className="mb-12 text-center text-4xl font-bold sm:text-5xl">
          Why Choose NOVASTACK
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Real AI Projects", Rocket],
            ["Beginner Friendly", Users],
            ["Community Support", Users],
            ["Verified Certificates", BadgeCheck],
          ].map(([title, Icon]) => (
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              key={title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur-xl sm:p-8"
            >
              <Icon size={48} className="mx-auto mb-5 text-purple-300" />

              <h3 className="text-xl font-bold">
                {title}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24">
        <h2 className="mb-12 text-center text-4xl font-bold sm:text-5xl">
          Testimonials
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            "NOVASTACK made AI easy for me.",
            "Best beginner-friendly AI internship.",
            "Their automation ideas are amazing.",
          ].map((text, index) => (
            <motion.div
              whileHover={{ y: -8 }}
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl sm:p-8"
            >
              <p className="text-gray-300">
                “{text}”
              </p>

              <h4 className="mt-6 font-bold">
                Student {index + 1}
              </h4>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24">
        <h2 className="mb-10 text-center text-4xl font-bold sm:text-5xl">
          Contact Us
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <form
            action="https://formsubmit.co/hr.novastack@gmail.com"
            method="POST"
            className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl sm:p-8"
          >
            <input
              type="hidden"
              name="_subject"
              value="New message from NOVASTACK website"
            />
            <input type="hidden" name="_captcha" value="false" />

            <input
              type="text"
              name="name"
              required
              className="mb-4 w-full rounded-xl bg-white/10 p-4 outline-none"
              placeholder="Your Name"
            />

            <input
              type="email"
              name="email"
              required
              className="mb-4 w-full rounded-xl bg-white/10 p-4 outline-none"
              placeholder="Email"
            />

            <textarea
              name="message"
              required
              className="mb-4 h-36 w-full rounded-xl bg-white/10 p-4 outline-none sm:h-40"
              placeholder="Message"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-white py-4 font-bold text-black transition hover:bg-cyan-200"
            >
              Send Message
            </button>
          </form>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl sm:p-8">
            <h3 className="text-3xl font-bold">
              Connect With Us
            </h3>

            <div className="mt-8 space-y-4 text-base text-gray-300 sm:text-lg">
              <p>Email: hr.novastack@gmail.com</p>
              <p>Phone: +91 7479772672</p>
              <p>Instagram: @novastacks</p>
              <p>LinkedIn: NOVASTACK</p>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://api.whatsapp.com/send?phone=917479772672&text=Hi%20NOVASTACK"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-[0_0_40px_rgba(34,197,94,0.6)] transition duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0012.06 0C5.49 0 .16 5.33.16 11.9c0 2.1.55 4.14 1.6 5.95L0 24l6.32-1.66a11.9 11.9 0 005.74 1.47h.01c6.57 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.45-8.43zM12.07 21.7h-.01a9.8 9.8 0 01-5-1.37l-.36-.21-3.75.98 1-3.65-.24-.37a9.76 9.76 0 01-1.5-5.18c0-5.42 4.41-9.83 9.84-9.83a9.8 9.8 0 016.95 2.88 9.77 9.77 0 012.88 6.95c0 5.43-4.41 9.83-9.83 9.83zm5.39-7.36c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.13 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.08 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
        </svg>
      </a>

      <footer className="border-t border-white/10 px-5 py-10 text-center text-gray-400">
        © 2026 NOVASTACK. All rights reserved.
      </footer>
    </main>
  );
}