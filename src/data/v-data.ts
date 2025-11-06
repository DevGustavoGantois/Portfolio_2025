import { Code, Figma, Link, Linkedin, Star } from "lucide-react";

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
        href: "https://fat-food-landing-page.vercel.app/",
        img: "/project1.png",
        title: "FatFood App",
        date: "2025",
        description: "O Fat Food é um projeto pessoal desenvolvido como landing page para um aplicativo fictício de delivery de fast food. A ideia foi criar uma interface moderna, responsiva e atraente, destacando os principais recursos do app.",
        tags: [
          { tag: "Figma" },
          { tag: "Web Development" },
          { tag: "Mobile App" },
        ],
        iconFigma: Figma,
        figmaLink: "https://www.figma.com/design/9qKB44W6DqNjgNU4JI99XZ/FatFood---App?node-id=0-1&t=QFCNGvOu7B55xkS5-1",
        iconDev: Code,
        websiteLink: "https://fat-food-landing-page.vercel.app/",
        iconLinkedin: Linkedin,
        linkedinLink: "https://www.linkedin.com/posts/gustavo-gantois-2839b5168_uiux-uidesign-uxdesign-ugcPost-7367604185418199040-9PVm?utm_source=share&utm_medium=member_desktop&rcm=ACoAACgDykMBFgZD_NUaEB5TxpVgl6v9G9zQn_4",
        iconLink: Link,
      },
      {
        href: "https://www.bonfimtower.com.br/",
        img: "/project2.png",
        title: "Bonfim Tower - Landing Page",
        date: "2025",
        description: "O Bonfim Tower é uma landing page institucional criada para apresentar um empreendimento imobiliário em Senhor do Bonfim (BA).",
        tags: [
          { tag: "UI/UX" },
          { tag: "Tailwind" },
          { tag: "Next.js" },
        ],
        iconFigma: Figma,
        figmaLink: "https://www.figma.com/design/SugKgi84yQrT8eM0ZKFqNu/Bonfim-Tower?node-id=23-4942&t=ncD1r6GVXm5HzCHx-1",
        iconDev: Code,
        websiteLink: "https://www.bonfimtower.com.br/",
        iconLinkedin: Linkedin,
        linkedinLink: "#",
        iconLink: Link,
      },
      {
        href: "https://www.figma.com/design/IDIj5CPzuqNBldtK4bvX43/TechBank-App?node-id=1-9&t=Kg4GGtEg2rF0XOVT-1",
        img: "/project3.png",
        title: "TechBank App - Landing page & App Mobile",
        date: "2025",
        description: "O Tech Bank é um projeto conceitual de Aplicativo Mobile para um banco digital fictício, com foco em transmitir segurança, inovação e acessibilidade.",
        tags: [
          { tag: "Figma" },
          { tag: "Mobile App" },
          { tag: "Next.js" },
        ],
        iconFigma: Figma,
        figmaLink: "https://www.figma.com/design/IDIj5CPzuqNBldtK4bvX43/TechBank-App?node-id=1-9&t=Kg4GGtEg2rF0XOVT-1",
        iconDev: Code,
        websiteLink: "",
        iconLinkedin: Linkedin,
        linkedinLink: "#",
        iconLink: Link,
      },
      {
        href: "https://luciana-menezes-arquitetura.vercel.app/",
        img: "/project4.png",
        title: "Portfólio Arquitetura - Luciana Menezes",
        date: "2025",
        description: "Landing page do portfólio da arquiteta Luciana Menezes, apresentando projetos residenciais e comerciais de forma moderna e elegante.",
        tags: [
          { tag: "Web Development" },
          { tag: "UI/UX" },
          { tag: "Tailwind" },
        ],
        iconFigma: Figma,
        figmaLink: "https://www.figma.com/design/uV0S7E7lh3KNHEnAFbxmc9/Portofolio-Luciana-Menezes?node-id=0-1&t=yXWdSawTIDz6KdQ2-1",
        iconDev: Code,
        websiteLink: "https://luciana-menezes-arquitetura.vercel.app/",
        iconLinkedin: Linkedin,
        linkedinLink: "https://www.linkedin.com/posts/gustavo-gantois-2839b5168_uiux-design-uiuxdesign-activity-7382067334636539904-U8_v?utm_source=share&utm_medium=member_desktop&rcm=ACoAACgDykMBFgZD_NUaEB5TxpVgl6v9G9zQn_4",
        iconLink: Link,
      },
      {
        href: "https://www.figma.com/design/8kgdIsAbeE403azWBxTBsM/Finexa-Dashboard---Bank?node-id=0-1&t=1uRZLCpJzPhJ6dgE-1",
        img: "/project5.png",
        title: "Finexa - Banking Dashboard",
        date: "2025",
        description: "Finexa é uma plataforma web no modelo SaaS desenvolvida para oferecer uma experiência moderna de gestão bancária digital.",
        tags: [
          { tag: "Figma" },
          { tag: "Web Development" },
          { tag: "UI/UX" },
        ],
        iconFigma: Figma,
        figmaLink: "https://www.figma.com/design/8kgdIsAbeE403azWBxTBsM/Finexa-Dashboard---Bank?node-id=0-1&t=1uRZLCpJzPhJ6dgE-1",
        iconDev: Code,
        websiteLink: "",
        iconLinkedin: Linkedin,
        linkedinLink: "https://www.linkedin.com/posts/gustavo-gantois-2839b5168_uiux-uidesign-uxdesign-activity-7379258831085842434-uSMz?utm_source=share&utm_medium=member_desktop&rcm=ACoAACgDykMBFgZD_NUaEB5TxpVgl6v9G9zQn_4",
        iconLink: Link,
      },
      {
        href: "https://www.figma.com/design/1NqXetZ416QwR9svSo7s5w/Flow-Music---App-Mobile?node-id=0-1&t=pZP8SQoBaS4uXtAa-1",
        img: "/project6.png",
        title: "Flow Music - Mobile App",
        date: "2025",
        description: "O Flow é um aplicativo de música que transforma cada momento em uma trilha sonora única. Com uma interface intuitiva e moderna, você pode descobrir novos artistas e músicas que se adaptam ao seu estilo.",
        tags: [
          { tag: "UI/UX Design" },
          { tag: "Figma" },
          { tag: "Mobile App" },
        ],
        iconFigma: Figma,
        figmaLink: "https://www.figma.com/design/1NqXetZ416QwR9svSo7s5w/Flow-Music---App-Mobile?node-id=0-1&t=pZP8SQoBaS4uXtAa-1",
        iconDev: Code,
        websiteLink: "",
        iconLinkedin: Linkedin,
        linkedinLink: "https://www.linkedin.com/feed/update/urn:li:activity:7386868967119876097/",
        iconLink: Link,
      },
      {
        href: "https://www.figma.com/design/76PzbfDCJjevgaDjT592z6/Headspace?node-id=46-691&t=6J17ioYkDgeZLiTN-1",
        img: "/project7.png",
        title: "Headspace - Landing Page",
        date: "2025",
        description: "O Flow é um aplicativo de música que transforma cada momento em uma trilha sonora única. Com uma interface intuitiva e moderna, você pode descobrir novos artistas e músicas que se adaptam ao seu estilo.",
        tags: [
          { tag: "UI/UX Design" },
          { tag: "Figma" },
          { tag: "Landing Page" },
          { tag: "Redesign" },
          { tag: "Website" },
        ],
        iconFigma: Figma,
        figmaLink: "https://www.figma.com/design/1NqXetZ416QwR9svSo7s5w/Flow-Music---App-Mobile?node-id=0-1&t=pZP8SQoBaS4uXtAa-1",
        iconDev: Code,
        websiteLink: "",
        iconLinkedin: Linkedin,
        linkedinLink: "#",
        iconLink: Link,
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