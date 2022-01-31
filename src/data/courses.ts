import { Courses } from "../../@types/courses";

export const courses: Courses[] = [
  {
    id: Math.floor(Math.random() * 100),
    title: "Responsividade na prática",
    description:
      "Aprenda a cria sites responsivos usando as melhores\n técnicas do mercado.",
    slug: "responsividade-na-pratica",
    image:
      "https://images.unsplash.com/photo-1583339793403-3d9b001b6008?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aHRtbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    classification: 4.5,
    hours: 84,
    price: 29.9,
    isHighlighted: false,
    department: "Desenvolvimento Web",
    tags: ["web", "chakra-ui", "responsividade"],
  },
  {
    id: Math.floor(Math.random() * 100),
    title: "React para iniciantes",
    description:
      "Um dos melhores frameworks do mercado em um curso\n totalmente voltado ao iniciante",
    slug: "react-para-iniciantes",
    image:
      "https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    classification: 4.5,
    hours: 48,
    price: 19.9,
    isHighlighted: false,
    department: "Desenvolvimento Web",
    tags: ["react", "web", "javascript", "css"],
  },
  {
    id: Math.floor(Math.random() * 100),
    title: "Aprenda Python",
    description: "Aprenda python de maneira simples e dinâmica",
    slug: "aprenda-python",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    classification: 3.9,
    hours: 120,
    price: 100,
    isHighlighted: true,
    department: "Data science",
    tags: ["data-science", "python", "snake"],
  },
  {
    id: Math.floor(Math.random() * 100),
    title: "Electron",
    description:
      "Electron, uma técnologia que vai mudar\n o desenvolvimento desktop",
    slug: "electron",
    image:
      "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    classification: 5,
    hours: 240,
    price: 520,
    isHighlighted: true,
    department: "Desenvolvimento Desktop",
    tags: ["desktop", "javascript", "typescript"],
  },
  {
    id: Math.floor(Math.random() * 100),
    title: "Futter",
    description:
      "Aprenda a cria aplicativos mobile\n usando uma ferramenta incrível",
    slug: "flutter",
    image:
      "https://images.unsplash.com/photo-1628277613967-6abca504d0ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    classification: 4.5,
    hours: 84,
    price: 39.9,
    isHighlighted: false,
    department: "Desenvolvimento Mobile",
    tags: ["dart", "mobile", "covid"],
  },
];
