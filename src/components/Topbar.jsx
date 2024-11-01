import React from 'react'
import { InputGroup } from "@/components/ui/input-group"
import { LuSearch } from "react-icons/lu"
import { Input } from '@chakra-ui/react'
import { Avatar } from "@/components/ui/avatar"
function Topbar({search,setSearch}) {
   
  return (
    <div style={{display:'flex',justifyContent:'space-between',}}>
        <InputGroup
        startElement={<LuSearch />}
        >
             <Input placeholder='Search' size={'lg'} width={'20rem'} onChange={(e)=>{setSearch(e.target.value)}} value={search}></Input>
        </InputGroup>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'160px'}}>
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
        <span>Segun Adebayo</span>
        </div>
    </div>
  )
}

export default Topbar