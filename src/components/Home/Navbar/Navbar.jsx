import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import DarkMode from "../../DarkMode/DarkMode";
import useRole from "../../../hooks/useRole";

function Navbar() {
  const navigate = useNavigate();
  const { user, loading, logOut } = useAuth();
  const [role] = useRole();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // display dashboard and login conditionally
  let pages;
  {
    user
      ? (pages = ["home", "all-property", "dashboard"])
      : (pages = ["home", "all-property", "login"]);
  }
  //display logout and login conditionally
  let settings;

  {
    user
      ? (settings = ["Profile", "My Account", "Logout"])
      : (settings = ["Profile", "My Account", "Login"]);
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //logout ,dashboard,profile

  const handleMenuClick = (setting) => {
    // Check if the setting is "Logout"
    if (setting === "Logout") {
      logOut(); // Call your logout function
    } else if (setting === "Login") {
      navigate("/login");
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        margin: "0 auto",
        color: "black",
      }}
    >
      <Container>
        <Toolbar disableGutters>
          {/* logo for md and lg */}
          <Link to={`/`}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                fontSize: 30,
              }}
            >
              Dream
              <HouseSidingIcon
                sx={{
                  fontSize: 45,
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                }}
              />
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              {/* for mobile and  medium devices */}
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <NavLink
                      // to={`/${page}`}
                      to={page === "home" ? "/" : `/${page}`}
                      className={({ isActive }) =>
                        isActive
                          ? "btn  btn-sm  border-none text-black underline rounded-2xl  capitalize"
                          : "btn btn-ghost btn-sm capitalize"
                      }
                    >
                      {page.includes("-") ? page.replace(/-/g, " ") : page}
                    </NavLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* logo fo sm */}

          <Typography
            variant="h5"
            noWrap
            component="a"
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
            Dream
            <HouseSidingIcon
              sx={{ fontSize: 30, display: { xs: "flex", md: "none" }, mr: 1 }}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {/* for large devices */}
                <NavLink
                  // to={`/${page}`}
                  to={page === "home" ? "/" : `/${page}`}
                  className={({ isActive }) =>
                    isActive
                      ? "btn  btn-sm border-none text-white bg-black p-2 capitalize text-lg dark:text-black dark:bg-white rounded-2xl"
                      : "btn btn-ghost btn-sm capitalize text-black text-lg dark:text-white"
                  }
                >
                  {page.includes("-") ? page.replace(/-/g, " ") : page}
                </NavLink>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* //display user name and role */}
            <Typography sx={{ pr: 2, display: { xs: "none", md: "initial" } }}>
              <span className="font-bold text-xl dark:text-white capitalize">
                {user ? `Hi, ${user.displayName} (${role && role})` : " "}
              </span>
            </Typography>
            <Tooltip title="Open settings">
              {/* avatar part */}
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src={
                    user
                      ? user?.photoURL
                      : "https://i.ibb.co/k34HkxR/istockphoto-1300845620-612x612.jpg"
                  }
                />
              </IconButton>

              {/* dark Theme */}
              <IconButton sx={{ p: 0 }}>
                <DarkMode />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => handleMenuClick(setting)}
                >
                  <Typography textAlign="center" onClick={handleCloseUserMenu}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
