import {Layout} from './components'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimeListPage from './components/pages/anime-list';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
        <Routes>
          <Route path="/" element={<AnimeListPage />} />
        </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
