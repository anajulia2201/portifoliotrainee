import React from "react";
import Container from "@/components/container";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow flex items-center justify-center">
        <Container altText="Cubo mágico" className="max-w-md">
          <p>Este é o conteúdo dentro do container.</p>
        </Container>
      </main>
    </div>
  );
}



