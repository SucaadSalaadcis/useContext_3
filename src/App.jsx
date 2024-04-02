import React, { createContext } from 'react'
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';


 export const ProductContext = createContext();

function App() {
  return (
    <ProductContext.Provider value="Laptop">
      <div>
        
        <h3>useContext Hook</h3>
        <Sidebar/>
        <Widget/>

      </div>
    </ProductContext.Provider>
  )
}

export default App