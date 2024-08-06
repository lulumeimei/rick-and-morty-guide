// components/Layout.tsx
import * as React from "react";
import { Box, Container } from "@mui/material";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box>
      {/* <header>
        <h1>My Application</h1>
      </header> */}
      <Container>{children}</Container>
      {/* <footer>
        <p>© 2023 My Application</p>
      </footer> */}
    </Box>
  );
};

export default Layout;
