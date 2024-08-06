// pages/404.tsx
import * as React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

const Custom404: React.FC = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <Container>
      <Box textAlign="center" mt={5}>
        <Typography variant="h1" component="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" gutterBottom>
          The page you are looking for does not exist.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleGoHome}>
          Go to Home
        </Button>
      </Box>
    </Container>
  );
};

export default Custom404;
