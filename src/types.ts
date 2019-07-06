export type Link = {
  url: string;
  icon: any;
};

export type Tag = {
  name: string;
  color: string;
};

export type Project = {
  image: string;
  name: string;
  date: string;
  copy: string;
  tags: Tag[];
  links: Link[];
};
