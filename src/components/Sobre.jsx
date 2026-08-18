const socios = [
  {
    id: 'S1',
    role: 'Área de Vendas',
    text: 'em vendas, relacionamento com clientes e estratégias comerciais, garantindo que cada produto Yuden chegue até você com o melhor atendimento.',
  },
  {
    id: 'S2',
    role: 'Área de Tecnologia',
    text: 'em tecnologia, garantindo processos modernos, seguros e eficientes por trás de cada operação da Yuden.',
  },
]

function Sobre() {
  return (
    <section className="about" id="sobre">
      <div className="container">
        <span className="eyebrow">SOBRE NÓS</span>
        <h2 className="section-title">Duas décadas de experiência, um só propósito</h2>
        <p className="section-sub">
          A Yuden nasce da união de duas trajetórias sólidas: mais de duas
          décadas de experiência em vendas e em tecnologia, unidas para
          oferecer produtos de qualidade com a confiança de quem entende do
          negócio.
        </p>

        <div className="socios">
          {socios.map((socio) => (
            <div className="socio-card" key={socio.id}>
              <div className="socio-avatar">{socio.id}</div>
              <div>
                <h3>Sócio-fundador</h3>
                <span className="socio-role">{socio.role}</span>
                <p>
                  <span className="stat-highlight">25 anos de experiência</span> {socio.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sobre
