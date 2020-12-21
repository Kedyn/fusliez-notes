export interface ILanguage {
  id: string;
  label: string;
}
export interface IView {
  title: string;
  content: React.ReactNode;
  minor: boolean;
}

export interface IPerson {
  name: string;
  link: string;
}
