export default function Ejem() {
    return (
      // Contêiner principal com fundo branco e centralização do conteúdo
      <div className="bg-white min-h-screen text-[#584eac] p-6 flex flex-col items-center justify-center">
        
        {/* Título principal */}
        <h1 className="text-2xl font-bold text-center mb-4">EJEM</h1>
        
        {/* Primeiro parágrafo de introdução */}
        <p className="text-center text-lg mb-4 max-w-3xl">
          Desde que fui aprovada no processo seletivo, venho aprendendo muito sobre a área de tecnologia, entendendo melhor como funciona uma empresa
          e conhecendo pessoas incríveis — tanto quem já está há mais tempo na empresa quanto quem, assim como eu, está começando agora. Além disso, venho desenvolvendo
          várias soft skills importantes, melhorando minha organização e percebendo o quanto tenho vontade de aprender e crescer cada vez mais.
        </p>
        
        {/* Segundo parágrafo de agradecimento */}
        <p className="text-center text-lg mb-4 max-w-3xl">
          Aproveito para deixar um agradecimento a toda equipe da EJEM pela dedicação e disposição em nos preparar para o futuro. Deixo um agradecimento especial a todos os trainees de Tec
          que andam em bando, ocupam todos os computadores da sede, sofreram com Django, passaram horas fazendo crachá para a feira NX e madrugaram fazendo cases. O trainee está sendo mais legal com vocês!
        </p>
        
        {/* Seção da foto */}
        <div className="mt-6 text-center">
          {/* Imagem representativa */}
          <img
            src="\20250328_183200.jpg" // Caminho da imagem
            alt="Foto representativa"
            className="w-64 h-auto rounded-lg shadow-md" // Estilo da imagem
          />
        </div>
      </div>
    );
  }