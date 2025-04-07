"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  return (
    // Navbar animada com Framer Motion
    <motion.nav
      className="bg-[#584eac] text-white p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.0 }}
    >
      {/* Seção do perfil */}
      <div className="flex items-center space-x-4">
        {/* Foto de perfil */}
        <div className="w-15 h-15 rounded-full overflow-hidden">
          <img
            src="foto perfil.jpg" // Caminho da foto de perfil
            alt="Foto de perfil"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Nome do usuário */}
        <span className="text-lg font-semibold">Ana Julia Almeida</span>
      </div>

      {/* Links de navegação */}
      <div className="flex space-x-6 mt-4">
        {/* Botão Sobre Mim */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.9, rotate: -5 }}
        >
          <Link href="/" className="hover:underline">
            Sobre Mim
          </Link>
        </motion.div>

        {/* Botão Projetos */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.9, rotate: -5 }}
        >
          <Link href="/projetos" className="hover:underline">
            Projetos
          </Link>
        </motion.div>

        {/* Botão EJEM */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.9, rotate: -5 }}
        >
          <Link href="/ejem" className="hover:underline">
            EJEM
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;