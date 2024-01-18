export type Company = {
  name: string;
  url?: string;
};

export type Experience = {
  company: Company;
  subCompany?: Company;
  modality: "remote" | "hybrid" | "on-site";
  startDate: string;
  endDate?: string;
  roles: string[];
  description?: string;
};
