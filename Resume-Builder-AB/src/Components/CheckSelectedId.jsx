import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";


const mapDispatchToProps = (dispatch) => {
    return {};
};

const mapStateToProps = (state) => ({
    selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});


const CheckSelectedId = (props) => {
    const selectedId = props.selectedTemplateId;
    return selectedId ? props.children : <Navigate to={"/"} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckSelectedId);
