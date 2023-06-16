import React from 'react';
import { Typography, Container, Box, List, ListItem, TextField, Button, Card, CardMedia } from '@mui/material';
import './App.css'; // Import the CSS file for additional styling

const LandingPage = () => {
  return (
    <Container maxWidth="sm" className="landing-page">
      <Typography variant="h4" align="center" gutterBottom>
        Bridal Makeup Services
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Welcome to our Bridal Makeup Studio
      </Typography>

      <Box mt={4}>
        <Typography variant="h5" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body2" paragraph>
          Your introductory text describing your bridal makeup services and what sets your studio apart.
        </Typography>
      </Box>

      <Box mt={4}>
        <Typography variant="h5" gutterBottom>
          Services
        </Typography>
        <List>
          <ListItem>Service 1</ListItem>
          <ListItem>Service 2</ListItem>
          <ListItem>Service 3</ListItem>
          {/* Add more services as needed */}
        </List>
      </Box>

      <Box mt={4}>
        <Typography variant="h5" gutterBottom>
          Portfolio
        </Typography>
        <Card>
          <CardMedia
            component="img"
            height="200"
            image="https://source.unsplash.com/random"
            alt="Bridal Makeup"
          />
        </Card>
        {/* Add more images or a gallery showcasing your previous bridal makeup work */}
      </Box>

      <Box mt={4}>
        <Typography variant="h5" gutterBottom>
          Contact Us
        </Typography>
        <form>
          <TextField label="Your Name" fullWidth />
          <TextField label="Your Email" fullWidth />
          <TextField label="Your Message" multiline rows={4} fullWidth />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Box>

      <Box mt={4} pb={2}>
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} Your Bridal Makeup Studio. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
}

export default LandingPage;
