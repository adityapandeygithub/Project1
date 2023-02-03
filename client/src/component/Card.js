import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import { Box } from '@mui/system';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function ActionAreaCard({ item }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
        <img  
          src={item.image}
          style={{ width: "150px", maxHeight: "280px", padding: "30px"}} 
        />
          <Typography gutterBottom variant="subtitle1" sx={{ textAlign: "center" }}>
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center", my: 1 }}>
            {item.description.substr(0, 130)}...
          </Typography>
          <Box sx={{ my: 1}} >
            {[1, 2, 3, 4, 5].map((i) => {
              return Math.ceil(item.rating.rate) > i ? (
                <GradeIcon />
              ) : (
                <StarBorderIcon />
              );
            })}
          </Box> 
          <Typography gutterBottom variant="subtitle2" sx={{ textAlign: "center" }}>
            Price: ${item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}