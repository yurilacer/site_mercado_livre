function Footer() {
  return (
    <footer id="contato">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo"><span className="dot"></span>yuden</div>
            <p>
              Empresa fundada por especialistas com 25 anos de experiência em
              vendas e tecnologia. Em breve no Mercado Livre.
            </p>
          </div>
          <div>
            <h4>Yuden</h4>
            <ul>
              <li><a href="#sobre">Sobre nós</a></li>
              <li><a href="#novidades">Novidades</a></li>
              <li><a href="#">Trabalhe conosco</a></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacidade.html">Política de Privacidade</a></li>
              <li><a href="/termos.html">Termos de Serviço</a></li>
            </ul>
          </div>
          <div>
            <h4>Contato</h4>
            <ul>
              <li><a href="mailto:vendas@yuden.com.br">vendas@yuden.com.br</a></li>
              <li>Seg. a Sex., 9h às 18h</li>
              <li><a href="#">Mercado Livre (em breve)</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 Yuden. Todos os direitos reservados. Site em construção — em breve novidades!
        </div>
      </div>
    </footer>
  )
}

export default Footer
