"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      {/* Rodapé animado com Framer Motion */}
      <motion.footer
        className="bg-[#584eac] text-white p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0 }}
      >
        {/* Conteúdo principal */}
        <main className="flex-grow bg-gray-900 text-white p-4">
          <div className="max-w-3xl mx-auto">
            {/* Títulos principais */}
            <h1 className="text-xl font-bold mb-4">Bem-vindo!</h1>
            <h1 className="text-xl font-bold mb-4">Sobre Mim</h1>

            {/* Parágrafos de introdução */}
            <p className="mb-2">
              Meu nome é Ana Julia Palmisciano de Almeida, tenho 18 anos e estou
              no primeiro semestre de Ciência da Computação na Universidade Presbiteriana Mackenzie. Atualmente sou
              trainee de tecnologia na EJEM - Empresa Júnior Engenharia Mackenzie.
            </p>
            <p>
              Estudei no Colégio Jardim São Paulo durante o fundamental e me formei no
              ensino médio no Colégio Salesiano Santa Teresinha.
            </p>
            <p>
              Na foto estão meus pais, minha cunhada e meu irmão. Eles sempre me orientam e apoiam meus projetos.
            </p>

            {/* Primeira imagem */}
            <div className="mt-4">
              <img
                src="/IMG-20250331-WA0138.jpg"
                alt="Foto representativa"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Texto adicional */}
            <div className="mt-4">
              <p>
                Gosto muito de esportes. Sou faixa roxa em kung fu e por 2 anos joguei futsal pelo time do Colégio Salesiano, onde eu desenvolvi
                habilidades como trabalho em equipe, disciplina e perseverança. Acredito que a
                colaboração é essencial para alcançar grandes resultados. Além disso, tenho grande interesse por cubos mágicos
                e sei resolver 15 tipos diferentes, o que me ajudou muito a desenvolver minha concentração
                e raciocínio lógico.
              </p>

              {/* Segunda imagem */}
              <div className="mt-4">
                <img
                  src="/20250406_193347.jpg"
                  alt="Foto representativa"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>

              {/* Email */}
              <div className="mt-6 text-center">
                <p className="text-lg">
                  Entre em contato:{" "}
                  <a
                    href="mailto:anajuliaalmeida.ana@gmail.com"
                    className="text-blue-500 hover:underline"
                  >
                    anajuliaalmeida.ana@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </main>
      </motion.footer>
    </div>
  );
}