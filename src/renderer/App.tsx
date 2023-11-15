import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import Three from './three';

function Main() {
  return (
    <div className="bg-black">
      <div className="w-full h-screen bg-black flex flex-col items-center justify-center gap-20 pr-10 py-20 scale-y-[0.9]">
        <div className=" w-full h-full">
          <Three />
        </div>
        <div className="text-[coral] h-[200px] text-[36px] font-space tracking-widest">
          Welcome to the Marriott travel terminal
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}
