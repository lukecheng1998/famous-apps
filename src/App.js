import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Minecraft from './components/Minecraft';
import Twitter from './components/Twitter';
import YouTube from './components/YouTube';
import TikTok from './components/TikTok';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Minecraft" element ={<Minecraft />} />
        <Route path="TikTok" element={<TikTok />} />
        <Route path="Twitter" element={<Twitter />} />
        <Route path="YouTUbe" element={<YouTube />} />
      </Route>
    </Routes>
  );
}

export default App;
