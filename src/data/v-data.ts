import { Code, Figma, Star } from "lucide-react";

export const navbarData = [
  { Logo: "/Logo.svg", href: "/" },
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Sobre mim",
    href: "#about",
  },
  {
    name: "Projetos",
    href: "#projects",
  },
  {
    name: "Depoimentos",
    href: "#testimonials",
  },
  {
    name: "FAQ",
    href: "#faq",
  },
  {
    name: "Contato",
    href: "#contact",
  },
  {
    btnText: "Entrar em contato via Whatsapp",
    href: "https://api.whatsapp.com/send?phone=5571999588246&text=Ol%C3%A1%20Gustavo!%20Vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.",
  },
];

export const techsData = [
  {
    title: "Tecnologias que utilizo",
    techs: ["/html.svg", "/css.svg", "/javascript.svg", "/typescript.svg", "/react.svg", "/vscode.svg", "/figma.svg", "/git.svg"]
  }
];


export const homeProjectData = [
  {
    title: "Projetos",
    cards: [
      {
        href: "",
        img: "/project1.png",
        title: "Projeto 1",
        date: "2025",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        tags: [
          { tag: "Figma" },
          { tag: "Web Development" },
          { tag: "Mobile App" },
        ],
        iconDesign: Figma,
        iconDev: Code,
      },
      {
        href: "",
        img: "/project2.png",
        title: "Projeto 2",
        date: "2025",
        description: "Projeto focado em UI/UX e design responsivo para web.",
        tags: [
          { tag: "UI/UX" },
          { tag: "Tailwind" },
          { tag: "Next.js" },
        ],
        iconDesign: Figma,
        iconDev: Code,
      },
      {
        href: "",
        img: "/project3.png",
        title: "Projeto 3",
        date: "2025",
        description: "Aplicativo mobile com integração de API e autenticação de usuário.",
        tags: [
          { tag: "Figma" },
          { tag: "Mobile App" },
          { tag: "Next.js" },
        ],
        iconDesign: Figma,
        iconDev: Code,
      },
      {
        href: "",
        img: "/project4.png",
        title: "Projeto 4",
        date: "2025",
        description: "Landing page interativa utilizando TailwindCSS e animações suaves.",
        tags: [
          { tag: "Web Development" },
          { tag: "UI/UX" },
          { tag: "Tailwind" },
        ],
        iconDesign: Figma,
        iconDev: Code,
      },
      {
        href: "",
        img: "/project1.png",
        title: "Projeto 5",
        date: "2025",
        description: "Dashboard para gerenciamento de dados com gráficos e relatórios dinâmicos.",
        tags: [
          { tag: "Figma" },
          { tag: "Web Development" },
          { tag: "UI/UX" },
        ],
        iconDesign: Figma,
        iconDev: Code,
      },
      {
        href: "",
        img: "/project5.png",
        title: "Projeto 6",
        date: "2025",
        description: "E-commerce moderno com carrinho de compras e integração de pagamentos.",
        tags: [
          { tag: "Tailwind" },
          { tag: "Next.js" },
          { tag: "Mobile App" },
        ],
        iconDesign: Figma,
        iconDev: Code,
      },
    ],
  },
];

export const testimonialData = [
  {
    title: "Depoimentos",
    description: "Feedbacks de clientes, parceiros e colegas que vivenciaram minha jornada profissional.",
    cards: [
     {
       description: "Ótimo trabalho! O site está responsivo e com uma ótima experiência de usuário, design excepcional com animações bem leves e reativas como eu esperava. Meus parabéns!",
        name: "Eduardo Sávio",
        work: "CEO Novascee",
        icon: Star
     },
     {
       description: "Irmão está muito bom o site, ficou perfeito!",
        name: "Matheus Hayash",
        work: "Médico",
        icon: Star
     },
     {
       description: "Site ficou muito bom, convence muito bem o cliente de fechar a compra, me poupa muito o trabalho de vender no boca a boca, entregou dentro do prazo e supriu todas as minhas expectativas",
        name: "Samuel Fernandes",
        work: "Coach de Bodybuilding",
        icon: Star
     },
     {
       description: "Guga, você é o cara, o site ficou muito bom, você conseguiu transmitir dentro do site exatamente o que eu te pedi.",
        name: "Maurício Sampaio",
        work: "Advogado",
        icon: Star
     },
     {
       description: "Ficou show Gustavo! O site ficou perfeito e transmitiu o que eu quero passar para os meus clientes!",
        name: "Mônica Aran",
        work: "Psicóloga",
        icon: Star
     },
    ]
  }
]

export const faqData = [
    {
        title: "Perguntas Frequentes",
        faq: [
            {
                question: "Como funciona meu processo criativo?",
                answer: "Meu processo criativo começa sempre pela pesquisa e entendimento do problema. Gosto de analisar referências, estudar o público-alvo e entender a experiência que precisa ser entregue. Depois parto para o esboço e prototipagem no Figma, onde organizo ideias visuais e fluxo de navegação. Só então transformo esse design em interfaces funcionais, aplicando boas práticas de UI/UX, acessibilidade e consistência visual. Sempre busco alinhar estética com usabilidade.",
            },
            {
                question: "Quais stacks você domina?",
                answer: "Domino as tecnologias essenciais para o desenvolvimento front-end moderno: HTML, CSS, JavaScript – base sólida para qualquer projeto web. React.js e Next.js – para criação de aplicações performáticas e escaláveis. Tailwind CSS e Styled Components – para estilização rápida e organizada. TypeScript – para segurança e tipagem em projetos maiores. Figma & Framer – para design de interfaces e prototipagem interativa.",
            },
            {
                question: "Quantos anos você está na área?",
                answer: "Atuo há cerca de 1 ano na área, dedicando esse tempo ao aprendizado constante e ao desenvolvimento de projetos práticos que me ajudaram a consolidar meus conhecimentos em UI/UX e front-end.",
            },
            {
                question: "Por que escolheu o UI/UX designer & desenvolvimento front-end?",
                answer: "Escolhi essa área porque gosto de transformar ideias em experiências digitais reais. O design me dá a chance de explorar minha criatividade, enquanto o front-end me permite ver tudo funcionando na prática. Essa combinação de design + código me motiva, porque consigo entregar produtos completos, bonitos e funcionais. Além disso, acredito que uma boa interface pode impactar positivamente a experiência das pessoas com tecnologia.",
            },
        ]
    }
]