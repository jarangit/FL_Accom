import React, { useState, useContext } from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";
import { AuthContext } from "../../appState/authProviceder";
import { faLaughSquint } from "@fortawesome/free-solid-svg-icons";
const Div = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  max-width: 480px;
  margin-bottom: 20px;
  .but_blue {
    font-size: 16px;
    padding: 10px 15px;
  }
`;
const Contact_me_form = () => {
  const {
    onConpleteContactForm,
    setonConpleteContactForm,
    onCheckedContactForm,
    setonCheckedContactForm,
  } = useContext(AuthContext);
  const [ErrorInput, setErrorInput] = useState(false);

  const [error_field, seterror_field] = useState({
    name: false,
    email: false,
    phone: false,
  });
  const [dataForm, setdataForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function onSubmit(e) {
    e.preventDefault();
    for (let key in dataForm) {
      if (
        dataForm.hasOwnProperty(key) &&
        dataForm[key] === "" &&
        key != "massage"
      ) {
        console.log(key);
        console.log("Some field error");
        setonCheckedContactForm(true);
        setonConpleteContactForm(false);
        return seterror_field({ ...error_field, [key]: true });
      } else {
        setonConpleteContactForm(true);
      }
      console.log(error_field);
      setonCheckedContactForm(true);
    }

  }

  console.log("this check"+onCheckedContactForm);
  function onChange(e) {
    seterror_field({ ...error_field, [e.target.name]: false });

    setdataForm({ ...dataForm, [e.target.name]: e.target.value });
    console.log(dataForm);
  }

  return (
    <Div>
      <form onSubmit={onSubmit} onChange={onChange}>
        <TextField
          id="outlined-basic"
          label="Your name"
          variant="outlined"
          margin="dense"
          value={dataForm.name.text}
          name="name"
          fullWidth
          error={error_field.name}
          helperText={error_field.name ? "Please fill your name" : false}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          margin="dense"
          name="email"
          value={dataForm.email}
          fullWidth
          error={error_field.email}
          helperText={error_field.email ? "Please fill your email" : false}
        />
        <TextField
          type="number"
          id="outlined-basic"
          label="Phone no."
          variant="outlined"
          margin="dense"
          value={dataForm.phone}
          name="phone"
          fullWidth
          error={error_field.phone}
          helperText={error_field.phone ? "Please fill your phone no." : false}
        />
        <TextField
          placeholder="Type your massage"
          margin="dense"
          value={dataForm.massage}
          name="massage"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
        />

        <div style={{ textAlign: "right", marginTop: "10px" }}>
          <button type="submit" className="but_blue">
            Send massage
          </button>
        </div>
      </form>
    </Div>
  );
};

export default Contact_me_form;
