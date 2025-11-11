import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, User } from "lucide-react";

const projectQuoteMailto =
  "mailto:jalil.hijazy@gmail.com?subject=Project%20Quote%20Request&body=Hi%20Abdul%20Jaleel,%0A%0AI'd%20love%20to%20discuss%20a%20new%20project.%20Here's%20a%20quick%20overview:%0A%0AProject%20Overview:%0ABudget%20Range:%0ATimeline:%0A%0AThanks!";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative mt-32 py-12 bg-gradient-to-br from-indigo-950 to-gray-950 text-gray-300 text-center"
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-indigo-400">Let's Collaborate</h2>
        <p className="text-gray-400 mb-6">
          We create campaigns that combine emotion, storytelling, and analytics
          for measurable impact.
        </p>
        <a
          href="#contact-info"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:shadow-indigo-400/50 transition-all hover:scale-105"
        >
          Get in Touch
        </a>

        <motion.div
          id="contact-info"
          className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8 text-left shadow-lg backdrop-blur"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-300 mb-4">
            Contact Abdul Jaleel
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-start gap-3">
              <User className="mt-1 h-5 w-5 text-indigo-300" />
              <div>
                <p className="text-xs uppercase text-gray-400">Name</p>
                <p className="text-base font-medium text-white">Abdul Jaleel</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 text-indigo-300" />
              <div>
                <p className="text-xs uppercase text-gray-400">Call</p>
                <a
                  href="tel:+923390555510"
                  className="text-base font-medium text-white hover:text-indigo-300"
                >
                  +92 339 0555510
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 text-indigo-300" />
              <div>
                <p className="text-xs uppercase text-gray-400">Email</p>
                <a
                  href="mailto:jalil.hijazy@gmail.com"
                  className="text-base font-medium text-white hover:text-indigo-300"
                >
                  jalil.hijazy@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center">
            <a
              href="tel:+923390555510"
              className="flex-1 rounded-full border border-indigo-400 px-6 py-3 text-center font-semibold text-indigo-200 transition hover:bg-indigo-500/10"
            >
              Call Abdul Jaleel
            </a>
            <a
              href={projectQuoteMailto}
              className="flex-1 rounded-full bg-indigo-600 px-6 py-3 text-center font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-indigo-500/40"
            >
              Request a Project Quote
            </a>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            The quote request email opens with a ready-to-fill template so you can
            share project details quickly.
          </p>
        </motion.div>

        <div className="mt-10 text-sm text-gray-500">
          {"\u00A9"} {new Date().getFullYear()} Demo Marketing Studio. All rights
          reserved.
        </div>
      </motion.div>
    </footer>
  );
}
