//Este archivo sirve para guardar tipos e interfaces para despues
//importarlas, de esta manera se logra tener un codigo mas limpio

export interface Course {
  title: string;
  description: string;
  image: string;
}
export const initialCourseState: Course = {
  title: '',
  description: '',
  image: '',
};

export type FormElements = HTMLInputElement | HTMLTextAreaElement;

export interface CloudinaryResult {
  event: string;
  info: {
    url: string;
  };
}

//Interface para el componente Layout
export interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
}
