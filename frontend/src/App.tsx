import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { DiscoverPage } from './pages/DiscoverPage';
import { SearchPage } from './pages/SearchPage';
import { PlayerProvider } from './components/music/PlayerContext';

function App() {
  return (
    <PlayerProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </PlayerProvider>
  );
}

export default App;
