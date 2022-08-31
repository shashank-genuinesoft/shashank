import React, { useState, useEffect } from "react";
import Greeting from "../../components/Greeting/Greeting";
function Home(props) {
  
    return(
            <>
            <Greeting theme={props.theme} />
            </>
    );

}
export default Home;