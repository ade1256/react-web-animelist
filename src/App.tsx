import { Layout } from './components'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimeListPage from './pages/AnimeList';
import DetailAnimePage from './pages/DetailAnime';
import { AnimeContextProvider } from './contexts/Anime.context';
import CollectionsPage from './pages/Collections/CollectionsPage';

function App() {
  return (
    <AnimeContextProvider>
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Routes>
              <Route path="/" element={<AnimeListPage />} />
              <Route path="/detail/:id" element={<DetailAnimePage />} />
              <Route path="/collections" element={<CollectionsPage />} />
            </Routes>
          </Layout>
        </div>
      </BrowserRouter>
    </AnimeContextProvider>
  );
}

export default App;
