import { Code, Figma } from "lucide-react";

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
    href: "#project",
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
    href: "#",
  },
];

export const techsData = [
  {
    title: "Tecnologias que utilizo",
    techs: ["/html.svg", "/css.svg", "/javascript.svg", "/typescript.svg", "/react.svg", "/vscode.svg", "/figma.svg", "/git.svg"]
  }
];

export const aboutData = [
  {
    cards: [
      
    ]
  }
]

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
        img: "/project5.png",
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
        img: "/project6.png",
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


export const faqData = [
    {
        title: "Perguntas Frequentes",
        faq: [
            {
                question: "Como funciona meu processo criativo?",
                answer: "",
            },
            {
                question: "Quais stacks você domina?",
                answer: "",
            },
            {
                question: "Quantos anos você está na área?",
                answer: "",
            },
            {
                question: "Por que escolheu o UI/UX designer & desenvolvimento front-end?",
                answer: "",
            },
        ]
    }
]