import React from "react";

const MyPara = (props) => {
    console.log("MyPara RUNNING");
    return <p>{props.children}</p>;
};

export default MyPara;