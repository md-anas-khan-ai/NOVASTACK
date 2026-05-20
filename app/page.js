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
        <div className="glow-animation absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_35%)]" />
      </div>

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-4">
            <Image
              src="/logo.jpg"
              alt="NOVASTACK Logo"
              width={54}
              height={54}
              className="rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.55)]"
            />

            <h1 className="text-2xl font-black tracking-wider sm:text-3xl">
              NOVASTACK
            </h1>
          </a>

          <div className="hidden gap-8 text-sm md:flex">
            {navLinks.map(([label, link]) => (
              <a key={label} href={link} className="transition hover:text-cyan-300">
                {label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-2xl border border-white/15 bg-white/5 p-4 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
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

      <section className="flex min-h-screen flex-col items-center justify-center px-6 pb-12 pt-36 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 text-sm font-bold text-cyan-200 shadow-[0_0_35px_rgba(34,211,238,0.25)]"
        >
          AI Agents • Automation • Internships
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 38 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-[3.4rem] font-black leading-[1.12] text-transparent sm:text-7xl md:text-8xl"
        >
          Build The
          <br />
          Future With
          <br />
          AI Automation
        </motion.h1>

        <p className="mt-9 max-w-2xl text-xl leading-9 text-gray-300">
          NOVASTACK builds AI Agents, AI Automation systems, Chatbots, Voice
          Assistants and practical AI solutions for students and businesses.
        </p>

        <div className="mt-10 flex w-full max-w-xl flex-col gap-4">
          <a
            href="#contact"
            className="flex items-center justify-center rounded-full bg-white px-8 py-5 text-lg font-black text-black transition hover:scale-[1.03] hover:bg-cyan-200"
          >
            Start Automation <span className="ml-4 text-2xl">→</span>
          </a>

          <a
            href="#internship"
            className="flex items-center justify-center rounded-full border border-cyan-400/50 bg-black/40 px-8 py-5 text-lg font-black text-white transition hover:scale-[1.03] hover:border-purple-400"
          >
            Apply For Internship <span className="ml-4 text-2xl text-cyan-300">→</span>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-3 gap-0 rounded-3xl border border-cyan-400/30 bg-white/5 p-5 shadow-[0_0_50px_rgba(34,211,238,0.12)] backdrop-blur-xl">
          {[
            ["100+", "Students Trained", Users],
            ["25+", "AI Projects Built", Rocket],
            ["10+", "Automation Solutions", Bot],
          ].map(([number, title, Icon], index) => (
            <div
              key={title}
              className={`text-center ${index !== 0 ? "border-l border-white/15" : ""}`}
            >
              <Icon className="mx-auto mb-3 text-cyan-300" size={34} />
              <h3 className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-4xl font-black text-transparent">
                {number}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">{title}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl border-t border-white/10 px-6 py-24 text-center">
        <div className="mx-auto mb-8 w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-2 text-sm font-bold tracking-[0.25em] text-cyan-300">
          ABOUT US
        </div>

        <h2 className="mb-8 text-5xl font-black">About NOVASTACK</h2>

        <p className="text-xl leading-9 text-gray-300">
          NOVASTACK is an AI Automation and AI Learning startup focused on
          helping students and businesses build modern AI solutions using AI
          Agents, Chatbots, Workflow Automation, and AI tools.
        </p>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-12 text-center text-5xl font-black">Our Services</h2>

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
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-cyan-400/40"
            >
              <Icon size={42} className="mb-6 text-cyan-300" />
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="mt-4 text-gray-400">
                Premium AI automation solutions for modern startups and businesses.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="internship" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl border border-purple-500/20 bg-purple-500/10 p-8 backdrop-blur-xl sm:p-10">
          <h2 className="text-4xl font-black sm:text-5xl">
            Free AI/ML Internship Program
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Apply for NOVASTACK internship and work on real AI projects,
            automation systems, AI agents, and portfolio-ready practical projects.
          </p>

          <form
            action="https://formsubmit.co/hr.novastack@gmail.com"
            method="POST"
            encType="multipart/form-data"
            className="mt-8 grid gap-4"
          >
            <input type="hidden" name="_subject" value="New Internship Application - NOVASTACK" />
            <input type="hidden" name="_captcha" value="false" />

            <input type="text" name="name" required placeholder="Full Name" className="w-full rounded-xl bg-white/10 p-4 outline-none" />
            <input type="email" name="email" required placeholder="Email Address" className="w-full rounded-xl bg-white/10 p-4 outline-none" />
            <input type="tel" name="phone" required placeholder="Phone Number" className="w-full rounded-xl bg-white/10 p-4 outline-none" />
            <input type="text" name="college" required placeholder="College Name" className="w-full rounded-xl bg-white/10 p-4 outline-none" />

            <textarea
              name="skills"
              required
              placeholder="Your Skills: Python, AI, ML, React, etc."
              className="h-28 w-full rounded-xl bg-white/10 p-4 outline-none"
            />

            <div className="rounded-xl bg-white/10 p-4">
              <label className="mb-2 block text-sm text-gray-300">Upload Resume</label>
              <input type="file" name="resume" accept=".pdf,.doc,.docx" required className="w-full text-sm text-gray-300" />
            </div>

            <button type="submit" className="rounded-xl bg-white py-4 font-bold text-black transition hover:bg-cyan-200">
              Submit Internship Application
            </button>
          </form>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-12 text-center text-5xl font-black">AI Projects Showcase</h2>

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
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-8 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold">{project}</h3>
              <p className="mt-4 text-gray-300">
                Real-world AI project built using modern automation and AI tools.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-12 text-center text-5xl font-black">Why Choose NOVASTACK</h2>

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
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
            >
              <Icon size={48} className="mx-auto mb-5 text-purple-300" />
              <h3 className="text-xl font-bold">{title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-12 text-center text-5xl font-black">Testimonials</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            "NOVASTACK made AI easy for me.",
            "Best beginner-friendly AI internship.",
            "Their automation ideas are amazing.",
          ].map((text, index) => (
            <motion.div
              whileHover={{ y: -8 }}
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <p className="text-gray-300">“{text}”</p>
              <h4 className="mt-6 font-bold">Student {index + 1}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-10 text-center text-5xl font-black">Contact Us</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <form
            action="https://formsubmit.co/hr.novastack@gmail.com"
            method="POST"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <input type="hidden" name="_subject" value="New message from NOVASTACK website" />
            <input type="hidden" name="_captcha" value="false" />

            <input type="text" name="name" required className="mb-4 w-full rounded-xl bg-white/10 p-4 outline-none" placeholder="Your Name" />
            <input type="email" name="email" required className="mb-4 w-full rounded-xl bg-white/10 p-4 outline-none" placeholder="Email" />
            <textarea name="message" required className="mb-4 h-36 w-full rounded-xl bg-white/10 p-4 outline-none" placeholder="Message" />

            <button type="submit" className="w-full rounded-xl bg-white py-4 font-bold text-black transition hover:bg-cyan-200">
              Send Message
            </button>
          </form>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-3xl font-bold">Connect With Us</h3>

            <div className="mt-8 space-y-4 text-lg text-gray-300">
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
        className="fixed bottom-6 right-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-[0_0_40px_rgba(34,197,94,0.7)] transition duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="white" viewBox="0 0 24 24">
          <path d="M20.52 3.48A11.86 11.86 0 0012.06 0C5.49 0 .16 5.33.16 11.9c0 2.1.55 4.14 1.6 5.95L0 24l6.32-1.66a11.9 11.9 0 005.74 1.47h.01c6.57 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.45-8.43zM12.07 21.7h-.01a9.8 9.8 0 01-5-1.37l-.36-.21-3.75.98 1-3.65-.24-.37a9.76 9.76 0 01-1.5-5.18c0-5.42 4.41-9.83 9.84-9.83a9.8 9.8 0 016.95 2.88 9.77 9.77 0 012.88 6.95c0 5.43-4.41 9.83-9.83 9.83z" />
        </svg>
      </a>

      <footer className="border-t border-white/10 px-5 py-10 text-center text-gray-400">
        © 2026 NOVASTACK. All rights reserved.
      </footer>
    </main>
  );
}