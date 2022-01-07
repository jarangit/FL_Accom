import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { AuthContext } from "../../appState/authProviceder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimes,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
const Div = styled.div`
  transition: 0.3s;
  .modal_content_alert {
    display: flex;
    background-color: white;
    position: fixed;
    padding: ${(props) => (props.display_show === true ? "15px" : "0px")};
    width: 320px;
    right: 10px;
    top: 10px;
    height: ${(props) => (props.display_show === true ? "100px" : "0px")};
    transition: 0.3s;
    overflow: hidden;
    text-overflow: ellipsis;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    z-index: 5;
    p {
      transition: 0.3s;
      margin: 0px;
    }
    h3 {
      transition: 0.3s;
      margin: 0px;
    }
  }
`;
const Alert_form = () => {
  const {
    onConpleteContactForm,
    setonConpleteContactForm,
    onCheckedContactForm,
    setonCheckedContactForm,
  } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  useEffect(
    () => {
      let timer1 = setTimeout(() => setShow(true), 2 * 1000);
      console.log("Set time");
      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true

      return () => {
        clearTimeout(timer1);
        console.log("clear");
      }
    },

    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
    []
  );

  console.log("this component alert");
  return (
    <Div display_show={onCheckedContactForm}>
      {onConpleteContactForm === true ? (
            <div className="modal_content_alert">
              <FontAwesomeIcon
                className="jr_icon"
                icon={faCheckCircle}
                style={{ color: "green", fontSize: "20px" }}
              />
              <div>
                <p className="jr_f18 jr_blod">Massage sent</p>
                <p>Thank you for your interest! we’ll reply back shortly</p>
              </div>
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => setonCheckedContactForm(false)}
              />
            </div>
          ) : (
            <div className="modal_content_alert">
              <FontAwesomeIcon
                className="jr_icon"
                icon={faExclamationCircle}
                style={{ color: "red", fontSize: "20px" }}
              />
              <div>
                <p className="jr_f18 jr_blod">Request error</p>
                <p>Sorry for your inconvenience Please resend your request.</p>
              </div>
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => setonCheckedContactForm(false)}
              />
            </div>
          )}
    </Div>
  );
};

export default Alert_form;
