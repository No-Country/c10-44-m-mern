import { Course } from '../../types';

export const validateForm = (data: Course): Course => {
  let error: Course = {
    title: '',
    description: '',
    image: '',
  };
  if (!data.title.length) {
    error.title = 'El nombre es necesario';
  }
  if (!data.description.length) {
    error.description = 'Es necesario agregar una descripción del curso';
  }
  if (!data.image.length) {
    error.image = 'Agregá una imágen';
  }
  return error;
};
