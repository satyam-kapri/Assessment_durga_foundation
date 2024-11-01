import React, { useState } from 'react'
import { Heading,Highlight } from '@chakra-ui/react'
function Middlebar() {
    const [clicked,setClicked]=useState("All");
    const style1={
        backgroundColor:"#0d9488",
        borderRadius:10,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'70px',
        cursor:'pointer'
    }
    const style2={
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
         width:'70px',
        cursor:'pointer'
    }
  return (
    <div style={{display:'flex',justifyContent:'space-between',marginTop:'50px',marginBottom:'10px'}}>
        <Heading size="3xl" letterSpacing="tight">
        <Highlight query="Details" styles={{ color: "teal.600" }}>
           Employees Details
        </Highlight>
      </Heading>
      <div style={{width:'200px',display:'flex',justifyContent:'space-between'}}>
        <span style={clicked==="All"?style1:style2} onClick={()=>{setClicked("All")}}>All</span>
        <span style={clicked==="Active"?style1:style2} onClick={()=>{setClicked("Active")}}>Active</span>
        <span style={clicked==="Inactive"?style1:style2} onClick={()=>{setClicked("Inactive")}}>Inactive</span>
      </div>
    </div>
  )
}

export default Middlebar