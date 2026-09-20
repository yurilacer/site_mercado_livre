function Terms() {
  return (
    <main className="legal-page">
      <div className="container">
        <a className="legal-back" href="/">← Voltar para o site</a>
        <h1>Termos de Serviço</h1>
        <p className="legal-updated">Última atualização: 19 de setembro de 2026</p>

        <p>
          Estes Termos de Serviço regulam o uso do site institucional{' '}
          <strong>www.yuden.com.br</strong> e do serviço de agente conversacional
          oferecido pela <strong>Yuden</strong> (CNPJ 68.434.565/0001-10), que
          conecta contas de Mercado Livre e Bling de clientes ao WhatsApp para
          responder perguntas sobre vendas, faturamento e taxas.
        </p>

        <h2>1. Aceitação dos termos</h2>
        <p>
          Ao contratar o serviço, autorizar a integração com sua conta de Mercado
          Livre/Bling, ou cadastrar um número de WhatsApp para conversar com o
          agente, você concorda com estes Termos de Serviço e com a nossa Política
          de Privacidade.
        </p>

        <h2>2. Descrição do serviço</h2>
        <p>
          A Yuden oferece um agente de inteligência artificial que lê, de forma
          automatizada e mediante autorização do cliente, os dados de vendas e
          faturamento de sua conta no Mercado Livre (e, futuramente, no Bling) e
          responde perguntas de negócio sobre esses dados diretamente pelo WhatsApp
          do responsável autorizado.
        </p>

        <h2>3. Cadastro e autorização</h2>
        <p>
          O cliente é responsável por autorizar o acesso à sua própria conta de
          marketplace por meio do fluxo oficial de login (OAuth) do Mercado
          Livre/Bling, e por manter essa autorização e o número de WhatsApp
          cadastrado atualizados. A Yuden não solicita nem armazena senhas de
          acesso às contas do cliente — apenas o token de autorização emitido pelo
          próprio marketplace.
        </p>

        <h2>4. Uso permitido</h2>
        <p>
          O serviço deve ser usado apenas para consultar dados do próprio negócio do
          cliente. É proibido tentar acessar dados de outra conta, usar o serviço
          para fins ilícitos, ou tentar contornar os limites técnicos e de
          segurança do agente.
        </p>

        <h2>5. Titularidade e confidencialidade dos dados</h2>
        <p>
          Os dados de vendas, faturamento e demais informações de negócio
          consultados pelo agente pertencem ao cliente. A Yuden atua como operadora
          desses dados, tratando-os exclusivamente para prestar o serviço
          contratado, nunca os utilizando para benefício de terceiros.
        </p>

        <h2>6. Disponibilidade do serviço</h2>
        <p>
          O serviço depende de plataformas de terceiros (Meta/WhatsApp Business
          Platform, Mercado Livre, Bling, Google Cloud Platform). Ainda que
          busquemos a maior disponibilidade possível, não garantimos funcionamento
          ininterrupto caso algum desses provedores apresente instabilidade.
        </p>

        <h2>7. Preços e pagamento</h2>
        <p>
          As condições comerciais (plano contratado, valores e forma de pagamento)
          são acordadas diretamente com cada cliente no momento da contratação e
          podem ser consultadas a qualquer momento junto à Yuden.
        </p>

        <h2>8. Cancelamento</h2>
        <p>
          O cliente pode solicitar o cancelamento do serviço a qualquer momento,
          o que inclui a revogação da autorização de acesso à sua conta de
          marketplace e a exclusão do número de WhatsApp cadastrado, mediante
          solicitação para{' '}
          <a href="mailto:vendas@yuden.com.br">vendas@yuden.com.br</a>.
        </p>

        <h2>9. Limitação de responsabilidade</h2>
        <p>
          A Yuden não se responsabiliza por imprecisões nos dados de origem
          fornecidos pelas APIs do Mercado Livre, Bling ou WhatsApp, nem por
          decisões de negócio tomadas com base nas respostas do agente. As
          informações apresentadas têm caráter informativo e devem ser conferidas
          pelo cliente sempre que usadas para decisões relevantes.
        </p>

        <h2>10. Alterações destes termos</h2>
        <p>
          Podemos atualizar estes termos periodicamente. A data da última
          atualização estará sempre indicada no topo desta página.
        </p>

        <h2>11. Legislação aplicável</h2>
        <p>
          Estes termos são regidos pelas leis da República Federativa do Brasil,
          ficando eleito o foro do domicílio da Yuden para dirimir eventuais
          controvérsias.
        </p>

        <h2>12. Contato</h2>
        <p>
          Dúvidas sobre estes termos podem ser enviadas para{' '}
          <a href="mailto:vendas@yuden.com.br">vendas@yuden.com.br</a>.
        </p>
      </div>
    </main>
  )
}

export default Terms
