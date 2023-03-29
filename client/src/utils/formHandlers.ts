import { FormElements, Course } from '../../types.d';
import { validateForm } from './validations';

//Esta funcion es para actualizar el estado del form
export const handleChange = (
  e: React.ChangeEvent<FormElements>,
  state: Course,
  setState: React.Dispatch<React.SetStateAction<Course>>,
  errorState: React.Dispatch<React.SetStateAction<Course>>
) => {
  errorState(validateForm(state));
  let value = e.target.value;
  let name = e.target.name;
  setState({
    ...state,
    [name]: value,
  });
};

export const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log();
};
