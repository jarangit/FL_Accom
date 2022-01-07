import React, { createContext, useState, useEffect } from "react";
import Router from "next/router";

export const AuthContext = createContext();

const AuthProvider = ({ children, userData }) => {
  const [openFilter_mb, setopenFilter_mb] = useState(false);
  const [open_form_filter_mb, setopen_form_filter_mb] = useState(false);
  const [data_selected, setdata_selected] = useState({
    min: "",
    max: "",
  });
  const [data_check_rent, setdata_check_rent] = useState("Rent");
  const [onCheckedContactForm, setonCheckedContactForm] = useState(false);
  const [onConpleteContactForm, setonConpleteContactForm] = useState(false);
  const [Selected_bads, setSelected_bads] = useState("")
  const [ArrPopertyChecked, setArrPopertyChecked] = useState([])
  return (
    <AuthContext.Provider
      value={{
        openFilter_mb,
        setopenFilter_mb,
        open_form_filter_mb,
        setopen_form_filter_mb,
        data_selected,
        setdata_selected,
        onCheckedContactForm,
        setonCheckedContactForm,
        onConpleteContactForm,
        setonConpleteContactForm,
        data_check_rent, setdata_check_rent,
        Selected_bads, setSelected_bads,
        ArrPopertyChecked, setArrPopertyChecked,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
