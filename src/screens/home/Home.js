import React, { useState, useEffect } from "react";
import Greeting from "../../components/Greeting/Greeting";
import Education from "../../components/education/education";
import Certifications from "../../containers/certs/certs";

function Home(props) {
  
    return(
            <>
            <Greeting theme={props.theme} />
            <Education theme={props.theme} />
            <Certifications theme={props.theme} />
            </>
    );

}
export default Home;