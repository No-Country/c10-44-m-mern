import React from 'react';
import Layout from '@/components/Layout';
import NewCourse from '@/components/NewCourse';
import NewModule from '@/components/NewModule';
import NewClass from '@/components/NewClass';

function create() {
  return (
    <Layout
      title='Creá cursos, modulos o clases!'
      description='En esta sección podrás crear, modificar o eliminar cursos en tu plataforma'
    >
      <NewCourse />
      <NewModule />
      <NewClass />
    </Layout>
  );
}

export default create;
