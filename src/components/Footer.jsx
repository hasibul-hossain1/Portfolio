// src/components/Footer.jsx
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa";

const socials = [
  { name: "Facebook", icon: <FaFacebookF size={20} />, href: "#" },
  { name: "LinkedIn", icon: <FaLinkedinIn size={20} />, href: "#" },
  { name: "WhatsApp", icon: <FaWhatsapp size={20} />, href: "#" },
  { name: "GitHub", icon: <FaGithub size={20} />, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-transparent py-6 text-white border-t border-white/10">
      <div className="flex justify-center gap-10 mb-4">
        {socials.map(({ name, icon, href }) => (
          <a
            key={name}
            href={href}
            aria-label={name}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-indigo-400 transition font-medium"
          >
            {icon}
            {/* Hide name on small screens, show from 'sm' breakpoint */}
            <span className="hidden sm:inline">{name}</span>
          </a>
        ))}
      </div>

      <p className="text-center text-gray-400 text-sm select-none">
        &copy; {new Date().getFullYear()} Hasibul Hossain. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
