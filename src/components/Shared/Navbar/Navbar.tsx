"use client";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
const pages = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/contact" },
  { name: "Login", link: "/login" },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
    setIsOpen((isOpen) => !isOpen);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const path = usePathname();

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "secondary.main",
        borderBottom: "2px solid #F5F5F5",
      }}
    >
      <Container>
        <Toolbar disableGutters>
          {/* Logo */}
          <Stack direction={"row"} alignItems={"center"}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: "'Raleway', sans-serif",
                color: "text.primary",
                textDecoration: "none",
              }}
            >
              Jobayar
            </Typography>
          </Stack>

          {/* Space between Logo and Nav content */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Nav content */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page, i) => (
              <Link
                key={i}
                href={page.link}
                style={{
                  textAlign: "center",
                  color: "text.primary",
                  textDecoration: "none",
                  fontWeight: 600,
                  marginLeft: "24px",
                }}
              >
                <Typography
                  variant="body1"
                  component="span"
                  sx={{
                    fontFamily: "'Raleway', sans-serif",
                    textDecoration: "none",
                    fontWeight: page.link === path ? "bold" : "normal",
                    color: page.link === path ? "primary.main" : "text.main",
                  }}
                >
                  {page.name}
                </Typography>
              </Link>
            ))}
          </Box>

          {/* Responsive nav content */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                  <Link
                    href={page.link}
                    style={{
                      textAlign: "center",
                      color: "text.primary",
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{
                        textDecoration: "none",
                        fontWeight: page.link === path ? "bold" : "normal",
                      }}
                    >
                      {page.name}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
