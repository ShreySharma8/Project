import './App.css'
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Navbar from './Component/Navbar';
import Homepage from './Component/Homepage';
import Todo from './Component/Todo';
import PasswordGenerator from './Component/PasswordGenerator'
import SearchFilter from './Component/SearchFilter';
import BgChanger from './Component/BackgroundColor';
import Form from './Component/Form.jsx'
import MyContacts from './Component/MyContact';

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
    {
      URL:"/MyContact",
      label: "MyContact",    
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
        <Route path='/MyContact' element={<MyContacts />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
