// src/components/Contact.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate sending message
    setTimeout(() => {
      alert("Message sent! Thank you.");
      setFormData({ name: "", email: "", message: "" });
      setIsSending(false);
    }, 1500);
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
              <p className="text-gray-300">Jashore, Khulna, Bangladesh</p>
            </div>
          </div>

          <div className="flex gap-4">
            <MdPhone size={28} className="text-indigo-400" />
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-300">+88 01701084479</p>
            </div>
          </div>

          <div className="flex  gap-4">
            <MdEmail size={28} className="text-indigo-400" />
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-300">shanto22e@gmail.com</p>
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
            value={formData.name}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-white"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
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
