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
import { useSelector } from 'react-redux';
import { increment, decrement, incrementByAmt } from './store/counterSlice.js';
import { useDispatch  } from 'react-redux';

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

  const count = useSelector((state) => state.counter.value );
  const dispatchEvent = useDispatch();
  return (
    <BrowserRouter>
      <Navbar navData={navList} />
      <div className='text-3xl text-orange-400 flex justify-center'>
         <button className='text-black font-bold text-xl' onClick={()=> dispatchEvent(increment())}>Increment</button>
         {count}
         <button className='text-black font-bold text-xl' onClick={()=> dispatchEvent(decrement())}>Decrement</button>
         <button className='text-black font-bold text-xl' onClick={()=> dispatchEvent(incrementByAmt(5))}> IncrementByAmt</button>
      </div>
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
