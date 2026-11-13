import { motion } from "framer-motion";
import { Phone, Mail, ArrowUpRight } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF, CONTACT_PHONE, CONTACT_PHONE_HREF } from "../config/contact";

const ease = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  return (
    <section id="contact" className="bg-accent-tint py-24 sm:py-32">
      <div className="container-x">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease }}
          className="max-w-md text-3xl leading-tight sm:text-4xl"
        >
          Let's talk about your next home
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-4 max-w-md text-stone"
        >
          Reach us directly — no forms, no waiting on a callback queue.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 sm:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-col justify-between border border-line bg-surface p-8"
          >
            <div>
              <Phone size={26} strokeWidth={1.5} className="text-accent" aria-hidden="true" />
              <h3 className="mt-5 font-display text-xl text-ink">Call Us</h3>
              <p className="mt-2 text-stone">{CONTACT_PHONE}</p>
            </div>
            <a href={CONTACT_PHONE_HREF} className="btn-primary mt-8 self-start">
              Call Now
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="flex flex-col justify-between border border-line bg-surface p-8"
          >
            <div>
              <Mail size={26} strokeWidth={1.5} className="text-accent" aria-hidden="true" />
              <h3 className="mt-5 font-display text-xl text-ink">Email Us</h3>
              <p className="mt-2 break-all text-stone">{CONTACT_EMAIL}</p>
            </div>
            <a href={CONTACT_EMAIL_HREF} className="btn-primary mt-8 self-start">
              Send Email
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
