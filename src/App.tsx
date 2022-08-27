import { Layout } from './components'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimeContextProvider } from './contexts/Anime.context';
import { AnimeListPage, CollectionDetailPage, CollectionsPage, DetailAnimePage } from './pages';


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
              <Route path="/collection/:id" element={<CollectionDetailPage />} />
            </Routes>
          </Layout>
        </div>
      </BrowserRouter>
    </AnimeContextProvider>
  );
}

export default App;
