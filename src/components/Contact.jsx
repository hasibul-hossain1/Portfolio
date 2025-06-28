// src/components/Contact.jsx
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import toast from "react-hot-toast";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    const form = e.target;

    toast.promise(
      emailjs.sendForm(
        import.meta.env.VITE_serviceID,
        import.meta.env.VITE_contactUsTemplateID,
        form,
        import.meta.env.VITE_publicKey
      ),
      {
        loading: "Message sending...",
        success: "Message sent successfully!",
        error: "Failed to send message.",
      }
    );
    setIsSending(false);
    form.reset();
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto text-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        Get In Touch
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Left side: Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 flex flex-col justify-center space-y-8 shadow-lg"
        >
          <div className="flex gap-4">
            <MdLocationOn size={28} className="text-indigo-400" />
            <div>
              <h3 className="text-lg font-semibold">Location</h3>
              <a
                href="https://www.google.com/maps/@23.1651573,89.1935026,13z?authuser=0&entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-primary hover:underline text-gray-300"
              >
                Jashore, Khulna, Bangladesh
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <MdPhone size={28} className="text-indigo-400" />
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <a
                href="tel:+8801701084479"
                className="hover:text-primary hover:underline text-gray-300"
              >
                🇧🇩 +88 01701084479
              </a>
            </div>
          </div>

          <div className="flex  gap-4">
            <MdEmail size={28} className="text-indigo-400" />
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <a
                href="mailto:hasibul.hossain.dev@gmail.com"
                className="hover:text-primary hover:underline text-gray-300"
              >
                hasibul.hossain.dev@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right side: Form Card */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex-1 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 flex flex-col gap-6 shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-white"
          />

          <textarea
            name="message"
            rows="5"
            minLength={25}
            placeholder="Your Message"
            required
            className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-white resize-none"
          />

          <button
            type="submit"
            disabled={isSending}
            className={`w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold ${
              isSending ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
