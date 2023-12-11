import './App.css'
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Navbar from './Component/Navbar';
import Homepage from './Component/Homepage';
import Todo from './Component/Todo';
import PasswordGenerator from './Component/PasswordGenerator'
import SearchFilter from './Component/SearchFilter';
import BgChanger from './Component/BackgroundColor';

function App() {

  const navList = [
    {
        URL: "/",
        label: "Homepage",
    },
    {
        URL: "/PasswordGenerator",
        label: "PasswordGenerator",
    },
    {
        URL: "/Todo",
        label: "TodoList",
    },
    {
      URL: "/SearchFilter",
      label: "SearchFilter",
    },
    {
      URL: "/BgChanger",
      label: "BgChanger",
    },
    
] 
  return (
    <BrowserRouter>
      <Navbar navData={navList} />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/PasswordGenerator' element={<PasswordGenerator />} />
        <Route path='/Todo' element={<Todo />} />
        <Route path='/SearchFilter' element={<SearchFilter />} />
        <Route path='/BgChanger' element={<BgChanger />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
