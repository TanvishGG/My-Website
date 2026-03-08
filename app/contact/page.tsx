"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const socials = [
  { name: "LinkedIn", url: "https://linkedin.com/in/tanvish-reddy", icon: "/socials/linkedin.webp" },
  { name: "GitHub", url: "https://github.com/TanvishGG", icon: "/projects/github.webp", invert: true },
  { name: "Instagram", url: "https://instagram.com/tanvish00", icon: "/socials/instagram.webp" },
  { name: "Fiverr", url: "https://www.fiverr.com/tanvish00", icon: "/socials/fiverr.webp" },
  { name: "Discord", url: "https://discord.com/users/923835610815430697", icon: "/socials/discord.webp", invert: true },
  { name: "YouTube", url: "https://www.youtube.com/@TanvishArts", icon: "/socials/youtube.webp" }
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // client-side required check to avoid bad API calls
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setResponseMsg("Please fill out all fields before submitting.");
      return;
    }

    setStatus("loading");
    setResponseMsg("");

    try {
      // API expects URL-encoded form data rather than JSON
      const params = new URLSearchParams();
      params.append("name", formData.name);
      params.append("email", formData.email);
      params.append("message", formData.message);

      const response = await fetch("https://api.tanvish.co.in/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setResponseMsg("Message sent successfully!");
      } else {
        setStatus("error");
        setResponseMsg(data.error || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setResponseMsg("A network error occurred.");
    }
  };

  return (
    <div className="animate-fadeIn w-full flex flex-col min-h-screen pb-20">
      <section className="pt-8 md:pt-14 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-10 md:mb-14">
              <p className="text-xs font-medium tracking-widest text-zinc-500 uppercase mb-3">Connect</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">Let&apos;s Connect</h1>
            </div>

            <div className="mb-12">
              <h3 className="text-xs font-medium tracking-widest text-zinc-500 uppercase mb-4">Direct Email</h3>
              <a
                href="mailto:tanvish@tanvish.co.in"
                className="cursor-target inline-flex items-center gap-3 px-5 py-4 rounded-2xl border border-white/10 bg-[#0a0a0a]/40 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10 text-zinc-400 group-hover:bg-white group-hover:text-black transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">tanvish@tanvish.co.in</p>
                  <p className="text-zinc-500 text-xs mt-0.5">Expect a response within 24 hours</p>
                </div>
              </a>
            </div>

            <div>
              <h3 className="text-xs font-medium tracking-widest text-zinc-500 uppercase mb-4">Around the Web</h3>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-target flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/10 bg-[#0a0a0a]/40 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all"
                    title={social.name}
                  >
                    <div className={`relative w-4 h-4 ${social.invert ? "invert opacity-70" : "opacity-70"}`}>
                      <Image src={social.icon} alt={social.name} fill className="object-contain" />
                    </div>
                    <span className="text-sm font-medium text-zinc-400">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="absolute -inset-4 bg-white/[0.02] blur-3xl rounded-3xl -z-10" />

            <div className="p-6 md:p-8 rounded-3xl border border-white/10 bg-[#0a0a0a]/40 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_10px_40px_-15px_rgba(0,0,0,0.5)]">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="name" className="text-xs font-medium text-zinc-400">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="cursor-target w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all"
                      placeholder="Tanvish Reddy"
                    />
                  </div>
                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="email" className="text-xs font-medium text-zinc-400">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="cursor-target w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all"
                      placeholder="tanvish@tanvish.co.in"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="message" className="text-xs font-medium text-zinc-400">Your Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="cursor-target w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all resize-y"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="cursor-target w-full py-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>

                  {responseMsg && (
                    <p className={`text-center text-sm font-medium ${status === "success" ? "text-emerald-400" : "text-rose-400"}`}>
                      {responseMsg}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
