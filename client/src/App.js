import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./component/Navbar"
import Main from "./component/Main"
import Card from "./component/Card"
import {Grid, Container, TextField, FormControlLabel, Button} from '@mui/material';

function App() {
const [posts, setPosts] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/posts");
      setPosts(data);
    };
    fetchData(); 
  }, []); 
  return (
    <>
      <Navbar />
      <Main />
      <Container>
      <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Product Title"
                  placeholder='Rings'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Product Description"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Product Rating"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Product Price"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid> 
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Image URL"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ p: 1, mt: 1 }}
            >
              ADD PRODUCT
            </Button>
              </Grid>
            </Grid>
      </Container>
      <Container sx={{ mt: 3}}>
      <Grid container spacing={1} >
      {
        posts && posts.map((item) => {
          return (
          <Grid key={item.id} item xs={4} sx={{ height: "600px"}}>
           <Card item={item} />
          </Grid>
          );
        })
      }
      </Grid>
      </Container>
    </>
  );
}
export default App;

adityapandey