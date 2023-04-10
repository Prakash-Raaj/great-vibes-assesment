import { useEffect, useRef, useState } from 'react';
import './App.css';
import Jobs from './Components/Jobs';
import NavBar from './Components/NavBar';
import FormBuilder from './Components/FormBuilder';

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  return (
    <div className="bg-[#F5F5F5]">
      {isFormVisible === true ? (
        <FormBuilder setIsFormVisible={setIsFormVisible} />
      ) : (
        <>
          <NavBar setIsFormVisible={setIsFormVisible} />
          <Jobs />
        </>
      )}
    </div>
  );
}

export default App;
