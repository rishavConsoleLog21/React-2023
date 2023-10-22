import React from "react";
import MyPara from "./MyPara";

const DemoOutput = (props) => {
    console.log("DEMO OUTPUT RUNNING");
    return <MyPara>{props.show ? 'This is new' : ''}</MyPara>;
};

export default React.memo(DemoOutput);
