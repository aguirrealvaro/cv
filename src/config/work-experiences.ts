import type { Experience } from "@/types";

export const workExperiences: Experience[] = [
  {
    company: {
      name: "Trafilea",
      url: "https://www.trafilea.com/",
    },

    modality: "remote",
    startDate: "2023-07-15",
    roles: ["Frontend Developer"],
    description: "Working as part of the checkout team for various e-commerce platforms.",
  },
  {
    company: {
      name: "PhinxLab",
      url: "https://www.phinxlab.com/",
    },
    subCompany: {
      name: "Blockfi",
      url: "https://blockfi.com/",
    },
    modality: "hybrid",
    startDate: "2020-01-01",
    endDate: "2022-12-01",
    roles: ["Frontend Developer", "Team Lead"],
    description:
      "Software factory where I worked for different clients, primarily BlockFi. I led a small team in the development of Trading, performing frontend tasks and launching high-impact features on the web app. I contributed to the success of the product, resulting in a significant improvement in the user experience and an increase in user engagement.",
  },
  {
    company: {
      name: "Agora",
      url: "https://agora.red/",
    },
    modality: "remote",
    startDate: "2021-01-01",
    endDate: "2021-10-01",
    roles: ["Frontend Developer"],
    description:
      "I worked in the early stages of the project. I was responsible for designing and implementing the user interface. I worked closely with the design team and end-users to create user-friendly interface designs.",
  },
  {
    company: {
      name: "Cohiue Software",
    },
    modality: "on-site",
    startDate: "2019-09-01",
    endDate: "2019-12-01",
    roles: ["FullStack Developer"],
    description:
      "I have built different custom websites for various clients using React and Node for frontend and backend, respectively. I have also worked with relational databases to store and access important site data.",
  },
];
