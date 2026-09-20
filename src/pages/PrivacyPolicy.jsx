function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <div className="container">
        <a className="legal-back" href="/">← Voltar para o site</a>
        <h1>Política de Privacidade</h1>
        <p className="legal-updated">Última atualização: 19 de setembro de 2026</p>

        <p>
          Esta Política de Privacidade descreve como a <strong>Yuden</strong> (CNPJ
          68.434.565/0001-10) coleta, usa, armazena e protege dados pessoais no site
          institucional <strong>www.yuden.com.br</strong> e no serviço de agente
          conversacional que conecta contas de Mercado Livre e Bling de nossos
          clientes ao WhatsApp.
        </p>

        <h2>1. Quem somos</h2>
        <p>
          A Yuden é uma empresa que oferece, além deste site institucional, um
          produto de análise de dados para pequenas e médias empresas: um agente de
          inteligência artificial que responde perguntas sobre vendas, faturamento e
          taxas de marketplaces (Mercado Livre e, futuramente, Bling) diretamente
          pelo WhatsApp do responsável pela conta.
        </p>

        <h2>2. Quais dados coletamos</h2>
        <p><strong>No site institucional:</strong> nome, e-mail e mensagem, caso você
          entre em contato conosco voluntariamente (por exemplo, pelo e-mail
          vendas@yuden.com.br). Não usamos cookies de rastreamento ou analytics de
          terceiros neste site.</p>
        <p><strong>No serviço de agente conversacional:</strong> ao contratar o
          serviço, o cliente (dono do negócio) autoriza expressamente, por meio de
          login OAuth oficial do Mercado Livre e/ou do Bling, o acesso aos próprios
          dados de:</p>
        <ul className="legal-list">
          <li>Identificação da conta vendedora (nome da loja, identificador do vendedor);</li>
          <li>Pedidos e vendas (data, valor, status, itens vendidos);</li>
          <li>Faturamento e taxas cobradas pelo marketplace (comissões, tarifas de anúncio, frete);</li>
          <li>Número de WhatsApp autorizado a conversar com o agente e o conteúdo das mensagens trocadas com ele.</li>
        </ul>
        <p>
          Não coletamos dados de clientes finais do nosso cliente (compradores),
          nem de contas de Mercado Livre/Bling que não tenham sido explicitamente
          conectadas por seu titular.
        </p>

        <h2>3. Como usamos os dados</h2>
        <p>
          Usamos os dados exclusivamente para operar o serviço contratado: processar
          as informações do próprio negócio do cliente e responder, pelo WhatsApp,
          perguntas feitas pelo número autorizado daquele cliente. Cada cliente só
          tem acesso aos seus próprios dados — nunca aos de outro cliente da Yuden.
        </p>

        <h2>4. Base legal (LGPD)</h2>
        <p>
          Tratamos os dados com base na execução de contrato (prestação do serviço
          contratado), no consentimento do titular (autorização OAuth do
          marketplace e cadastro do número de WhatsApp) e no legítimo interesse em
          manter a segurança e o funcionamento do serviço.
        </p>

        <h2>5. Compartilhamento com terceiros</h2>
        <p>Não vendemos nem compartilhamos dados pessoais com terceiros para fins de
          publicidade. Os dados trafegam pelos seguintes provedores, estritamente
          para operar o serviço:</p>
        <ul className="legal-list">
          <li><strong>Google Cloud Platform</strong> — armazenamento e processamento (BigQuery, Firestore, Secret Manager), com isolamento físico por cliente;</li>
          <li><strong>Meta / WhatsApp Business Platform</strong> — envio e recebimento das mensagens do agente;</li>
          <li><strong>Mercado Livre e Bling</strong> — origem dos dados de vendas e faturamento, mediante autorização do próprio cliente.</li>
        </ul>

        <h2>6. Armazenamento, retenção e segurança</h2>
        <p>
          Os dados de cada cliente ficam isolados fisicamente dos demais. Credenciais
          de acesso (tokens de API) são armazenadas de forma criptografada em
          cofre de segredos com acesso restrito por identidade de serviço. O
          histórico de conversas do agente (pergunta, resposta e metadados) é
          mantido por até <strong>180 dias</strong>, após os quais é
          automaticamente descartado.
        </p>

        <h2>7. Seus direitos como titular de dados</h2>
        <p>
          Nos termos da Lei Geral de Proteção de Dados (LGPD), você pode solicitar a
          qualquer momento: confirmação da existência de tratamento, acesso,
          correção, exclusão, portabilidade dos seus dados, e a revogação de
          autorizações concedidas (por exemplo, desconectando a integração com o
          Mercado Livre/Bling ou solicitando o descadastramento do número de
          WhatsApp). Basta enviar um e-mail para{' '}
          <a href="mailto:vendas@yuden.com.br">vendas@yuden.com.br</a>.
        </p>

        <h2>8. Alterações desta política</h2>
        <p>
          Podemos atualizar esta política periodicamente. A data da última
          atualização estará sempre indicada no topo desta página.
        </p>

        <h2>9. Contato</h2>
        <p>
          Dúvidas sobre esta política ou sobre o tratamento dos seus dados podem
          ser enviadas para{' '}
          <a href="mailto:vendas@yuden.com.br">vendas@yuden.com.br</a>.
        </p>
      </div>
    </main>
  )
}

export default PrivacyPolicy
