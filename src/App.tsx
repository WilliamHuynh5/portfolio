import './App.css';
import NavBar from './components/navbar';
import HomePage from './pages/home_page';
import ProjectsPage from './pages/projects_page';
import GalleryPage from './pages/gallery_page';
import { Routes, Route } from 'react-router-dom';

function App() {

  const routes = [
    { path: '/', label: 'about' },
    { path: '/projects', label: 'projects' },
    { path: '/gallery', label: 'gallery' },
    // { path: '/resume', label: 'resumé' }
  ];

  return (
    <>
      <NavBar routes={routes}></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
        <Route path="/gallery" element={<GalleryPage />}></Route>
      </Routes>
    </>

  );
}

export default App;
