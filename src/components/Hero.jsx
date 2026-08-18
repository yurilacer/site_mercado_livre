function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-text">
          <span className="hero-badge">
            <span className="pulse"></span> EM BREVE NO MERCADO LIVRE
          </span>
          <h1>
            Produtos Yuden
            <br />
            chegando com <em>toda confiança.</em>
          </h1>
          <p>
            Estamos preparando nosso catálogo para chegar até você com a solidez
            de uma empresa fundada por especialistas com décadas de experiência
            em vendas e tecnologia.
          </p>
          <div className="btn-row">
            <a href="#novidades" className="btn">Ver novidades →</a>
            <a href="#sobre" className="btn btn-outline">Conheça a Yuden</a>
          </div>
        </div>
        <div className="glass-card">
          <div className="row">
            <div className="avatar-dot">Y</div>
            <div>
              <h3 style={{ margin: 0 }}>Loja oficial Yuden</h3>
            </div>
          </div>
          <p>
            Catálogo em preparação para chegar ao Mercado Livre com toda a
            qualidade que você merece.
          </p>
          <div className="progress-track">
            <div className="progress-fill"></div>
          </div>
          <div className="progress-label">Preparação do catálogo: 72%</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
