/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Magazine as LenguaPage } from './components/Magazine';
import { Layout } from './components/Layout';
import { CoverPage } from './components/Pages';
import { 
  SocialesPage, 
  CienciasPage, 
  ECAPage, 
  MatemáticasPage, 
  InglesPage 
} from './components/OtherSubjects';

export default function App() {
  const pages = [
    { id: 'cover', title: 'Portada e Índice', component: <CoverPage /> },
    { id: 'lengua', title: 'Lengua y Literatura', component: <LenguaPage /> },
    { id: 'sociales', title: 'Estudios Sociales', component: <SocialesPage /> },
    { id: 'ciencias', title: 'Ciencias Naturales', component: <CienciasPage /> },
    { id: 'eca', title: 'ECA (Cultura y Arte)', component: <ECAPage /> },
    { id: 'mate', title: 'Matemáticas', component: <MatemáticasPage /> },
    { id: 'ingles', title: 'Inglés', component: <InglesPage /> }
  ];

  return <Layout pages={pages} />;
}
