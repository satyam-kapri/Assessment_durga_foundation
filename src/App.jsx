
import './App.css'
import Middlebar from './components/Middlebar'
import Topbar from './components/Topbar'
import { Separator } from "@chakra-ui/react"
import Cards from './components/Cards'
import { useState } from 'react'

function App() {

  const [search,setSearch]=useState("");
 
  return (
      <>
        <Topbar search={search} setSearch={setSearch}></Topbar>
        <Middlebar></Middlebar>
        <Separator/>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:'500px'}}>
        <Cards search={search} ></Cards>
        </div>
      </>
  )
}

export default App
