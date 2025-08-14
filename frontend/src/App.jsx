import React, { useRef } from 'react';
import FileUpload from './components/FileUpload';
import ChartDisplay from './components/ChartDisplay';
import logo from './assets/logo-sergipetec.png'; // coloque seu logo aqui

function App() {
  const fileUploadRef = useRef(null);

  const handleAnalyzeClick = () => {
    if (fileUploadRef.current) {
      fileUploadRef.current.clickFileInput(); // chama método interno do FileUpload
    }
  };

  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="SergipeTec" />
          <span>
            <strong>SergipeTec</strong> <span style={{ color: '#00A859' }}>.IA</span>
          </span>
        </div>
        <nav>
          <a href="#">Lar</a>
          <a href="#">Sobre Nós</a>
          <a href="#">Contato</a>
        </nav>
        <button className="cta-btn" onClick={handleAnalyzeClick}>
          Analisar Documento
        </button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>
          Transforme Dados em <span>Decisões Inteligentes</span>
        </h1>
        <p>
          Nossa plataforma de IA analisa seus documentos PDF, CSV e XLS para extrair
          insights relevantes e gerar relatórios completos em segundos.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={handleAnalyzeClick}>
            Analisar documento →
          </button>
          <button className="btn-secondary">Saiba Mais</button>
        </div>
      </section>

      {/* Área para upload e gráficos */}
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <FileUpload
          ref={fileUploadRef}
          onDataReady={(data) => console.log(data)}
        />
        {/* <ChartDisplay data={chartData} /> pode habilitar depois */}
      </main>

      {/* Rodapé */}
      <footer>
        © {new Date().getFullYear()} SergipeTec - Todos os direitos reservados.
      </footer>
    </>
  );
}

export default App;
