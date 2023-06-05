/**
 * Analytics Event
 */
export type LogEventType = {
  eventName: string;
  eventValue?: string;
};

export type YearProps = {
  yearNumber?: string;
};

export type KnowledgeItem = {
  background: string;
  color: string;
  title: string;
};

export type DataSetType = {
  Knowledges: any[];
  Projects: any[];
};

export type Knowledges = {
  title: string;
  background: string;
  color: string;
};

export type Projects = {
  title: string;
  img: string;
  link: string;
  description: string;
  languages: string;
};

export type ProjectProps = {
  title: string;
  link: string;
  img: string;
  description: string;
  languages: string;
};
