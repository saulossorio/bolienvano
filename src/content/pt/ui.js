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
    print: 'Imprimir ou salvar como PDF',
    printCode: 'Código',
    viewDocument: 'Ver documento',
    unlockHint: 'Código do proprietário, o mesmo escrito à mão no certificado.',
    unlock: 'Desbloquear',
    wrongCode: 'O código não está correto.',
    printLocked: 'A impressão está bloqueada. Ela é liberada com o código do proprietário, pelo botão “Ver documento” desta página.',
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
    // Questions and answers under the certificate (only if it is registered on Bitcoin), in the
    // artist's voice. In the texts: {coa} {date} {sources} are filled in by the page. An item can
    // have aSale (used instead of a when the work has a recorded sale), only: 'sale' (shown only
    // then) and, for id: 'verify', a2 (second paragraph, after the check button and its result;
    // the downloads of the records go under it).
    faq: {
      title: 'Perguntas frequentes',
      items: [
        { q: 'Como confiro a autenticidade deste documento?', a: 'Cada certificado leva minha assinatura manuscrita e um número único. O deste, {coa}, é o mesmo que consta nesta página, para a qual o QR leva. A autoria da obra foi registrada na blockchain do Bitcoin em {date}.' },
        { q: 'O que é uma blockchain?', a: 'Uma blockchain é um registro digital, público e compartilhado. Ela é descentralizada porque não fica guardada no servidor de uma empresa, e sim espalhada por milhares de computadores no mundo todo, e cada um conserva uma cópia completa. Por isso ninguém pode modificá-la por conta própria, já que qualquer mudança precisaria do acordo da maioria deles, e o que é anotado nela fica fixo para sempre, com sua data. O Bitcoin, criado em 2009, foi a primeira e é a que respalda o registro deste certificado.' },
        { id: 'verify', q: 'Como o registro desta obra é verificado?', a: 'O registro pode ser conferido de duas maneiras. Nesta página, o botão Conferir consulta quatro fontes independentes ({sources}) e confirma que o registro existe e que não foi modificado.', a2: 'Também pode ser verificado por conta própria, sem passar por este site: o registro e sua prova estão disponíveis para download, e o <a class="line-link" href="https://opentimestamps.org" target="_blank" rel="noopener">opentimestamps.org</a> os confirma diretamente na blockchain do Bitcoin.' },
        { q: 'O que ficou registrado desta obra?', a: 'Sua autoria: artista, título, ano, técnica, medidas e número do certificado. Na blockchain não estão essas informações, e sim a impressão digital delas: um código único que muda por completo se uma única letra for alterada.', aSale: 'Duas coisas: sua autoria (artista, título, ano, técnica, medidas e número do certificado) e sua passagem para uma coleção particular. Na blockchain não estão essas informações, e sim a impressão digital delas: um código único que muda por completo se uma única letra for alterada.' },
        { q: 'O nome do proprietário aparece?', a: 'Não. Fica apenas a impressão digital do nome, junto com um código pessoal que escrevo à mão no certificado. Com ele, o proprietário pode provar que o registro é dele sem que seu nome seja público.', only: 'sale' },
        { q: 'Por que só vale com a assinatura manuscrita?', a: 'Qualquer pessoa pode imprimir esta página. O certificado é somente o exemplar que assino à mão.' },
        { q: 'O que significa “Original único, 1/1”?', a: 'Que esta obra não tem cópias, edições nem reproduções assinadas.' },
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
