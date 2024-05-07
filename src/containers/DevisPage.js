import { AppBar, Box, Button, Typography } from "@mui/material"
import React,{useEffect,useState}  from "react"
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AddIcon from '@mui/icons-material/Add';
import axios from "axios"
import DevisTableComponent from "../components/DevisTableComponent"
import styled from "styled-components"
import { useNavigate } from "react-router-dom";


const StyledTableContainer = styled(Box)`
    padding:60px;
`

export const StyledButtonContainer = styled(Box)`
   && { width:100%;
    display:flex;
    align-items:center;
    justify-content:center;

}
`

export const StyledButton =styled(Button)`
     &&  { 
        background-color :#010143;
        color:white;
        &:hover {
            background-color :white;
            color:#010143;
        }
    
    }
`
      
        
    
const DevisPage = ()=>{
    const [devis,setDevis] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:5001/devis").then((res)=>setDevis(res.data)).catch((err)=>console.error(err))
    },[])
    
    return (
        <>
        <StyledTableContainer>
        <DevisTableComponent style={{height:"70%"}} devis={devis}>hello</DevisTableComponent>

        </StyledTableContainer>
        <StyledButtonContainer>
            <StyledButton startIcon={<AddIcon/>} variant="standard" onClick={()=>navigate("/addDevis")}>
                Ajouter nouveau devis
            </StyledButton>
        </StyledButtonContainer>
        </>
    )
}

export default DevisPage