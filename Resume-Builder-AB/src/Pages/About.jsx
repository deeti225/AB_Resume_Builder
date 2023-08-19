import { Stack, Typography } from "@mui/material";
import "../Styles/About.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import Navbar from "../Components/NavBar/NavBar"
import EmailIcon from "@mui/icons-material/Email";
import { Box } from "@mui/system";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import about from '../Images/about.jpeg';
import FootBar from "../Components/NavBar/FootBar";





export default function About() {



    // Icon links to my linkdin, whatsapp, github accounts
    const linkdin = () => {
        window.open("https://www.linkedin.com/in/deeti-yadav-2063b6176/")
    }
    const whatsapp = () => {
        window.open('https://wa.me/917987682384')
    }
    const Email = () => {
        window.open("mailto:deeti22@gmail.com");
    }
    const gitHub = () => {
        window.open("https://github.com/deeti225")
    }

    return (
        <>
            <Navbar active={""} />
            <h2 className="title">ABOUT</h2>
            <Stack className="stack"
                p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px " }}>

                <Stack
                    className="midContainer"
                    direction={{
                        xs: "column-reverse",
                        sm: "column-reverse",
                        md: "column-reverse",
                        lg: "row",
                    }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    mt="20px">
                    <Typography
                        sx={{
                            fontSize: {
                                xs: "13px",
                                sm: "15px",
                                md: "17px",
                                lg: "19px",
                            },
                            paddingRight: {
                                xs: "15px",
                                sm: "18px",
                                lg: "25px",
                            },
                            paddingLeft: {
                                xs: "15px",
                                sm: "18px",
                                lg: "25px",
                            },

                            textAlign: "justify"
                        }}>

                       This resume builder web application is a powerful tool for creating professional, customized resumes. It allows users to quickly and easily create a professional resume that highlights their skills, qualifications, education, and experiences. This application is a great way for job seekers to stand out from the competition and improve their chances of getting hired.<br />
                        Overall, This resume builder app can help users save time and effort when creating a resume, and can also help them create a more polished and professional-looking document.

                        This resume builder web application is a powerful tool for creating professional, customized resumes. It allows users to quickly and easily create a professional resume that highlights their skills, qualifications, education, and experiences. This application is a great way for job seekers to stand out from the competition and improve their chances of getting hired.<br/>
                        Overall, a resume builder app can help users save time and effort when creating a resume, and can also help them create a more polished and professional-looking document.


                    </Typography>
                    <Stack sx={{ width: 500, height: 400 }} >
                        <img
                            src={about}
                            alt="About_Image"
                        />
                    </Stack>
                </Stack>
                <Box mt="25px">
                    <Typography
                        sx={{
                            fontSize: {
                                xs: "22px",
                                sm: "25px",
                                md: "27px",
                                lg: "30px",
                            },
                            fontWeight: "400",
                            color: "dark",
                        }}>
                        Connect with us-
                    </Typography>
                    <Box className="icons">
                        <LinkedInIcon
                            style={{ cursor: "pointer" }}
                            onClick={linkdin}
                            sx={{ fontSize: "40px", paddingLeft: "15px" }}
                            className="Linkedin"
                            color="primary"
                        />
                        <GithubIcon
                            onClick={gitHub}
                            style={{ cursor: "pointer" }}
                            sx={{ fontSize: "40px", paddingLeft: "15px" }}
                            className="Github"
                            color="black"
                        />
                        <WhatsAppIcon
                            style={{ cursor: "pointer" }}
                            onClick={whatsapp}
                            sx={{ fontSize: "40px", paddingLeft: "15px" }}
                            className="Whatsapp"
                            color="success"
                        />
                        <EmailIcon
                            style={{ cursor: "pointer" }}
                            onClick={Email}
                            sx={{ fontSize: "40px", paddingLeft: "15px" }}
                            className="Email"
                            color="error"
                        />

                    </Box>
                </Box>
            </Stack>
            <FootBar />
        </>
    );
}
