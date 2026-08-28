/* Dados dos pontos do mapa — maré mansa · Barra Grande */
const MAP_POINTS = [
  {
    id: 'pousada',
    cat: 'base',
    name: 'Pousada Juventus',
    tag: 'Sua base',
    lat: -2.9120982, lng: -41.4036253,
    days: [8, 9, 10, 11, 12],
    desc: 'R. Raimundo Corrêa Silva, 90. Ponto de partida e chegada de todos os dias — confirme horário de check-in direto com a pousada.',
    meta: 'Check-in 14h · Checkout 12h30',
    link: 'https://www.google.com/maps/search/?api=1&query=Pousada+Juventus%2C+Barra+Grande%2C+Cajueiro+da+Praia+PI',
    linkLabel: 'Abrir no mapa'
  },
  {
    id: 'praia-bg',
    cat: 'natureza',
    name: 'Praia de Barra Grande',
    tag: 'Praia principal',
    lat: -2.9094061, lng: -41.411821,
    days: [8, 9, 10, 12],
    desc: 'O banco de areia aparece na maré baixa e as velas de kitesurf dominam o horizonte no fim de tarde. Centro de gravidade da viagem.',
    meta: 'Confira a tábua de marés antes de descer',
    link: 'https://www.google.com/maps/search/?api=1&query=Praia+de+Barra+Grande%2C+Cajueiro+da+Praia+PI',
    linkLabel: 'Abrir no mapa'
  },
  {
    id: 'cafezin',
    cat: 'comer',
    name: 'Cafézin BG',
    tag: 'Café · lanche',
    lat: -2.9085167, lng: -41.406712,
    days: [8],
    desc: 'Café, lanche ou refeição leve — boa escolha pra segurar o orçamento sem abrir mão de qualidade.',
    meta: '~ R$ 15–45 por pessoa',
    link: 'https://www.google.com/maps/search/?api=1&query=Cafezin+BG%2C+Rua+Pedro+de+Castro+Medeiros+538%2C+Barra+Grande+PI',
    linkLabel: 'Ver no Google Maps'
  },
  {
    id: 'villa-poetas',
    cat: 'comer',
    name: 'Villa dos Poetas',
    tag: 'Regional · pé na areia',
    lat: -2.9079947, lng: -41.4053327,
    days: [],
    desc: 'Regional, pé na areia. Bom para dividir baião, peixe ou porções — um clássico da rua principal.',
    meta: '~ R$ 45–90 por pessoa',
    link: 'https://www.google.com/maps/search/?api=1&query=Villa+dos+Poetas%2C+Rua+Pedro+de+Castro+Medeiros+548%2C+Barra+Grande+PI',
    linkLabel: 'Ver no Google Maps'
  },
  {
    id: 'vina',
    cat: 'comer',
    name: 'Vina Restaurante',
    tag: 'Ambiente arrumado',
    lat: -2.9094369, lng: -41.4073928,
    days: [10],
    desc: 'Opção de ambiente mais arrumado, avaliada como contemporânea. Bom candidato pra um jantar planejado com reserva.',
    meta: '~ R$ 70–130 por pessoa',
    link: 'https://www.google.com/maps/search/?api=1&query=Vina+Restaurante%2C+Rua+Pedro+de+Castro+Medeiros+660%2C+Barra+Grande+PI',
    linkLabel: 'Ver no Google Maps'
  },
  {
    id: 'manga-rosa',
    cat: 'comer',
    name: 'Manga Rosa',
    tag: 'Jantar especial',
    lat: -2.9088406, lng: -41.4080875,
    days: [11],
    desc: 'Mesas na areia, clima de praia à noite e cozinha regional. Costuma casa cheia — melhor reservar com antecedência.',
    meta: '~ R$ 80–160 por pessoa',
    link: 'https://www.google.com/maps/search/?api=1&query=Manga+Rosa+Bar+Restaurante%2C+Rua+Pontal+da+Barra+300%2C+Barra+Grande+PI',
    linkLabel: 'Ver no Google Maps'
  },
  {
    id: 'bar-beco',
    cat: 'comer',
    name: 'Bar do Beco',
    tag: 'Drinks',
    lat: -2.9091785, lng: -41.4087968,
    days: [],
    desc: 'Boa opção para um drink, sem compromisso de jantar. Fica ao lado da BGK, no Pontal da Barra.',
    meta: '~ R$ 30–80 por pessoa',
    link: 'https://www.google.com/maps/search/?api=1&query=Bar+do+Beco%2C+Rua+Pontal+da+Barra%2C+Barra+Grande+PI',
    linkLabel: 'Ver no Google Maps'
  },
  {
    id: 'ora-bolas',
    cat: 'comer',
    name: 'Sorveteria Ora Bolas',
    tag: 'Sobremesa',
    lat: -2.9087296, lng: -41.4079945,
    days: [9],
    desc: 'Parada casual pra fechar a noite com um sorvete, passeando pelas ruas centrais da vila.',
    meta: '$ · rápido',
    link: 'https://www.google.com/maps/search/?api=1&query=Sorveteria+Ora+Bolas%2C+Barra+Grande+PI',
    linkLabel: 'Ver no Google Maps'
  },
  {
    id: 'rodoviaria',
    cat: 'transporte',
    name: 'Terminal Rodoviário',
    tag: 'Embarque / desembarque',
    lat: -2.9175236, lng: -41.4079126,
    days: [],
    desc: 'Referência oficial de chegada e saída da vila. Estrutura simples — combine transfer com antecedência em vez de contar com táxi no local.',
    meta: 'Confirme o ponto exato antes da viagem',
    link: 'https://www.google.com/maps/search/?api=1&query=Terminal+Rodoviario+de+Barra+Grande%2C+Cajueiro+da+Praia+PI',
    linkLabel: 'Ver no Google Maps'
  },
  {
    id: 'guara',
    cat: 'transporte',
    name: 'Guará Transfer e Passeios',
    tag: 'Transfer e passeios',
    lat: -2.9106235, lng: -41.413169,
    days: [12],
    desc: 'Agência local bem avaliada para transfer de chegada/saída e passeios guiados. Combine motorista, horário e valor por WhatsApp.',
    meta: 'Confirmar por WhatsApp',
    link: 'https://wa.me/558695753664',
    linkLabel: 'Falar no WhatsApp'
  },
  {
    id: 'mercado-pomar',
    cat: 'comercio',
    name: 'Mercado Pomar',
    tag: 'Mercado · bebidas · itens rápidos',
    lat: -2.90876, lng: -41.40836,
    days: [8, 9, 10, 11, 12],
    desc: 'Mercado prático no Pontal da Barra para água, lanches, bebidas e compras de emergência. Confira estoque e preços no local.',
    meta: 'R. Pontal da Barra, 310 · (86) 99915-8000',
    link: 'https://www.google.com/maps/search/?api=1&query=Mercado+Pomar%2C+Rua+Pontal+da+Barra+310%2C+Barra+Grande+PI',
    linkLabel: 'Ver no Google Maps'
  },
  {
    id: 'pois-pronto',
    cat: 'comercio',
    name: 'Pois Pronto Conveniência',
    tag: 'Mercadinho · conveniência',
    lat: -2.90908, lng: -41.40618,
    days: [8, 9, 10, 11, 12],
    desc: 'Mercadinho de bairro para itens do dia a dia. Boa opção para montar a mochila de praia antes de sair.',
    meta: 'Praça Nossa Senhora da Conceição, 379',
    link: 'https://www.google.com/maps/search/?api=1&query=Pois+Pronto+Conveniencia%2C+Praca+Nossa+Senhora+da+Conceicao+379%2C+Barra+Grande+PI',
    linkLabel: 'Ver no Google Maps'
  },
  {
    id: 'lucivaldo',
    cat: 'comercio',
    name: 'Mercadinho O Lucivaldo',
    tag: 'Mercadinho de bairro',
    lat: -2.90818, lng: -41.40592,
    days: [8, 9, 10, 11, 12],
    desc: 'Alternativa de mercado na vila para compras básicas. Use o mapa para confirmar a localização e o horário no dia.',
    meta: 'Rua São Jorge, 55 · Barra Grande',
    link: 'https://www.google.com/maps/search/?api=1&query=Mercadinho+O+Lucivaldo%2C+Rua+Sao+Jorge+55%2C+Barra+Grande+PI',
    linkLabel: 'Ver no Google Maps'
  },
  {
    id: 'deposito-alan',
    cat: 'comercio',
    name: 'Depósito de Bebidas Alan',
    tag: 'Bebidas · gelo · conveniência',
    lat: -2.91076, lng: -41.40664,
    days: [8, 9, 10, 11, 12],
    desc: 'Ponto útil para bebidas e gelo; confirme a disponibilidade e o horário antes de caminhar até lá.',
    meta: 'Rua José Soares Veras, 83 · Barra Grande',
    link: 'https://www.google.com/maps/search/?api=1&query=Deposito+de+Bebidas+Alan%2C+Rua+Jose+Soares+Veras+83%2C+Barra+Grande+PI',
    linkLabel: 'Ver no Google Maps'
  },
  {
    id: 'barrinha',
    cat: 'longe',
    name: 'Praia da Barrinha',
    tag: 'Fora da vila · passeio opcional',
    lat: -2.9115872, lng: -41.3858876,
    days: [11],
    desc: 'Mais frequentada por moradores, ventos fortes e ótima para kitesurf. Fica a ~3 km da vila — peça transfer com preço fechado.',
    meta: 'Passeio opcional, não é essencial',
    link: 'https://www.google.com/maps/search/?api=1&query=Praia+da+Barrinha%2C+Cajueiro+da+Praia+PI',
    linkLabel: 'Ver no Google Maps'
  },
  {
    id: 'cajueiro-rei',
    cat: 'longe',
    name: 'Cajueiro Rei',
    tag: 'Fora da vila · passeio opcional',
    lat: -2.932211, lng: -41.3317114,
    days: [],
    desc: 'Considerado um dos maiores cajueiros do mundo. Fica mais longe (~15 km) — só vale se sobrar um dia livre.',
    meta: 'Passeio opcional, não é essencial',
    link: 'https://www.google.com/maps/search/?api=1&query=Cajueiro+Rei%2C+Cajueiro+da+Praia+PI',
    linkLabel: 'Ver no Google Maps'
  }
];

const MAP_CATEGORIES = {
  base:       { label: 'Hospedagem',  color: '#db6654' },
  comer:      { label: 'Onde comer',  color: '#183e3d' },
  natureza:   { label: 'Praia',       color: '#2f8f86' },
  transporte: { label: 'Transporte',  color: '#8a7a5c' },
  comercio:   { label: 'Comércio útil', color: '#b06b35' },
  longe:      { label: 'Fora da vila',color: '#6b6b9a' }
};

