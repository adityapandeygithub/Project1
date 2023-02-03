import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Main() {
    return (
        <Box>
            <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "80vh" }}>
                <Typography variant='h3'>Home Layout</Typography>
                <Typography variant='subtitle1' sx={{ width: "350px", textAlign: "center", my: 3, fontSize: "1.0rem" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </Typography>
                <Button variant="contained">Contact Me</Button>
            </Container>
        </Box>
    )
} 

export default Main