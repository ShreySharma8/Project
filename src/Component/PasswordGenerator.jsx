// Genrating random password:
// we nned a string of letters both small and caps
// Think of a loop which can iterate over the string and get random index values
// the value count will be equal to my length hence the loop condition
// breakdown thge ranodm index step
// logic to concat string with numbers or charcater when checkboxes are checked
// In the end set the pasword in the state

import { useEffect, useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import CustomTitle from "./CustomTitle";

const PasswordGenerator = () => {
  const [length, setLength] = useState(10);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    const generateRandomPass = () => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if (numAllowed) str += "0123456789";
      if (charAllowed) str += ",.?/|!@#$%^&*";

      for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * str.length);
        pass += str.charAt(randomIndex);
      }

      setPassword(pass);
    };

    generateRandomPass();
  }, [length, numAllowed, charAllowed]);

  let passwordRef = useRef(null);

  const copyPassword = () => {
    let currentPass = passwordRef.current.value;
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, currentPass.length);
    window.navigator.clipboard.writeText(password);
  };

  return (
    <div className="bg-gray-900 p-8 shadow-lg rounded-md w-[600px] mx-auto mt-10 text-white hover:shadow-xl transition duration-300">
      <CustomTitle titleText="Password Generator" />

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <input
            type="text"
            className="w-full bg-gray-800 text-gray-300 p-3 rounded"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 py-3 px-6 rounded transition duration-300"
            onClick={copyPassword}
          >
            <FaCopy className="text-white" />
          </button>
        </div>

        <div className="flex items-center gap-6 text-lg">
          <div className="flex items-center gap-4">
            <label htmlFor="lengthRange" className="text-orange-500">
              Length:
            </label>
            <input
              id="lengthRange"
              type="range"
              min={6}
              max={20}
              defaultValue={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-32"
            />
            <span className="text-gray-400">{length}</span>
          </div>

          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              id="numberAllowed"
              onChange={() => setNumAllowed((prev) => !prev)}
            />
            <label htmlFor="numberAllowed" className="text-orange-500">
              Allow Numbers
            </label>
          </div>

          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              id="charAllowed"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charAllowed" className="text-orange-500">
              Allow Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;


