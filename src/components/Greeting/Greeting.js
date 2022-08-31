import React from "react";
import "./Greeting.css";

import { greeting } from "../../data";
import { Fade } from "react-reveal";
import { useNavigate } from 'react-router-dom';
import UsingLaptop from "../../assets/animations/UsingLaptop";
import { style } from "glamor";
import Type from "./type";

export default function Greeting(props) {
  const theme = props.theme;
  const navigate = useNavigate();

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <Fade bottom duration={2000} distance="20px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.title}  <span className="wave" role="img" aria-labelledby="wave">
              {greeting.hand}
                </span></h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                <h2>I'm {" "}
               
                <span style={{ color: theme.accentColor }}>
                  {greeting.full_name}.{" "}
                </span>
                </h2>
                <h1> <Type/></h1>
              </p>
             
            </div>
          </div>
          <div className="greeting-image-div">
            <UsingLaptop theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}