import './App.css'
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Navbar from './Component/Navbar';
import Homepage from './Component/Homepage';
import Todo from './Component/Todo';
import PasswordGenerator from './Component/PasswordGenerator'
import SearchFilter from './Component/SearchFilter';
import BgChanger from './Component/BackgroundColor';
import Form from './Component/Form';

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
    {
      URL:"/Form",
      label: "Form",    
    },
    
] 
  return (
    <BrowserRouter>
      <Navbar navData={navList} />
      <Routes>
        <Route path='/' element={<Homepage navData={navList} />} />
        <Route path='/PasswordGenerator' element={<PasswordGenerator />} />
        <Route path='/Todo' element={<Todo />} />
        <Route path='/SearchFilter' element={<SearchFilter />} />
        <Route path='/BgChanger' element={<BgChanger />} />
        <Route path='/Form' element={<Form/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
