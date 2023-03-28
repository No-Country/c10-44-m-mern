import React, { useState } from 'react';
import { handleChange } from '@/utils/formHandlers';
import { Course, initialCourseState, CloudinaryResult } from '../../types.d';
//import { handleOpenWidget } from '@/utils/cloudinaryWidget';

declare global {
  interface Window {
    cloudinary: any;
  }
}

function NewCourse() {
  const [course, setCourse] = useState<Course>(initialCourseState);

  //Esta funcion sirve para subir fotos a cloudinary
  const handleOpenWidget = async (
    state: Course,
    setState: React.Dispatch<React.SetStateAction<Course>>
  ) => {
    var myWidget = await window.cloudinary.createUploadWidget(
      {
        cloudName: 'emme3d',
        uploadPreset: 'igsag6pi',
      },
      (error: unknown, result: CloudinaryResult) => {
        if (!error && result && result.event === 'success') {
          console.log('Done! Here is the image info: ', result.info);
          setState({
            ...state,
            image: result.info.url,
          });
        }
      }
    );
    myWidget.open();
  };

  return (
    <>
      <h2>Crear un nuevo curso</h2>
      <form>
        <label htmlFor='title'>Título del curso</label>
        <input
          type='text'
          name='title'
          id=''
          onChange={(e) => handleChange(e, course, setCourse)}
        />
        <label htmlFor='description'>Descripción</label>
        <textarea
          name='description'
          id=''
          cols={30}
          rows={10}
          placeholder='Describí el curso'
          onChange={(e) => handleChange(e, course, setCourse)}
        ></textarea>
        <div>
          <label htmlFor='image'>Imágen del curso</label>
          <button onClick={() => handleOpenWidget(course, setCourse)}>
            Subir imágen
          </button>
        </div>
        <button type='submit'>Crear curso</button>
      </form>
    </>
  );
}

export default NewCourse;
