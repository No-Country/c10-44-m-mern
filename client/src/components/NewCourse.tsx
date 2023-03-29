import React, { useEffect, useState } from 'react';
import { handleChange } from '@/utils/formHandlers';
import { Course, initialCourseState } from '../../types.d';
import { handleOpenWidget } from '@/utils/cloudinaryWidget';

function NewCourse() {
  const [course, setCourse] = useState<Course>(initialCourseState);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://upload-widget.cloudinary.com/global/all.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(course);
  };

  return (
    <>
      <h2>Crear un nuevo curso</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='title'>Título del curso</label>
        <input
          type='text'
          name='title'
          value={course.title}
          id='title'
          onChange={(e) => handleChange(e, course, setCourse)}
        />
        <label htmlFor='description'>Descripción</label>
        <textarea
          name='description'
          id='description'
          value={course.description}
          cols={30}
          rows={10}
          placeholder='Describí el curso'
          onChange={(e) => handleChange(e, course, setCourse)}
        ></textarea>
        <div>
          <label htmlFor='image'>Imágen del curso</label>
          <button
            type='button'
            onClick={() => handleOpenWidget(course, setCourse)}
          >
            Subir imágen
          </button>
        </div>
        <button type='submit'>Crear curso</button>
      </form>
    </>
  );
}

export default NewCourse;
