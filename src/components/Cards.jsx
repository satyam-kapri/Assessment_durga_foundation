import { Card, Stack } from "@chakra-ui/react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useState,useEffect } from "react";
import Loader from "./Loader";
import axios from "axios";
const Cards = ({search}) => {
    const [data,setdata]=useState([]);
    const [filterdata,setfilterdata]=useState([]);
    const [loading,setloading]=useState(true);
    const options = {
        method: 'GET',
        url: 'https://uers-api.p.rapidapi.com/api/users',
        headers: {
          'x-rapidapi-key': '166c66ffd2msh2e4d14eed209c18p1ac09ajsnf4a13f85f57c',
          'x-rapidapi-host': 'uers-api.p.rapidapi.com'
        }
      };
     
    useEffect(()=>{
        async function fetch() {
            try {
                console.log("fetching");
                const response = await axios.request(options);
                setdata(response.data.data);
                setfilterdata(response.data.data);
                setloading(false);
              
            } catch (error) {
                console.error(error);
            }
          }
        if(data.length===0) fetch();
        if(search){
            let d=data.filter((item)=> item.Name?.toLowerCase().includes(search.toLowerCase()))
             setfilterdata(d);
        }
    },[search])
    
  return (<>
    {loading===true?<Loader></Loader>:
    <Stack gap="4" direction="row" wrap="wrap" style={{padding:'22px'}}>
          {filterdata.map((item)=>{
            return <>
          <Card.Root width="380px" key={item.id}>
            <Card.Body gap="2">
              <Avatar
                src="https://images.unsplash.com/photo-1511806754518-53bada35f930"
                size="lg"
                shape="rounded"
              />
              <Card.Title mb="2">{item.Name}</Card.Title>
              <Card.Description>
                Email: {item.Email}
              </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button colorPalette="teal" variant="outline">Block</Button>
              <Button colorPalette="teal" variant="solid">Details</Button>
            </Card.Footer>
          </Card.Root>
          </>
          })
}
    </Stack>
}
    </>  
  )
}
export default Cards