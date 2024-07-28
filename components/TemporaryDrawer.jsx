"use client";
import * as React from "react";
import { Box, Drawer, Divider, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import DescriptionIcon from "@mui/icons-material/Description";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
export default function TemporaryDrawer({}) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      className="Drawer"
      onClick={toggleDrawer(false)}
    >
      <div className="logo">
        <Image
          src="/logo.png"
          alt="logo"
          width={80}
          height={50}
          className="img-fluid"
        />
        <div className="name mt-1"> Abdallh Sabry Rakha</div>
      </div>
      <div className="info mt-2">
        I work as a web designer or Professional front-end developer
      </div>
      <hr />
      <Link
        className="Link active"
        href="/"
        sx={{ my: 2, color: "white", display: "block" }}
      >
        <HomeIcon /> Home
      </Link>
      <Link className="Link" href="/" sx={{ color: "white", display: "block" }}>
        <InfoIcon /> About Me
      </Link>
      <Link
        className="Link"
        href="/"
        sx={{ my: 2, color: "white", display: "block" }}
      >
        <DescriptionIcon /> Resume
      </Link>
      <Link
        className="Link"
        href="/"
        sx={{ my: 2, color: "white", display: "block" }}
      >
        <AlternateEmailIcon /> Contact
      </Link>
      <Link
        className="Link"
        href="/"
        sx={{ my: 2, color: "white", display: "block" }}
      >
        <ViewCarouselIcon /> Blog
      </Link>
    </Box>
  );

  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={toggleDrawer(true)}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
