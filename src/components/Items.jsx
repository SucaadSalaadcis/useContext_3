import React, { useContext } from 'react'

import { ProductContext } from '../App'

function Items() {
    const data = useContext(ProductContext)

  return (
    <div>
        
        { data }
       
    </div>
  )
}


export default Items