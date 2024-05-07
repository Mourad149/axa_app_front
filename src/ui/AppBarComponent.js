import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React  from  "react"



const AppBarComponent = ({children})=>{
    return    <Box sx={{ flexGrow: 1 }}>

            <AppBar  position="static" style={{backgroundColor:"#010143"}}  >
                <Toolbar >
                <Typography>AXA</Typography>
                </Toolbar>
            </AppBar>
            <Box>
            {children}

            </Box>
    </Box>
};


export default AppBarComponent