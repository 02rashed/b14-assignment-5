import Nav from './components/Nav'
import Banner from './components/Banner'
import Technologies from './components/Technologies/Technologies'  
import type {ITechnology} from './types/technologyType'
import './App.css'
import { Suspense } from 'react'


const technologiesFetch = async () :Promise<ITechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

function App() {
  const technologiesPromise = technologiesFetch();
  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<div>Loading...</div>}> 
        <Technologies technologiesPromise={technologiesPromise} />  
      </ Suspense>  
    </>
  )
}

export default App
