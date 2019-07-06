export type Link = {
  url: string;
  name: string;
};

export type Tag = {
  name: string;
  color: string;
  links: Link[];
};

export type Project = {
  image: string;
  name: string;
  date: string;
  copy: string;
  tags: Tag[];
};
