"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
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
  const contactRef = useRef();

  const googleFormLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSdqMvIfA5fAh9Nvh6LQcT6RsJ4t92MZU_TUI25QfUGxLO0qvw/viewform?usp=dialog";

  const sendContact = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l5rwsbg",
        "template_sx0a7ib",
        contactRef.current,
        "gap0tKxtBmoMou3Fp"
      )
      .then(() => {
        alert("Message sent successfully!");
        contactRef.current.reset();
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
      });
  };

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
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-purple-600/20 blur-[120px]" />
      </div>

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-4">
            <Image
              src="/logo.jpg"
              alt="NOVASTACK Logo"
              width={54}
              height={54}
              className="rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.55)]"
            />
            <h1 className="text-2xl font-black tracking-wider">NOVASTACK</h1>
          </a>

          <div className="hidden gap-8 text-sm md:flex">
            {navLinks.map(([label, link]) => (
              <a key={label} href={link} className="hover:text-cyan-300">
                {label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-2xl border border-white/15 bg-white/5 p-4 md:hidden"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-4 mb-4 rounded-3xl border border-white/10 bg-black/90 p-5 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map(([label, link]) => (
                <a
                  key={label}
                  href={link}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl bg-white/5 px-4 py-3"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      <section className="flex min-h-screen flex-col items-center justify-center px-6 pb-20 pt-44 text-center md:pt-48">
        <div className="mb-8 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 text-sm font-bold text-cyan-200">
          AI Agents • Automation • Internships
        </div>

        <h1 className="max-w-5xl bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-[3.4rem] font-black leading-[1.1] text-transparent sm:text-7xl md:text-8xl">
          Build The
          <br />
          Future With
          <br />
          AI Automation
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-300">
          NOVASTACK builds AI Agents, AI Automation systems, Chatbots, Voice
          Assistants and practical AI solutions.
        </p>

        <div className="mt-10 flex w-full max-w-xl flex-col gap-4">
          <a
            href="#contact"
            className="rounded-full bg-white px-8 py-5 text-lg font-black text-black transition hover:bg-cyan-200"
          >
            Start Automation →
          </a>

          <a
            href={googleFormLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cyan-400/50 bg-black/40 px-8 py-5 text-lg font-black transition hover:border-cyan-300"
          >
            Apply For Internship →
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-3 rounded-3xl border border-cyan-400/30 bg-white/5 p-5 backdrop-blur-xl">
          {[
            ["100+", "Students", Users],
            ["25+", "Projects", Rocket],
            ["10+", "Automation", Bot],
          ].map(([number, title, Icon], index) => (
            <div
              key={title}
              className={`text-center ${
                index !== 0 ? "border-l border-white/15" : ""
              }`}
            >
              <Icon className="mx-auto mb-3 text-cyan-300" size={34} />
              <h3 className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-4xl font-black text-transparent">
                {number}
              </h3>
              <p className="mt-2 text-sm text-gray-300">{title}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-6xl border-t border-white/10 px-6 py-24 text-center"
      >
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
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <Icon size={42} className="mb-6 text-cyan-300" />
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="mt-4 text-gray-400">
                Premium AI automation solutions for modern startups and
                businesses.
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
            automation systems, AI agents, and portfolio-ready practical
            projects.
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-bold text-cyan-200">
              Application Includes:
            </h3>

            <div className="mt-5 grid gap-3 text-gray-300">
              <p>✅ Full name, email, phone number</p>
              <p>✅ College details</p>
              <p>✅ Skills and experience</p>
              <p>✅ Resume PDF upload</p>
              <p>✅ Data saved in Google Form + Google Drive</p>
            </div>
          </div>

          <a
            href={googleFormLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-white px-8 py-5 text-lg font-black text-black transition hover:scale-[1.03] hover:bg-cyan-200"
          >
            Apply Now →
          </a>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-12 text-center text-5xl font-black">
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
        <h2 className="mb-12 text-center text-5xl font-black">
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
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
            >
              <Icon size={48} className="mx-auto mb-5 text-purple-300" />
              <h3 className="text-xl font-bold">{title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-10 text-center text-5xl font-black">Contact Us</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <form
            ref={contactRef}
            onSubmit={sendContact}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
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
              className="mb-4 h-36 w-full rounded-xl bg-white/10 p-4 outline-none"
              placeholder="Message"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-white py-4 font-bold text-black transition hover:bg-cyan-200"
            >
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
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0012.06 0C5.49 0 .16 5.33.16 11.9c0 2.1.55 4.14 1.6 5.95L0 24l6.32-1.66a11.9 11.9 0 005.74 1.47h.01c6.57 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.45-8.43z" />
        </svg>
      </a>

      <footer className="border-t border-white/10 px-5 py-10 text-center text-gray-400">
        © 2026 NOVASTACK. All rights reserved.
      </footer>
    </main>
  );
}