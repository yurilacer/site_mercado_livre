const placeholders = [1, 2, 3, 4]

function Novidades() {
  return (
    <section id="novidades">
      <div className="container">
        <span className="eyebrow">NOVIDADES</span>
        <h2 className="section-title">Nosso catálogo está a caminho</h2>
        <p className="section-sub">
          Estamos com tudo pronto nos bastidores. Em breve você poderá conferir
          os produtos Yuden diretamente no Mercado Livre.
        </p>

        <div className="em-breve">
          <div className="icon-circle">🕒</div>
          <div>
            <h3>Loja oficial Yuden no Mercado Livre — em breve</h3>
            <p>Estamos finalizando o catálogo de produtos. Volte em breve para conferir as novidades!</p>
          </div>
        </div>

        <div className="grid-products">
          {placeholders.map((item) => (
            <div className="card-product" key={item}>
              <div className="thumb">Em breve</div>
              <h4>Produto em preparação</h4>
              <span className="tag-soon">Disponível em breve</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Novidades
