function Header() {
  return (
    <header className="main-header">
      <div className="container header-inner">
        <div className="logo"><span className="dot"></span>yuden</div>
        <div className="search-bar">
          <input type="text" placeholder="Buscar produtos, marcas e muito mais..." />
          <button aria-label="Buscar">🔍</button>
        </div>
      </div>
    </header>
  )
}

export default Header
