import "../../Styles/NavBarComp.css";
import * as React from "react";
import Logo from "../../Images/Logo1.png";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const drawerWidth = 240;
const logoTheme = createTheme({
    palette: {
        primary: {
            main: "#fff",
        },
    },
});

const NavBar = () => {
    //   const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <NavLink to="/">
                    {" "}
                    <img
                        style={{ marginBottom: "10px", marginLeft: "-20px" }}
                        src={Logo}
                        height="40px"
                        alt="Resume Builder"
                    />
                </NavLink>
            </Typography>
            <Divider />
            <List
                className="drawerLinks"
                sx={{
                    display: "flex",
                    textAlign: "left",
                    paddingLeft: "20px",
                    flexDirection: "column",
                }}>
                <NavLink to="/" className="nav-link" color="inherit">
                    Resume Templates
                </NavLink>
                <NavLink to="/MyResume" className="nav-link" color="inherit">
                    My Resumes
                </NavLink>
                <NavLink to="/about" className="nav-link aboutUs" color="inherit">
                    About
                </NavLink>
            </List>
        </Box>
    );
    return (
        <>
            <div className="Navbar">
                <Box sx={{ display: "flex" }}>
                    <ThemeProvider theme={logoTheme}>
                        <AppBar component="nav" position="sticky" className="appbar" sx={{ color: "primary", boxShadow: "none" }}>
                            <Toolbar id="toolbar">
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    id="icon"
                                    onClick={handleDrawerToggle}
                                    sx={{ mr: 2, display: { sm: "none" } }}>
                                    <MenuIcon />
                                </IconButton>
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{
                                        flexGrow: 1,
                                        display: { sm: "block" },
                                        fontSize: "25px",
                                        position: "relative",
                                        top: "5px",
                                    }}>
                                    <NavLink to="/resumebuilder-app" className="homeIcon">
                                        {" "}
                                        <img
                                            src={Logo}
                                            style={{ marginBottom: "10px", marginLeft: "10px" }}
                                            height="40px"
                                            alt="Resume Builder"
                                        />
                                    </NavLink>
                                </Typography>
                                <Box sx={{ display: { xs: "none", sm: "block" } }}>

                                    <div className="Navlinks">
                                        <NavLink to="/resumebuilder-app
" className="nav-link" color="inherit">
                                            Resume Templates
                                        </NavLink>
                                        <NavLink to="/MyResume" className="nav-link" color="inherit">
                                            My Resumes
                                        </NavLink>
                                        <NavLink to="/about" className="nav-link aboutUs" color="inherit">
                                            About
                                        </NavLink>
                                    </div>
                                </Box>
                            </Toolbar>
                        </AppBar>
                    </ThemeProvider>
                    <Box component="nav">
                        <Drawer
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}

                            sx={{
                                display: { xs: "block", sm: "none" },
                                "& .MuiDrawer-paper": {
                                    boxSizing: "border-box",
                                    width: drawerWidth,

                                },
                            }}>
                            {drawer}
                        </Drawer>
                    </Box>
                </Box>
            </div>
        </>
    );
}


export default NavBar
