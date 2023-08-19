import { Avatar, Button, Divider, Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import "../Styles/PersonalInfoComp.css";
import BackNextBtnComp from "./BackNextBtnComp";
import { connect } from "react-redux";
import Avatar1 from "react-avatar-edit";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { ADDPERSONALINFO } from "../Redux/Actions";
import InputComp from "./InputComp";









const mapStateToProps = (state) => ({
    personalInfo: state.personalInfoReducer.personalInfo,
});



const mapDispatchToProps = (dispatch) => ({
    onADDPERSONALINFO: (details) => dispatch(ADDPERSONALINFO(details)),
});







const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));




const PersonalInfoComp = (props) => {

    const [loading, setLoading] = useState(false);
    // const [vertical, setVertical] = useState("top");
    // const [horizontal, setHorizontal] = useState("center");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();









    const [img, setImg] = useState(props.personalInfo.profileImg.length ? props.personalInfo.profileImg : "");

    const [open, setOpen] = useState(false);
    const [storeImg, setStoreImg] = useState([])





    const handleClickOpen = () => {
        setOpen(true)
    }





    const handleClose = () => {
        setOpen(false)
    }




    const handleNext = (data) => {
        setLoading(true);
        props.onADDPERSONALINFO({ profileImg: img, ...data });

        setTimeout(() => {
            setLoading(false);
            props.setTab(props.tab + 1);
        }, 1000);
    }


    const onCrop = (view) => {
        setImg(view);
    };



    const onClose = (view) => {
        setImg(null);
    };





    // Windows Width 
    const getWindowSize = () => {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    };


    const [windowSize, setWindowSize] = useState(getWindowSize());
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);





    const saveImage = () => {
        setStoreImg([{ img } ? img : " "]);
        setOpen(false);
    };





    const BootstrapDialogTitle = (props) => {
        const { children, onClose, ...other } = props;

        return (
            <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
                {children}
                {onClose ? (
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: "absolute",
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}>
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </DialogTitle>
        );
    };




    return (
        <Paper className="personal-info-paper" elevation={3}>
            <Avatar
                sx={{ width: 120, height: 120, marginBottom: 1 }}
                alt="profile img"
                src={
                    img.length ? img : "https:harvesthosts-marketing-assets.s3.amazonaws.com/wp-content/uploads/2021/11/whoknows-1.jpg"
                }
            />
            <div>
                <Button
                    className="change-profile-photo-btn"
                    variant="outlined"
                    onClick={handleClickOpen}>
                    Change Profile Photo
                </Button>

                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <BootstrapDialogTitle
                        id="customized-dialog-title"
                        onClose={handleClose}>
                        Upload Image
                    </BootstrapDialogTitle>
                    <DialogContent>
                        <Avatar1
                            width={windowSize.innerWidth > 900 && 300}
                            height={windowSize.innerWidth > 500 ? 300 : 150}
                            onCrop={onCrop}
                            onClose={onClose}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus variant="contained" onClick={saveImage}>
                            Upload
                        </Button>
                    </DialogActions>
                </BootstrapDialog>
            </div>

            <form onSubmit={handleSubmit(handleNext)}>
                <div className="personal-Info-form-fields">
                    <InputComp
                        title={"First Name *"}
                        type={"text"}
                        name={"firstName"}
                        register={register}
                        multiline={false}
                        value={props.personalInfo.firstName}
                        setValue={(value) =>
                            props.onADDPERSONALINFO({
                                ...props.personalInfo,
                                firstName: value,
                            })
                        }
                        error={errors.firstName ? true : false}
                        errorMessage={errors.firstName ? errors.firstName.message : null}
                    />
                    <InputComp
                        title={"Last Name "}
                        name={"lastName"}
                        register={register}
                        multiline={false}
                        value={props.personalInfo.lastName}
                        setValue={(value) =>
                            props.onADDPERSONALINFO({
                                ...props.personalInfo,
                                lastName: value,
                            })
                        }
                        error={errors.lastName ? true : false}
                        errorMessage={errors.lastName ? errors.lastName.message : null}
                    />
                    <InputComp
                        title={"Email *"}
                        type={"email"}
                        name={"email"}
                        register={register}
                        multiline={false}
                        value={props.personalInfo.email}
                        setValue={(value) =>
                            props.onADDPERSONALINFO({
                                ...props.personalInfo,
                                email: value,
                            })
                        }
                        error={errors.email ? true : false}
                        errorMessage={errors.email ? errors.email.message : null}
                    />
                    <InputComp
                        title={"Mobile *"}
                        type={"number"}
                        name={"mobile"}
                        register={register}
                        multiline={false}
                        value={props.personalInfo.mobile}
                        setValue={(value) =>
                            props.onADDPERSONALINFO({
                                ...props.personalInfo,
                                mobile: value,
                            })
                        }
                        error={errors.mobile ? true : false}
                        errorMessage={errors.mobile ? errors.mobile.message : null}
                    />
                </div>
                <InputComp
                    title={"Address *"}
                    type={"text"}
                    name={"address"}
                    register={register}
                    multiline={false}
                    value={props.personalInfo.address}
                    setValue={(value) =>
                        props.onADDPERSONALINFO({
                            ...props.personalInfo,
                            address: value,
                        })
                    }
                    error={errors.address ? true : false}
                    errorMessage={errors.address ? errors.address.message : null}
                />

                <div style={{ marginTop: 20 }} className="personal-Info-form-fields">
                    <InputComp
                        title={"City*"}
                        type={"text"}
                        name={"city"}
                        register={register}
                        multiline={false}
                        value={props.personalInfo.city}
                        setValue={(value) =>
                            props.onADDPERSONALINFO({
                                ...props.personalInfo,
                                city: value,
                            })
                        }
                        error={errors.city ? true : false}
                        errorMessage={errors.city ? errors.city.message : null}
                    />
                    <InputComp
                        title={"State *"}
                        type={"text"}
                        name={"state"}
                        register={register}
                        multiline={false}
                        value={props.personalInfo.state}
                        setValue={(value) =>
                            props.onADDPERSONALINFO({
                                ...props.personalInfo,
                                state: value,
                            })
                        }
                        error={errors.state ? true : false}
                        errorMessage={errors.state ? errors.state.message : null}
                    />
                    <InputComp
                        title={"Postal Code *"}
                        type={"number"}
                        name={"postalCode"}
                        register={register}
                        multiline={false}
                        value={props.personalInfo.postalCode}
                        setValue={(value) =>
                            props.onADDPERSONALINFO({
                                ...props.personalInfo,
                                postalCode: value,
                            })
                        }
                        error={errors.postalCode ? true : false}
                        errorMessage={errors.postalCode ? errors.postalCode.message : null}
                    />
                </div>
                <InputComp
                    title={"Objective *"}
                    type={"text"}
                    name={"objective"}
                    register={register}
                    // multiline={true}
                    value={props.personalInfo.objective}
                    setValue={(value) =>
                        props.onADDPERSONALINFO({
                            ...props.personalInfo,
                            objective: value,
                        })
                    }
                    error={errors.objective ? true : false}
                    errorMessage={errors.objective ? errors.objective.message : null}
                />
                <Divider className="personal-details-divider" />
                <BackNextBtnComp
                    loading={loading}
                    tab={props.tab}
                    nextTitle={"Next"}
                    backTitle={"Back"}
                />
            </form>

        </Paper>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfoComp)
