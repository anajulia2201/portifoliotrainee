export default function Projetos() {
  return (
    // Contêiner principal com fundo cinza claro e preenchimento
    <div className="bg-gray-100 min-h-screen p-6">
      
      {/* Título principal */}
      <h1 className="text-2xl font-bold text-center mb-4">Meus Projetos</h1>
      
      {/* Descrição introdutória */}
      <p className="text-center">
        Aqui estão os cases que eu fiz dentro do processo de trainee da EJEM
      </p>
      
      {/* Grid para exibir os projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        
        {/* Card do Case 1 */}
        <div className="p-4 bg-white shadow rounded-lg">
          {/* Título do Case 1 */}
          <h2 className="text-lg font-bold">Case 1</h2>
          {/* Descrição do Case 1 */}
          <p>Desenvolver um aplicativo utilizando FlutterFlow e Firebase</p>
          {/* Link externo para o Case 1 */}
          <a
            href="https://app.flutterflow.io/debug/UBsu8AdUqpcihnglg6OR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2 inline-block"
          >
            Acesse aqui
          </a>
        </div>
        
        {/* Card do Case 2 */}
        <div className="p-4 bg-white shadow rounded-lg">
          {/* Título do Case 2 */}
          <h2 className="text-lg font-bold">Case 2</h2>
          {/* Descrição do Case 2 */}
          <p>Criar um sistema de armazenamento em Django</p>
          {/* Link externo para o Case 2 */}
          <a
            href="https://github.com/VitorHashimoto21/Case02"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2 inline-block"
          >
            Acesse aqui
          </a>
        </div>
      </div>
    </div>
  );
}