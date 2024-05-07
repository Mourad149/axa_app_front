import { Paper, Table, TableBody,  TableCell,  TableContainer, TableHead, TableRow } from "@mui/material"
import React from "react"
import { makeStyles, withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { convertblobToImage } from "../utils";

const StyledTableHead =styled(TableHead)`
  background-color:#010143;
  
`



const StyledTableCell = styled(TableCell)`
    && { font-size:0.75em;
      
      color:white;}
`

const DevisTableComponent = ({devis})=>{
  
    return  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <StyledTableHead>
        <TableRow>
          <StyledTableCell  align="right" colSpan={1}>Numéro d’opportunité</StyledTableCell>
          <StyledTableCell align="right" colSpan={2}>Référence du dossier</StyledTableCell>
          <StyledTableCell align="right" colSpan={2}>Numéro SIRET SIREN</StyledTableCell>
          <StyledTableCell align="right">Affaire</StyledTableCell>
          <StyledTableCell align="right">Nom du client</StyledTableCell>
          <StyledTableCell align="right">Intermédiaire</StyledTableCell>
          <StyledTableCell align="right">Description succincte </StyledTableCell>
          <StyledTableCell align="right">Image en lien avec la description</StyledTableCell>
          <StyledTableCell align="right">Coassurance</StyledTableCell>
          <StyledTableCell align="right">Adresse de l'opération</StyledTableCell>
          <StyledTableCell align="right">Plan de l'adresse de l'opération</StyledTableCell>

          <StyledTableCell align="right">Descriptif de l'opération </StyledTableCell>
          <StyledTableCell align="right">Coût de l'opération</StyledTableCell>


          
        </TableRow>
      </StyledTableHead>
      <TableBody>
        {devis && devis.length>0 && devis.map((row) => (
          <TableRow
            key={row.num_opportunite}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell colSpan={1} align="right"  >
              {row.num_opportunite}
            </TableCell>
            <TableCell align="right"colSpan={2}>{row.ref_dossier}</TableCell>
            <TableCell align="right" colSpan={2}>{row.num_siret_siren}</TableCell>
            <TableCell align="right">{row.affaire}</TableCell>
            <TableCell align="right">{row.nom_client}</TableCell>
            <TableCell align="right">{row.intermediaire}</TableCell>
            <TableCell align="right">{row.desc_succ}</TableCell>
            <TableCell align="right">{ <img src= {`data:image/png;base64,${convertblobToImage(row.image_desc?.data)}`} />}</TableCell>
            <TableCell align="right">{row.is_coassurance}</TableCell>
            <TableCell align="right">{row.adresse}</TableCell>
            <TableCell align="right">{ <img src= {`data:image/png;base64,${convertblobToImage(row.plan_adress?.data)}`} />}</TableCell>
            <TableCell align="right">{row.desc_operation}</TableCell>
            <TableCell align="right">{row.cout_operation}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
}

export default DevisTableComponent