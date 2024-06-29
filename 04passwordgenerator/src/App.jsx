import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState('')
  
  //new hook used useRef
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let pass = '';
    if(numberAllowed) str += '0123456789'
    if(characterAllowed) str += '!@#$%&*{}';

    for(let i=1; i<=length; i++){
      let randomChar = Math.floor(Math.random() * str.length +1);
      pass += str.charAt(randomChar);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword])
  
  const copyPasswordToClip = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])
  // passwordGenerator();
  console.log("hello")
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg text-purple-800 my-8 py-2 px-4 bg-gray-300'>
      <h1 className='text-center text-2xl'> Ankit Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
        <input 
        type="text"
        value= {password || ""}
        placeholder='Password'
        className='outline-none py-1 px-3 w-full'
        readOnly
        ref={passwordRef}
          />

          <button 
          onClick={copyPasswordToClip}
            className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={8}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
           />
           <label> Length {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox" 
          checked = {numberAllowed}
          id = "numberInput"
          onChange={()=>{ 
            setNumberAllowed((prev) => !prev)
          }} 
          /> <label htmlFor="numberInput">Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox" 
          checked = {characterAllowed}
          id = "characterInput"
          onChange={()=>{ 
            setCharacterAllowed((prev) => !prev)
          }} 
          /> <label htmlFor="characterInput">Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
