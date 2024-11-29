
import { Link, useLoaderData } from 'react-router-dom';
import './App.css'
import { useState } from 'react';
import Coffee from './Components/Coffee';

function App() {
  const coffees = useLoaderData();
  

  // better use tanstack query or similar packages
  const [loadedCoffees, setLoadedCoffees] = useState(coffees);

  return (
    <>
      
      <div>
            <h2>Welcome Coffee home: {loadedCoffees.length}</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {
                    loadedCoffees.map(coffee => <Coffee
                        coffee={coffee}
                        loadedCoffees={loadedCoffees}
                        setLoadedCoffees={setLoadedCoffees}
                        key={coffee._id}
                    ></Coffee>)
                }
               
            </div>
            <button className='btn'><Link to='addCoffee'>Add Coffee</Link></button>
        </div>
      
      
    </>
  )
}

export default App
