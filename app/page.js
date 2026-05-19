"use client";

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
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="fixed inset-0 -z-10">

        <div className="glow-animation absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="glow-animation absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      </div>

      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div className="flex items-center gap-3">

            <Image
              src="/logo.jpg"
              alt="NovaStacks Logo"
              width={50}
              height={50}
              className="rounded-xl shadow-[0_0_25px_rgba(34,211,238,0.5)]"
            />

            <h1 className="text-2xl font-black tracking-wider">
              NovaStacks
            </h1>

          </div>

          <div className="hidden gap-8 text-sm md:flex">

            <a href="#about" className="hover:text-cyan-300">
              About
            </a>

            <a href="#services" className="hover:text-cyan-300">
              Services
            </a>

            <a href="#internship" className="hover:text-cyan-300">
              Internship
            </a>

            <a href="#projects" className="hover:text-cyan-300">
              Projects
            </a>

            <a href="#contact" className="hover:text-cyan-300">
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="float-animation mb-8 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.25)]"
        >
          AI Agents • Automation • Internships
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-6xl font-black leading-tight text-transparent md:text-8xl"
        >
          Build The Future With AI Automation
        </motion.h1>

        <p className="mt-8 max-w-2xl text-lg text-gray-300 md:text-xl">
          NovaStacks builds AI Agents, AI Automation systems,
          Chatbots, Voice Assistants and practical AI solutions for
          students and businesses.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <a
            href="#contact"
            className="rounded-full bg-white px-8 py-4 font-bold text-black transition hover:scale-105 hover:bg-cyan-200"
          >
            Start Automation
          </a>

          <a
            href="#internship"
            className="rounded-full border border-white/20 px-8 py-4 font-bold transition hover:scale-105 hover:bg-white/10"
          >
            Apply For Internship
          </a>

        </div>

      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="grid gap-8 md:grid-cols-3">

          {[
            ["100+", "Students Trained"],
            ["25+", "AI Projects Built"],
            ["10+", "Automation Solutions"],
          ].map(([number, title]) => (

            <motion.div
              whileHover={{ scale: 1.05 }}
              key={title}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl"
            >

              <h3 className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-6xl font-black text-transparent">
                {number}
              </h3>

              <p className="mt-4 text-lg text-gray-300">
                {title}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-24"
      >

        <h2 className="mb-8 text-center text-5xl font-bold">
          About NovaStacks
        </h2>

        <p className="text-center text-lg leading-8 text-gray-300">
          NovaStacks is an AI Automation and AI Learning startup
          focused on helping students and businesses build modern AI
          solutions using AI Agents, Chatbots, Workflow Automation,
          and AI tools.
        </p>

      </section>

      {/* Services */}
      <section
        id="services"
        className="mx-auto max-w-7xl px-6 py-24"
      >

        <h2 className="mb-14 text-center text-5xl font-bold">
          Our Services
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

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

              <Icon
                size={45}
                className="mb-6 text-cyan-300"
              />

              <h3 className="text-2xl font-bold">
                {title}
              </h3>

              <p className="mt-4 text-gray-400">
                Premium AI automation solutions for modern startups and businesses.
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Internship */}
      <section
        id="internship"
        className="mx-auto max-w-6xl px-6 py-24"
      >

        <div className="rounded-3xl border border-purple-500/20 bg-purple-500/10 p-10 backdrop-blur-xl">

          <h2 className="text-5xl font-bold">
            Free AI/ML Internship Program
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Work on real AI projects, learn practical AI skills,
            build portfolio projects and receive a verified certificate.
          </p>

        </div>

      </section>

      {/* Projects */}
      <section
        id="projects"
        className="mx-auto max-w-7xl px-6 py-24"
      >

        <h2 className="mb-14 text-center text-5xl font-bold">
          AI Projects Showcase
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

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

              <h3 className="text-2xl font-bold">
                {project}
              </h3>

              <p className="mt-4 text-gray-300">
                Real-world AI project built using modern automation and AI tools.
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <h2 className="mb-14 text-center text-5xl font-bold">
          Why Choose NovaStacks
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

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

              <Icon
                size={50}
                className="mx-auto mb-5 text-purple-300"
              />

              <h3 className="text-xl font-bold">
                {title}
              </h3>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <h2 className="mb-14 text-center text-5xl font-bold">
          Testimonials
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          {[
            "NovaStacks made AI easy for me.",
            "Best beginner-friendly AI internship.",
            "Their automation ideas are amazing.",
          ].map((text, index) => (

            <motion.div
              whileHover={{ y: -8 }}
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
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

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-24"
      >

        <h2 className="mb-10 text-center text-5xl font-bold">
          Contact Us
        </h2>

        <div className="grid gap-8 md:grid-cols-2">

          <form
            action="https://formsubmit.co/hr.novastack@gmail.com"
            method="POST"
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
              className="mb-4 h-40 w-full rounded-xl bg-white/10 p-4 outline-none"
              placeholder="Message"
            />

            <button className="w-full rounded-xl bg-white py-4 font-bold text-black transition hover:bg-cyan-200">
              Send Message
            </button>

          </form>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <h3 className="text-3xl font-bold">
              Connect With Us
            </h3>

            <div className="mt-8 space-y-4 text-lg text-gray-300">
              <p>Email: hr.novastack@gmail.com</p>
              <p>Phone: +91 7479772672</p>
              <p>Instagram: @novastacks</p>
              <p>LinkedIn: NovaStacks</p>
            </div>

          </div>

        </div>

      </section>

      {/* Floating AI Assistant */}
      <motion.a
        href="https://wa.me/917479772672"
        target="_blank"
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-4 text-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.4)] backdrop-blur-xl"
      >

        <Bot size={24} />

        <span className="font-semibold">
          AI Assistant
        </span>

      </motion.a>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-400">
        © 2026 NovaStacks. All rights reserved.
      </footer>

    </main>
  );
}