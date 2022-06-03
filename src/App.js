import logo from './logo.svg';
import './App.css';
import {
  useNavigate ,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
 
import Previewpage from './components/Previewpage';
import ResumPage from './components/ResumPage';
import Loading from './pages/Loading';
import FinalScreen from './components/FinalScreen';
import MainPage from './pages/MainPage';
 
 
function App() {
  return (
    <BrowserRouter>
    <Routes>
      

 
          
          <Route path="/" element={<Loading />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/ResumePage" element={<ResumPage />} />
          <Route path="/Previewpage" element={<Previewpage />} />
          <Route path="/FinalScreen" element={<FinalScreen />} />
         
         
    </Routes>
  </BrowserRouter>
  );
}

export default App;
