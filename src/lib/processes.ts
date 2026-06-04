export type ProcessPage = {
  step: string;
  title: string;
  path: string;
};

export const processPages: ProcessPage[] = [
  { step: "1", title: "Process 1", path: "/process/1/" },
  { step: "2", title: "Process 2", path: "/process/2/" },
  { step: "3", title: "Process 3", path: "/process/3/" },
  { step: "4", title: "Process 4", path: "/process/4/" },
  { step: "5", title: "Process 5", path: "/process/5/" },
  { step: "6", title: "Process 6", path: "/process/6/" },
];

export function getProcessPage(step: string) {
  return processPages.find((page) => page.step === step);
}