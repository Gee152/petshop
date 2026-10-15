// Pet Town - Pet Shop e Clínica Veterinária
// Dados Oficiais e Conteúdos em Português conforme PRD e Identidade Visual

import rawLogoPetTown from "../img/logo_pet_town.png";
import rawDestaquesServicos from "../img/destaques_servicos.png";
import rawBanhoTosaHero from "../img/banho_tosa_hero.jpg";
import rawClinicaVet from "../img/clinica_veterinaria.png";
import rawAlineBeloAcupuntura from "../img/aline_belo_acupuntura.png";
import rawDaycareHotelzinho from "../img/daycare_hotelzinho.jpg";
import rawPetDelivery from "../img/pet_delivery.jpg";
import rawPetShopFarmacia from "../img/pet_shop_farmacia.jpg";
import rawPetTownStorefront from "../img/image.png";
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
    name: "Pet Town",
    brokerName: "Pet Town",
    fullName: "Pet Town • Pet Shop e Clínica Veterinária",
    creci: "CRMV Responsável Ativo",
    specialistName: "Dra. Aline Belo",
    specialistCredentials: "Médica Veterinária (UNINASSAU) • Pós em Acupuntura • Fisioterapia Veterinária",
    photo: logoPetTown,
    photoAlt: "Pet Town - Pet Shop e Clínica Veterinária",
    storefrontPhoto: petTownStorefront,
    bioPhoto: petTownStorefront,
    specialistPhoto: alineBeloAcupuntura,
    bannerBanhoTosa: banhoTosaHero,
    bannerClinica: clinicaVet,
    destaquesImg: destaquesServicos,
    slogan: "Feito por quem cuida com amor!",
    partner: "Clínica Veterinária Especializada",
    company: "Pet Town Veterinária",
    tagline: "PET SHOP & CLÍNICA VETERINÁRIA",
    subtagline: "CUIDADO E BELEZA 360°",
    logoText: "Pet Town",
    location: "Recife e Região Metropolitana - PE",
    address: "Atendimento Clínico, Banho & Tosa e Pet Delivery",
    fullAddress: "Recife e Região Metropolitana, PE, Brasil",
    mapsUrl: "https://maps.google.com/?q=Pet+Town+Pet+Shop+Clinica+Veterinaria",
    coverageAreas: "Recife, Olinda, Jaboatão, Paulista e Região",
    specialty: "Clínica Veterinária, Acupuntura, Fisioterapia, Banho & Tosa e Delivery",
    ctaSchedule: "Agendar Horário do Pet",
    services: "Clínica Geral | Acupuntura & Fisioterapia | Banho & Tosa 360° | Pet Delivery | Farmácia Pet",
    bio: "Cuidado e Beleza 360° para o seu pet! Feito por quem cuida com amor. Clínica veterinária com Dra. Aline Belo, centro de estética animal, farmácia completa e serviço leva e traz.",
    openingHours: "Seg a Sex: 08h às 18h | Sáb: 08h às 14h",
    instagram: "https://www.instagram.com/pettown.petshop/",
    instagramPartner: "https://www.instagram.com/pettown.petshop/",
    whatsappPhone: "5581999999999",
    whatsapp: "https://api.whatsapp.com/send?phone=5581999999999",
    // Mensagens automáticas para cada ponto de contato
    whatsappSimulationMessage: "Olá Pet Town! Gostaria de agendar um atendimento para o meu pet (Banho & Tosa / Consulta Veterinária).",
    whatsappReferralMessage: "Olá Pet Town! Vim pelo site e gostaria de saber mais sobre o programa de indicação e benefícios!",
    whatsappScheduleMessage: "Olá Pet Town! Vim pelo site e gostaria de agendar um horário com todo amor para o meu pet!",
    whatsappConsultancyMessage: "Olá equipe Pet Town! Gostaria de informações sobre consultas especializadas com a Dra. Aline Belo (Acupuntura e Fisioterapia).",
    whatsappGeneralMessage: "Olá Pet Town! Vim pelo site e gostaria de tirar dúvidas sobre os serviços para o meu pet!"
  },

  // 2. CONTEÚDO DO HERO (TELA PRINCIPAL)
  hero: {
    badge: "Feito por quem cuida com amor! • Cuidado e Beleza 360°",
    headlineLine1: "Cuidado e Beleza 360° para o Seu Pet com",
    headlineHighlight: "Amor e Dedicação",
    headlineLine2: "em Cada Detalhe",
    subtext: "Clínica Veterinária com Dra. Aline Belo, Banho & Tosa humanizado, Farmácia completa e Pet Delivery com conforto e segurança.",
    ctaPrimary: "Agendar Banho ou Consulta",
    ctaSecondary: "Falar no WhatsApp",
    smartHomeBadge: {
      title: "Nova Especialidade na Pet Town",
      desc: "Acupuntura e Fisioterapia Veterinária com a Dra. Aline Belo para alívio de dores e reabilitação.",
      price: "Agendamento Aberto"
    },
    bgImage: banhoTosaHero
  },

  // 3. MÉTRICAS E PROVA SOCIAL
  metrics: {
    category: "AUTORIDADE VETERINÁRIA & DEDICAÇÃO",
    leftTitle: "Por que confiar o seu melhor amigo à Pet Town?",
    leftDesc: "Mais de 3.500 pets atendidos com carinho genuíno, equipamentos esterilizados de padrão cirúrgico, toalhas individuais seladas, produtos hipoalergênicos e equipe médica veterinária apaixonada por salvar e cuidar de vidas.",
    rightTitle: "Equipe qualificada com centro cirúrgico e",
    rightHighlight: "mais de 3.500 pets cuidados com muito amor",
    stats: [
      { label: "Pets Acolhidos", val: "+3.500" },
      { label: "Avaliação Google", val: "Nota 5.0" },
      { label: "Atendimento", val: "100% Humanizado" },
      { label: "Especialidades", val: "Multidisciplinar" }
    ]
  },

  // 4. ETAPAS DO PROCESSO (SOLUTIONS)
  solutions: {
    category: "O PROCESSO: COMO FUNCIONA O CUIDADO 360°",
    title: "Experiência sem estresse, transparente e feita com carinho.",
    trustBadge: "Protocolos rigorosos de assepsia, monitoramento contínuo e produtos dermatológicos certificados.",
    steps: [
      {
        number: "01",
        title: "Agendamento Prático",
        description: "Você escolhe o serviço pelo formulário ou WhatsApp: banho, tosa, consulta ou leva-e-traz. Confirmamos o horário ideal para você."
      },
      {
        number: "02",
        title: "Acolhimento & Triagem",
        description: "Seu pet é recebido com carinho, passa por avaliação prévia de pele, ouvidos e pelagem, garantindo cuidados sob medida."
      },
      {
        number: "03",
        title: "Pet Feliz e Cheiroso",
        description: "Procedimento realizado com paciência e zero estresse. Você recebe seu companheiro cheiroso, saudável e cheio de energia!"
      }
    ],
    cards: {
      card1: {
        badge: "Cuidado e Beleza 360°",
        image: banhoTosaHero,
        alt: "Cão recebendo banho carinhoso na Pet Town"
      },
      card2: {
        title: "Seu pet merece viver sem dor e com mais disposição.",
        text: "Oferecemos tratamentos de ponta em Acupuntura e Fisioterapia Veterinária com a Dra. Aline Belo para animais idosos, pós-operatório e problemas articulares.",
        buttonText: "Conhecer a Especialidade"
      },
      card3: {
        image: clinicaVet,
        title: "Equipe Veterinária Qualificada",
        price: "Consultas, vacinas e exames no mesmo lugar",
        buttonText: "Falar com Atendimento"
      }
    }
  },

  // 5. PROGRAMA DE INDICAÇÃO (REFERRAL) / CLUBE DE BENEFÍCIOS
  indicouGanhou: {
    badge: "CLUBE AMIGO PET TOWN",
    title: "INDICOU UM AMIGO TUTOR, GANHOU DESCONTO NO PIX OU CRÉDITOS!",
    subtitle: "Conhece alguém que ama pets tanto quanto você? Indique a Pet Town. Quando seu amigo realizar o primeiro banho ou consulta, vocês dois ganham R$ 30 em créditos ou desconto imediato!",
    pixAmount: "R$ 30,00",
    cta: "Indicar um Amigo Tutor Agora",
    steps: [
      {
        step: "1",
        title: "Indique um Amigo",
        desc: "Envie o contato do tutor que busca o melhor cuidado para seu cão ou gato."
      },
      {
        step: "2",
        title: "O Amigo Vem à Pet Town",
        desc: "Nossa equipe cuida do pet dele com todo amor e atenção que ele merece."
      },
      {
        step: "3",
        title: "Vocês Ganham Benefícios",
        desc: "Crédito na hora para usar em banho, tosa, vacinas ou compras na farmácia pet!"
      }
    ]
  },

  // 6. CATÁLOGO DE 6 SERVIÇOS EM DESTAQUE (TRUSTED LOCATIONS / SERVICES)
  trustedLocations: {
    category: "SERVIÇOS & CUIDADOS EM DESTAQUE",
    title: "Tudo o que o Seu Pet Precisa em um Só Lugar",
    viewAllText: "Ver Todos os Serviços no WhatsApp",
    headerWhatsappMessage: "Olá Pet Town! Vim pelo site e gostaria de conhecer a tabela completa de serviços, banho & tosa e consultas veterinárias!",
    bannerWhatsappMessage: "Olá Pet Town! Gostaria de tirar dúvidas com a equipe e agendar um horário para o meu pet.",
    properties: [
      {
        id: "servico-banho-tosa",
        name: "Banho & Tosa 360°",
        typology: "Estética Animal",
        subType: "Higiene & Bem-Estar",
        neighborhood: "Banho & Tosa",
        location: "Pet Town • Banho & Tosa",
        priceFormatted: "A partir de R$ 55,00",
        priceValue: 55,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        datePosted: "2025-02-01",
        numberOfRooms: 1,
        numberOfBedrooms: 0,
        numberOfBathrooms: 1,
        floorSizeMTK: 45, // Minutos médios de procedimento
        geo: { latitude: -8.0476, longitude: -34.8770 },
        amenities: [
          "Água morna e toalhas individuais esterilizadas",
          "Cosméticos hipoalergênicos dermatológicos",
          "Tosa higiênica, na tesoura ou padrão da raça",
          "Corte de unhas e limpeza auricular inclusos"
        ],
        image: banhoTosaHero,
        whatsappMessage: "Olá Pet Town! Gostaria de agendar um Banho & Tosa 360° para o meu pet. Pode me passar os horários disponíveis?",
        description: "Serviço de banho e tosa humanizado com foco em bem-estar e zero estresse. Tratamentos de hidratação profunda e tosa da raça."
      },
      {
        id: "servico-clinica-geral",
        name: "Clínica Veterinária & Check-up",
        typology: "Medicina Veterinária",
        subType: "Saúde & Prevenção",
        neighborhood: "Clínica Médica",
        location: "Pet Town • Consultórios",
        priceFormatted: "Consulte Valores",
        priceValue: 120,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        datePosted: "2025-02-05",
        numberOfRooms: 2,
        numberOfBedrooms: 1,
        numberOfBathrooms: 1,
        floorSizeMTK: 40,
        geo: { latitude: -8.0476, longitude: -34.8770 },
        amenities: [
          "Consultas clínicas gerais e preventivas",
          "Vacinas importadas éticas (V8, V10, Raiva, Gripe)",
          "Exames laboratoriais e diagnóstico rápido",
          "Acompanhamento pediátrico e geriátrico"
        ],
        image: clinicaVet,
        whatsappMessage: "Olá Pet Town! Gostaria de agendar uma consulta veterinária / vacinação para o meu pet.",
        description: "Equipe de médicos veterinários qualificados para cuidar da saúde integral do seu melhor amigo com exames e prevenção."
      },
      {
        id: "servico-acupuntura-fisioterapia",
        name: "Acupuntura e Fisioterapia Veterinária",
        typology: "Especialidade Médica",
        subType: "Dra. Aline Belo",
        neighborhood: "Reabilitação",
        location: "Pet Town • Especialidades",
        priceFormatted: "Consulte Condições",
        priceValue: 150,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        datePosted: "2025-02-10",
        numberOfRooms: 1,
        numberOfBedrooms: 0,
        numberOfBathrooms: 1,
        floorSizeMTK: 50,
        geo: { latitude: -8.0476, longitude: -34.8770 },
        amenities: [
          "Dra. Aline Belo (Médica Veterinária UNINASSAU)",
          "Pós-graduação em Acupuntura Veterinária",
          "Alívio efetivo de dores crônicas e hérnias",
          "Reabilitação motora e suporte a pets idosos"
        ],
        image: alineBeloAcupuntura,
        whatsappMessage: "Olá Pet Town! Vi que vocês têm a especialidade de Acupuntura e Fisioterapia com a Dra. Aline Belo e gostaria de agendar uma avaliação para o meu pet!",
        description: "Tratamento integrativo com Acupuntura e Fisioterapia Veterinária com a Dra. Aline Belo. Melhora expressiva na qualidade de vida e alívio de dores."
      },
      {
        id: "servico-pet-delivery",
        name: "Pet Delivery • Leva e Traz",
        typology: "Logística Conforto",
        subType: "Transporte Seguro",
        neighborhood: "Táxi Dog",
        location: "Em domicílio na sua região",
        priceFormatted: "Consulte sua Região",
        priceValue: 30,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        datePosted: "2025-02-15",
        numberOfRooms: 1,
        numberOfBedrooms: 0,
        numberOfBathrooms: 0,
        floorSizeMTK: 30,
        geo: { latitude: -8.0476, longitude: -34.8770 },
        amenities: [
          "Veículo climatizado e higienizado a cada viagem",
          "Caixas individuais confortáveis e seguras",
          "Motoristas treinados no manejo cuidadoso",
          "Pontualidade e tranquilidade para o tutor"
        ],
        image: petDelivery,
        whatsappMessage: "Olá Pet Town! Gostaria de solicitar o serviço de Pet Delivery (Leva e Traz) para o meu pet. Como funciona para o meu endereço?",
        description: "Serviço de Táxi Dog climatizado para buscar e levar seu pet em segurança e sem estresse para banho, tosa ou consultas."
      },
      {
        id: "servico-pet-shop-farmacia",
        name: "Farmácia Veterinária & Pet Boutique",
        typology: "Medicamentos & Loja",
        subType: "Produtos Selecionados",
        neighborhood: "Farmácia Pet",
        location: "Pet Town • Loja Física e Online",
        priceFormatted: "Preços Competitivos",
        priceValue: 40,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        datePosted: "2025-02-20",
        numberOfRooms: 1,
        numberOfBedrooms: 0,
        numberOfBathrooms: 0,
        floorSizeMTK: 60,
        geo: { latitude: -8.0476, longitude: -34.8770 },
        amenities: [
          "Medicamentos éticos veterinários sob prescrição",
          "Antipulgas, carrapaticidas e vermífugos originais",
          "Rações Super Premium e dietas coadjuvantes",
          "Acessórios, caminhas e brinquedos educativos"
        ],
        image: petShopFarmacia,
        whatsappMessage: "Olá Pet Town! Gostaria de consultar a disponibilidade de medicamentos / rações na farmácia veterinária.",
        description: "Farmácia completa com medicamentos, suplementos, rações premium e consultoria farmacêutica para tirar dúvidas de dosagem."
      },
      {
        id: "servico-daycare-hotelzinho",
        name: "Day Care & Recreação Assistida",
        typology: "Socialização & Hotel",
        subType: "Recreação & Hospedagem",
        neighborhood: "Hotelzinho Pet",
        location: "Pet Town • Área Recreativa",
        priceFormatted: "Diárias sob Consulta",
        priceValue: 70,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        datePosted: "2025-02-25",
        numberOfRooms: 3,
        numberOfBedrooms: 2,
        numberOfBathrooms: 2,
        floorSizeMTK: 120,
        geo: { latitude: -8.0476, longitude: -34.8770 },
        amenities: [
          "Socialização guiada por especialistas em comportamento",
          "Área de gramado seguro com enriquecimento ambiental",
          "Monitoramento veterinário e envio de fotos no WhatsApp",
          "Ambiente climatizado para soneca e relaxamento"
        ],
        image: daycareHotelzinho,
        whatsappMessage: "Olá Pet Town! Gostaria de saber como funciona o Day Care / Hotelzinho e quais são as vacinas necessárias para matrícula!",
        description: "Espaço de recreação e hotelzinho para cães gastarem energia de forma saudável, com segurança e supervisão carinhosa."
      }
    ]
  },

  // 7. DEPOIMENTOS DE TUTORES REAIS
  testimonials: [
    {
      name: "Mariana Costa (Tutora do Thor)",
      location: "Recife - PE",
      tag: "Tutor Apaixonado • Banho & Tosa",
      stars: 5,
      text: "O Thor é um Golden que costumava ficar apavorado para tomar banho em outros pet shops. Na Pet Town a equipe teve uma paciência infinita, ele voltou calmo, cheiroso e feliz da vida. Não troco por nada!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Rodrigo Mendonça (Tutor da Mel)",
      location: "Olinda - PE",
      tag: "Tratamento de Sucesso • Acupuntura",
      stars: 5,
      text: "A Mel já tem 11 anos e mal conseguia levantar por causa da dor na coluna. Depois que iniciou as sessões de acupuntura e fisioterapia com a Dra. Aline Belo, ela voltou a caminhar pelo jardim e pedir carinho. Um verdadeiro milagre de dedicação!",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Camila Guimarães (Tutora do Pipoca)",
      location: "Jaboatão - PE",
      tag: "Cliente Frequente • Pet Delivery",
      stars: 5,
      text: "A praticidade do Pet Delivery é maravilhosa! Eles buscam o Pipoca no meu condomínio com ar-condicionado e todo cuidado. Ele já entra na caixinha abanando o rabo. Recomendo de olhos fechados!",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    }
  ]
};

// Retrocompatibilidade para componentes que importam VISTAHAVEN_DATA
export const VISTAHAVEN_DATA = PETTOWN_DATA;

// Export direto para testimonials
export const TESTIMONIALS = PETTOWN_DATA.testimonials;

/**
 * Constrói o link oficial do WhatsApp da Pet Town com mensagem pré-preenchida contextual
 * @param {string} [message] - Mensagem personalizada para o chat
 * @returns {string} URL pronta para abertura no WhatsApp
 */
export const getWhatsAppUrl = (message) => {
  const base = PETTOWN_DATA.brand.whatsapp;
  if (!message) return base;
  const separator = base.includes('?') ? '&' : '?';
  return `${base}${separator}text=${encodeURIComponent(message)}`;
};
