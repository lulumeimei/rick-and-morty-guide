import * as React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/router";
import NextImage from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const WebsiteHeader = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      setDrawerOpen(open);
    };

  const isCharactersPath =
    router.pathname === "/" || router.pathname.startsWith("/character");

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button onClick={() => handleNavigation("/")}>
          <ListItemText
            primary="Characters"
            sx={{
              fontWeight: isCharactersPath ? "bold" : "normal",
              color: isCharactersPath
                ? theme.palette.secondary.main
                : "inherit",
            }}
          />
        </ListItem>
        <ListItem button onClick={() => handleNavigation("/locations")}>
          <ListItemText
            primary="Locations"
            sx={{
              fontWeight: router.pathname === "/locations" ? "bold" : "normal",
              color:
                router.pathname === "/locations"
                  ? theme.palette.secondary.main
                  : "inherit",
            }}
          />
        </ListItem>
        <ListItem button onClick={() => handleNavigation("/episodes")}>
          <ListItemText
            primary="Episodes"
            sx={{
              fontWeight: router.pathname === "/episodes" ? "bold" : "normal",
              color:
                router.pathname === "/episodes"
                  ? theme.palette.secondary.main
                  : "inherit",
            }}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Link href="/" passHref>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <NextImage src="/rick.svg" alt="App Icon" width={40} height={40} />
            <Typography variant="h6" sx={{ marginLeft: 2 }}>
              Rick & Morty
            </Typography>
          </Box>
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        {isDesktop && (
          <>
            <Button
              color="inherit"
              onClick={() => handleNavigation("/")}
              sx={{
                fontWeight: isCharactersPath ? "bold" : "normal",
                color: isCharactersPath
                  ? theme.palette.secondary.main
                  : "inherit",
              }}
            >
              Characters
            </Button>
            <Button
              color="inherit"
              onClick={() => handleNavigation("/locations")}
              sx={{
                fontWeight:
                  router.pathname === "/locations" ? "bold" : "normal",
                color:
                  router.pathname === "/locations"
                    ? theme.palette.secondary.main
                    : "inherit",
              }}
            >
              Locations
            </Button>
            <Button
              color="inherit"
              onClick={() => handleNavigation("/episodes")}
              sx={{
                fontWeight: router.pathname === "/episodes" ? "bold" : "normal",
                color:
                  router.pathname === "/episodes"
                    ? theme.palette.secondary.main
                    : "inherit",
              }}
            >
              Episodes
            </Button>
          </>
        )}
        {(isMobile || isTablet) && (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {drawer}
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default WebsiteHeader;
