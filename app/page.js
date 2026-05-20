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

  const internshipRef = useRef();
  const contactRef = useRef();

  const sendInternship = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l5rwsbg",
        "template_sx0a7ib",
        internshipRef.current,
        "gap0tKxtBmoMou3Fp"
      )
      .then(() => {
        alert("Application Submitted Successfully 🚀");
        internshipRef.current.reset();
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };

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
        alert("Message Sent Successfully 🚀");
        contactRef.current.reset();
      })
      .catch(() => {
        alert("Something went wrong");
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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a href="#" className="flex items-center gap-4">
            <Image
              src="/logo.jpg"
              alt="NOVASTACK Logo"
              width={54}
              height={54}
              className="rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.55)]"
            />

            <h1 className="text-2xl font-black tracking-wider">
              NOVASTACK
            </h1>
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

      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <div className="mb-10 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 text-sm font-bold text-cyan-200">
          AI Agents • Automation • Internships
        </div>

        <h1 className="max-w-5xl bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-[3.4rem] font-black leading-[1.1] text-transparent sm:text-7xl">
          Build The
          <br />
          Future With
          <br />
          AI Automation
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-300">
          NOVASTACK builds AI Agents, AI Automation systems,
          Chatbots, Voice Assistants and practical AI solutions.
        </p>

        <div className="mt-10 flex w-full max-w-xl flex-col gap-4">

          <a
            href="#contact"
            className="rounded-full bg-white px-8 py-5 text-lg font-black text-black"
          >
            Start Automation →
          </a>

          <a
            href="#internship"
            className="rounded-full border border-cyan-400/50 bg-black/40 px-8 py-5 text-lg font-black"
          >
            Apply For Internship →
          </a>

        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-12 text-center text-5xl font-black">
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
              whileHover={{ y: -10 }}
              key={title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <Icon size={42} className="mb-6 text-cyan-300" />

              <h3 className="text-2xl font-bold">
                {title}
              </h3>

              <p className="mt-4 text-gray-400">
                Premium AI automation solutions.
              </p>

            </motion.div>

          ))}

        </div>
      </section>

      <section id="internship" className="mx-auto max-w-6xl px-6 py-24">

        <div className="rounded-3xl border border-purple-500/20 bg-purple-500/10 p-8">

          <h2 className="text-5xl font-black">
            Internship Program
          </h2>

          <p className="mt-6 text-lg text-gray-300">
            Apply for NOVASTACK AI Internship Program.
          </p>

          <form
            ref={internshipRef}
            onSubmit={sendInternship}
            className="mt-8 grid gap-4"
          >

            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="rounded-xl bg-white/10 p-4 outline-none"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="rounded-xl bg-white/10 p-4 outline-none"
            />

            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone Number"
              className="rounded-xl bg-white/10 p-4 outline-none"
            />

            <input
              type="text"
              name="college"
              required
              placeholder="College Name"
              className="rounded-xl bg-white/10 p-4 outline-none"
            />

            <textarea
              name="skills"
              required
              placeholder="Skills"
              className="h-32 rounded-xl bg-white/10 p-4 outline-none"
            />

            <input
              type="url"
              name="resume_link"
              placeholder="Resume Google Drive Link"
              className="rounded-xl bg-white/10 p-4 outline-none"
            />

            <button
              type="submit"
              className="rounded-xl bg-white py-4 font-bold text-black"
            >
              Submit Application
            </button>

          </form>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">

        <h2 className="mb-10 text-center text-5xl font-black">
          Contact Us
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <form
            ref={contactRef}
            onSubmit={sendContact}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >

            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="mb-4 w-full rounded-xl bg-white/10 p-4 outline-none"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="mb-4 w-full rounded-xl bg-white/10 p-4 outline-none"
            />

            <textarea
              name="message"
              required
              placeholder="Message"
              className="mb-4 h-40 w-full rounded-xl bg-white/10 p-4 outline-none"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-white py-4 font-bold text-black"
            >
              Send Message
            </button>

          </form>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h3 className="text-3xl font-bold">
              Connect With Us
            </h3>

            <div className="mt-8 space-y-4 text-lg text-gray-300">
              <p>Email: hr.novastack@gmail.com</p>
              <p>Phone: +91 7479772672</p>
              <p>Instagram: @novastacks</p>
            </div>

          </div>

        </div>
      </section>

      <a
        href="https://api.whatsapp.com/send?phone=917479772672"
        target="_blank"
        className="fixed bottom-6 right-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-green-500"
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