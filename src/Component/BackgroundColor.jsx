import { useState } from "react"


const BgChanger = () => {
     const [count, setCount] = useState(0)
     const [firstName, setfirstName] = useState("Sherlock")
     const [lastName, setlastName] = useState("Holmes")
  
     const [color, setColor] = useState("bg-slate-500");
     const handleCount = () => {
      setCount((count) => count + 1);
     }
     const [Text, setText] = useState(' ')
     const [inputText, setInputText] = useState(" Input text ")
     const [showText, setShowText] = useState(" Show text");
  
     const handleInput = (event) => {
       setInputText(event.target.value)
     }
     const handleInputText = (event) =>{
       setText(event.target.value)
     }
  return(
  
  <div className={`w-full h-screen p-3 relative font-medium ${color}`}>
   {/* {Project: Name Change  Backgorung Color Change} */}
  
          <div>
          <button className='text-black p-4 bg-purple-400 mt-1' onClick={handleCount}>Count is {count}</button>
  
          <h1 className='text-yellow-300 m-2'>My first name is {firstName} and last name is {lastName}</h1>
  
          <button className='text-black p-4 bg-green-300 mr-2' onClick={() => setfirstName("James")}>Change the first name</button>
          
          <button className='text-black p-4 bg-blue-300 mr-2' onClick={() => setlastName("Bond")}>Change the last name</button>
  
          <div className='justify-center items-center absolute bottom-32 left-80 px-10'>
  
            <button
            className='bg-red-500 hover:bg-red-700 text-black rounded-[25px] shadow-lg px-4 py-2 test-2xl m-2'
            onClick={() => setColor("bg-red-600")}
            >
            Red
            </button>
  
            <button
            className='bg-green-400 hover:bg-green-500 text-black rounded-[25px] shadow-lg px-4 py-2 test-2xl m-2'
            onClick={() => setColor("bg-green-600")}
            >
            Green
            </button>
  
            <button
            className='bg-blue-400 hover:bg-blue-500 text-black rounded-[25px] shadow-lg px-4 py-2 test-2xl m-2'
            onClick={() => setColor("bg-blue-600")}
            >
            Blue
            </button>
          </div>
          </div>
  {/* {Get input text with button} */}
  
          <div className='w-full flex flex-col justify-center items-center p-10'>
            <input type="text" className='shadow-lg p-2 w-[200px]' onChange={handleInput} />
             <button 
               className='p-2 bg-yellow-300 m-2 font-medium shadow-lg'
               onClick={()=> {setShowText(inputText);}}>Get text
             </button>
              <p className='text-3xl font-bold'>User text:
                <span className='text-yellow-300'>
                  { showText}
                </span>
              </p>
          </div>

  {/* {Get input text in real time} */}

          <div className='flex flex-col justify-center items-center'>
           <input type="text"  className='shadow-lg p-2 w-[200px]' onChange={handleInputText}/>
           <p className='text-3xl font-bold'>Text: 
           <span className='text-yellow-300'>{Text}</span>
           </p>
          </div>
  
  
        </div>
    )
  
   
}

export default BgChanger