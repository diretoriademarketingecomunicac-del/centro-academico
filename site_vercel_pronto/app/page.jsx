'use client';
import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(false);

  const theme = dark
    ? { background:"#1E1A17", color:"#eee" }
    : { background:"#F5F1ED", color:"#222" };

  const diretorias = [
    "Financeiro",
    "Marketing e Comunicação Social",
    "Cultura e Eventos",
    "Políticas Educacionais",
    "Esporte e Saúde",
    "Mulheres",
    "Políticas Afirmativas",
    "Assistência Estudantil"
  ];

  return (
    <main style={{minHeight:"100vh",...theme,padding:"40px"}}>
      <h1 style={{color:"#6B4F3B"}}>Centro Acadêmico Terra Livre</h1>
      <p>Site pronto para publicação no Vercel.</p>

      <button
        onClick={()=>setDark(!dark)}
        style={{
          padding:"10px 20px",
          background:"#8B6B52",
          color:"#fff",
          border:"none",
          borderRadius:"8px",
          cursor:"pointer"
        }}
      >
        Alternar modo escuro
      </button>

      <h2 style={{marginTop:"40px",color:"#6B4F3B"}}>Diretorias</h2>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
        gap:"20px"
      }}>
        {diretorias.map((d)=>(
          <div key={d} style={{
            padding:"20px",
            background: dark ? "#2A2421":"#fff",
            borderRadius:"16px",
            boxShadow:"0 4px 10px rgba(0,0,0,0.08)"
          }}>
            <strong>{d}</strong>
            <p>Contato direto com esta diretoria.</p>
            <a href={`mailto:centroacademico@email.com?subject=${d}`}>
              Enviar email
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
