// Genrating random password:
// we nned a string of letters both small and caps
// Think of a loop which can iterate over the string and get random index values
// the value count will be equal to my length hence the loop condition
// breakdown thge ranodm index step
// logic to concat string with numbers or charcater when checkboxes are checked
// In the end set the pasword in the state

import { useEffect, useRef, useState } from "react"
import { FaCopy } from "react-icons/fa";
import CustomTitle from "./CustomTitle";

const PasswordGenerator = () => {

    const [length, setLength] = useState(10);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState('')

    useEffect(() =>{
        const generateRandomPass = () => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if (numAllowed) str += "0123456789";
        if (charAllowed) str += ",.?/|!@#$%^&*"

        for(let i = 0 ; i < length; i++){
            let randomIndex = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(randomIndex);
        }
        setPassword(pass);
        console.log(pass)
        
    }
    generateRandomPass();
    }, [length, numAllowed, charAllowed]);

    let passwordRef = useRef(null);

    const copyPassword = () => {
        let currentPass = passwordRef.current.value;
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, currentPass.length);
        window.navigator.clipboard.writeText(password)
    };
    

    return(
        <>
         <div className="bg-slate-600 p-4 shadow-lg rounded w-full">
            
            <CustomTitle titleText="Password Generator" />

            <div className="flex justify-between w-full gap-2">
                <input type="text"
                className="w-full rounded"
                value={password}
                readOnly
                ref={passwordRef} 
                 />
                <button className="bg-white shadow py-1 px-2 rounded" onClick={copyPassword}>
                    <FaCopy />
                </button>
            </div>

            <div className="flex gap-x-2 text-sm">
                <div className="flex items-center gap-x-1 px-1 bg-slate-600 rounded">
                    <input 
                    id="lengthRange"
                    type="range"
                    min={6}
                    max={100} 
                    defaultValue={length}
                    onChange={(e) => setLength(e.target.value)}
                />
                <label htmlFor="lengthRange" className="text-orange-500">Length: {length}</label>
                </div>

                <div className="flex items-center gap-x-1 px-1 bg-slate-600 rounded">
                    <input 
                    type="checkbox" 
                    name="numberAllowed" 
                    id="numberAllowed" 
                    onChange={() => setNumAllowed((prev) => !prev)}/>
                    <label htmlFor="numberInput" className="text-orange-500">Allow Numbers</label>
                </div>

                <div className="flex items-center gap-x-1 px-1 bg-slate-600 rounded">
                    <input type="checkbox"
                    name="charAllowed"
                    id="charAllowed"
                    onChange={() => setCharAllowed((prev) => !prev)}
                    />
                    <label htmlFor="charAllowed" className="text-orange-500">Allow Character</label>
                </div>
            </div>
         </div>
           
        </>
    )
}

export default PasswordGenerator