"use client";
import React from "react";
import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    // Rodapé animado com Framer Motion
    <motion.footer
      className="bg-[#584eac] text-white p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.0 }}
    >
      {/* Contêiner principal do rodapé */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Texto de direitos reservados com animação */}
        <motion.p
          className="text-sm"
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.9, rotate: -5 }}
        >
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </motion.p>

        {/* Navegação com links animados */}
        <nav className="flex space-x-4 my-4 md:my-0">
          {/* Link para a página "Sobre" */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9, rotate: -5 }}
          >
            <Link href="/sobre" className="hover:underline">
              Sobre
            </Link>
          </motion.div>

          {/* Link para a página "Contato" */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9, rotate: -5 }}
          >
            <Link href="/contato" className="hover:underline">
              Contato
            </Link>
          </motion.div>

          {/* Link para a página "Privacidade" */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9, rotate: -5 }}
          >
            <Link href="/privacidade" className="hover:underline">
              Privacidade
            </Link>
          </motion.div>
        </nav>

        {/* Ícones de redes sociais com animação */}
        <div className="flex space-x-4">
          {/* Ícone do Twitter */}
          <motion.a
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="text-xl hover:text-blue-400" />
          </motion.a>

          {/* Ícone do GitHub */}
          <motion.a
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            href="https://github.com/anajulia2201"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl hover:text-gray-400" />
          </motion.a>

          {/* Ícone do LinkedIn */}
          <motion.a
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            href="https://www.linkedin.com/in/ana-julia-palmisciano-de-almeida-990042351/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl hover:text-blue-600" />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;