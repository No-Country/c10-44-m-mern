import React from 'react';
import Layout from '@/components/Layout';
import NewCourse from '@/components/NewCourse';

function create() {
  return (
    <Layout
      title='Creá cursos, modulos o clases!'
      description='En esta sección podrás crear, modificar o eliminar cursos en tu plataforma'
    >
      <NewCourse />
    </Layout>
  );
}

export default create;
