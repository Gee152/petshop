// Cuida Filho - Pet Shop
// Dados Oficiais e Conteúdos em Português conforme PRD e Identidade Visual Cuida Filho
// Mateus Hiper Casa Forte • Recife - PE

import rawLogoPetTown from "../img/cuidafilhopetshoplogo.jpg";
import rawDestaquesServicos from "../img/produto1.png";
import rawBanhoTosaHero from "../img/cao.png";
import rawClinicaVet from "../img/gato.png";
import rawAlineBeloAcupuntura from "../img/cuidandodopet.png";
import rawDaycareHotelzinho from "../img/cao2.png";
import rawPetDelivery from "../img/gato2.png";
import rawPetShopFarmacia from "../img/produto1.png";
import rawPetTownStorefront from "../img/cuidandodopet.png";
import { getImgSrc } from "../utils/imageUtils";

const logoPetTown = getImgSrc(rawLogoPetTown);
const destaquesServicos = getImgSrc(rawDestaquesServicos);
const banhoTosaHero = getImgSrc(rawBanhoTosaHero);
const clinicaVet = getImgSrc(rawClinicaVet);
const alineBeloAcupuntura = getImgSrc(rawAlineBeloAcupuntura);
const daycareHotelzinho = getImgSrc(rawDaycareHotelzinho);
const petDelivery = getImgSrc(rawPetDelivery);
const petShopFarmacia = getImgSrc(rawPetShopFarmacia);
const petTownStorefront = getImgSrc(rawPetTownStorefront);

export const PETTOWN_DATA = {
  // 1. DADOS DA MARCA E PROFISSIONAIS
  brand: {
    name: "Cuida Filho Pet Shop",
    brokerName: "Cuida Filho",
    fullName: "Cuida Filho • Pet Shop",
    creci: "Atendimento com Amor 🧡",
    specialistName: "Equipe Cuida Filho",
    specialistCredentials: "Banho, tosa e consulta veterinária • Produtos de saúde, beleza e alimentação",
    photo: logoPetTown,
    photoAlt: "Cuida Filho - Pet Shop no Mateus Hiper Casa Forte",
    storefrontPhoto: petTownStorefront,
    bioPhoto: petTownStorefront,
    specialistPhoto: alineBeloAcupuntura,
    bannerBanhoTosa: banhoTosaHero,
    bannerClinica: clinicaVet,
    destaquesImg: destaquesServicos,
    slogan: "Feito por quem cuida do seu filho com amor! 🧡",
    partner: "Mateus Hiper Casa Forte",
    company: "Cuida Filho Pet Shop",
    tagline: "PET SHOP • CUIDA FILHO",
    subtagline: "BANHO, TOSA E CONSULTA VETERINÁRIA",
    logoText: "Cuida Filho",
    location: "Mateus Hiper Casa Forte • Recife - PE",
    address: "Av. Dezessete de Agosto, Casa Forte (Dentro do Mateus Hiper)",
    fullAddress: "Mateus Hiper Casa Forte, Av. Dezessete de Agosto, Casa Forte, Recife - PE, Brasil",
    mapsUrl: "https://maps.google.com/?q=Mateus+Hiper+Casa+Forte+Recife",
    coverageAreas: "Casa Forte, Parnamirim, Jaqueira, Poço da Panela e Região",
    specialty: "Banho, Tosa, Consulta Veterinária e Produtos de Saúde, Beleza e Alimentação",
    ctaSchedule: "Falar com a Gente no WhatsApp",
    services: "Banho & Tosa | Consulta Veterinária | Saúde & Beleza | Alimentação Pet",
    bio: "Pet Shop no Mateus Hiper Casa Forte. Banho, tosa e consulta veterinária com carinho de verdade, além de produtos selecionados de saúde, beleza e alimentação para seu filho de quatro patas.",
    openingHours: "Seg a Sáb: 08h às 20h | Dom: 08h às 14h",
    instagram: "https://www.instagram.com/cuidafilhopetshop/",
    instagramPartner: "https://www.instagram.com/cuidafilhopetshop/",
    whatsappPhone: "5581991841337",
    whatsapp: "https://api.whatsapp.com/send?phone=5581991841337",
    // Mensagens automáticas para cada ponto de contato
    whatsappSimulationMessage: "Olá Cuida Filho Pet Shop! Gostaria de agendar um atendimento para o meu pet (Banho & Tosa / Consulta Veterinária).",
    whatsappReferralMessage: "Olá Cuida Filho Pet Shop! Vim pelo site e gostaria de saber mais sobre os produtos e serviços para o meu pet!",
    whatsappScheduleMessage: "Olá Cuida Filho Pet Shop! Vim pelo site e gostaria de agendar um horário com todo carinho para o meu pet!",
    whatsappConsultancyMessage: "Olá equipe Cuida Filho! Gostaria de informações sobre consultas veterinárias e banho & tosa no Mateus Hiper Casa Forte.",
    whatsappGeneralMessage: "Olá Cuida Filho Pet Shop! Vim pelo site e gostaria de tirar dúvidas sobre os cuidados para o meu pet!"
  },

  // 2. CONTEÚDO DO HERO (TELA PRINCIPAL)
  hero: {
    badge: "🧡 Banho, tosa e consulta veterinária • Mateus Hiper Casa Forte",
    headlineLine1: "Cuidado, Saúde e Amor para o Seu Pet no",
    headlineHighlight: "Cuida Filho Pet Shop",
    headlineLine2: "em Casa Forte",
    subtext: "Banho, tosa humanizada, consulta veterinária e uma seleção completa de produtos de saúde, beleza e alimentação dentro do Mateus Hiper Casa Forte.",
    ctaPrimary: "Agendar Banho ou Consulta",
    ctaSecondary: "Falar com a Gente ⤵️",
    smartHomeBadge: {
      title: "Cuida Filho no Mateus Hiper",
      desc: "Estacionamento fácil, carinho de família e tudo em alimentação, estética e cuidados para seu filho.",
      price: "Casa Forte"
    },
    bgImage: banhoTosaHero
  },

  // 3. MÉTRICAS E PROVA SOCIAL
  metrics: {
    category: "CUIDADO COM O SEU FILHO • MATEUS HIPER CASA FORTE",
    leftTitle: "Por que confiar o seu melhor amigo ao Cuida Filho Pet Shop?",
    leftDesc: "Mais de 2.800 pets cuidados com carinho genuíno. Tratamos seu pet como um filho: toalhas individuais esterilizadas em embalagem lacrada, cosméticos hipoalergênicos dermatológicos e equipe dedicada a acolher com respeito e paciência.",
    rightTitle: "Banho, tosa e consulta veterinária com",
    rightHighlight: "mais de 2.800 pets cuidados com muito amor",
    stats: [
      { label: "Filhos Acolhidos", val: "+2.800" },
      { label: "Avaliação Google", val: "Nota 5.0" },
      { label: "Atendimento", val: "100% Humanizado" },
      { label: "Localização", val: "Mateus Hiper" }
    ]
  },

  // 4. ETAPAS DO PROCESSO (SOLUTIONS)
  solutions: {
    category: "O PROCESSO: COMO CUIDAMOS DO SEU PET",
    title: "Experiência sem estresse, transparente e feita com amor de família.",
    trustBadge: "Protocolos rigorosos de higiene, produtos dermatológicos certificados e profissionais apaixonados por pets.",
    steps: [
      {
        number: "01",
        title: "Agendamento Prático no WhatsApp",
        description: "Você fala diretamente com a gente: banho, tosa, consulta ou produtos. Reservamos o horário mais conveniente para você."
      },
      {
        number: "02",
        title: "Acolhimento & Triagem Carinhosa",
        description: "Seu pet é recebido com afeto e passa por uma avaliação prévia de pele, pelagem e orelhinhas para um atendimento personalizado."
      },
      {
        number: "03",
        title: "Seu Filho Feliz e Perfumado",
        description: "Procedimento realizado com calma e zero estresse. Você recebe seu melhor amigo cheiroso, saudável e cheio de energia!"
      }
    ],
    cards: {
      card1: {
        badge: "Banho & Tosa com Amor",
        image: banhoTosaHero,
        alt: "Cão feliz no Cuida Filho Pet Shop"
      },
      card2: {
        title: "Produtos de saúde, beleza e alimentação selecionados.",
        text: "Encontre as melhores rações Super Premium, petiscos saudáveis, suplementos, dermocosméticos e caminhas para seu filho no Mateus Hiper Casa Forte.",
        buttonText: "Falar com a Gente no WhatsApp"
      },
      card3: {
        image: clinicaVet,
        title: "Consulta Veterinária & Saúde",
        price: "Consultas, vacinas e cuidados preventivos",
        buttonText: "Agendar Consulta"
      }
    }
  },

  // 5. PROGRAMA DE INDICAÇÃO (REFERRAL) / CLUBE DE BENEFÍCIOS
  indicouGanhou: {
    badge: "AMIGOS DO CUIDA FILHO",
    title: "INDICOU UM AMIGO TUTOR, GANHOU DESCONTO NO BANHO OU COMPRAS!",
    subtitle: "Conhece alguém em Casa Forte e região que ama pets tanto quanto você? Indique o Cuida Filho. Quando seu amigo realizar o primeiro serviço, vocês dois ganham R$ 25 em créditos ou desconto imediato!",
    pixAmount: "R$ 25,00",
    cta: "Indicar um Amigo Tutor Agora",
    steps: [
      {
        step: "1",
        title: "Indique um Amigo",
        desc: "Envie o contato do tutor que busca o melhor cuidado e produtos para seu cão ou gato."
      },
      {
        step: "2",
        title: "O Amigo Vem ao Cuida Filho",
        desc: "Nossa equipe cuida do pet dele no Mateus Hiper Casa Forte com todo amor e atenção que ele merece."
      },
      {
        step: "3",
        title: "Vocês Ganham Benefícios",
        desc: "Crédito na hora para usar em banho, tosa, consulta veterinária ou na loja pet!"
      }
    ]
  },

  // 6. CATÁLOGO DE 6 SERVIÇOS EM DESTAQUE (TRUSTED LOCATIONS / SERVICES)
  trustedLocations: {
    category: "SERVIÇOS & CUIDADOS EM DESTAQUE",
    title: "Tudo o que o Seu Filho Precisa em um Só Lugar",
    viewAllText: "Ver Todos os Serviços no WhatsApp",
    headerWhatsappMessage: "Olá Cuida Filho Pet Shop! Vim pelo site e gostaria de conhecer todos os serviços de banho, tosa e consulta veterinária!",
    bannerWhatsappMessage: "Olá Cuida Filho Pet Shop! Gostaria de tirar dúvidas com a equipe e agendar um horário para o meu pet no Mateus Hiper Casa Forte.",
    properties: [
      {
        id: "servico-banho-tosa",
        name: "Banho & Tosa com Amor",
        typology: "Estética Animal",
        subType: "Higiene & Bem-Estar",
        neighborhood: "Banho & Tosa",
        location: "Cuida Filho • Mateus Hiper Casa Forte",
        priceFormatted: "A partir de R$ 50,00",
        priceValue: 50,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        datePosted: "2025-02-01",
        numberOfRooms: 1,
        numberOfBedrooms: 0,
        numberOfBathrooms: 1,
        floorSizeMTK: 45,
        geo: { latitude: -8.0315, longitude: -34.9190 },
        amenities: [
          "Água na temperatura ideal e toalhas individuais esterilizadas",
          "Cosméticos dermatológicos e hipoalergênicos suaves",
          "Tosa higiênica, na tesoura ou padrão da raça",
          "Corte de unhas e limpeza auricular com carinho"
        ],
        image: banhoTosaHero,
        whatsappMessage: "Olá Cuida Filho Pet Shop! Gostaria de agendar um Banho & Tosa com Amor para o meu pet. Quais os horários disponíveis?",
        description: "Serviço de banho e tosa humanizado com foco em bem-estar e zero estresse. Tratamentos de hidratação e tosa especializada."
      },
      {
        id: "servico-clinica-geral",
        name: "Consulta Veterinária & Prevenção",
        typology: "Medicina Veterinária",
        subType: "Saúde & Prevenção",
        neighborhood: "Consultório Veterinário",
        location: "Cuida Filho • Casa Forte",
        priceFormatted: "Consulte Horários",
        priceValue: 120,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        datePosted: "2025-02-05",
        numberOfRooms: 2,
        numberOfBedrooms: 1,
        numberOfBathrooms: 1,
        floorSizeMTK: 40,
        geo: { latitude: -8.0315, longitude: -34.9190 },
        amenities: [
          "Consultas clínicas gerais e preventivas com atenção",
          "Vacinas importadas éticas (V8, V10, Antirrábica, Gripe)",
          "Avaliação de pele, pelagem e orientação nutricional",
          "Acompanhamento cuidadoso de filhotes e pets idosos"
        ],
        image: clinicaVet,
        whatsappMessage: "Olá Cuida Filho Pet Shop! Gostaria de agendar uma consulta veterinária / vacinação para o meu pet.",
        description: "Atendimento veterinário humanizado para cuidar da saúde integral do seu filho com foco em prevenção e qualidade de vida."
      },
      {
        id: "servico-produtos-saude-beleza",
        name: "Produtos de Saúde, Beleza e Alimentação",
        typology: "Boutique & Nutrição",
        subType: "Alimentação & Cuidados",
        neighborhood: "Loja Pet",
        location: "Cuida Filho • Mateus Hiper Casa Forte",
        priceFormatted: "Linha Completa",
        priceValue: 40,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        datePosted: "2025-02-10",
        numberOfRooms: 1,
        numberOfBedrooms: 0,
        numberOfBathrooms: 0,
        floorSizeMTK: 60,
        geo: { latitude: -8.0315, longitude: -34.9190 },
        amenities: [
          "Rações Super Premium e opções de nutrição balanceada",
          "Antipulgas, carrapaticidas e vermífugos originais",
          "Shampoos, colônias suaves e dermocosméticos seguros",
          "Brinquedos educativos, coleiras, guias e caminhas"
        ],
        image: petShopFarmacia,
        whatsappMessage: "Olá Cuida Filho Pet Shop! Gostaria de consultar a disponibilidade de rações, petiscos ou produtos de saúde para o meu pet.",
        description: "Seleção rigorosa de marcas para nutrição, higiene e diversão do seu pet, com a comodidade do Mateus Hiper Casa Forte."
      },
      {
        id: "servico-cuidado-humanizado",
        name: "Acolhimento & Cuidado com o Filho",
        typology: "Manejo Humanizado",
        subType: "Carinho & Paciência",
        neighborhood: "Cuidado Especial",
        location: "Cuida Filho • Casa Forte",
        priceFormatted: "Atendimento com Amor",
        priceValue: 60,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        datePosted: "2025-02-15",
        numberOfRooms: 1,
        numberOfBedrooms: 0,
        numberOfBathrooms: 1,
        floorSizeMTK: 50,
        geo: { latitude: -8.0315, longitude: -34.9190 },
        amenities: [
          "Ambiente calmo e acolhedor para pets sensíveis",
          "Equipe paciente e treinada em manejo positivo",
          "Estacionamento seguro dentro do Mateus Hiper",
          "Comunicação direta com o tutor via WhatsApp"
        ],
        image: alineBeloAcupuntura,
        whatsappMessage: "Olá Cuida Filho Pet Shop! Meu pet é um pouco sensível e gostaria de agendar um atendimento calmo e cuidadoso para ele.",
        description: "Cada pet é tratado como único. Priorizamos a calma, o respeito ao tempo do animal e a tranquilidade da família tutora."
      },
      {
        id: "servico-cuidado-felino",
        name: "Cuidado Felino & Estética Delicada",
        typology: "Gatos & Felinos",
        subType: "Manejo Suave Felino",
        neighborhood: "Espaço Tranquilo",
        location: "Cuida Filho • Casa Forte",
        priceFormatted: "Consulte Condições",
        priceValue: 55,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        datePosted: "2025-02-20",
        numberOfRooms: 1,
        numberOfBedrooms: 0,
        numberOfBathrooms: 0,
        floorSizeMTK: 40,
        geo: { latitude: -8.0315, longitude: -34.9190 },
        amenities: [
          "Banho adaptado e tosa higiênica específica para gatos",
          "Manejo calmo e sem movimentos bruscos",
          "Produtos sem odores fortes que causem incômodo ao felino",
          "Corte de unhas seguro com contenção suave"
        ],
        image: petDelivery,
        whatsappMessage: "Olá Cuida Filho Pet Shop! Gostaria de agendar cuidados de higiene para o meu gatinho.",
        description: "Atenção redobrada para os felinos, respeitando seus limites e oferecendo um atendimento delicado e sem estresse."
      },
      {
        id: "servico-estetica-canina",
        name: "Estética Canina & Bem-Estar",
        typology: "Spa & Hidratação",
        subType: "Pelagens Especiais",
        neighborhood: "Estética Canina",
        location: "Cuida Filho • Mateus Hiper",
        priceFormatted: "Consulte Valores",
        priceValue: 65,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        datePosted: "2025-02-25",
        numberOfRooms: 2,
        numberOfBedrooms: 1,
        numberOfBathrooms: 1,
        floorSizeMTK: 60,
        geo: { latitude: -8.0315, longitude: -34.9190 },
        amenities: [
          "Hidratação profunda para brilho e maciez da pelagem",
          "Desembolo seguro com produtos desembaraçantes suaves",
          "Perfumes suaves hipoalergênicos e finalização caprichada",
          "Seu cãozinho sai radiante, macio e protegido"
        ],
        image: daycareHotelzinho,
        whatsappMessage: "Olá Cuida Filho Pet Shop! Gostaria de saber sobre os pacotes de hidratação e estética canina para o meu cãozinho!",
        description: "Tratamentos especiais para realçar a beleza da pelagem do seu cão com produtos nutritivos e toque aveludado."
      }
    ]
  },

  // 7. DEPOIMENTOS DE TUTORES REAIS
  testimonials: [
    {
      name: "Mariana Costa (Tutora do Bento)",
      location: "Casa Forte • Recife - PE",
      tag: "Tutor Apaixonado • Banho & Tosa",
      stars: 5,
      text: "O Bento é como um filho para mim e morria de medo de pet shop. No Cuida Filho no Mateus Hiper Casa Forte a equipe teve uma paciência maravilhosa, ele voltou calmo, cheirosíssimo e feliz da vida. Não troco por nada!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Rodrigo Mendonça (Tutor da Mel)",
      location: "Parnamirim • Recife - PE",
      tag: "Cliente Frequente • Consulta & Produtos",
      stars: 5,
      text: "Excelente atendimento veterinário e a loja tem as melhores rações e medicamentos. A comodidade de estar dentro do Mateus Hiper com estacionamento fácil faz toda a diferença na nossa rotina!",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Camila Guimarães (Tutora da Amora)",
      location: "Jaqueira • Recife - PE",
      tag: "Cuidados Especiais • Estética & Carinho",
      stars: 5,
      text: "O carinho que eles têm com a Amora é surreal. Dá pra ver que amam de verdade o que fazem! Produtos de altíssima qualidade, toalha individual selada e o WhatsApp responde super rápido. Recomendo demais!",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    }
  ],

  // 8. PERGUNTAS FREQUENTES (FAQ) - OTIMIZADO PARA GOOGLE RICH SNIPPETS E GEO (AI SEARCH)
  faq: {
    category: "TIRA-DÚVIDAS & INFORMAÇÕES",
    title: "Perguntas Frequentes sobre o Cuida Filho Pet Shop",
    subtitle: "Tudo o que você precisa saber sobre nossos cuidados, localização, agendamentos e estrutura no Mateus Hiper Casa Forte.",
    ctaWhatsappText: "Ainda tem alguma dúvida? Fale com a gente ⤵️",
    items: [
      {
        question: "Onde fica localizado o Cuida Filho Pet Shop?",
        answer: "Estamos localizados dentro do Mateus Hiper Casa Forte, na Av. Dezessete de Agosto, no bairro de Casa Forte em Recife - PE. Oferecemos fácil acesso e estacionamento amplo, coberto e gratuito para moradores de Casa Forte, Parnamirim, Jaqueira, Poço da Panela, Santana, Monteiro e toda a Zona Norte de Recife."
      },
      {
        question: "Quais serviços são oferecidos no Cuida Filho Pet Shop?",
        answer: "Oferecemos uma solução completa de cuidados para o seu pet: Banho & Tosa humanizado (tosa higiênica, tosa da raça e na tesoura), Consulta Veterinária preventiva e clínica geral, Vacinação ética importada (V8, V10, Antirrábica e Gripe), além de uma loja completa com rações Super Premium, dermocosméticos, petiscos saudáveis e acessórios."
      },
      {
        question: "Como funciona o agendamento de banho, tosa e consulta?",
        answer: "O agendamento é rápido e prático diretamente pelo nosso WhatsApp oficial (81 99184-1337). Nossa equipe responde com agilidade, apresentando os horários disponíveis e reservando a vaga ideal para o seu pet ser atendido com toda a pontualidade e tranquilidade, sem filas estressantes."
      },
      {
        question: "Quais são os protocolos de higiene e segurança no Banho & Tosa?",
        answer: "Tratamos cada pet como um filho. Por isso, utilizamos exclusivamente toalhas 100% esterilizadas e seladas individualmente para cada atendimento, água em temperatura agradável e controlada, secagem suave sem estresse térmico, cosméticos dermatológicos hipoalergênicos e profissionais capacitados em manejo carinhoso e positivo."
      },
      {
        question: "O Cuida Filho Pet Shop atende gatos e possui cuidados específicos para felinos?",
        answer: "Sim! Cuidamos com muito carinho e respeito dos gatinhos. Temos protocolos adaptados com manejo delicado, ambiente tranquilo e climatizado, sem ruídos excessivos ou estresse, e produtos sem fragrâncias agressivas para garantir a total serenidade do seu felino."
      },
      {
        question: "O local possui estacionamento para clientes?",
        answer: "Sim! Por estarmos situados dentro do complexo Mateus Hiper Casa Forte, os tutores contam com estacionamento privativo, amplo, coberto, seguro e gratuito, proporcionando total conforto e segurança no embarque e desembarque do seu pet, inclusive em dias de chuva."
      },
      {
        question: "Vocês vendem rações especiais e medicamentos na loja?",
        answer: "Sim! Dispomos de um catálogo rigorosamente selecionado com as principais marcas de rações Super Premium do mercado, petiscos naturais, suplementos nutricionais, medicamentos veterinários de primeiros socorros, antipulgas, carrapaticidas e produtos de beleza e higiene."
      }
    ]
  }
};

// Retrocompatibilidade para componentes que importam VISTAHAVEN_DATA
export const VISTAHAVEN_DATA = PETTOWN_DATA;

// Export direto para testimonials
export const TESTIMONIALS = PETTOWN_DATA.testimonials;

/**
 * Constrói o link oficial do WhatsApp do Cuida Filho Pet Shop com mensagem pré-preenchida
 * @param {string} [message] - Mensagem personalizada para o chat
 * @returns {string} URL pronta para abertura no WhatsApp
 */
export const getWhatsAppUrl = (message) => {
  const base = PETTOWN_DATA.brand.whatsapp;
  if (!message) return base;
  const separator = base.includes('?') ? '&' : '?';
  return `${base}${separator}text=${encodeURIComponent(message)}`;
};

