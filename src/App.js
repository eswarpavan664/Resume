import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage';
import Previewpage from './components/Previewpage';
import ResumPage from './components/ResumPage';
import { Routes, Route, Link,BrowserRouter  } from "react-router-dom";
function App() {
  return (
     <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="Previewpage" element={<Previewpage />} />
        <Route path="ResumePage" element={<ResumPage />} />
      </Routes>
     </BrowserRouter>
  );
}

export default App;
