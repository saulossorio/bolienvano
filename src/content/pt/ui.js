// Every interface text and short page text in Brazilian Portuguese (same keys as en/ui.js).
export default {
  lang: 'pt',
  locale: 'pt-BR',   // used to write dates ("4 de agosto de 2022")

  site: {
    name: 'Andy Ossorio',
    description: 'Andy Ossorio é um artista contemporâneo boliviano radicado em Curitiba, Brasil. Trabalha principalmente com pintura, em técnicas como óleo, nanquim e aquarela.',
  },

  nav: {
    about: 'Sobre',
    gallery: 'Obras',
    exhibitions: 'Exposições',
    contact: 'Contato',
    privacy: 'Privacidade',
    menu: 'Menu',
    close: 'Fechar menu',
    theme: 'Modo escuro',
    language: 'Idioma',
  },

  // Techniques used in src/data/artworks.js
  media: {
    watercolor: 'Aquarela sobre papel',
    ink: 'Nanquim sobre papel',
    oilCanvas: 'Óleo sobre tela',
    oilPanel: 'Óleo sobre madeira',
  },

  artwork: {
    price: 'US$',
    available: 'Consultar sobre esta obra',
    ask: 'Perguntar sobre esta obra',
    seeAvailable: 'Obras disponíveis',
    year: 'Ano',
    technique: 'Técnica',
    size: 'Medidas',
    status: { available: 'Disponível', ask: 'Preço sob consulta', sold: 'Vendida' },
    detail: 'detalhe',
    view: 'vista',
    previous: 'Obra anterior',
    next: 'Próxima obra',
    back: 'Todas as obras de',
  },

  // Home page
  home: {
    allWorks: 'Todas as obras',
  },


  gallery: {
    title: 'Obras',
    jump: 'Ir para o ano',
    works: 'obras',
    availableOnly: 'Só disponíveis',
    noneAvailable: 'No momento não há obras disponíveis.',
    description: 'Galeria de obras do artista boliviano Andy Ossorio',
    yearCover: 'Obras de',
  },

  exhibitions: {
    title: 'Exposições',
    description: 'Exposições individuais do artista boliviano Andy Ossorio',
    photo: 'Foto',
    read: 'Ler mais',
    works: 'Obras',
    views: 'Vistas da exposição',
    nftAlso: 'Também exposta, como NFT',
    exhibitedIn: 'Exposta em',
  },

  about: {
    title: 'Sobre',
    // Biography: third person, facts only
    paragraphs: [
      'Andy Ossorio é um pintor boliviano que vive e trabalha em Curitiba, Brasil. Sua obra se concentra na figura humana e na vida interior do indivíduo: momentos íntimos e silenciosos em que um sentimento se torna visível.',
      'Trabalha principalmente com óleo e nanquim, e também com aquarela. Sua linguagem transita entre a figuração, o expressionismo e o minimalismo, e se mantém aberta à experimentação.',
      'Sua obra já foi exposta na Bolívia e no Brasil, incluindo uma exposição individual no Museu de Arte Contemporânea de Santa Cruz de la Sierra em 2022.',
    ],
    cv: 'CV',
    solo: 'Exposições individuais',
    projects: 'Projetos',
  },

  contact: {
    title: 'Contato',
    description: 'Escreva para o artista Andy Ossorio',
    intro: 'Para obras, encomendas, exposições ou imprensa. Costumo responder em poucos dias.',
    name: 'Nome',
    email: 'E-mail',
    topic: 'Assunto',
    // Reasons to write, sent as the email subject. 'buy' is picked when coming from an artwork.
    topics: { buy: 'Comprar uma obra', commission: 'Encomenda', exhibition: 'Exposição', press: 'Imprensa', other: 'Outro' },
    work: 'Sobre',
    message: 'Mensagem',
    required: 'obrigatório',
    privacy: 'Seus dados são usados apenas para responder a você.',
    submit: 'Enviar mensagem',
    sending: 'Enviando…',
    done: 'Obrigado. Sua mensagem foi enviada e responderei em breve. Uma confirmação chegará ao seu e-mail.',
    fail: 'Não foi possível enviar a mensagem. Tente novamente em instantes.',
    noscript: 'Para enviar, o navegador precisa estar com o JavaScript ativado.',
  },

  // Cookie notice: analytics only run after the visitor agrees
  cookies: {
    label: 'Cookies',
    text: 'Este site pode usar cookies para contar visitas? Nada mais é rastreado.',
    more: 'Detalhes',
    accept: 'Aceitar',
    decline: 'Recusar',
  },

  // Privacy page: what the site keeps about visitors, in plain words
  privacy: {
    title: 'Privacidade',
    description: 'Como bolienvano.com usa cookies e as mensagens enviadas pelo formulário de contato.',
    sections: [
      {
        title: 'Cookies',
        paragraphs: [
          'Somente se você aceitar, este site usa o Google Analytics para contar visitas e ver quais páginas são lidas. Os cookies duram até dois anos. O Google recebe sua visita sem seu nome nem seu e-mail. Não há publicidade e nada é vendido nem compartilhado.',
          'Se você recusar, nenhum cookie de análise é gravado e os gravados antes são apagados.',
        ],
        change: true,
      },
      {
        title: 'Guardado no seu navegador',
        paragraphs: [
          'O site lembra, apenas no seu navegador, sua escolha de cookies, seu idioma, se você escolheu o modo claro ou escuro e qual obra a página inicial mostrou por último. Nada disso é enviado a lugar nenhum.',
        ],
      },
      {
        title: 'Formulário de contato',
        paragraphs: [
          'Seu nome, seu e-mail e sua mensagem são enviados por e-mail ao artista e usados apenas para responder a você; seu e-mail também recebe uma confirmação automática. Não são adicionados a nenhuma lista nem compartilhados.',
        ],
      },
      {
        title: 'Seus direitos',
        paragraphs: [
          'Pela LGPD e pelo RGPD europeu, você pode perguntar o que é guardado sobre você, ou pedir que seja apagado, escrevendo pelo formulário de contato.',
        ],
      },
    ],
    change: 'Mudar a escolha de cookies',
  },

  // Certificate of authenticity, one per artwork (certificate/<slug>.html). {title} is
  // filled in by the page.
  certificate: {
    title: 'Certificado de autenticidade',
    number: 'Certificado n.º',
    artist: 'Artista',
    work: 'Título',
    year: 'Ano',
    technique: 'Técnica',
    size: 'Medidas',
    edition: 'Edição',
    unique: 'Original único, 1/1',
    statement: 'Certifico que {title} é uma obra original e única, concebida e realizada inteiramente pelas minhas mãos, e que não existe outra versão dela. O artista mantém os direitos autorais e de reprodução da obra; a propriedade da obra física passa ao seu comprador.',
    owner: 'Emitido para',
    ownerCode: 'Código do proprietário',
    date: 'Data',
    signature: 'Assinatura',
    verify: 'Verifique este certificado em',
    viewWork: 'Ver obra',
    print: 'Imprimir certificado',
    note: 'Válido somente com a assinatura manuscrita do artista.',
    // Registro na blockchain do Bitcoin (só certificados em src/data/timestamps.js)
    chain: 'Registrado na blockchain do Bitcoin',
    block: 'bloco',
    pending: 'confirmação pendente',
    record: 'Registro (.txt)',
    proof: 'Prova (.ots)',
    authorship: 'Autoria',
    verifyNow: 'Conferir',
    verifying: 'Conferindo na blockchain do Bitcoin…',
    verifiedTitle: 'Verificado na blockchain do Bitcoin',
    confirmedBy: 'Confirmado por',
    mismatch: 'Este registro não corresponde à blockchain do Bitcoin.',
    offline: 'Não foi possível consultar o Bitcoin. Tente novamente em instantes.',
    sale: 'Coleção particular',
    // Questions and answers under the certificate: the same for every certificate, so nothing
    // about one work goes here. Neutral voice of a gallery or museum, present tense, 'you' only
    // where the reader is guided. The page shows them on certificates registered on Bitcoin.
    // a is HTML; {sources} is filled in with the block explorers. The item with id 'verify'
    // gets the check button and the downloads inside its two steps.
    faq: {
      title: 'Perguntas frequentes',
      items: [
        { q: 'Como confiro a autenticidade deste documento?', a: '<p>A autenticidade do documento pode ser conferida de três maneiras:</p><ul><li><strong>A assinatura manuscrita original do artista.</strong> É o que dá validade ao certificado; uma cópia impressa desta página não a inclui.</li><li><strong>O número do certificado.</strong> Deve coincidir com o que aparece nesta página, à qual se chega escaneando o código QR.</li><li><strong>O registro da obra no blockchain do Bitcoin.</strong> O blockchain guarda um selo criptográfico dos dados da obra (artista, título, ano, técnica e medidas). Se algum desses dados fosse modificado, o selo deixaria de coincidir. Você pode verificar <a class="line-link" href="#faq-verify">aqui</a>.</li></ul>' },
        { q: 'O que é um blockchain?', a: '<p>O blockchain, ou cadeia de blocos, é uma tecnologia emergente que permite guardar informações de forma segura e compartilhada, sem depender de uma única empresa ou instituição que a controle.</p><p>Em vez de ficar armazenada em um único servidor, a informação é copiada em milhares de computadores conectados entre si. Cada novo registro é agrupado com outros em um bloco, e cada bloco fica ligado ao anterior, formando uma cadeia. Modificar um dado já registrado exigiria alterar todos os blocos seguintes na maioria desses computadores ao mesmo tempo, algo que na prática não é possível.</p><p>Por isso ele é usado para deixar comprovado que um dado existia em determinada data e não foi modificado desde então.</p><p>O blockchain do Bitcoin, em funcionamento desde 2009, foi o primeiro e continua sendo o mais difundido. É o que se usa para registrar estes certificados.</p>' },
        { id: 'verify', q: 'Como o registro no blockchain é verificado?', a: '<p>O blockchain não contém os dados da obra, e sim a impressão digital deles: um código único que muda por completo se um único caractere for modificado. Verificar o registro consiste em conferir que essa impressão digital consta no blockchain e corresponde aos dados da obra.</p><p>Há duas formas de fazer isso:</p>', steps: ['<strong>Nesta página.</strong> O botão Conferir consulta quatro exploradores de blocos: {sources}. Um explorador de blocos é um site independente que lê o blockchain do Bitcoin e permite consultar qualquer um de seus blocos. Como não pertencem à mesma empresa nem dependem deste site, nenhum deles pode alterar o resultado.', '<strong>Por conta própria.</strong> Sem passar por esta página, você pode baixar o registro e sua prova (o arquivo que liga a impressão digital a um bloco específico) e enviá-los ao <a class="line-link" href="https://opentimestamps.org" target="_blank" rel="noopener">opentimestamps.org</a>, um serviço aberto e gratuito que os confirma diretamente no blockchain do Bitcoin.'] },
        { q: 'Os dados do proprietário da obra são públicos?', a: '<p>Não. O registro no blockchain é público, mas não inclui o nome do proprietário nem qualquer outro dado pessoal. Ele contém apenas uma impressão digital criptográfica, da qual não é possível deduzir de quem se trata.</p><p>Essa impressão digital é calculada a partir do nome do proprietário e de um código pessoal que o artista anota à mão no certificado. Assim, somente o proprietário pode demonstrar, se desejar, que o registro lhe pertence.</p>' },
      ],
    },
  },

  nft: {
    title: 'Hiperconciente',
    description: 'Hiperconciente é a primeira incursão do artista Andy Ossorio na arte cripto e, também, a primeira obra NFT (token não fungível) exposta em um museu boliviano.',
    year: '2022',
    medium: 'Nanquim sobre papel / Performance',
    size: '100x152 cm',
    paragraphs: [
      'Hiperconciente é a primeira incursão do artista Andy Ossorio na arte cripto e, também, a primeira obra NFT (token não fungível) exposta em um museu boliviano.',
      'Cunhada na blockchain Ethereum, a obra é composta por uma parte digital e uma parte física. Uma série de vídeos apresenta uma performance cheia de simbolismo. Já a pintura, feita no meio dessa performance, se destaca pelo nível de abstração e pela riqueza de detalhes.',
      'A parte física da obra é exposta no Museu de Arte Contemporânea, e a parte digital, na plataforma de arte NFT Verisart.',
    ],
    imageAlt: 'Hiperconciente, nanquim sobre papel',
    videos: ['Hiperconciente (NFT)', 'Hiperconciente'],
    visit: 'Ver o NFT',
    performance: 'Performance',
    play: 'Reproduzir vídeo',
  },

  // Invitation card to the Hiperconciencia opening (in Spanish, as printed; the page
  // exists only once, so these texts are the same in every language)
  invitation: {
    title: 'Invitación',
    description: 'Invitación a la noche de inauguración de la exposición de arte "Hiperconciencia".',
    open: 'Abrir invitación',
    host: 'Andy S.',   // as printed on the 2022 card
    intro: 'tiene el grato honor de invitarte a la',
    event: 'NOCHE DE INAUGURACIÓN DE LA EXPOSICIÓN DE ARTE',
    name: '"Hiperconciencia"',
    place: ['Museo de Arte Contemporáneo (MAC)', 'Calle Sucre Esq. Potosí'],
    placeUrl: 'https://goo.gl/maps/D4WfBrmnrYeXXsBY9',
    date: ['Jueves 4 de Agosto de 2022', '19:30'],
    organizers: 'Organiza:',
    macAlt: 'Museo de Arte Contemporáneo',
    cityAlt: 'Gobierno Autónomo Municipal de Santa Cruz',
  },

  notFound: {
    title: 'Página não encontrada',
    lines: ['Esta página não existe.'],
    back: 'Voltar',
  },

  // Full-screen image viewer
  viewer: {
    label: 'Visualizador de imagens',
    close: 'Fechar',
    previous: 'Imagem anterior',
    next: 'Próxima imagem',
    zoomIn: 'Aproximar',
    zoomOut: 'Afastar',
    fit: 'Ajustar à tela',
  },

  a11y: {
    skip: 'Ir para o conteúdo',
    newTab: 'abre em uma nova aba',
  },
};
