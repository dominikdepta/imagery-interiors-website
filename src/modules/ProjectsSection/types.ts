export interface ProjectsSliderItemTag {
  name: string;
}

export interface ProjectsSliderItemProps {
  id: string;
  alt: string;
  href: string;
  img: string;
  title: string;
  date?: string;
  tags?: ProjectsSliderItemTag[] | undefined;
}

export interface ProjectsSliderProps {
  items: ProjectsSliderItemProps[];
}
