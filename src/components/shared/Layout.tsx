// components/Layout.tsx
import * as React from "react";
import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import WebsiteHeader from "./WebsiteHeader";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      bgcolor={theme.palette.background.default}
    >
      {/* Header */}
      <WebsiteHeader />

      {/* Main content area */}
      <Container component="main" sx={{ flex: 1, py: 3 }}>
        {children}
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{ py: 2, textAlign: "center", bgcolor: "#ffffff" }}
      >
        <p>© 2023 My Application</p>
      </Box>
    </Box>
  );
};

export default Layout;
