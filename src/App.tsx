import { Layout } from './components'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimeListPage from './pages/AnimeList';
import { AnimeContextProvider } from './contexts/Anime.context';

function App() {
  return (
    <AnimeContextProvider>
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Routes>
              <Route path="/" element={<AnimeListPage />} />
            </Routes>
          </Layout>
        </div>
      </BrowserRouter>
    </AnimeContextProvider>
  );
}

export default App;
