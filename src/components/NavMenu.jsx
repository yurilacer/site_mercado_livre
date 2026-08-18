const links = [
  { label: 'Categorias', href: '#novidades' },
  { label: 'Ofertas do dia', href: '#novidades' },
  { label: 'Mais vendidos', href: '#novidades' },
  { label: 'Vendas', href: '#sobre' },
  { label: 'Tecnologia', href: '#sobre' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Ajuda', href: '#contato' },
]

function NavMenu() {
  return (
    <nav className="menu">
      <div className="container">
        <ul>
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavMenu
