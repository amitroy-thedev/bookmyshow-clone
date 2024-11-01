import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* I've not made any extra page for this below paths, i've just added this to show the active state to the navbars */}
      <Route path="/movies" element={<Home />} />
      <Route path="/life-events" element={<Home />} />
      <Route path="/profile" element={<Home />} />
    </Routes>
  );
}