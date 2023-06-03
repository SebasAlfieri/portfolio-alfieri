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
};

export type Knowledges = {
  title: string;
  background: string;
  color: string;
};
