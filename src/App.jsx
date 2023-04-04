import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import NavBar from './NavBar';
import CartContainer from './CartContainer';


function App() {
  //const [count, setCount] = useState(0)

  return (
    <main className="App">
      <NavBar />
      <CartContainer />
    </main>
  )
}

export default App;
