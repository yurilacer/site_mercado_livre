const stats = [
  { num: '25+', label: 'Anos de experiência em vendas' },
  { num: '25+', label: 'Anos de experiência em tecnologia' },
  { num: '100%', label: 'Foco em qualidade e confiança' },
  { num: '2026', label: 'Chegando ao Mercado Livre' },
]

function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="container trust-grid">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="num">{stat.num}</div>
            <div className="label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrustStrip
