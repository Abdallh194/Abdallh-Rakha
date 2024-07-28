"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { motion } from "framer-motion";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import TemporaryDrawer from "./TemporaryDrawer";
import Link from "next/link";

const pages = ["Home", "Blog", "About Me", "Resume", "Contact"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div position="static" className="ResponsiveAppBar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { md: "contents", xs: "none" } }}>
            <motion.img
              src="/logo.png"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1.3 }}
              alt="logo"
              width={80}
              height={50}
              className="img-fluid"
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              className="logo"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              A<span>.S.</span>R
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <TemporaryDrawer />
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <motion.img
              src="/logo.png"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1.3 }}
              alt="logo"
              width={50}
              height={50}
              className="img-fluid"
            />
          </Box>

          <Typography
            variant="h5"
            noWrap
            className="logo-MobileView"
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            A.S.R
          </Typography>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            className="menu"
          >
            <Link
              className="Link active"
              href="/"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Home
            </Link>
            <Link
              className="Link"
              href="#RecentWork"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Blog
            </Link>
            <Link
              className="Link"
              href="#AboutMe"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              About Me
            </Link>
            <Link
              className="Link"
              href="#Skills"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Skills
            </Link>
            <Link
              className="Link"
              href="#Contact"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Contact
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <div className="hire">Hire Me</div>
          </Box>
        </Toolbar>
      </Container>
    </div>
  );
}
export default ResponsiveAppBar;
