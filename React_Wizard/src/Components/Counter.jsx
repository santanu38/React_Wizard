import React,{useState} from "react";
import {Button,Container,Typography} from '@mui/material'
import {animated,useSpring} from "react-spring"

const Counter=()=>{
    const [count,setCount]=useState(0)
    //Background color animation using react-spring
    const bgStyle=useSpring({
        height:`${Math.min(count*10,100)}vh`,
        backgroundColor: `rgba(0,150,255,${Math.min(count/10,1)})`,
    })
    return(
       <animated.div style={{ 
        ...bgStyle, 
        width: "300px",  // Fixed width 
        height: "400px", // Fixed height  
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        }}>
         <Container style={{textAlign:"center",padding:20,backgroundColor:"white",borderRadius:10}}>
            <Typography variant="h4">{count}</Typography>
            <Typography variant="h4">Counter</Typography>
            <Button variant="contained" color="primary" onClick={()=>setCount(count+1)}>
                +
            </Button>
            <Button variant="contained" color="primary"  style={{margin:10}} onClick={()=>setCount(0)}>
                Reset
            </Button>
            <Button variant="contained" color="primary"  style={{margin:10}} onClick={()=>setCount(count-1)}>
                -
            </Button>
            
         </Container>
       </animated.div>
    )
}
export default Counter