import { Box, LinearProgress } from "@mui/material";

export default function Loading(){
    return(
        <Box sx={{ width: '100%', position: 'fixed' }}>
            <LinearProgress />
        </Box>
    );
}