import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StyledButton } from "./DevisPage";
import axios from "axios";

const StyledInputsContainer = styled(Box)`

  && {   
    display:flex;
    padding:20px;
    }
    `

    const StyledTextField = styled(TextField)`
    && { 
        margin-bottom:10px;
    }
    `

const AddDevisPage = ()=>{
    const [num_opportunite,setNumOpportunite] = useState("")
    const [ref_dossier,setRefDossier] = useState("")
    const [num_siret_siren,setNumSiretSiren] = useState("")
    const [affaire,setAffaire] = useState("")
    const [nom_client,setNomClient] = useState("")
    const [intermediaire,setIntermediaire] = useState("")
    const [desc_succ,setDescSucc] = useState("")
    const [image,setImage] = useState({name:""})
    const [is_coassurance,setIsCoassurance] = useState("")
    const [adresse,setAdress]=useState("")
    const [plan_adress,setPlanAdress] = useState({name:""})
    const [desc_operation,setDescOperation] = useState("")
    const [cout_operation1,setCoutOperation1] = useState(0)
    const [cout_operation2,setCoutOperation2] = useState(0)
    const [cout_operation,setCoutOperation] = useState(0)


    const handleDataSubmission = ()=>{
        const formData = new FormData();
        formData.append('num_opportunite', num_opportunite);
        formData.append('ref_dossier', ref_dossier);
        formData.append('num_siret_siren', num_siret_siren);
        formData.append('affaire', affaire);
        formData.append('nom_client', nom_client);
        formData.append('intermediaire', intermediaire);
        formData.append('desc_succ', desc_succ);
        formData.append('image_desc', image);
        formData.append('is_coassurance', is_coassurance);
        formData.append('adresse', adresse);
        formData.append('plan_adress', plan_adress);
        formData.append('desc_operation', desc_operation);
        formData.append('cout_operation', cout_operation);
        
        axios.post("http://localhost:5001/addDevis",formData,{headers:{'Content-Type': 'multipart/form-data'}}).then(res=>console.log(res)).catch(err=>console.error(err))
         }
    const handleFileChange = (event) => {
        const file = event.target.files[0];
      
        return file
      };

    useEffect(()=>{
    setCoutOperation(parseFloat(cout_operation1) + parseFloat(cout_operation2))
    },[cout_operation1,cout_operation2])
    return (
        <>
<StyledInputsContainer >
    <Box sx={{display:"flex",flexDirection:"column",width:"50%",padding:"0 20px 0 20px",height:"100%"}}>
    <StyledTextField label="Numéro d’opportunité " type="text" value={num_opportunite} onChange={e=>setNumOpportunite(e.target.value)} />
        <StyledTextField label="Référence du dossier" type="text" value={ref_dossier} onChange={e=>setRefDossier(e.target.value)} />
        <StyledTextField label="Numéro SIRET SIREN" type="text" value={num_siret_siren} onChange={e=>setNumSiretSiren(e.target.value)} />
        <StyledTextField label="Affaire" type="text" value={affaire} onChange={e=>setAffaire(e.target.value)} />
        <StyledTextField label="Nom du client" type="text" value={nom_client} onChange={e=>setNomClient(e.target.value)} />
        <StyledTextField label="Intermédiaire (Nom + Code portefeuille)" type="text" value={intermediaire} onChange={e=>setIntermediaire(e.target.value)} />
        <StyledTextField label="Description succincte" type="text" value={desc_succ} onChange={e=>setDescSucc(e.target.value)} multiline />
        <label for="image">Image en lien avec la description</label>

        <input name="image" type="file" onChange={(e)=>setImage(handleFileChange(e))}  />
    </Box>
       <Box sx={{display:"flex", flexDirection:"column",width:"50%",padding:"0 20px 0 20px"}}>
       <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Coassurance</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Non"
        name="radio-buttons-group"
        value={is_coassurance}
        onChange={(e)=>setIsCoassurance(e.target.value)}
      >
        <FormControlLabel value={true} control={<Radio />} label="Oui" />
        <FormControlLabel value={false} control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl>
    <StyledTextField label="Adresse" type="text" value={adresse} onChange={e=>setAdress(e.target.value)} multiline />
    <label for="plan">Plan de l'adresse de l'opération</label>
    <input type="file" name="plan"  onChange={(e)=>setPlanAdress(handleFileChange(e))} />
    <StyledTextField label="Descriptif détaillé de l'opération" type="text" value={desc_operation} onChange={e=>setDescOperation(e.target.value)} multiline />

    <Box sx={{display:"flex", flexDirection:"column" , width:"50%"}}>
        <Typography>Cout de l'opération</Typography>
        <StyledTextField label="Montant 1" type="number" value={cout_operation1} onChange={(e)=>setCoutOperation1(e.target.value)}/>
        <StyledTextField label="Montant 2" type="number" value={cout_operation2} onChange={(e)=>setCoutOperation2(e.target.value)}/>
        <StyledTextField label="Montant 3" type="number" disabled value={cout_operation} onChange={(e)=>setCoutOperation(e.target.value)}/>
    </Box>
       </Box>

    </StyledInputsContainer>
    <StyledInputsContainer>
        <StyledButton onClick={handleDataSubmission}>
            Soumettre devis
        </StyledButton>
    </StyledInputsContainer>
        

    </>
    )
}

export default AddDevisPage